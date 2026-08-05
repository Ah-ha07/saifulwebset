"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { Mesh, Program, Renderer, Texture, Triangle } from "ogl";
import "./WarpText.css";

const vertex = `#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;

uniform sampler2D uTextTexture;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uPointerActive;
uniform float uTime;
uniform float uWarpStrength;
uniform float uWarpScale;
uniform float uSpeed;
uniform float uPointerInfluence;
uniform float uPointerStrength;
uniform float uRefraction;
uniform float uRipple;
uniform float uMotion;

in vec2 vUv;
out vec4 fragColor;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p);
    p *= 2.02;
    amplitude *= 0.5;
  }
  return value;
}

vec4 sampleText(vec2 uv) {
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return vec4(0.0);
  }
  return texture(uTextTexture, uv);
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  float time = uTime * uSpeed;
  float scale = max(uWarpScale, 0.001);

  vec2 drift = vec2(time * 0.055, -time * 0.045);
  float n1 = fbm(uv * scale * 3.1 + drift);
  float n2 = fbm((uv + 19.17) * scale * 3.4 - drift.yx);
  vec2 ambient = (vec2(n1, n2) - 0.5) * uWarpStrength * 0.045 * uMotion;

  vec2 pointerDelta = uv - uPointer;
  vec2 aspectDelta = vec2(pointerDelta.x * aspect, pointerDelta.y);
  float dist = length(aspectDelta);
  float radius = max(uPointerInfluence, 0.001);
  float t = clamp(dist / radius, 0.0, 1.0);
  float lens = smoothstep(radius, 0.0, dist) * uPointerActive;
  float bulge = t * (1.0 - t) * (1.0 - t) * 6.75 * uPointerActive;
  vec2 dir = dist > 0.0001 ? vec2(aspectDelta.x / aspect, aspectDelta.y) / dist : vec2(0.0);

  float rippleWave = sin(dist * 28.0 - time * 4.2) * 0.5 + 0.5;
  float rippleRing = (rippleWave - 0.5) * uRipple;
  vec2 pointerWarp = -dir * bulge * uPointerStrength * 0.045;
  pointerWarp += dir * rippleRing * bulge * uPointerStrength * 0.016;

  vec2 displaced = uv + ambient + pointerWarp;
  vec2 splitDir = ambient + pointerWarp;
  float splitLen = length(splitDir);
  splitDir = splitLen > 0.00001 ? splitDir / splitLen : vec2(0.7071, 0.7071);
  vec2 split = splitDir * uRefraction * 0.16 * (0.35 + lens * 1.65);

  vec4 base = sampleText(displaced);
  float r = sampleText(displaced + split).r;
  float g = base.g;
  float b = sampleText(displaced - split).b;
  float a = max(max(sampleText(displaced + split).a, base.a), sampleText(displaced - split).a);

  vec3 color = vec3(r, g, b) + lens * base.a * 0.055;
  fragColor = vec4(color, a);
}
`;

type FontValue = string | number;

type WarpValues = {
  text: string;
  color: string;
  fontSize: FontValue;
  fontWeight: FontValue;
  fontFamily: string;
  letterSpacing: FontValue;
  lineHeight: FontValue;
  warpStrength: number;
  warpScale: number;
  speed: number;
  pointerInfluence: number;
  pointerStrength: number;
  refraction: number;
  ripple: boolean;
};

export type WarpTextProps = Partial<WarpValues> & {
  activation?: "always" | "hover";
  className?: string;
  style?: CSSProperties;
};

const getFontValue = (value: FontValue) =>
  typeof value === "number" ? `${value}px` : value;

const measureLine = (
  context: CanvasRenderingContext2D,
  line: string,
  letterSpacing: number,
) => {
  const spacedContext = context as CanvasRenderingContext2D & {
    letterSpacing?: string;
  };

  if ("letterSpacing" in spacedContext) {
    const previousLetterSpacing = spacedContext.letterSpacing;
    spacedContext.letterSpacing = `${letterSpacing}px`;
    const width = context.measureText(line).width;
    spacedContext.letterSpacing = previousLetterSpacing ?? "0px";
    return width;
  }

  const characters = Array.from(line);
  const textWidth = characters.reduce(
    (width, character) => width + context.measureText(character).width,
    0,
  );
  return textWidth + Math.max(0, characters.length - 1) * letterSpacing;
};

