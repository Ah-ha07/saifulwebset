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
import WarpText from "./WarpText";
import { faq, productionOfferings } from "../lib/content";
import { inquiryHref, localPath } from "../lib/site";

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
const NAV_TARGETS = ["about", "capabilities", "services", "contact"] as const;

type Language = "zh" | "en";

const copy = {
  zh: {
    nav: ["关于我们", "核心能力", "业务方向", "联系我们"],
    heroTop: "让想象",
    heroBottom: "成为视频。",
    heroBody:
      "赛蚨里奇 SAIFU 承接 AI 漫剧、AI 短剧、AI 视频与 AI 广告制作，也提供 AI 视频工具和定制应用开发。欢迎带着想法、脚本或参考片来咨询，一起把创意做出来。",
    heroCta: "咨询一个项目",
    aboutLabel: "关于 SAIFU",
    aboutLead: "我们用 AI",
    aboutAccent: "让故事变成画面。",
    aboutBody:
      "AI 视频是一种新的创作媒介。SAIFU 将故事、视觉创意与技术结合，制作漫剧、短剧、视频和广告，也把这些创作流程转化为好用的工具与应用。",
    aboutBody2:
      "我们与个人创作者、品牌和企业团队合作。无论是一段视频，还是一款视频产品，都欢迎从一个想法开始讨论。",
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
    servicesTitle: "把创意做出来。",
    servicesLabel: "欢迎项目咨询",
    toolTag: "AI 视频",
    toolTitle: "AI 视频工具",
    toolBody: "面向创作者与团队，开发更易用的 AI 视频生成、编辑与工作流工具。",
    appTag: "定制开发",
    appTitle: "定制 AI 视频应用",
    appBody:
      "根据具体业务场景，完成 AI 视频能力选型、产品设计、应用开发与工作流集成。",
    contactLabel: "开始合作",
    contactTitle: "从一个想法，开始一段合作。",
    contactBody:
      "AI 漫剧、AI 短剧、AI 视频、AI 广告，以及工具与应用开发，都欢迎咨询。告诉我们你想做什么、给谁看、希望是什么风格，我们一起讨论制作范围与报价。",
    contactCta: "描述需求，开始咨询",
  },
  en: {
    nav: ["About", "Our approach", "Services", "Contact"],
    heroTop: "Stories imagined.",
    heroBottom: "Films made.",
    heroBody:
      "AI video production for brands, agencies and storytellers. We create commercials, product videos, animation and narrative shorts — from your first idea to the final edit.",
    heroCta: "Start a project",
    aboutLabel: "About SAIFU",
    aboutLead: "Your story.",
    aboutAccent: "A new way to tell it.",
    aboutBody:
      "SAIFU is a creative technology company combining storytelling, visual direction and AI production. We turn brand messages, product ideas and original stories into films, ads and animated content.",
    aboutBody2:
      "Work with us on a complete video or a specific stage of production. Bring a brief, a script or a reference you love. We’ll work with you to define the creative direction and production scope.",
    approachLabel: "Our approach",
    approachTitle: "Start with the story. Build the right production around it.",
    approachBody:
      "We begin with your audience, message and visual references. From there, we shape the concept, choose the right AI workflow and plan the picture, sound and edit around your brief.",
    revealHint: "Move to explore the visual",
    philosophyTitleA: "Creative Direction",
    philosophyTitleB: "AI Production",
    engineering: "A clear creative direction",
    engineeringBody:
      "Agree on the story, mood, visual style and details that matter to your brand. Scripts, storyboards and visual references give the production a shared direction.",
    storytelling: "A production built around your brief",
    storytellingBody:
      "Combine AI-generated imagery and footage with editing and sound. Length, formats, review stages and delivery files are agreed for each project.",
    servicesTitle: "What are you making?",
    servicesLabel: "AI VIDEO PRODUCTION SERVICES",
    toolTag: "For creative teams",
    toolTitle: "AI Video Tools",
    toolBody:
      "Build generation, editing and creative workflow tools for work your team needs to repeat.",
    appTag: "Custom development",
    appTitle: "Custom AI Video Applications",
    appBody:
      "Connect AI video capabilities with your product or business workflow, from an initial prototype to a working application.",
    contactLabel: "Let’s make something",
    contactTitle: "Tell us what you have in mind.",
    contactBody:
      "Share your idea, audience, visual references and target date. If you have a length, format or budget in mind, include that too. We’ll discuss the creative approach, scope and a project quote. An early idea is welcome.",
    contactCta: "Send your project brief",
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
  href,
}: {
  video: string;
  tag: string;
  title: string;
  body: string;
  href: string;
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
        <h3><a href={href}>{title}</a></h3>
        <p>{body}</p>
      </div>
    </motion.article>
  );
}

