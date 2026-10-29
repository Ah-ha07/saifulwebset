import type { Language } from "./site";

type Section = { heading: string; paragraphs: string[]; points?: string[] };
export type ServiceCopy = { title: string; description: string; eyebrow: string; heading: string; lead: string; sections: Section[] };
const productionDetails: Record<string, Record<Language, ServiceCopy>> = {
  "ai-comic-series": {
    "zh": {
      "title": "AI 漫剧制作与项目合作｜赛蚨里奇 SAIFU",
      "description": "承接 AI 漫剧制作项目，围绕故事、角色与画面风格沟通分镜、动态画面、配音和剪辑。欢迎提供想法、脚本或参考片，向赛蚨里奇咨询合作与报价。",
      "eyebrow": "AI 漫剧制作",
      "heading": "把你的故事，做成 AI 漫剧。",
      "lead": "我们承接 AI 漫剧制作，围绕故事、角色与视觉风格组织画面和节奏。只有一个创意也欢迎来聊，先一起明确作品想讲什么、想给谁看。",
      "sections": [
        {
          "heading": "从故事与角色开始",
          "paragraphs": [
            "可以从故事梗概、已有脚本、角色设定或参考片开始沟通。连载内容需要明确人物关系、每集的故事推进，以及画面风格和角色外观中需要保持一致的部分。"
          ],
          "points": [
            "漫画风格的剧情短片与系列内容。",
            "角色故事、设定展示与内容试制。",
            "围绕已有创意讨论单集或多集制作。"
          ]
        },
        {
          "heading": "一起确定制作范围",
          "paragraphs": [
            "项目可围绕脚本整理、分镜、画面制作、动态处理、配音与剪辑讨论具体分工。你已经完成的素材也可以作为起点，制作环节按实际需求约定。",
            "开始前先明确风格参考、关键角色与样片要求，再沟通成片时长、集数、声音和修改方式。较长系列可以先讨论一段试制内容。"
          ]
        },
        {
          "heading": "欢迎咨询与询价",
          "paragraphs": [
            "发来作品方向、预期时长或集数、参考风格、发布用途，以及时间和预算要求，就可以开始讨论。尚未确定这些信息时，也欢迎先介绍故事想法。",
            "项目报价与交付安排会结合制作范围确认。联系 hello@saifuliqi.com，告诉我们你想做的漫剧。"
          ]
        }
      ]
    },
    "en": {
      "title": "AI Comic Series Production & Commissions | SAIFU",
      "description": "Commission AI comic-style videos and animated series. Discuss stories, characters, visual direction, storyboards, voiceover and editing with SAIFU. Project inquiries welcome.",
      "eyebrow": "AI COMIC SERIES PRODUCTION",
      "heading": "Bring your story to life as an AI comic series.",
      "lead": "SAIFU accepts commissions for AI comic-style videos and episodic stories. Start with an idea, script, character concept or reference film, and discuss how the story should look and feel.",
      "sections": [
        {
          "heading": "Begin with the story and characters",
          "paragraphs": [
            "A story outline, existing script, character brief or visual reference can start the conversation. For a series, define the relationships, each episode’s progression and the character and visual details that need continuity."
          ],
          "points": [
            "Comic-style narrative shorts and episodic content.",
            "Character stories, concept films and production trials.",
            "Single episodes or a series scoped around an existing idea."
          ]
        },
        {
          "heading": "Agree on the production scope",
          "paragraphs": [
            "Script development, storyboarding, image creation, motion, voiceover and editing can be discussed as part of the project. Existing assets can provide a starting point, with responsibilities agreed around your needs.",
            "Clarify the references, main characters and sample requirements before setting length, episode count, sound and revision scope. A longer series can start with a short production trial."
          ]
        },
        {
          "heading": "Project inquiries are welcome",
          "paragraphs": [
            "Share the story, intended length or episode count, visual references, distribution use and any schedule or budget constraints. If those details are still open, begin with the idea.",
            "Pricing and delivery are discussed for the agreed production scope. Email hello@saifuliqi.com to introduce your comic series project."
          ]
        }
      ]
    }
  },
  "ai-short-dramas": {
    "zh": {
      "title": "AI 短剧制作与剧情短片定制｜赛蚨里奇 SAIFU",
      "description": "承接 AI 短剧与剧情短片制作，围绕故事、角色、分镜、声音和剪辑沟通成片方案。欢迎带着创意、脚本或参考片，咨询赛蚨里奇项目合作。",
      "eyebrow": "AI 短剧制作",
      "heading": "让一个好故事，成为一部 AI 短剧。",
      "lead": "我们承接 AI 短剧和剧情短片制作，围绕故事冲突、人物关系与镜头节奏，把想法逐步推进为可以观看的作品。",
      "sections": [
        {
          "heading": "先讲清楚故事给谁看",
          "paragraphs": [
            "可以从一句创意、故事梗概或完整脚本开始。先明确受众、题材、人物关系和情绪重点，再讨论单条剧情短片或连续短剧的制作方式。"
          ],
          "points": [
            "剧情短片与短剧项目。",
            "系列内容的概念片、预告与试制片段。",
            "围绕品牌或主题创作的叙事内容。"
          ]
        },
        {
          "heading": "让镜头与声音服务叙事",
          "paragraphs": [
            "制作范围可覆盖脚本与分镜沟通、角色和场景视觉、AI 画面、声音设计与剪辑。不同故事对角色连续性、动作、对白和镜头连接的要求不同，需要结合样例确定。",
            "开工前约定画面风格、片长、集数、配音需求和审片节点，让故事方向与制作范围尽早对齐。"
          ]
        },
        {
          "heading": "从一个想法开始咨询",
          "paragraphs": [
            "欢迎发送题材方向、故事简介、目标片长、参考作品与发布用途。已有剧本、角色设定或分镜时，也可以一起提供。",
            "报价、周期和修改范围根据具体项目讨论。发送邮件至 hello@saifuliqi.com，我们一起把下一步制作计划讲清楚。"
          ]
        }
      ]
    },
    "en": {
      "title": "AI Short Drama & Narrative Film Production | SAIFU",
      "description": "Commission AI short dramas and narrative films with SAIFU. Discuss stories, characters, storyboards, sound and editing from an idea, script or visual reference.",
      "eyebrow": "AI SHORT DRAMA PRODUCTION",
      "heading": "Turn a story idea into an AI short drama.",
      "lead": "SAIFU accepts short drama and narrative film projects, developing the story, characters and visual rhythm into a watchable film. An initial idea is enough to begin a conversation.",
      "sections": [
        {
          "heading": "Start with the audience and story",
          "paragraphs": [
            "Bring a one-line idea, outline or complete script. Define the audience, genre, relationships and emotional focus before discussing a standalone narrative short or an episodic project."
          ],
          "points": [
            "Short dramas and narrative films.",
            "Concept films, trailers and production trials for a series.",
            "Story-led content built around a brand or theme."
          ]
        },
        {
          "heading": "Put picture and sound behind the story",
          "paragraphs": [
            "The project scope can include script and storyboard discussion, character and scene direction, AI-generated footage, sound and editing. Continuity, action, dialogue and scene transitions need to be assessed against the intended story.",
            "Agree on visual style, length, episode count, voiceover needs and review stages before production begins."
          ]
        },
        {
          "heading": "Bring an idea or a script",
          "paragraphs": [
            "Send the genre, story outline, intended length, reference films and distribution use. Include an existing script, character brief or storyboard if available.",
            "Pricing, timing and revision scope are agreed for the project. Email hello@saifuliqi.com to discuss your short drama."
          ]
        }
      ]
    }
  },
  "ai-video-production": {
    "zh": {
      "title": "AI 视频制作与创意短片定制｜赛蚨里奇 SAIFU",
      "description": "承接 AI 视频制作、创意短片、品牌内容与产品介绍视频。赛蚨里奇可从想法、脚本或已有素材出发沟通制作方案，欢迎咨询项目与报价。",
      "eyebrow": "AI 视频制作",
      "heading": "有一段视频想做？从这里开始。",
      "lead": "我们承接 AI 视频制作与创意内容项目，可以从想法、脚本、参考片或已有素材开始，讨论适合表达目的的画面、声音与节奏。",
      "sections": [
        {
          "heading": "围绕视频的用途确定表达",
          "paragraphs": [
            "产品介绍、品牌内容、知识表达与创意短片，对信息密度和观看节奏有不同要求。先说清楚视频给谁看、要传达什么，以及在哪里使用，才能选择合适的制作方式。"
          ],
          "points": [
            "品牌与产品介绍视频。",
            "创意短片、主题内容与视觉概念片。",
            "围绕已有素材讨论新的视频表达。"
          ]
        },
        {
          "heading": "按需求组合制作环节",
          "paragraphs": [
            "脚本、分镜、视觉风格、AI 画面、配音、声音与剪辑可以根据项目需要沟通分工。你可以委托一段完整视频，也可以先说明希望我们参与的环节。",
            "片长、横竖版、画面比例、字幕语言、音乐与交付文件需要在制作前确定；具体规格按项目约定。"
          ]
        },
        {
          "heading": "欢迎带着不完整的想法来聊",
          "paragraphs": [
            "准备好用途、受众、参考风格、目标时长和时间要求，就能开始讨论。暂时没有脚本时，可以先告诉我们你最想表达的一句话。",
            "我们会根据实际制作范围讨论报价与合作安排。项目咨询邮箱：hello@saifuliqi.com。"
          ]
        }
      ]
    },
    "en": {
      "title": "AI Video Production & Creative Video Commissions | SAIFU",
      "description": "Commission AI videos, creative films, brand content and product videos with SAIFU. Start with an idea, script, references or existing assets. Project inquiries welcome.",
      "eyebrow": "AI VIDEO PRODUCTION",
      "heading": "Have a video in mind? Let’s make it happen.",
      "lead": "SAIFU accepts AI video and creative content commissions. Bring an idea, script, reference film or existing assets, and discuss the picture, sound and pacing that fit your message.",
      "sections": [
        {
          "heading": "Build the film around its purpose",
          "paragraphs": [
            "Product introductions, brand stories, explainers and creative shorts each need a different balance of information and pacing. Define the audience, the message and where the video will be used before choosing the approach."
          ],
          "points": [
            "Brand and product introduction videos.",
            "Creative shorts, themed content and visual concept films.",
            "New video treatments built around existing assets."
          ]
        },
        {
          "heading": "Choose the production support you need",
          "paragraphs": [
            "Script, storyboard, visual direction, AI footage, voiceover, sound and editing can be discussed for the project. Commission a complete video or specify the stages you would like us to handle.",
            "Length, aspect ratio, caption language, music and delivery files should be agreed before production. Specifications depend on the brief."
          ]
        },
        {
          "heading": "An unfinished idea is welcome",
          "paragraphs": [
            "Share the use case, audience, references, intended length and timing. If there is no script yet, start with the one thing the film needs to communicate.",
            "We discuss pricing and the collaboration around the actual production scope. Contact hello@saifuliqi.com with your project idea."
          ]
        }
      ]
    }
  },
  "ai-ad-production": {
    "zh": {
      "title": "AI 广告制作与品牌广告视频定制｜赛蚨里奇 SAIFU",
      "description": "承接 AI 广告、品牌广告片与产品推广视频制作。从广告创意、脚本到画面与剪辑，围绕产品卖点和投放用途讨论方案，欢迎咨询合作与报价。",
      "eyebrow": "AI 广告制作",
      "heading": "让品牌的一个卖点，成为一支广告。",
      "lead": "我们承接 AI 广告与产品推广视频制作，从受众、卖点和使用场景出发，讨论广告创意、画面风格与成片表达。",
      "sections": [
        {
          "heading": "先明确产品与沟通目标",
          "paragraphs": [
            "广告制作需要先理解产品、受众、核心卖点，以及观看者看完后希望采取的行动。现有品牌资料、产品图片、落地页和参考广告都可以帮助形成清晰的创意方向。"
          ],
          "points": [
            "品牌广告与产品推广视频。",
            "社交媒体使用的广告创意与短片。",
            "同一创意下按需求讨论不同版本与比例。"
          ]
        },
        {
          "heading": "把品牌信息带入制作流程",
          "paragraphs": [
            "项目可以沟通创意脚本、分镜、产品与场景视觉、AI 画面、声音和剪辑的具体分工。品牌名称、标识、产品卖点和需要准确呈现的文字，应在制作前明确。",
            "广告用途、片长、画面比例、字幕语言、版本数量和交付要求会共同影响范围与报价，适合在初次咨询时一起说明。"
          ]
        },
        {
          "heading": "欢迎产品与品牌团队询价",
          "paragraphs": [
            "发送产品简介、核心卖点、受众、参考广告与使用渠道，以及预期时长和时间安排，就可以开始讨论。只有一个创意方向也欢迎联系。",
            "项目制作与报价依据具体需求确认。咨询邮箱：hello@saifuliqi.com。"
          ]
        }
      ]
    },
    "en": {
      "title": "AI Ad Production & Brand Commercials | SAIFU",
      "description": "Commission AI ads, brand commercials and product promotion videos. SAIFU welcomes briefs for creative direction, scripts, AI footage, sound and editing.",
      "eyebrow": "AI AD PRODUCTION",
      "heading": "Turn a product message into a brand commercial.",
      "lead": "SAIFU accepts AI ad and product promotion video commissions. Start with the audience, selling point and intended use, then develop the creative direction and finished film.",
      "sections": [
        {
          "heading": "Clarify the product and the message",
          "paragraphs": [
            "Define the product, audience, main selling point and the action the viewer should take. Brand materials, product images, a landing page and reference ads help establish the creative direction."
          ],
          "points": [
            "Brand commercials and product promotion videos.",
            "Ad creative and shorts for social media use.",
            "Different versions or aspect ratios scoped around the same concept."
          ]
        },
        {
          "heading": "Bring the brand into production",
          "paragraphs": [
            "Creative scripts, storyboards, product and scene direction, AI footage, sound and editing can be scoped around the brief. Identify the brand name, logo, product information and on-screen text that must be represented accurately.",
            "Use case, length, format, caption language, number of versions and delivery requirements all shape the scope and quote. Include them in the initial inquiry where possible."
          ]
        },
        {
          "heading": "Brand and product inquiries are welcome",
          "paragraphs": [
            "Send a product summary, selling points, audience, reference ads and distribution channels, with an intended length and schedule. An early creative direction is also welcome.",
            "Production scope and pricing are agreed for the brief. Email hello@saifuliqi.com to discuss your ad project."
          ]
        }
      ]
    }
  }
};

