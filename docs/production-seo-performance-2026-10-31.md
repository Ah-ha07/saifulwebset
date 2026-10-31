# SAIFU 制作接单、SEO/GEO 与加载优化

2026-10-31，保留 saifuliqi.com、SAIFU 品牌、英文默认入口和现有中英文网址。基于生产分支 codex/saifu-domain-launch 的 aac208dc7b905096281eff78d32ea9b3d7eaab65。

连接检查：本轮内置浏览器可从根地址进入 /en，Google Search Console 实时测试于 17:24（Europe/London）显示网址可编入索引。Cloudflare 的该 Worker 过去 24 小时显示错误 0。此前 ERR_CONNECTION_CLOSED 未在本轮复现；当前电脑 DNS 返回 198.18.0.186，属于本地访问链路的特殊解析，不能视为公网权威 DNS。直查公共 DNS 超时，外部网页查询工具仍无法访问该站。现有证据偏向间歇性访问链路问题，未据此改动 DNS、证书、代理、安全防护或抓取权限，也没有宣布连接问题已彻底修复。

## 搜索意图与接单页

| 服务 | 中文关键词方向 | 英文关键词方向 | 现有独立页面（分别 /zh、/en） |
| --- | --- | --- | --- |
| 视频 | AI 视频制作、品牌视频、产品视频定制 | AI video production, brand and product videos | /services/ai-video-production |
| 短剧 | AI 短剧制作、剧情短片定制 | AI short drama production, narrative films | /services/ai-short-dramas |
| 广告 | AI 广告制作、产品广告视频 | AI ad production, social video commercials | /services/ai-ad-production |
| 电商图片 | AI 电商产品图制作、商品主图、产品场景图 | AI product image creation, ecommerce product images | /services/ai-product-images（本次新增） |

以上依据业主明确的可接单业务和购买意图选词，并非搜索量、排名或获客效果数据。新增产品图页清楚说明实拍素材、SKU/图片数量、真实商品细节核对、输出规格和询价方式。首页、页脚、其他详情页均有普通可抓取链接。没有制作虚构案例、评分、价格、交付时限或平台审核承诺。

首页标题、摘要、可见业务说明、公司结构化数据与 FAQ 同步覆盖图片业务。新增页沿用语言互链、canonical、Open Graph/Twitter 元信息、Service 和 BreadcrumbList，组织身份指向原有 Organization。中英文咨询链接准备项目简报；点击只打开访客自己的邮件应用，不自动发送邮件。

sitemap.xml 从 18 个 canonical 页面扩展为 20 个。只更新本次实际修改页面的 lastmod；保留未改开发指南的日期。公共 llms.txt 同步服务清单，作为补充阅读索引。Google AI 搜索沿用基础 SEO，不需要特殊 GEO 标记或 llms.txt；不承诺 AI 引用或排名。[Google 官方说明](https://developers.google.com/search/docs/appearance/ai-features)

## 直接减少加载负担

首页原来 5 段远程视频都带有初始 src 和自动播放。现在首屏保留 1 段，其他 4 段接近可见区域（160px）才绑定地址，离开区域或页面隐藏时暂停，原有播放/暂停按钮保留。

两份中文 MiSans 字体原为 4,858,624 + 5,034,212 = 9,892,836 字节。按网站实际源码用字及基础字符生成的版本为 87,452 + 88,896 = 176,348 字节，减少 98.22%。这是字体文件大小变化，不是整站速度或所有访客下载量下降比例。保留原字体、品牌样式及 font-display:swap；中文页和使用这些字形的页面受益。字体子集工具见 tools/subset-fonts.py，修改文案后需重新生成。脚本验证当前所需且原字体支持的字符均被保留。原 MiSans 许可来源见 README。

## 验收

生产构建与 8 项渲染测试通过：20 页状态、独立标题/摘要、单个 H1、canonical、语言对应、JSON-LD、未知服务 404、旧链接跳转与查询参数、新服务可抓取入口，以及首屏仅 1 段视频带 src。浏览器与生产发布结果另见本轮执行记录。

后续最有价值的内容是可公开使用的真实作品：产品原图与交付图对照、视频/短剧样片，以及项目目标、制作范围与实际过程。未取得真实素材前不填充虚构案例。Search Console 当前尚无足够搜索表现数据支持进一步排名分析。
