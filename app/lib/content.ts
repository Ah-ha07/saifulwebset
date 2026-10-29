import type { Language } from "./site";

type Section = { heading: string; paragraphs: string[]; points?: string[] };
export type ServiceCopy = { title: string; description: string; eyebrow: string; heading: string; lead: string; sections: Section[] };
export const services: Record<string, Record<Language, ServiceCopy>> = {
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
    { question: "赛蚨里奇 SAIFU 是做什么的？", answer: "北京赛蚨里奇科技有限公司以 SAIFU 为品牌，专注 AI 视频工具与应用开发，结合模型能力、产品设计和软件开发，为创作者、团队和企业设计生成、编辑与工作流产品。" },
    { question: "AI 视频工具开发和定制应用开发有什么区别？", answer: "工具开发侧重可反复使用的生成、编辑与创作体验；定制应用开发从特定业务出发，围绕现有系统、人员交接和使用场景组织视频能力。需求存在交叉时，可以先用原型确定产品范围。" },
    { question: "已有产品可以接入 AI 视频能力吗？", answer: "可以就现有产品的具体流程讨论接入方式。需要先了解素材输入、目标视频、可用接口和审核要求，再判断适合的能力与集成范围。" },
    { question: "开始讨论项目，需要准备什么？", answer: "建议提供目标用户、要解决的问题、一组输入素材、期望的视频样例、现有流程，以及时间与预算约束。暂时没有完整需求文档也可以，先说明一个最需要验证的场景。" },
    { question: "项目价格和开发周期如何确定？", answer: "需要结合功能范围、现有系统、模型与处理需求、交付规格以及维护方式评估。官网没有统一的自助订阅或固定项目报价，具体费用与周期在需求沟通后约定。" },
    { question: "生成的视频一定能达到预期效果吗？", answer: "不同素材和场景的生成表现会有差异。合作前应使用代表性输入验证画面质量、风格一致性、生成耗时和可修改程度，并把可以接受的结果写入验收要求。" },
    { question: "如何联系 SAIFU？", answer: "可以发送邮件至 hello@saifuliqi.com，简要介绍你的产品、使用场景和希望改进的视频流程。官网提供中文与英文的服务介绍，便于项目沟通。" },
  ],
  en: [
    { question: "What does SAIFU do?", answer: "SAIFU is the brand of Beijing Saifuliqi Technology Co., Ltd. We develop AI video tools and applications for creators, teams and businesses, combining model capabilities, product design and software development for generation, editing and creative workflows." },
    { question: "How is tool development different from custom application development?", answer: "Tool development focuses on a reusable generation, editing or creative experience. Custom applications start from a particular business workflow, including existing systems, people and handoffs. A prototype can help define the scope when the needs overlap." },
    { question: "Can AI video be integrated into an existing product?", answer: "We can discuss an integration around your existing product. Inputs, target videos, available interfaces and review requirements need to be understood before selecting capabilities and defining the integration scope." },
    { question: "What should I prepare for a project discussion?", answer: "Bring the intended user, the problem, representative input assets, an example of the desired video, the current workflow and any timing or budget constraints. A complete specification is not required to discuss the first scenario to validate." },
    { question: "How are project costs and timelines determined?", answer: "They depend on features, existing systems, generation requirements, deliverables and maintenance. This company site does not publish a self-serve subscription or a fixed project price. Timing and cost are agreed after the requirements are reviewed." },
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