export const productionOfferings = [
  {
    "slug": "ai-comic-series",
    "zh": {
      "title": "AI 漫剧制作",
      "summary": "角色、故事与画面风格，把灵感做成漫剧。"
    },
    "en": {
      "title": "AI Comic Series Production",
      "summary": "Character-led comic videos and episodic stories."
    }
  },
  {
    "slug": "ai-short-dramas",
    "zh": {
      "title": "AI 短剧制作",
      "summary": "剧情、人物与镜头节奏，把故事做成短剧。"
    },
    "en": {
      "title": "AI Short Drama Production",
      "summary": "Narrative shorts and dramas, from idea to screen."
    }
  },
  {
    "slug": "ai-video-production",
    "zh": {
      "title": "AI 视频制作",
      "summary": "品牌内容、产品介绍与创意短片，按用途定制。"
    },
    "en": {
      "title": "AI Video Production",
      "summary": "Brand content, product videos and creative films."
    }
  },
  {
    "slug": "ai-ad-production",
    "zh": {
      "title": "AI 广告制作",
      "summary": "围绕品牌与产品卖点，制作广告与推广视频。"
    },
    "en": {
      "title": "AI Ad Production",
      "summary": "Ad creative and commercials built around your brand."
    }
  }
];

export const services: Record<string, Record<Language, ServiceCopy>> = {
  ...productionDetails,
  "ai-video-tools": {
    zh: {
      title: "AI 视频工具开发：生成、编辑与创作工作流｜SAIFU",
      description: "赛蚨里奇提供 AI 视频工具开发，围绕文字、图片与已有素材的视频生成、编辑和工作流设计，从需求梳理与产品原型逐步推进到实际应用。",
      eyebrow: "AI 视频工具开发", heading: "开发更好用的 AI 视频工具。",
      lead: "我们面向创作者与团队开发 AI 视频工具，把生成、编辑与工作流组织放进完整的产品体验，让用户能理解、控制并反复使用。",
      sections: [
        { heading: "先明确创作者要完成什么", paragraphs: ["同样是 AI 视频工具，输入、画面要求和修改方式可能完全不同。我们从用户与任务出发，明确工具是处理文字描述、图片素材还是已有视频，以及结果会进入哪一种内容生产流程。"], points: ["从文字或图片出发的视频生成工具。", "围绕已有素材的延展、编辑与版本调整流程。", "面向团队的生成任务组织与创作工作流。"] },
        { heading: "把可控性放进产品设计", paragraphs: ["模型返回一段视频，只是产品流程中的一步。一个可用的工具还需要清楚的输入约束、生成状态、结果预览与修改入口。我们把这些环节一起纳入工具设计，而不是让用户自己拼接零散能力。", "画面质量、风格一致性、处理效率与成本需要一起评估。具体采用哪些能力，应通过项目样例验证后决定。"] },
        { heading: "从原型验证到应用开发", paragraphs: ["合作可以从范围明确的原型开始。先选一组具有代表性的输入与目标结果，验证关键生成流程，再根据实际反馈确定开发范围。", "项目中需要提前讨论的事项包括输入素材、结果规格、人工修改方式、账号与权限，以及后续维护。最终交付范围与验收方式按具体项目约定。"] },
      ],
    },
    en: {
      title: "AI Video Tool Development: Generation & Editing | SAIFU",
      description: "AI video tool development for creators and teams. Plan and build generation, editing and creative workflows, from an initial product prototype to a working application.",
      eyebrow: "AI VIDEO TOOL DEVELOPMENT", heading: "AI video tools built for real creative work.",
      lead: "SAIFU develops AI video tools for creators and teams, bringing generation, editing and workflow design together in a complete product experience.",
      sections: [
        { heading: "Start with the creative task", paragraphs: ["AI video tools can serve very different needs. We start by defining the user, the input and the intended result: a written brief, an image or existing footage, and the production workflow the result needs to fit."], points: ["Video generation tools that start from text or images.", "Extension, editing and revision workflows for existing media.", "Generation task management and creative workflows for teams."] },
        { heading: "Design for creative control", paragraphs: ["A model returning a video is one step in the product. A usable tool also needs clear input requirements, generation status, a result preview and a way to request changes. We consider those steps as part of the same experience.", "Visual quality, style consistency, processing time and cost need to be evaluated together. The right capabilities are selected through project-specific examples, rather than a model list alone."] },
        { heading: "Move from a prototype to an application", paragraphs: ["A project can begin with a bounded prototype. A representative set of inputs and target outputs helps validate the core generation flow before a wider build is scoped.", "Inputs, output specifications, human review, account permissions and maintenance should be discussed early. Deliverables and acceptance criteria are agreed for the specific project."] },
      ],
    },
  },
  "custom-ai-video-applications": {
    zh: {
      title: "定制 AI 视频应用开发与工作流集成｜SAIFU 赛蚨里奇",
      description: "根据实际业务流程定制 AI 视频应用。赛蚨里奇结合能力选型、产品设计与软件开发，帮助团队将视频生成和编辑接入现有工作流。",
      eyebrow: "定制 AI 视频应用", heading: "围绕你的业务，开发 AI 视频应用。",
      lead: "现成工具无法完全匹配流程时，我们根据具体场景设计应用，把 AI 视频生成与编辑能力接入团队实际使用的产品和工作流。",
      sections: [
        { heading: "先梳理业务中的输入与交接", paragraphs: ["定制应用从业务问题出发：素材由谁提供、生成结果交给谁、什么需要人工确认，以及最终视频会在哪里使用。把这些关系讲清楚，才能判断哪些环节适合引入 AI。"], points: ["为已有产品增加 AI 视频生成或编辑入口。", "将多步生成、预览与人工确认组织成一个流程。", "为有明确内容生产需求的团队开发专用应用。"] },
        { heading: "能力选型、产品设计与开发一起考虑", paragraphs: ["选型不仅看演示效果，还要结合业务样例、画面一致性、输入要求、耗时和成本。我们将这些约束带入产品设计，再确定应用中的生成、编辑与结果处理流程。", "系统之间如何交换素材与任务状态、失败时如何处理、哪些结果必须人工审核，都应在开发前明确。具体集成方式取决于现有系统与可用接口。"] },
        { heading: "用可验证的范围推进合作", paragraphs: ["先界定一个有明确输入、输出和验收方法的应用范围，再通过原型确认关键流程。验证通过后，逐步推进界面、业务逻辑和工作流集成。", "如果你已有产品原型、素材样例或流程图，可以随需求一起提供。项目周期、费用、部署和维护范围在沟通实际需求后确定。"] },
      ],
    },
    en: {
      title: "Custom AI Video Application Development & Integration | SAIFU",
      description: "Custom AI video application development for business workflows. SAIFU combines capability selection, product design and software development with workflow integration.",
      eyebrow: "CUSTOM AI VIDEO APPLICATIONS", heading: "Custom AI video applications, built around your workflow.",
      lead: "When an off-the-shelf tool does not fit the process, SAIFU designs a purpose-built application that connects AI video generation and editing with the way your team works.",
      sections: [
        { heading: "Map inputs, people and handoffs", paragraphs: ["Custom development begins with the business problem: who supplies the media, who receives the result, which decisions require a person and where the finished video will be used. Those details identify the steps that can benefit from AI."], points: ["Add a video generation or editing entry point to an existing product.", "Connect generation, preview and human review in one workflow.", "Develop a dedicated application for a team's defined production needs."] },
        { heading: "Evaluate capabilities alongside product design", paragraphs: ["A convincing demo is only part of capability selection. Project examples, consistency, input requirements, latency and cost also shape the application. We use those constraints to plan generation, editing and result handling.", "Media exchange, task status, failure handling and human approval should be specified before development. Integration details depend on the existing systems and available interfaces."] },
        { heading: "Scope a build that can be verified", paragraphs: ["Start with a defined application scope, clear inputs and outputs, and an acceptance method. A prototype tests the critical workflow before interface development, business logic and integration progress further.", "Existing prototypes, sample assets and workflow diagrams help make the discussion concrete. Timing, cost, deployment and maintenance are agreed after the requirements are understood."] },
      ],
    },
  },
};