const drawLine = (
  context: CanvasRenderingContext2D,
  line: string,
  x: number,
  y: number,
  letterSpacing: number,
) => {
  const spacedContext = context as CanvasRenderingContext2D & {
    letterSpacing?: string;
  };

  if ("letterSpacing" in spacedContext) {
    const previousAlign = context.textAlign;
    const previousLetterSpacing = spacedContext.letterSpacing;
    context.textAlign = "center";
    spacedContext.letterSpacing = `${letterSpacing}px`;
    context.fillText(line, x, y);
    context.textAlign = previousAlign;
    spacedContext.letterSpacing = previousLetterSpacing ?? "0px";
    return;
  }

  const characters = Array.from(line);
  let cursor = x - measureLine(context, line, letterSpacing) / 2;

  characters.forEach((character, index) => {
    context.fillText(character, cursor, y);
    cursor +=
      context.measureText(character).width +
      (index === characters.length - 1 ? 0 : letterSpacing);
  });
};

const buildTextCanvas = ({
  container,
  width,
  height,
  dpr,
  props,
}: {
  container: HTMLDivElement;
  width: number;
  height: number;
  dpr: number;
  props: WarpValues;
}) => {
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.floor(width * dpr));
  canvas.height = Math.max(1, Math.floor(height * dpr));

  const context = canvas.getContext("2d");
  if (!context) return canvas;

  const probe = document.createElement("span");
  probe.textContent = props.text;
  Object.assign(probe.style, {
    position: "absolute",
    visibility: "hidden",
    pointerEvents: "none",
    whiteSpace: "pre",
    inset: "0 auto auto 0",
    fontFamily: props.fontFamily,
    fontSize: getFontValue(props.fontSize),
    fontWeight: String(props.fontWeight),
    letterSpacing: getFontValue(props.letterSpacing),
    lineHeight:
      typeof props.lineHeight === "number"
        ? String(props.lineHeight)
        : props.lineHeight,
  });
  container.appendChild(probe);

  const computed = window.getComputedStyle(probe);
  const fontSize = Number.parseFloat(computed.fontSize) || 96;
  const fontFamily = computed.fontFamily || "sans-serif";
  const fontWeight = computed.fontWeight || String(props.fontWeight);
  const letterSpacing =
    computed.letterSpacing === "normal"
      ? 0
      : Number.parseFloat(computed.letterSpacing) || 0;
  let lineHeight = Number.parseFloat(computed.lineHeight);

  if (!Number.isFinite(lineHeight)) {
    lineHeight =
      fontSize *
      (typeof props.lineHeight === "number" ? props.lineHeight : 0.92);
  }
  probe.remove();

  context.setTransform(dpr, 0, 0, dpr, 0, 0);
  context.clearRect(0, 0, width, height);
  context.textAlign = "left";
  context.textBaseline = "middle";
  context.fillStyle = props.color;
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";

  const lines = props.text.split("\n");
  const applyFont = () => {
    context.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  };
  applyFont();

  const maxLineWidth = Math.max(
    ...lines.map((line) => measureLine(context, line, letterSpacing)),
  );
  const availableWidth = width * 0.9;
  const fit = Math.min(1, availableWidth / Math.max(maxLineWidth, 1));
  const fittedLineHeight = lineHeight * fit;
  const fittedLetterSpacing = letterSpacing * fit;

  // The DOM fallback and WebGL texture share the same fit so hover never
  // changes the title's size or alignment.
  container.style.setProperty("--warp-fit", String(fit));
  container.style.setProperty(
    "--warp-fitted-letter-spacing",
    `${fittedLetterSpacing}px`,
  );
  container.style.setProperty(
    "--warp-fitted-line-height",
    `${fittedLineHeight}px`,
  );
  context.font = `${fontWeight} ${fontSize * fit}px ${fontFamily}`;

  const startY =
    height / 2 - (fittedLineHeight * (lines.length - 1)) / 2;
  lines.forEach((line, index) =>
    drawLine(
      context,
      line,
      width / 2,
      startY + index * fittedLineHeight,
      fittedLetterSpacing,
    ),
  );

  return canvas;
};

const syncUniforms = (program: Program, props: WarpValues) => {
  const uniforms = program.uniforms;
  uniforms.uWarpStrength.value = props.warpStrength;
  uniforms.uWarpScale.value = props.warpScale;
  uniforms.uSpeed.value = props.speed;
  uniforms.uPointerInfluence.value = props.pointerInfluence;
  uniforms.uPointerStrength.value = props.pointerStrength;
  uniforms.uRefraction.value = props.refraction;
  uniforms.uRipple.value = props.ripple ? 1 : 0;
};

