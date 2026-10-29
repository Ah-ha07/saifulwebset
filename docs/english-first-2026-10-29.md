# English-first global website — 2026-10-29

The existing domain and SAIFU brand are retained. The global entry `/` returns a permanent 308 redirect to `/en` for every visitor. No IP, browser language or cookie controls the language. Existing English URLs stay unchanged. Chinese content moves to `/zh`, with page-matched 308 redirects from the eight previous unprefixed content URLs. Campaign queries are preserved by `proxy.ts`.

The Chinese homepage, service descriptions, FAQ and guide retain their existing copy. Language switches use explicit links to the corresponding page. English navigation, homepage, production service introductions and FAQ are written for commissioning customers: brands, agencies and storytellers. Service terminology includes AI animation and motion comics, narrative shorts, brand and product videos, and commercials and social video ads. The English footer shows the English legal company name; the Chinese footer retains both names. No domain purchase, new brand registration, client claims, fixed pricing or delivery guarantees are introduced.

English inquiry links open the visitor’s own email application with an optional project brief template. They do not submit a form or send a message automatically. Chinese inquiry links retain their original behavior.

Canonical URLs, reciprocal language alternates, English `x-default`, JSON-LD, sitemap and llms.txt reflect `/en` and `/zh`. The existing Search Console property and persistent Google verification tag are retained. The submitted sitemap URL is unchanged. Search result language and snippets remain Google’s decision; the entry language does not force every search query to return an English result.

Validation: production build and all six rendered-response tests pass, covering 18 canonical pages, language metadata, structured data, query-preserving redirects and unknown-service 404s. Desktop and 390px mobile previews checked; manual homepage and corresponding-service language switching verified.

Google reference: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