export const faq = {
  zh: [
    { question: "赛蚨里奇 SAIFU 是做什么的？", answer: "北京赛蚨里奇科技有限公司以 SAIFU 为品牌，承接 AI 漫剧、AI 短剧、AI 视频与 AI 广告制作，同时提供 AI 视频工具和定制应用开发。欢迎个人创作者、品牌与企业团队咨询项目。" },
    { question: "AI 漫剧、短剧、视频和广告都可以委托制作吗？", answer: "可以，我们承接这四类制作项目。你可以提供想法、脚本、参考片或已有素材，先沟通作品方向、用途、时长与制作范围，再讨论报价和安排。" },
    { question: "只有一个想法，也可以来咨询吗？", answer: "欢迎。先告诉我们你想讲的故事、想介绍的产品或视频要达到的沟通目的，再一起讨论风格、内容和适合的第一步。初次咨询无需准备完整的脚本或需求文档。" },
    { question: "AI 视频工具开发和定制应用开发有什么区别？", answer: "工具开发侧重可反复使用的生成、编辑与创作体验；定制应用开发从特定业务出发，围绕现有系统、人员交接和使用场景组织视频能力。需求存在交叉时，可以先用原型确定产品范围。" },
    { question: "已有产品可以接入 AI 视频能力吗？", answer: "可以就现有产品的具体流程讨论接入方式。需要先了解素材输入、目标视频、可用接口和审核要求，再判断适合的能力与集成范围。" },
    { question: "开始讨论项目，需要准备什么？", answer: "制作项目可以提供想法或脚本、参考片、视频用途、目标时长和时间要求；开发项目可以补充目标用户与现有流程。只有一个初步想法也欢迎先来聊。" },
    { question: "项目价格和开发周期如何确定？", answer: "制作费用与周期取决于时长、集数、风格、素材、配音剪辑和交付要求；开发项目还需要评估功能与集成范围。具体报价、修改范围和安排在沟通需求后约定。" },
    { question: "生成的视频一定能达到预期效果吗？", answer: "不同素材和场景的生成表现会有差异。合作前应使用代表性输入验证画面质量、风格一致性、生成耗时和可修改程度，并把可以接受的结果写入验收要求。" },
    { question: "如何联系 SAIFU？", answer: "可以发送邮件至 hello@saifuliqi.com，简要介绍你的产品、使用场景和希望改进的视频流程。官网提供中文与英文的服务介绍，便于项目沟通。" },
  ],
  en: [
    { question: "What does SAIFU do?", answer: "SAIFU is the brand of Beijing Saifuliqi Technology Co., Ltd. We accept commissions for AI comic series, short dramas, videos and ads, and develop AI video tools and custom applications. Creators, brands and business teams are welcome to discuss projects." },
    { question: "Can I commission comic series, short dramas, videos and ads?", answer: "Yes. We accept all four types of production projects. Share an idea, script, references or existing assets, then discuss the direction, use, length and production scope before agreeing on a quote and schedule." },
    { question: "Can I ask about a project with only an early idea?", answer: "Absolutely. Tell us the story, product or message you would like to bring to the screen. We can discuss the style, content and a useful first step. A finished script or specification is not required for an initial inquiry." },
    { question: "How is tool development different from custom application development?", answer: "Tool development focuses on a reusable generation, editing or creative experience. Custom applications start from a particular business workflow, including existing systems, people and handoffs. A prototype can help define the scope when the needs overlap." },
    { question: "Can AI video be integrated into an existing product?", answer: "We can discuss an integration around your existing product. Inputs, target videos, available interfaces and review requirements need to be understood before selecting capabilities and defining the integration scope." },
    { question: "What should I prepare for a project discussion?", answer: "For production, bring an idea or script, references, the intended use, length and timing. For development, add the user and current workflow. An early idea is enough to start the conversation." },
    { question: "How are project costs and timelines determined?", answer: "Production timing and pricing depend on length, episode count, style, assets, voiceover, editing and delivery. Development also depends on features and integration. Quotes, revision scope and schedules are agreed after the brief is reviewed." },
    { question: "Will generated videos always match the desired result?", answer: "Results vary by input and use case. Representative examples should be used to evaluate visual quality, consistency, processing time and editability. Acceptable outputs should be documented as part of the project criteria." },
    { question: "How can I contact SAIFU?", answer: "Email hello@saifuliqi.com with a short description of your product, use case and the video workflow you would like to improve. Our service information is available in Chinese and English." },
  ],
};