export default function WarpText({
  text = "Bend the moment",
  color = "#f8f5ff",
  warpStrength = 0.08,
  warpScale = 1.7,
  speed = 0.55,
  pointerInfluence = 0.42,
  pointerStrength = 0.38,
  refraction = 0.018,
  ripple = true,
  fontSize = "clamp(3rem, 10vw, 9rem)",
  fontWeight = 800,
  fontFamily = "inherit",
  letterSpacing = "-0.06em",
  lineHeight = 0.9,
  activation = "always",
  className = "",
  style,
}: WarpTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const propsRef = useRef<WarpValues>({
    text,
    color,
    fontSize,
    fontWeight,
    fontFamily,
    letterSpacing,
    lineHeight,
    warpStrength,
    warpScale,
    speed,
    pointerInfluence,
    pointerStrength,
    refraction,
    ripple,
  });
  const contextRef = useRef<{
    program: Program;
    rasterize: () => Promise<void>;
  } | null>(null);

  useEffect(() => {
    propsRef.current = {
      text,
      color,
      fontSize,
      fontWeight,
      fontFamily,
      letterSpacing,
      lineHeight,
      warpStrength,
      warpScale,
      speed,
      pointerInfluence,
      pointerStrength,
      refraction,
      ripple,
    };

    if (contextRef.current) {
      syncUniforms(contextRef.current.program, propsRef.current);
      void contextRef.current.rasterize();
    }
  }, [
    text,
    color,
    fontSize,
    fontWeight,
    fontFamily,
    letterSpacing,
    lineHeight,
    warpStrength,
    warpScale,
    speed,
    pointerInfluence,
    pointerStrength,
    refraction,
    ripple,
  ]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const activateOnHover = activation === "hover";

    let renderer: Renderer;
    let frame = 0;
    let disposed = false;
    let contextLost = false;
    let visible = true;
    let pageVisible = !document.hidden;
    let reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    let rasterVersion = 0;

    const pointer = {
      x: 0.5,
      y: 0.5,
      targetX: 0.5,
      targetY: 0.5,
      active: 0,
      activeTarget: 0,
    };
    const startTime = performance.now();

    try {
      renderer = new Renderer({
        webgl: 2,
        alpha: true,
        premultipliedAlpha: false,
        antialias: true,
        dpr: Math.min(window.devicePixelRatio || 1, 2),
      });
    } catch (error) {
      console.warn("WarpText: WebGL could not be initialized.", error);
      return;
    }

    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    const canvas = gl.canvas;
    canvas.setAttribute("aria-hidden", "true");
    container.appendChild(canvas);

    const texture = new Texture(gl, {
      generateMipmaps: false,
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
      wrapS: gl.CLAMP_TO_EDGE,
      wrapT: gl.CLAMP_TO_EDGE,
    });

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uTextTexture: { value: texture },
        uResolution: { value: new Float32Array([1, 1]) },
        uPointer: { value: new Float32Array([0.5, 0.5]) },
        uPointerActive: { value: 0 },
        uTime: { value: 0 },
        uWarpStrength: { value: propsRef.current.warpStrength },
        uWarpScale: { value: propsRef.current.warpScale },
        uSpeed: { value: propsRef.current.speed },
        uPointerInfluence: { value: propsRef.current.pointerInfluence },
        uPointerStrength: { value: propsRef.current.pointerStrength },
        uRefraction: { value: propsRef.current.refraction },
        uRipple: { value: propsRef.current.ripple ? 1 : 0 },
        uMotion: { value: reduceMotion || activateOnHover ? 0 : 1 },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    const renderOnce = () => {
      if (disposed || contextLost) return;
      renderer.render({ scene: mesh });
    };

    const rasterize = async () => {
      const version = ++rasterVersion;
      try {
        await document.fonts?.ready;
      } catch {
        // The canvas can still use the browser's fallback font.
      }
      if (disposed || contextLost || version !== rasterVersion) return;

      const rect = container.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      texture.image = buildTextCanvas({
        container,
        width: rect.width,
        height: rect.height,
        dpr,
        props: propsRef.current,
      });
      texture.needsUpdate = true;
      renderOnce();
      container.classList.add("warp-text--ready");
    };

    const resize = () => {
      if (disposed || contextLost) return;
      const rect = container.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;

      renderer.dpr = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setSize(rect.width, rect.height);
      program.uniforms.uResolution.value[0] = gl.drawingBufferWidth;
      program.uniforms.uResolution.value[1] = gl.drawingBufferHeight;
      void rasterize();
    };

    function loop(now: number) {
      if (disposed || contextLost || reduceMotion || !visible || !pageVisible) {
        frame = 0;
        return;
      }

      const elapsed = (now - startTime) * 0.001;
      const idleX = 0.5 + Math.sin(elapsed * 0.33) * 0.12;
      const idleY = 0.5 + Math.cos(elapsed * 0.27) * 0.1;
      const targetX =
        pointer.activeTarget > 0
          ? pointer.targetX
          : activateOnHover
            ? pointer.x
            : idleX;
      const targetY =
        pointer.activeTarget > 0
          ? pointer.targetY
          : activateOnHover
            ? pointer.y
            : idleY;
      const damping = pointer.activeTarget > 0 ? 0.12 : 0.035;
      const restingActivity = activateOnHover ? 0 : 0.18;
      const activityDamping = activateOnHover ? 0.12 : 0.06;

      pointer.x += (targetX - pointer.x) * damping;
      pointer.y += (targetY - pointer.y) * damping;
      pointer.active +=
        ((pointer.activeTarget > 0 ? 1 : restingActivity) - pointer.active) *
        activityDamping;

      program.uniforms.uPointer.value[0] = pointer.x;
      program.uniforms.uPointer.value[1] = pointer.y;
      program.uniforms.uPointerActive.value = pointer.active;
      program.uniforms.uTime.value = elapsed;
      program.uniforms.uMotion.value = activateOnHover ? pointer.active : 1;

      renderOnce();

      if (
        activateOnHover &&
        pointer.activeTarget === 0 &&
        pointer.active < 0.002
      ) {
        pointer.active = 0;
        program.uniforms.uPointerActive.value = 0;
        program.uniforms.uMotion.value = 0;
        renderOnce();
        frame = 0;
        return;
      }

      frame = requestAnimationFrame(loop);
    }

    const startLoop = () => {
      const shouldAnimate =
        !activateOnHover || pointer.activeTarget > 0 || pointer.active >= 0.002;
      if (
        !frame &&
        !reduceMotion &&
        visible &&
        pageVisible &&
        !contextLost &&
        shouldAnimate
      ) {
        frame = requestAnimationFrame(loop);
      }
    };

    const stopLoop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || reduceMotion) return;
      const rect = container.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      pointer.targetX = (event.clientX - rect.left) / rect.width;
      pointer.targetY = 1 - (event.clientY - rect.top) / rect.height;
      pointer.activeTarget = 1;
      if (activateOnHover) container.classList.add("warp-text--engaged");
      startLoop();
    };

    const onPointerLeave = () => {
      pointer.activeTarget = 0;
      if (activateOnHover) {
        container.classList.remove("warp-text--engaged");
        startLoop();
      }
    };

    const onWindowPointerMove = (event: PointerEvent) => {
      if (
        event.pointerType === "touch" ||
        reduceMotion ||
        (pointer.activeTarget === 0 &&
          !container.classList.contains("warp-text--engaged"))
      ) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const isOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

      if (isOutside) onPointerLeave();
    };

    const onContextLost = (event: Event) => {
      event.preventDefault();
      contextLost = true;
      stopLoop();
      container.classList.remove("warp-text--ready");
      container.classList.remove("warp-text--engaged");
    };

    const onVisibility = () => {
      pageVisible = !document.hidden;
      if (pageVisible) startLoop();
      else stopLoop();
    };

    const mediaQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const onReducedMotion = (event: MediaQueryListEvent) => {
      reduceMotion = event.matches;
      program.uniforms.uMotion.value =
        reduceMotion || activateOnHover ? 0 : 1;
      program.uniforms.uPointerActive.value = 0;
      program.uniforms.uTime.value = 0;
      if (reduceMotion) {
        pointer.active = 0;
        pointer.activeTarget = 0;
        container.classList.remove("warp-text--engaged");
        stopLoop();
        renderOnce();
      } else if (!activateOnHover) {
        startLoop();
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) startLoop();
        else stopLoop();
      },
      { threshold: 0 },
    );
    intersectionObserver.observe(container);

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("pointermove", onWindowPointerMove, {
      passive: true,
    });
    canvas.addEventListener("webglcontextlost", onContextLost, false);
    document.addEventListener("visibilitychange", onVisibility);
    mediaQuery?.addEventListener("change", onReducedMotion);

    syncUniforms(program, propsRef.current);
    contextRef.current = { program, rasterize };
    resize();
    startLoop();

    return () => {
      disposed = true;
      contextRef.current = null;
      stopLoop();
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointermove", onWindowPointerMove);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      document.removeEventListener("visibilitychange", onVisibility);
      mediaQuery?.removeEventListener("change", onReducedMotion);
      container.classList.remove("warp-text--ready");
      container.classList.remove("warp-text--engaged");

      if (!contextLost) {
        try {
          if (texture.texture) gl.deleteTexture(texture.texture);
          geometry.remove();
          program.remove();
          gl.getExtension("WEBGL_lose_context")?.loseContext();
        } catch {
          // The browser may already have released the WebGL context.
        }
      }

      if (canvas.parentNode === container) container.removeChild(canvas);
    };
  }, [activation]);

  const rootStyle: CSSProperties = {
    color,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    ...style,
  };

  return (
    <div
      ref={containerRef}
      className={`warp-text ${activation === "hover" ? "warp-text--hover" : ""} ${className}`.trim()}
      style={rootStyle}
    >
      <span className="warp-text__fallback">{text}</span>
    </div>
  );
}
