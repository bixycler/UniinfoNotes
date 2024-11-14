# Logseq publish
id:: 6735c981-7edd-4b51-afd2-23dcc4746238
- ## test
  collapsed:: true
    - Use the built-in feature `Export public pages`.
      collapsed:: true
        - Chose a **separate folder** (`$web/`) to checkout the `gh-pages` branch, then export to that folder.
            - Warning: Don't export to the same folder with the `main` branch (`$src/`), because their contents are very different.
            - Manually copy the whole `assets` folder from `$src/` to `$web/`
                - ((666022fc-5a51-4e87-ba7c-6f67a0cf19de)) ((666a6673-0383-471a-ac42-c77c03dd96d7))
        - The folder `$web/` can be launched by ((6714f01d-3dd8-461c-9619-c5bac33451b0)).
        - When `gh-pages` branch is pushed to GitHub, ((671503e5-690e-4f1f-ad53-419fd57543fe)) will deploy it to `https://$user.github.io/$repo/`.
        - [!] The built-in publisher does not give option to set `theme-mode: light/dark` and `accent-color: blue` and it always use the default theme (`data-color=logseq`).
        - So i customize `data-color=logseq` to match CreatZy theme.
        - [!] The built-in publisher still cannot handle assets (embedded or linked) other than embedded image.
          collapsed:: true
            - ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) ((6718b9ba-b96e-44b7-9f13-9acf0e8762e1))
    - CANCELLED Use [publish-SPA](https://github.com/logseq/publish-spa) GitHub Action to publish to [GitHub Pages](https://bixycler.github.io/UniinfoNotes/).
      collapsed:: true
      :LOGBOOK:
      CLOCK: [2024-06-11 Tue 10:37:00]
      :END:
        - [!] The published SPA has some style mismatch with the desktop app.
        - [!] The published SPA still cannot handle assets (embedded or linked) other than embedded image.
        - CANCELLED Local publishing with [publish-SPA CLI](https://github.com/logseq/publish-spa?tab=readme-ov-file#cli) to publish local graph of HTV's works.
          collapsed:: true
            - `publish-spa` requires `logseq` to be built for it to use `logseq/static`, but `logseq > yarn install` fails :(
                - ```
                  yarn install > Link step > logseq@workspace:. must be built because it never has been before
                  
                  Ambiguous Syntax Error: Cannot find which to pick amongst the following alternatives:
                    0. yarn install [--json] [--immutable] [--immutable-cache] [--check-cache] [--inline-builds] [--mode #0]
                    1. yarn install [--json] [--immutable] [--immutable-cache] [--check-cache] [--inline-builds] [--mode #0]
                  While running --cwd tldraw install
                  
                  ```
    - CANCELLED Publish linear (long-form) docs with [Hugo publish (logseq-schrodinger)](https://github.com/sawhney17/logseq-schrodinger) for publishing to [Hugo](https://gohugo.io/).
    - Because the exported SPA is too large (~90MB including Electron), it's better to write a Custom Logseq publish via Web API.
- ## Manually publish with Block copy and JavaScript or vim commands
  collapsed:: true
  draft note → published note → published Markdown → HTML → PDF
    - First, copy the block to be published to a page in `pages/publish/`, e.g. [[Logseq publish]].
        - Copy to external text editor to get text of block refs.
        - Copy `{{embed}}`ed contents
        - Remove additional notes & tasks
    - ### Then, load the published note to converter script
        - publish Markdown
            - convert newline `\n` to `<br />` (skipped)
              collapsed:: true
                - Note: newline is meaningful in Logseq but not in the standard Markdown ([line break](https://www.markdownguide.org/basic-syntax/#line-breaks) requires two spaces at line end or a backslash, for the historical plain text email).
                    - empty line is treated as paragraph break `</p><p>`, not line break `<br />`.
                - Skipped: The detection of wich lines to be converted is complicated, so we use the supported `markdownit({breaks: true})`
                    - For standard markdown, line breaks should be inserted manually when needed.
            - convert metadata to `<a id="UUID" data-property="..." data-logbook="..."></a>`
            - `looseList` to avoiding the style inconsistency between “[loose lists](https://spec.commonmark.org/0.31.2/#loose)” and “tight lists”.
              collapsed:: true
              :LOGBOOK:
              CLOCK: [2024-11-13 Wed 09:31:57]
              :END:
                - Issue: Any blank line in any list item makes that list “loose”, i.e., all other items in the same list (at the same level) will be wrapped in `<p>` which will be rendered different (more line space) from the unwrapped items of the default “tight list”.
                - [!] Cannot make soliton lists “loose” simply with blank line!
                    - soliton list: only one item with no sub-list
                    - ~~Trick: Add  another line containing `&nbsp` after the blank line.~~
                      collapsed:: true
                        - This line has no effect with normal text, but adds new code block after code block!
                    - ((66602f68-e23f-4b24-921e-b1a9fc0cc731)) Hack: set all `markdown-it`'s tokens with `"hidden": false`.
                      collapsed:: true
                        - break down `mdi.render()` into:
                          Markdown →`mdi.parse()`→ token stream →`mdi.renderer.render()`→ HTML
                          with `mdi = window.markdownit() || new MarkdownIt()`
                            - Ref source code: [MarkdownIt.prototype.render](https://github.com/markdown-it/markdown-it/blob/master/lib/index.mjs#L516)
                            - Token debug: tab `debug` in [Live demo](https://markdown-it.github.io/)
                    - `markdown-it` should have a rule to disable “tight list” feature.
                - Some convenstions, like [blankLineBeforeCodeBlock](((6731f764-27ba-4a06-b9ca-5817104478f0))), require loose list.
                - The `<p>` wrapping is also convenient for [`<div slot="unfoldable">` in `<folder-div>`](((672e0320-dc07-4c6e-8832-341aaa90cd2a))).
                - References:
                    - CommonMark talk: [Why are there even tight lists?](https://talk.commonmark.org/t/why-are-there-even-tight-lists/2301)
                    - Markdown-It issues: [#728](https://github.com/markdown-it/markdown-it/issues/728), [#678](https://github.com/markdown-it/markdown-it/issues/678),
                    - [Prettier's issue](https://github.com/prettier/prettier/issues/10063)
                    - Djot's issue: [Revisit the concept of tight/loose list.](https://github.com/jgm/djot/issues/138)
                - We also use style `li p {margin}` to fix this display issue.
            - `flattenHeadings` to unitemize headings & remove first tabs
            - process block link/ref -> `#`anchor link
                - Detect unresolved links
                - Convert `((block ref))` and empty link `[](((UUID)) "comment")` to `[target block title](((UUID)))`
                    - All links & block refs in the `target block title` is replaced by **plain text** due to the [limitation of HTML anchor](((66ae293c-b2ea-44cb-9e39-268c5a45c364))).
                    - Use `mapUuid[id] = blockTitle` to track block titles; add `target block title` to empty block ref/links in the topo-order of block ref dependency
                      :LOGBOOK:
                      CLOCK: [2024-11-07 Thu 20:44:23]--[2024-11-08 Fri 13:36:55] =>  16:52:32
                      :END:
                - Note: Link text can contain **matched** square brackets `[]`, and external link target can contain **matched** parentheses `()`... up to **3 levels**.
                  collapsed:: true
                  :LOGBOOK:
                  CLOCK: [2024-11-06 Wed 17:45:57]--[2024-11-07 Thu 17:19:01] =>  23:33:04
                  :END:
                    - Some ((66535e71-3b71-416c-98dc-5dde5e6a76ff)) implementations do allow _**matched** brackets/parentheses_ in link.
                      collapsed:: true
                        - E.g. This links to [[wiki] Parenthesis_(rhetoric)](https://en.wikipedia.org/wiki/Parenthesis_(rhetoric))
                        - Supported by Logseq, Markdown-It, GitLab
                        - Unsupported by GitHub, [Markdown Viewer (Browser Extension)](https://github.com/simov/markdown-viewer), [Stack Exchange](https://math.meta.stackexchange.com/questions/11662/markdown-quirk-including-square-brackets-in-link-text-of-comment)
                            - Parentheses in link target is supported by most of them: HitHub, Markdown Viewer, [Stack Exchange](https://meta.stackexchange.com/questions/13501/links-to-urls-containing-parentheses),
                    - Regex pattern for `n`-level-nesting balanced brackets:
                        - For unbound `n`, [recursive regex](https://www.rexegg.com/regex-recursion.php) is required.
                        - For specific `n` (= 3 in our case), we can construct the pattern with this algorithm:
                          collapsed:: true
                            - ```js
                              /**
                               Examples:
                                  [A [very [very [very]...] messy] link](http://to(some(weird(...))).href "with link tip")
                                  // 3 levels of []
                                  patText = balancedBracketsRegexPattern('[',']','',3,true)
                                  // 3 levels of () and exclude space & quote of the link tip
                                  patHref = balancedBracketsRegexPattern('(',')',' "',3,true)
                              */
                              function balancedBracketsRegexPattern(open='[', close=']', excludes='', depth=1, unrolled=false)
                              {
                                  let lo = '\\'+open, lc = '\\'+close;  // literals
                                  let noBracket = '[^'+lo+lc+excludes+']';
                                  // Pattern variants:
                                  let t = unrolled ? 1 : 0;
                                  let p = [ // [open, close]
                                      [// simple pattern
                                          lo
                                          + '(?:'+ noBracket  +'|'/*inner level*/,
                                            ')*' +
                                          lc
                                      ],
                                      [// unrolled pattern for efficiency
                                          lo +
                                          noBracket+'*'
                                          + '(?:' /*inner level*/,
                                          noBracket+'*'
                                          + ')*' +
                                          lc
                                      ]
                                  ];
                              
                                  // Generate the pattern
                                  let innermostPair = lo + noBracket+'*' + lc;
                                  let openBrackets  = p[t][0].repeat(depth);
                                  let closeBrackets = p[t][1].repeat(depth);
                              
                                  // Return the pattern
                                  pattern = new RegExp(openBrackets + innermostPair + closeBrackets);
                                  return pattern;
                              }
                              ```
                            - Ref: [Regular expression to match balanced parentheses](https://stackoverflow.com/a/35271017/789095)
                    - [Idealy](https://www.markdownguide.org/basic-syntax/#link-best-practices), link text should not contain brackets, and parentheses in link target should be esceped: `(` = `%28`, `)` = `%29`
                        - E.g. This links to [{wiki} Parenthesis_(rhetoric)](https://en.wikipedia.org/wiki/Parenthesis_%28rhetoric%29)
                        - Because any unmatched bracket/parenthesis will break the link sysntax with broken text displayed.
                          collapsed:: true
                            - This has [only open braket [](((6724b036-6dfb-4f58-8e13-b79a8a1806c7)))
                            - This has [only close braket ]](((6724b036-6dfb-4f58-8e13-b79a8a1806c7)))
                            - This has [only open parenthesis](https://en.wikipedia.org/wiki/Parenthesis_(rhetoric) ...
                            - This has [only close parenthesis](https://en.wikipedia.org/wiki/Parenthesis_rhetoric)) ...
            - TODO [for `logseq.order-list-type:: number`](((665eef80-baed-4eff-b89d-d1d62d4f0b0e))), replace items bullets with numbers
            - process code blocks
                - `blankLineBeforeCodeBlock` (⇒ [looseList](((67333634-482c-4446-95aa-dcd549cb27cd)))) for strict conventions like in GitLab
                - unitemize items with code blocks only.
                - replace the double space `  ` with `\t`.
            - warn for external links to relative paths: non-HTTP
              :LOGBOOK:
              CLOCK: [2024-11-08 Fri 18:55:58]--[2024-11-08 Fri 19:23:58] =>  00:28:00
              :END:
            - replace straight quotes `"..."` with curly quotes `“...”` (and `'...'` with `‘...’`)
              collapsed:: true
              :LOGBOOK:
              CLOCK: [2024-11-08 Fri 18:52:30]
              :END:
                - ((66602f61-b849-41a9-bdb8-ec91b96adaec)) ((6716110a-1a05-4c87-93b3-fa9f0db22ba9))
                - This has been done by Markdown-It's `typographer: true` in [smartquotes.mjs](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/smartquotes.mjs).
                - We implement our own function `replaceQuotes(ln)` to handle our markdown source in Logseq.
                - Multi-line quotes are not supported.
                - Test text:
                  collapsed:: true
                    - ```md
                      This "quotation" is for sth like "quot-"+"-ation" or sth like "12398 ^724_242!?" or "- abc =", but not " spaced  " nor a"s nor `in "inline" codes`, etc.  
                      This 'quotation' is for sth like 'quot-'+'-ation' or sth like '12398 ^724_242!?' or '- abc =', but not ' spaced ' nor a's nor `in 'inline' codes`, etc.\
                      "line start" and "line end"
                      'line start' and 'line end'
                      American style: "double quotes contain 'single quotes'"
                      British style:  'single quotes contain "double quotes"'
                      ```
        - markdown → HTML: using [markdown-it](https://github.com/markdown-it/markdown-it)
            - `MarkdownIt.options`
              collapsed:: true
                - `html: true, breaks: true` for comatible with Logseq
                - `typographer: false`: we do `replaceQuotes()` ourselves.
            - make item lists foldable with [custom element `<folder-div>`](((6677b47a-fcbb-47a0-bd60-cdf5ef1a17b8)))
              collapsed:: true
              :LOGBOOK:
              CLOCK: [2024-11-08 Fri 19:25:27]
              CLOCK: [2024-11-08 Fri 19:27:05]--[2024-11-14 Thu 10:33:01] =>  135:05:56
              :END:
                - For easy DOM traversal, set [looseList](((67333634-482c-4446-95aa-dcd549cb27cd))) = true & [flattenHeadings](((6720b9eb-687b-4041-99e6-00791a4769bb))) = false.
                    - For block title in `<div slot="unfoldable">`: Use `looseList` to wrap all item contents into `<p>`, then use `node.children[0]` to access its first child to get block title, instead of traversing `node.childNodes[]`.
                    - Note that, even with `looseList`, the `<li>` always contains meaningless newline-only text nodes which will appear in `node.childNodes[]`.
                - headings in `<div slot="unfoldable">` are automatically detected and moved to `<div slot="heading">`
                  :LOGBOOK:
                  CLOCK: [2024-11-14 Thu 08:07:06]
                  CLOCK: [2024-11-14 Thu 08:07:12]--[2024-11-14 Thu 10:32:53] =>  02:25:41
                  :END:
        - ((6720c0a4-0294-4065-8016-9853e2a04475))
            - TODO programmatically print HTML page to PDF using Chrome.
                - The printed PDF lacks bookmarks, used for simple page view only.
            - **layout** with bookmarks using [DocRaptor](https://docraptor.com/)
                - Pagination for PDF: Summary & Details
                    - Summary: each headings has a link (whole text or `...`) to the item in Details
                - Reduce list indent
                  collapsed:: true
                    - Browser default: `padding-inline-start: 40px;`
                    - [Prince](https://www.princexml.com/doc/styling/#lists) default: `margin-left: 52px;`
                    - ⇒ reset `padding-inline-start: 0px;` and set `margin-left: 20px;`
                - [!] JSON `fetch()` error
                  collapsed:: true
                    - Request with `mode: 'no-cors'` ⇒ opaque response with `status = 0` & `ok = false`.
                    - Serve page with non-secure `HTTP` protocol ⇒ `401 - Unauthorized`
                    - Calling `fetch()` with either header `Authorization` or `Content-Type: application/json`  ⇒ CORS preflight `OPTIONS` request is sent by browser. (ref: [StackOverflow](https://stackoverflow.com/a/43881141/789095))
                    - Calling `fetch()` with `content-type: application/json` ⇒ `Status Code: 400 Bad Request`
                        - The [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request) is OK, though!?!
                            - Request `OPTIONS` → `200 OK`
                              collapsed:: true
                                - ```
                                  Request URL: https://api.docraptor.com/docs
                                  Request Method: OPTIONS
                                  Status Code: 200 OK
                                  Remote Address: 34.226.73.93:443
                                  Referrer Policy: strict-origin-when-cross-origin
                                  access-control-request-headers: authorization,content-type
                                  access-control-request-method: POST
                                  origin: https://myip
                                  priority: u=1, i
                                  referer: https://myip/
                                  sec-fetch-dest: empty
                                  sec-fetch-mode: cors
                                  sec-fetch-site: cross-site
                                  ```
                            - Response
                              collapsed:: true
                                - ```
                                  access-control-allow-headers: authorization,content-type
                                  access-control-allow-methods: GET,PUT,POST
                                  access-control-allow-origin: https://myip
                                  access-control-max-age: 900
                                  cache-control: no-cache
                                  referrer-policy: strict-origin-when-cross-origin
                                  server: nginx
                                  x-frame-options: SAMEORIGIN
                                  x-permitted-cross-domain-policies: none
                                  ```
                        - But the real POST request is NG!?!
                            - CORS Error
                              collapsed:: true
                                - ```
                                  Access to fetch at 'https://api.docraptor.com/docs' from origin 'https://myip' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
                                  ```
                            - Request `POST` → `400 Bad Request`
                              collapsed:: true
                                - ```
                                  Request URL: https://api.docraptor.com/docs
                                  Request Method: POST
                                  Status Code: 400 Bad Request
                                  Referrer Policy: strict-origin-when-cross-origin
                                  accept: */*
                                  accept-encoding: gzip, deflate, br, zstd
                                  accept-language: en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,ja-JP;q=0.6,ja;q=0.5
                                  authorization: Basic bTdEaHJuX0FzZXpWOTRDM1ZMLUI6
                                  content-length: 15
                                  content-type: application/json
                                  origin: https://myip
                                  priority: u=1, i
                                  referer: https://myip/
                                  sec-ch-ua: "Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"
                                  sec-ch-ua-mobile: ?0
                                  sec-ch-ua-platform: "Linux"
                                  sec-fetch-dest: empty
                                  sec-fetch-mode: cors
                                  sec-fetch-site: cross-site
                                  user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36
                                  ```
                            - Response with **no** `Access-Control-Allow-Origin` header
                              collapsed:: true
                                - ```
                                  cache-control: no-cache
                                  content-length: 149
                                  content-type: application/xml
                                  date: Wed, 30 Oct 2024 11:56:55 GMT
                                  server: nginx
                                  set-cookie: eb_tracking_id=27f076a0-1782-4eab-b2db-82e421aff0a8; domain=.docraptor.com; path=/; expires=Tue, 25 Oct 2044 11:56:55 GMT; secure; HttpOnly
                                  strict-transport-security: max-age=63072000; includeSubDomains
                                  x-request-id: 2cbb044e-5120-4b63-990d-5373c8135f23
                                  x-runtime: 0.006626
                                  ```
                    - The official [docraptor-1.0.0.js](https://docraptor.com/docraptor-1.0.0.js) use `form.submit()` instead of JSON, with `user_credentials` instead of `Authorization: 'Basic API-key:'`
                        - while [its docs](https://docraptor.com/documentation/api/making_documents) says 
                          > HTTP Basic Authentication (preferred [over Query Parameter Authentication`user_credentials`])
                          > JSON is preferred, but you can also send form encoded variables by wrapping the option with `doc[]` and adding another `[]` for sub options.
                    - Calling `fetch()` with [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) ⇒ `200 OK`
                        - Request `POST` with `user_credentials` → `200 OK`
                          collapsed:: true
                            - ```
                              Request URL: https://api.docraptor.com/docs?user_credentials=m7Dhrn_AsezV94C3VL-B&doc%5Btype%5D=pdf&doc%5Btest%5D=true&doc%5Bname%5D=DocRaptor+TestDocs&doc%5Bdocument_url%5D=http%3A%2F%2Fwww.evopdf.com%2FDemoAppFiles%2FHTML_Files%2FStructured_HTML.html
                              Request Method: POST
                              Status Code: 200 OK
                              Remote Address: 54.88.97.245:443
                              Referrer Policy: strict-origin-when-cross-origin
                              origin: https://myip
                              priority: u=1, i
                              referer: https://myip/
                              sec-ch-ua: "Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"
                              sec-ch-ua-mobile: ?0
                              sec-ch-ua-platform: "Linux"
                              sec-fetch-dest: empty
                              sec-fetch-mode: cors
                              sec-fetch-site: cross-site
                              user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36
                              ```
                        - Response with `Access-Control-Allow-Origin` header
                          collapsed:: true
                            - ```
                              access-control-allow-methods: GET,PUT,POST
                              access-control-allow-origin: https://myip
                              access-control-max-age: 900
                              cache-control: max-age=0, private, must-revalidate
                              content-disposition: attachment; filename="DocRaptor TestDocs.pdf"; filename*=UTF-8''DocRaptor%20TestDocs.pdf
                              content-length: 307561
                              content-transfer-encoding: binary
                              content-type: application/pdf
                              date: Wed, 30 Oct 2024 11:49:06 GMT
                              etag: W/"4b660d33d3558fb04e888493a29f3fe2"
                              expect-ct: max-age=86400, enforce, report-uri="https://o8095.ingest.sentry.io/api/15415/security/?sentry_key=7f5f5d4c4104451d8b56b1a148a65915"
                              referrer-policy: strict-origin-when-cross-origin
                              server: nginx
                              set-cookie: eb_tracking_id=6d84dcd6-e2f3-4657-ace7-6302d6de34f9; domain=.docraptor.com; path=/; expires=Tue, 25 Oct 2044 11:49:06 GMT; secure; HttpOnly
                              strict-transport-security: max-age=63072000; includeSubDomains
                              vary: Accept
                              x-content-type-options: nosniff
                              x-docraptor-num-pages: 31
                              x-download-options: noopen
                              x-frame-options: SAMEORIGIN
                              x-permitted-cross-domain-policies: none
                              x-request-id: fdad5347-c36b-4edb-8b29-27e7febceea3
                              x-runtime: 2.518433
                              x-xss-protection: 0
                              ```
                    - Calling `curl` (and PostMan) with `authorization: Basic` & `content-type:application/json` ⇒ `200 OK`
                        - Command
                          collapsed:: true
                            - ```sh
                              curl -v https://m7Dhrn_AsezV94C3VL-B@api.docraptor.com/docs \
                                --fail --silent --show-error \
                                --header "Content-Type:application/json" \
                                --data '{"test": true,
                                         "document_url": "https://docraptor.com/examples/invoice.html",
                                         "type": "pdf" }' > docraptor.pdf
                              ```
                        - Request `POST`  → `200 OK`
                          collapsed:: true
                            - ```
                              * Server auth using Basic with user 'm7Dhrn_AsezV94C3VL-B'
                              * Using Stream ID: 1 (easy handle 0x55bbbd95aa60)
                              * TLSv1.2 (OUT), TLS header, Supplemental data (23):
                              } [5 bytes data]
                              > POST /docs HTTP/2
                              > Host: api.docraptor.com
                              > authorization: Basic bTdEaHJuX0FzZXpWOTRDM1ZMLUI6
                              > user-agent: curl/7.81.0
                              > accept: */*
                              > content-type:application/json
                              > content-length: 115
                              ```
                        - Response with `Access-Control-Allow-Origin` header
                          collapsed:: true
                            - ```
                              < HTTP/2 200 
                              < date: Wed, 30 Oct 2024 11:37:43 GMT
                              < content-type: application/pdf
                              < content-length: 73613
                              < server: nginx
                              < x-frame-options: SAMEORIGIN
                              < x-xss-protection: 0
                              < x-content-type-options: nosniff
                              < x-download-options: noopen
                              < x-permitted-cross-domain-policies: none
                              < referrer-policy: strict-origin-when-cross-origin
                              < expect-ct: max-age=86400, enforce, report-uri="https://o8095.ingest.sentry.io/api/15415/security/?sentry_key=7f5f5d4c4104451d8b56b1a148a65915"
                              < x-docraptor-num-pages: 1
                              < content-disposition: attachment; filename="doc-482759486.pdf"; filename*=UTF-8''doc-482759486.pdf
                              < content-transfer-encoding: binary
                              < vary: Accept
                              < etag: W/"8f32cebf1d07925d239958081b738618"
                              < cache-control: max-age=0, private, must-revalidate
                              < set-cookie: _dr_session=202db46b696109479465316a86f031b3; path=/; expires=Wed, 30 Oct 2024 16:37:43 GMT; secure; HttpOnly; SameSite=Lax
                              < set-cookie: eb_tracking_id=6d84dcd6-e2f3-4657-ace7-6302d6de34f9; domain=.docraptor.com; path=/; expires=Tue, 25 Oct 2044 11:37:43 GMT; secure; HttpOnly
                              < x-request-id: f3460bdb-aced-4cf6-9434-2e7b0ff59811
                              < x-runtime: 1.364432
                              < strict-transport-security: max-age=63072000; includeSubDomains
                              ```
                    - Calling `fetch()` with `form.submit()` ⇒ `200 OK`
                        - Request `POST`  → `200 OK`
                          collapsed:: true
                            - ```
                              Request URL: https://api.docraptor.com/docs
                              Request Method: POST
                              Status Code: 200 OK
                              Remote Address: 34.226.73.93:443
                              Referrer Policy: strict-origin-when-cross-origin
                              accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
                              accept-encoding: gzip, deflate, br, zstd
                              accept-language: en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7,ja-JP;q=0.6,ja;q=0.5
                              cache-control: max-age=0
                              content-length: 208
                              content-type: application/x-www-form-urlencoded
                              origin: https://myip
                              priority: u=0, i
                              referer: https://myip/
                              sec-ch-ua: "Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"
                              sec-ch-ua-mobile: ?0
                              sec-ch-ua-platform: "Linux"
                              sec-fetch-dest: document
                              sec-fetch-mode: navigate
                              sec-fetch-site: cross-site
                              sec-fetch-user: ?1
                              upgrade-insecure-requests: 1
                              user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36
                              ```
                        - Response with `Access-Control-Allow-Origin` header
                          collapsed:: true
                            - ```
                              access-control-allow-methods: GET,PUT,POST
                              access-control-allow-origin: https://myip
                              access-control-max-age: 900
                              cache-control: max-age=0, private, must-revalidate
                              content-disposition: attachment; filename="DocRaptor TestDocs.pdf"; filename*=UTF-8''DocRaptor%20TestDocs.pdf
                              content-length: 307568
                              content-transfer-encoding: binary
                              content-type: application/pdf
                              date: Wed, 30 Oct 2024 12:51:16 GMT
                              etag: W/"53cb350849343d8085386f6bda50ce6a"
                              expect-ct: max-age=86400, enforce, report-uri="https://o8095.ingest.sentry.io/api/15415/security/?sentry_key=7f5f5d4c4104451d8b56b1a148a65915"
                              referrer-policy: strict-origin-when-cross-origin
                              server: nginx
                              set-cookie: eb_tracking_id=6d84dcd6-e2f3-4657-ace7-6302d6de34f9; domain=.docraptor.com; path=/; expires=Tue, 25 Oct 2044 12:51:16 GMT; secure; HttpOnly
                              strict-transport-security: max-age=63072000; includeSubDomains
                              x-content-type-options: nosniff
                              x-docraptor-num-pages: 31
                              x-download-options: noopen
                              x-frame-options: SAMEORIGIN
                              x-permitted-cross-domain-policies: none
                              x-request-id: 864d5382-98eb-4df7-89dc-7425c6929f86
                              x-runtime: 2.499588
                              x-xss-protection: 0
                              ```
                    - Testing functions `toPdf_*()`
                      collapsed:: true
                        - ```js
                              // DocRaptor
                              const DocRaptorApiKey = "m7Dhrn_AsezV94C3VL-B";
                              const DocRaptorUrl = `https://api.docraptor.com/docs`;
                              const DocRaptorRequest = {
                                  // Test documents are free, but watermarked **nicely** at the top & bottom of each page
                                  "test": true,
                                  // Give a name for the docs 
                                  "name": "DocRaptor TestDocs",
                                  // You can supply content directly
                                  "document_content": "", 
                                  // or via a URL
                                  //"document_url": "http://www.evopdf.com/DemoAppFiles/HTML_Files/Structured_HTML.html", 
                                  //"javascript": true, // for HTML display before convertion
                                  "type": "pdf", // Output type can be "pdf" or "xls" or "xlsx"
                                  //"prince_options": {
                                      //"media": "screen" // use screen styles instead of print styles
                                  //}
                              }
                              
                              const Request = {
                                  method: 'POST',
                                  headers: {
                                      //'Content-Type': 'application/json',
                                      'Content-Type': 'application/x-www-form-urlencoded',
                                      'Accept': '*/*',
                                      //'Credentials': 'include',
                                      //'Access-Control-Allow-Origin': '*', // for preflight OPTIONS request
                                  },
                                  //mode: "no-cors",
                                  //mode: 'cors', // have browser to send preflight OPTIONS request
                                  body: '',
                              }
                              
                              const makeFormElement = function(name, value) {
                                  var element = document.createElement("textarea")
                                  element.name = name
                                  element.value = value
                                  return element
                              }
                              async function toPdf_form() { // use form.submit(), copied from https://docraptor.com/docraptor-1.0.0.js
                                  let form = document.createElement("form")
                                  form.action = "https://api.docraptor.com/docs"
                                  form.method = "post"
                                  form.style.display = "none"
                          
                                  form.appendChild(makeFormElement("user_credentials", DocRaptorApiKey))
                                  form.appendChild(makeFormElement("doc[type]", 'pdf'));
                                  form.appendChild(makeFormElement("doc[test]", true));
                                  form.appendChild(makeFormElement("doc[name]", 'DocRaptor TestDocs'));
                                  form.appendChild(makeFormElement("doc[document_url]", 'http://www.evopdf.com/DemoAppFiles/HTML_Files/Structured_HTML.html'));
                          
                                  document.body.appendChild(form);
                                  form.submit()
                              }
                          
                              async function toPdf_params() { // use URLSearchParams
                                  let url = new URL(DocRaptorUrl);
                                  let params = new URLSearchParams(); // url.searchParams;
                                  params.append("user_credentials", DocRaptorApiKey);
                                  params.append("doc[type]", 'pdf');
                                  params.append("doc[test]", true);
                                  params.append("doc[name]", 'DocRaptor TestDocs');
                                  //params.append("doc[document_url]", 'http://www.evopdf.com/DemoAppFiles/HTML_Files/Structured_HTML.html');
                                  params.append("doc[document_content]", mdhtml.innerHTML + markdown_style.outerHTML + pdf_style.outerHTML);
                                  let req = structuredClone(Request);
                                      req.body = params;
                          
                                  res = await fetch(url.href, req); // , mode: "no-cors"
                                  console.debug('toPdf() fetch',req,res);
                                  if (!res.ok) {
                                      //console.log('Fetch error:',res);
                                      loadError(res.statusText);
                                      return;
                                  } else {
                                      message.innerHTML = '';
                                      message.style.display = 'none';
                                  }
                                  blob = await res.blob();
                                  console.debug('toPdf() fetch',params,blob);
                                  // blob URL will be stored in `exportUrl` and updated in cascade
                                  exportUrl.href = URL.createObjectURL(blob);
                              }
                          
                              async function toPdf_JSON() { // use JSON
                                  //DocRaptorRequest.document_content = mdhtml.innerHTML + markdown_style.outerHTML + pdf_style.outerHTML;
                                  DocRaptorRequest.document_url = "https://docraptor.com/examples/invoice.html";
                          
                                  let req = structuredClone(Request); 
                                      req.headers.Authorization = 'Basic '+btoa(DocRaptorApiKey+':');
                                      req.body = DocRaptorRequest;
                                  let url = DocRaptorUrl; // `${DocRaptorUrl}?user_credentials=${DocRaptorApiKey}`;
                                  let res = await fetch(url, req);
                                  console.debug('toPdf() fetch',req,res);
                                  if (!res.ok) {
                                      //console.log('Fetch error:',res);
                                      loadError(res.statusText);
                                      return;
                                  } else {
                                      message.innerHTML = '';
                                      message.style.display = 'none';
                                  }
                                  let blob = await res.blob();
                                  console.debug('toPdf() fetch',DocRaptorRequest,blob);
                                  // blob URL will be stored in `exportUrl` and updated in cascade
                                  exportUrl.href = URL.createObjectURL(blob);
                              }
                          
                          ```
        - TODO capture page into image (PNG/SVG)
    - ### Or, process content with vim commands
      collapsed:: true
        - remove `:logbook:` and properties
          ```vim
          %s/^\s*:\(logbook\|LOGBOOK\):\_.\{-}\s*:END:\n//
          %s/^\s*\w\+:: .*\n//
          ```
        - remove first tab with `Ctrl` `v`, or with command
          ```vim
          %s/^\t\(.*\)/\1/
          ```
        - unitemize headings
          ```vim
          %s/^- #\(.*\)/\r#\1\r/
          ```
        - process code block for strict conventions like in GitLab
          ```vim
          %s/^\(\t*\)- ```/\r\1```/|%s/  ```/```\r/|%s/\t  /\t/
          ```
        - replace items bullets with numbers: `V` select all items, then 
          ```vim
          '<,'>s/^- \(.*\)/1. \1/
          ```
        - replace links to `assets` & `publish`
          ```vim
          %s#../assets/projects/java17/aal_gw/##g
          %s#(publish/projects/java17/aal_gw/\([^)]*\))#(\1.md)#g
          ```
        - Replace straight quotes with curly quotes
          ```vim
          %s/"\(\S\)/“\1/g|%s/\(\S\)"/\1”/g
          ```