export const guide = {
  zh: {
    title: "如何规划 AI 视频开发项目：需求、原型与验收｜SAIFU",
    description: "准备 AI 视频工具或定制应用开发项目时，如何明确用户、输入素材、结果规格、生成质量、成本与验收方法。一份用于项目讨论的实用指南。",
    heading: "如何规划一个 AI 视频开发项目", lead: "在讨论模型和功能之前，先明确用户要用视频完成什么。以下六个问题，可以把一个宽泛的想法变成适合验证和开发的项目范围。",
    sections: [
      { heading: "01 / 写清楚一个具体任务", paragraphs: ["把目标写成一句话：哪一类用户，在什么环节，用哪些输入，获得怎样的视频结果。例如，团队希望从已有素材出发制作多个视频版本，关键问题就包括素材如何进入系统、哪些部分能变、哪些信息必须保持一致。", "第一阶段先选择一个最有价值的任务。明确什么属于本次验证，也明确哪些工作留待后续讨论。"] },
      { heading: "02 / 准备代表性的输入与目标样例", paragraphs: ["只用一份理想素材做演示，难以判断工具是否适合实际工作。准备一组真实场景的文字、图片或已有视频，同时提供希望接近的结果，并说明必须保留的内容。", "对于团队自己的素材，需要在测试前明确使用权限、敏感信息以及哪些内容可以提交给外部模型服务。具体处理方式应在项目中确认。"] },
      { heading: "03 / 把质量与修改方式写成验收条件", paragraphs: ["除了看视频是否好看，还需要讨论信息是否准确、风格是否一致、镜头之间是否连贯，以及团队能否修改关键部分。把这些要求写成可以逐项检查的条件。", "如果输出需要人工审核，应明确审核发生在哪一步、谁来确认、失败结果如何重试或退回，而不是默认所有生成结果都会直接发布。"] },
      { heading: "04 / 用整个工作流评估成本与耗时", paragraphs: ["一次生成的花费并不等于获得一段可用视频的总成本。评估时应同时考虑重试次数、修改、人工审核、结果处理和素材存储。", "原型阶段可以记录每个样例从提交到被接受的实际流程，再据此讨论处理效率与成本要求。没有这些样例时，精确报价和统一的速度承诺通常没有足够依据。"] },
      { heading: "05 / 列出与现有系统的交接点", paragraphs: ["如果需要接入已有产品，列出账号、素材来源、生成任务、预览结果和最终视频的流转方式。明确哪些接口已经存在，哪些需要新开发。", "结果应该返回哪个系统、任务状态如何显示、用户是否需要重新上传素材，这些细节都会影响使用体验和开发范围。"] },
      { heading: "06 / 用一个有边界的原型做决定", paragraphs: ["原型的任务是验证关键流程，而不是提前做完全部产品。约定输入样例、要验证的能力、可接受的输出和结束条件，就能在反馈后决定继续开发、调整方案还是缩小范围。", "准备好这些信息后，可以把项目简介发送至 hello@saifuliqi.com。SAIFU 会围绕实际业务场景讨论工具开发或定制应用的合作范围。"] },
    ],
  },
  en: {
    title: "How to Plan an AI Video Development Project | SAIFU",
    description: "A practical guide to planning an AI video tool or custom application: define users, inputs, output requirements, quality criteria, workflow costs and prototype scope.",
    heading: "How to plan an AI video development project", lead: "Before choosing a model or listing features, define the job the video needs to do. These six questions turn a broad idea into a project that can be evaluated and scoped.",
    sections: [
      { heading: "01 / Define one specific job", paragraphs: ["Describe the user, the moment in their workflow, the input and the desired video. A team making several versions from existing assets, for example, needs to specify how those assets enter the tool, what can change and what must remain consistent.", "Choose the most useful task for the first phase. Define what the initial evaluation includes and which ideas can wait for a later discussion."] },
      { heading: "02 / Prepare representative inputs and target examples", paragraphs: ["One ideal input does not establish whether a tool will work in production. Prepare examples of the briefs, images or existing footage the team will actually use. Include reference outputs and explain which information must be preserved.", "Before testing company media, clarify usage rights, sensitive information and which assets may be submitted to an external model service. The handling requirements should be agreed for the project."] },
      { heading: "03 / Define quality and revision criteria", paragraphs: ["Assess information accuracy, style consistency, continuity and the ability to change important details, alongside visual appeal. Turn those expectations into checks that a reviewer can apply to each output.", "If a person must approve the video, specify where review occurs, who decides and how unsuccessful results are retried or returned. Do not assume that every generated result will be published automatically."] },
      { heading: "04 / Evaluate cost and time across the workflow", paragraphs: ["The price of one generation is not the total cost of getting an acceptable video. Retries, revisions, human review, output processing and media storage may all be part of the workflow.", "During a prototype, record how each example moves from submission to acceptance. Use those observations to discuss processing requirements and cost. Precise pricing and universal speed promises need evidence from the intended use case."] },
      { heading: "05 / Map existing system handoffs", paragraphs: ["For an integration, map accounts, source media, generation tasks, previews and finished videos. Identify the interfaces that already exist and those that would have to be built.", "Which system receives the result, how users see task status and whether they must upload assets again all affect product usability and the development scope."] },
      { heading: "06 / Decide with a bounded prototype", paragraphs: ["A prototype tests the critical workflow before the full product is built. Agree on sample inputs, capabilities to validate, acceptable results and a stopping point. The findings can then support a decision to proceed, change direction or reduce scope.", "Send a project introduction to hello@saifuliqi.com when you are ready. SAIFU can discuss AI video tool development or a custom application around the actual workflow."] },
    ],
  },
};