export default function CompanyHome({ initialLanguage = "en" }: { initialLanguage?: Language }) {
  const language = initialLanguage;
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const t = copy[language];

  useEffect(() => {
    const hero = document.getElementById("top");
    const sections = NAV_TARGETS.map((target) =>
      document.getElementById(target),
    ).filter((section): section is HTMLElement => section !== null);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderScrolled(
          !entry.isIntersecting || entry.intersectionRatio < 0.55,
        );
      },
      { threshold: [0, 0.55, 1] },
    );
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top,
          )[0];

        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: "-28% 0px -56% 0px", threshold: 0 },
    );

    if (hero) heroObserver.observe(hero);
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      heroObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <main className={`site language-${language}`}>
      <header
        className={`site-nav liquid-glass${isHeaderScrolled ? " is-scrolled" : ""}`}
      >
        <a className="brand" href="#top" aria-label="Saifu home">
          <img className="brand-mark" src="/saifu-mark.svg" alt="" aria-hidden="true" />
          <strong>SAIFU</strong>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {t.nav.map((item, index) => (
            <a
              key={NAV_TARGETS[index]}
              className={activeSection === NAV_TARGETS[index] ? "active" : undefined}
              href={`#${NAV_TARGETS[index]}`}
              aria-current={activeSection === NAV_TARGETS[index] ? "location" : undefined}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="language-switch" aria-label="Choose language">
            <a href={localPath("en")} hrefLang="en" className={language === "en" ? "active" : ""} aria-current={language === "en" ? "page" : undefined}>EN</a>
            <i />
            <a href={localPath("zh")} hrefLang="zh-CN" className={language === "zh" ? "active" : ""} aria-current={language === "zh" ? "page" : undefined}>中文</a>
          </div>
          <a className="nav-cta" href="#contact">{language === "zh" ? "合作" : "Start a project"}</a>
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
        <nav
          className="mobile-menu liquid-glass"
          aria-label={language === "zh" ? "移动端导航" : "Mobile navigation"}
        >
          <div className="mobile-menu-links">
            {t.nav.map((item, index) => (
              <a
                key={NAV_TARGETS[index]}
                className={activeSection === NAV_TARGETS[index] ? "active" : undefined}
                href={`#${NAV_TARGETS[index]}`}
                aria-current={activeSection === NAV_TARGETS[index] ? "location" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="mobile-menu-contact">
            <a className="mobile-menu-email" href={inquiryHref(language)}>
              hello@saifuliqi.com
            </a>
            <a
              className="mobile-menu-cta"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              {t.contactCta}<ArrowUpRight size={17} />
            </a>
          </div>
        </nav>
      )}

      <section className="hero" id="top">
        <img className="hero-fallback" src="/hero-ai-video.webp" alt="" />
        <HeroVideo />
        <div className="hero-shade" />
        <div className="hero-center">
          <div className="hero-kicker">{language === "zh" ? "AI 漫剧 · AI 短剧 · AI 视频 · AI 广告" : "AI VIDEO · ANIMATION · COMMERCIALS"}</div>
          <h1>
            <motion.span
              className="display-accent"
              initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.05, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              {t.heroTop}
            </motion.span>
            {language === "en" ? " " : null}
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
            href={inquiryHref(language)}
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
          <span>{language === "zh" ? "AI VIDEO TOOLS" : "CREATIVE TECHNOLOGY"}</span><i />
          <span>{language === "zh" ? "APPLICATION DEVELOPMENT" : "STORIES IN MOTION"}</span>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <motion.div className="section-label" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>{t.aboutLabel}</motion.div>
        <div className="about-grid">
          <motion.h2 className="about-title" initial={{ opacity: 0, y: 42 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .85, ease: [0.16, 1, 0.3, 1] }}>
            <WarpText
              className="about-title-warp"
              text={`${t.aboutLead}\n${t.aboutAccent}`}
              color="#f2f0e9"
              activation="hover"
              warpStrength={0.08}
              warpScale={1.7}
              speed={0.55}
              pointerInfluence={0.42}
              pointerStrength={0.38}
              refraction={0.018}
              ripple
              fontSize={
                language === "zh"
                  ? "clamp(2.375rem, 7vw, 6.5rem)"
                  : "clamp(1.875rem, 4.8vw, 4.625rem)"
              }
              fontWeight={600}
              letterSpacing={language === "zh" ? "-0.04em" : "-0.05em"}
              lineHeight={1.02}
            />
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
          {t.philosophyTitleA} <em className="display-accent">×</em> <span className="display-accent">{t.philosophyTitleB}</span>
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
          <h2 className="display-accent">{t.servicesTitle}</h2><span>{t.servicesLabel}</span>
        </motion.div>
        <p className="production-intro">{language === "zh" ? "四类制作业务均接受委托。无论已有脚本，还是只有一个想法，都欢迎先来咨询。" : "From a product launch to an original story, find the production service that fits your brief. You can commission a complete film or discuss support for part of the process."}</p>
        <div className="production-grid">{productionOfferings.map((item, index) => <a className="production-card" key={item.slug} href={localPath(language, `/services/${item.slug}`)}><span className="production-number">0{index + 1}</span><h3>{item[language].title}</h3><p>{item[language].summary}</p><span className="production-card-cta">{language === "zh" ? "了解制作与咨询" : "Explore this service"}<ArrowUpRight size={17} /></span></a>)}</div>
        <div className="development-heading"><h3>{language === "zh" ? "同时提供 AI 工具与应用开发" : "We also build AI video tools and applications"}</h3><p>{language === "zh" ? "把创作流程，变成可以持续使用的产品。" : "Turn creative workflows into products people can use."}</p></div>
        <div className="services-grid">
          <ServiceCard video={TOOL_VIDEO} tag={t.toolTag} title={t.toolTitle} body={t.toolBody} href={localPath(language, "/services/ai-video-tools")} />
          <ServiceCard video={APPLICATION_VIDEO} tag={t.appTag} title={t.appTitle} body={t.appBody} href={localPath(language, "/services/custom-ai-video-applications")} />
        </div>
      </section>

      <section className="discovery section-shell" aria-labelledby="discovery-title">
        <div className="discovery-heading"><span className="section-label">{language === "zh" ? "了解合作" : "PLAN YOUR PROJECT"}</span><h2 id="discovery-title">{language === "zh" ? "从一个清楚的问题开始。" : "A clear path from brief to film."}</h2><p>{language === "zh" ? "了解服务范围、准备项目需求，再决定下一步要验证什么。" : "From the first conversation to the final files, agree on the direction and scope before production begins."}</p></div>
        {language === "en" ? <ol className="project-steps">
          <li><span>01 / BRIEF</span><h3>Share the idea</h3><p>Tell us your audience, message, references and intended use. A finished script is optional.</p></li>
          <li><span>02 / DIRECTION</span><h3>Agree on the plan</h3><p>Define the visual direction, production stages, deliverables, review points, schedule and quote.</p></li>
          <li><span>03 / PRODUCTION</span><h3>Create, review, deliver</h3><p>Move through the agreed production and review stages, then prepare the final files for your chosen formats.</p></li>
        </ol> : <div className="discovery-links"><a href={localPath(language, "/services/ai-video-tools")}>AI 视频工具开发<span aria-hidden="true">↗</span></a><a href={localPath(language, "/services/custom-ai-video-applications")}>定制 AI 视频应用<span aria-hidden="true">↗</span></a><a href={localPath(language, "/guides/planning-an-ai-video-project")}>如何规划 AI 视频开发项目<span aria-hidden="true">↗</span></a></div>}
        <div className="home-faq">{faq[language].slice(0, 3).map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
        <a className="discovery-more" href={localPath(language, "/faq")}>{language === "zh" ? "查看所有常见问题" : "Read all project questions"} <span aria-hidden="true">↗</span></a>
      </section>

      <section className="contact section-shell" id="contact">
        <motion.div className="contact-inner" initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .85, ease: [0.16, 1, 0.3, 1] }}>
          <span>{t.contactLabel}</span>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactBody}</p>
          <a href={inquiryHref(language)}>{t.contactCta}<span><ArrowUpRight size={18} /></span></a>
        </motion.div>
      </section>

      <footer className="footer section-shell" id="footer">
        <div className="footer-main">
          <div className="footer-identity">
            <a className="brand" href="#top" aria-label="SAIFU home">
              <img className="brand-mark" src="/saifu-mark.svg" alt="" aria-hidden="true" />
              <strong>SAIFU</strong>
            </a>
            <p>
              {language === "zh"
                ? "AI 视频制作与应用开发"
                : "AI video production for brands and storytellers"}
            </p>
          </div>
          <nav
            className="footer-nav"
            aria-label={language === "zh" ? "页尾导航" : "Footer navigation"}
          >
            <span>{language === "zh" ? "站内导航" : "Navigation"}</span>
            <div>
              {t.nav.map((item, index) => (
                <a key={NAV_TARGETS[index]} href={`#${NAV_TARGETS[index]}`}>
                  {item}
                </a>
              ))}
            </div>
          </nav>
          <div className="footer-contact">
            <span>{language === "zh" ? "项目合作" : "Start a project"}</span>
            <a className="footer-email" href={inquiryHref(language)}>
              hello@saifuliqi.com
            </a>
            <a className="footer-project" href={inquiryHref(language)}>
              {t.contactCta}<ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <nav className="footer-resource-links" aria-label={language === "zh" ? "服务与资源" : "Services and resources"}>
          {productionOfferings.map(item => <a key={item.slug} href={localPath(language, `/services/${item.slug}`)}>{item[language].title}</a>)}
          <a href={localPath(language, "/services/ai-video-tools")}>{language === "zh" ? "AI 视频工具开发" : "AI video tool development"}</a>
          <a href={localPath(language, "/services/custom-ai-video-applications")}>{language === "zh" ? "定制应用开发" : "Custom application development"}</a>
          <a href={localPath(language, "/guides/planning-an-ai-video-project")}>{language === "zh" ? "项目规划指南" : "Project planning guide"}</a>
          <a href={localPath(language, "/faq")}>{language === "zh" ? "常见问题" : "FAQ"}</a>
        </nav>
        <div className="footer-meta">
          <p>© 2026 {language === "zh" ? "北京赛蚨里奇科技有限公司 · Beijing Saifuliqi Technology Co., Ltd." : "Beijing Saifuliqi Technology Co., Ltd."}</p>
          <a href="#top">BACK TO TOP <ArrowUpRight size={15} /></a>
        </div>
      </footer>
    </main>
  );
}
