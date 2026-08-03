"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Menu,
  Pause,
  Play,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4";
const FEATURE_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4";
const PHILOSOPHY_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";
const TOOL_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";
const APPLICATION_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4";

type Language = "zh" | "en";

const copy = {
  zh: {
    nav: ["关于我们", "核心能力", "业务方向", "联系我们"],
    heroTop: "让想象",
    heroBottom: "成为视频。",
    heroBody:
      "SAIFU 专注于 AI 视频工具与应用开发，让视频生成更简单、创作更可控，并真正服务于内容生产与业务场景。",
    heroCta: "探索 SAIFU",
    aboutLabel: "关于 SAIFU",
    aboutLead: "我们正在构建",
    aboutAccent: "AI 视频的新入口。",
    aboutBody:
      "AI 视频不只是一种新的生成方式，也是一种新的创作媒介。SAIFU 将模型能力、产品设计与软件开发结合，把快速发展的 AI 视频技术转化为清晰、好用、可以持续迭代的产品。",
    aboutBody2:
      "我们与创作者、团队和企业合作，让一个关于视频的想法，真正成为可以使用的工具与应用。",
    approachLabel: "我们的方法",
    approachTitle: "从一个想法，到一段真正可用的视频。",
    approachBody:
      "我们围绕画面质量、风格一致性、生成效率与创作可控性，设计 AI 视频生成和编辑流程，并将这些能力整合进完整的产品体验。",
    revealHint: "移动光圈，查看生成结果",
    philosophyTitleA: "AI 视频",
    philosophyTitleB: "产品开发",
    engineering: "AI 视频生成",
    engineeringBody:
      "整合适合不同场景的 AI 视频能力，支持从文字、图片与已有素材出发，完成视频生成、延展与编辑。",
    storytelling: "AI 视频应用开发",
    storytellingBody:
      "从产品原型到实际应用，为创作者、团队和企业开发清晰、稳定、易于使用的 AI 视频产品。",
    servicesTitle: "我们专注于 AI 视频",
    servicesLabel: "业务方向",
    toolTag: "AI 视频",
    toolTitle: "AI 视频工具",
    toolBody: "面向创作者与团队，开发更易用的 AI 视频生成、编辑与工作流工具。",
    appTag: "定制开发",
    appTitle: "定制 AI 视频应用",
    appBody:
      "根据具体业务场景，完成 AI 视频能力选型、产品设计、应用开发与工作流集成。",
    contactLabel: "开始合作",
    contactTitle: "让下一个 AI 视频产品，从这里开始。",
    contactBody:
      "无论你正在构思一款 AI 视频工具，还是希望把 AI 视频接入现有业务，我们都愿意与你一起，把想法做成真正可用的产品。",
    contactCta: "讨论一个项目",
  },
  en: {
    nav: ["About", "Capabilities", "Services", "Contact"],
    heroTop: "Turn imagination",
    heroBottom: "into video.",
    heroBody:
      "Saifu builds AI video tools and applications that make generation simpler, creation more controllable, and AI video ready for real creative and business workflows.",
    heroCta: "Explore Saifu",
    aboutLabel: "About Saifu",
    aboutLead: "We are building new ways",
    aboutAccent: "to create with AI video.",
    aboutBody:
      "AI video is more than a new generation method. It is a new creative medium. Saifu brings together model capabilities, product design, and software development to turn fast-moving AI video technology into clear, useful, and evolving products.",
    aboutBody2:
      "We work with creators, teams, and businesses to turn ideas into practical AI video tools and applications.",
    approachLabel: "Our approach",
    approachTitle: "From an idea to video you can actually use.",
    approachBody:
      "We design AI video generation and editing workflows around visual quality, style consistency, efficiency, and creative control—then turn them into complete product experiences.",
    revealHint: "Move to reveal the result",
    philosophyTitleA: "AI Video",
    philosophyTitleB: "Product Development",
    engineering: "AI Video Generation",
    engineeringBody:
      "We bring together the right AI video capabilities for different use cases, supporting generation, extension, and editing from text, images, and existing media.",
    storytelling: "AI Video Application Development",
    storytellingBody:
      "From early prototypes to working applications, we develop clear, reliable, and accessible AI video products for creators, teams, and businesses.",
    servicesTitle: "What we build with AI video",
    servicesLabel: "Services",
    toolTag: "AI Video",
    toolTitle: "AI Video Tools",
    toolBody:
      "Accessible AI video generation, editing, and workflow tools built for creators and teams.",
    appTag: "Custom development",
    appTitle: "Custom AI Video Applications",
    appBody:
      "Purpose-built AI video applications, from capability selection and product design to development and workflow integration.",
    contactLabel: "Start a conversation",
    contactTitle: "Your next AI video product starts here.",
    contactBody:
      "Whether you are imagining a new AI video tool or bringing AI video into an existing business, we can help turn the idea into a working product.",
    contactCta: "Discuss a project",
  },
} as const;

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeFrame = useRef<number | null>(null);
  const resetTimer = useRef<number | null>(null);
  const fadingOut = useRef(false);

  const fadeTo = useCallback((target: number, duration = 500) => {
    const video = videoRef.current;
    if (!video) return;
    if (fadeFrame.current) cancelAnimationFrame(fadeFrame.current);
    const startOpacity = Number.parseFloat(video.style.opacity || "0");
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      video.style.opacity = String(
        startOpacity + (target - startOpacity) * progress,
      );
      if (progress < 1) fadeFrame.current = requestAnimationFrame(tick);
    };
    fadeFrame.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    return () => {
      if (fadeFrame.current) cancelAnimationFrame(fadeFrame.current);
      if (resetTimer.current) window.clearTimeout(resetTimer.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      src={HERO_VIDEO}
      muted
      autoPlay
      playsInline
      preload="auto"
      aria-hidden="true"
      onCanPlay={() => {
        videoRef.current?.play().catch(() => undefined);
        fadeTo(1);
      }}
      onTimeUpdate={() => {
        const video = videoRef.current;
        if (!video || !Number.isFinite(video.duration)) return;
        if (video.duration - video.currentTime <= 0.55 && !fadingOut.current) {
          fadingOut.current = true;
          fadeTo(0);
        }
      }}
      onEnded={() => {
        const video = videoRef.current;
        if (!video) return;
        video.style.opacity = "0";
        resetTimer.current = window.setTimeout(() => {
          video.currentTime = 0;
          fadingOut.current = false;
          video.play().catch(() => undefined);
          fadeTo(1);
        }, 100);
      }}
    />
  );
}

function LoopingVideo({ src, className = "" }: { src: string; className?: string }) {
  return (
    <video
      className={className}
      src={src}
      muted
      autoPlay
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}

function InteractiveVideo({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await video.play().catch(() => undefined);
      setPlaying(!video.paused);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        className="video-control liquid-glass"
        type="button"
        aria-label={`${playing ? "Pause" : "Play"} ${label}`}
        aria-pressed={!playing}
        onClick={togglePlayback}
      >
        {playing ? <Pause size={17} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
      </button>
    </>
  );
}

function SpotlightReveal({ language }: { language: Language }) {
  const areaRef = useRef<HTMLDivElement>(null);
  const raw = useRef({ x: 620, y: 340 });
  const smooth = useRef({ x: 620, y: 340 });
  const frame = useRef<number | null>(null);
  const [cursor, setCursor] = useState({ x: 620, y: 340 });

  useEffect(() => {
    const area = areaRef.current;
    if (area) {
      raw.current = { x: area.clientWidth * 0.7, y: area.clientHeight * 0.5 };
      smooth.current = raw.current;
      setCursor(raw.current);
    }
    const animate = () => {
      smooth.current.x += (raw.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (raw.current.y - smooth.current.y) * 0.1;
      setCursor({ ...smooth.current });
      frame.current = requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    raw.current = { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  const mask = `radial-gradient(circle 250px at ${cursor.x}px ${cursor.y}px, #000 0%, #000 43%, rgba(0,0,0,.78) 63%, rgba(0,0,0,.22) 84%, transparent 100%)`;

  return (
    <div
      ref={areaRef}
      className="spotlight-stage"
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        const area = areaRef.current;
        if (area) raw.current = { x: area.clientWidth * 0.72, y: area.clientHeight * 0.5 };
      }}
    >
      <img
        className="spotlight-image spotlight-base"
        src="/hero-ai-video.webp"
        alt="AI video storyboard view of a cinematic generated world"
      />
      <img
        className="spotlight-image spotlight-color"
        src="/hero-ai-video.webp"
        alt=""
        style={{ WebkitMaskImage: mask, maskImage: mask }}
      />
      <div
        className="spotlight-cursor"
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
        aria-hidden="true"
      >
        <span />
      </div>
      <div className="spotlight-note" aria-hidden="true">
        SC. 58<br />GENERATIVE WORLD / WIDE<br />CAMERA: SLOW PUSH
      </div>
      <div className="spotlight-copy liquid-glass">
        <span>{copy[language].approachLabel}</span>
        <h3>{copy[language].approachTitle}</h3>
        <p>{copy[language].approachBody}</p>
      </div>
      <div className="reveal-hint liquid-glass">
        <Globe2 size={15} strokeWidth={1.5} />
        {copy[language].revealHint}
      </div>
    </div>
  );
}

function ServiceCard({
  video,
  tag,
  title,
  body,
}: {
  video: string;
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <motion.article
      className="service-card liquid-glass"
      initial={{ opacity: 0, y: 54 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="service-media">
        <InteractiveVideo src={video} label={title} />
        <div className="service-media-shade" />
      </div>
      <div className="service-body">
        <div className="service-meta">
          <span>{tag}</span>
          <span className="service-arrow liquid-glass"><ArrowUpRight size={17} /></span>
        </div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  const navTargets = ["about", "capabilities", "services", "contact"];

  return (
    <main className={`site language-${language}`}>
      <header className="site-nav liquid-glass">
        <a className="brand" href="#top" aria-label="Saifu home">
          <span className="brand-dot">S</span><strong>SAIFU</strong>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {t.nav.map((item, index) => (
            <a key={navTargets[index]} href={`#${navTargets[index]}`}>{item}</a>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="language-switch" aria-label="Choose language">
            <button className={language === "zh" ? "active" : ""} onClick={() => setLanguage("zh")}>中</button>
            <i />
            <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button>
          </div>
          <a className="nav-cta" href="#contact">{language === "zh" ? "合作" : "Partner"}</a>
          <button
            className="menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu liquid-glass">
          {t.nav.map((item, index) => (
            <a key={navTargets[index]} href={`#${navTargets[index]}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </div>
      )}

      <section className="hero" id="top">
        <img className="hero-fallback" src="/hero-ai-video.webp" alt="" />
        <HeroVideo />
        <div className="hero-shade" />
        <div className="hero-center">
          <h1>
            <motion.span
              className="display-serif"
              initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.05, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.heroTop}
            </motion.span>
            <motion.strong
              initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.05, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.heroBottom}
            </motion.strong>
          </h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .62 }}>
            {t.heroBody}
          </motion.p>
          <motion.a
            className="hero-cta"
            href="#about"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, delay: .75 }}
            whileHover={{ scale: 1.035 }}
            whileTap={{ scale: .98 }}
          >
            {t.heroCta}<span><ArrowRight size={18} /></span>
          </motion.a>
        </div>
        <div className="hero-foot">
          <span>AI VIDEO TOOLS</span><i />
          <span>APPLICATION DEVELOPMENT</span>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <motion.div className="section-label" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{t.aboutLabel}</motion.div>
        <div className="about-grid">
          <motion.h2 initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .85, ease: [0.16, 1, 0.3, 1] }}>
            {t.aboutLead}<br /><em className="display-serif">{t.aboutAccent}</em>
          </motion.h2>
          <motion.div className="about-copy" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .75, delay: .12 }}>
            <p>{t.aboutBody}</p><p>{t.aboutBody2}</p>
          </motion.div>
        </div>
      </section>

      <section className="featured section-shell" id="approach">
        <SpotlightReveal language={language} />
        <div className="featured-video-strip" aria-hidden="true">
          <LoopingVideo src={FEATURE_VIDEO} />
        </div>
      </section>

      <section className="philosophy section-shell" id="capabilities">
        <motion.h2 initial={{ opacity: 0, y: 38 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .8 }}>
          {t.philosophyTitleA} <em className="display-serif">×</em> <span className="display-serif">{t.philosophyTitleB}</span>
        </motion.h2>
        <div className="philosophy-grid">
          <motion.div className="philosophy-media" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .85, ease: [0.16, 1, 0.3, 1] }}>
            <InteractiveVideo src={PHILOSOPHY_VIDEO} label={language === "zh" ? "创新与愿景视频" : "Innovation and vision video"} />
          </motion.div>
          <motion.div className="philosophy-copy" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .85, delay: .08, ease: [0.16, 1, 0.3, 1] }}>
            <article><span>01</span><h3>{t.engineering}</h3><p>{t.engineeringBody}</p></article>
            <article><span>02</span><h3>{t.storytelling}</h3><p>{t.storytellingBody}</p></article>
          </motion.div>
        </div>
      </section>

      <section className="services section-shell" id="services">
        <motion.div className="services-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }}>
          <h2 className="display-serif">{t.servicesTitle}</h2><span>{t.servicesLabel}</span>
        </motion.div>
        <div className="services-grid">
          <ServiceCard video={TOOL_VIDEO} tag={t.toolTag} title={t.toolTitle} body={t.toolBody} />
          <ServiceCard video={APPLICATION_VIDEO} tag={t.appTag} title={t.appTitle} body={t.appBody} />
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <motion.div className="contact-inner" initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .85, ease: [0.16, 1, 0.3, 1] }}>
          <span>{t.contactLabel}</span>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactBody}</p>
          <a href="mailto:hello@saifuliqi.com">{t.contactCta}<span><ArrowUpRight size={18} /></span></a>
        </motion.div>
      </section>

      <footer className="footer section-shell">
        <div className="brand"><span className="brand-dot">S</span><strong>SAIFU</strong></div>
        <p>© 2026 北京赛蚨里奇科技有限公司 · Beijing Saifuliqi Technology Co., Ltd.</p>
        <a href="#top">BACK TO TOP <ArrowUpRight size={15} /></a>
      </footer>
    </main>
  );
}
