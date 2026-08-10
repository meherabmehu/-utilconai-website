# UtilCon AI — Utility Construction Website (WP Code Snippets Build)

**Industry:** Construction / Utilities Construction
**Company:** UtilCon AI
**URL:** utilconai.com

This package contains the complete website built using the **AI + WP Code Snippets** approach from the internship content document. All copy is taken **verbatim** from the content document. No dummy text.

---

## Folder Layout

```
utilcon/
  global/
    global.css        -> Paste into a WP Code Snippets "CSS Code Snippet" (site-wide)
    global.js         -> Paste into a WP Code Snippets "JS Code Snippet" (site-wide)
  partials/
    header.html       -> Site header + navigation (include once, or paste into your Astra header)
    footer.html       -> Site footer (include once)
  pages/
    01-homepage.html  -> Homepage body (Custom HTML)
    02-ai-functions.html
    03-iot-software.html
    04-hardware.html
    05-integration.html
    06-applications.html
    07-knowledge-center.html
    08-about.html
    09-contact.html
  assets/
    *.webp            -> Optimized hero images (one per page, already WebP)
  preview/
    *.html            -> Standalone preview files (open in browser to review design)
  README.md
```

---

## WP Code Snippets Setup (follow in order)

1. **Install Astra** (parent theme) and the **Astra Child Theme**, activate the child theme.
2. **Plugins:** Elementor, Contact Form 7, Rank Math SEO, WP Code Snippets (only these).
3. **WP Code Snippets → Add New → CSS Code Snippet** (site-wide): paste `global/global.css`.
4. **WP Code Snippets → Add New → JS Code Snippet** (site-wide, load on all pages): paste `global/global.js`.
5. For **each page**, create a separate **HTML Code Snippet** and paste the corresponding file from `pages/`:
   - Homepage  -> `pages/01-homepage.html`
   - AI Functions  -> `pages/02-ai-functions.html`
   - IoT Software  -> `pages/03-iot-software.html`
   - Hardware Technologies  -> `pages/04-hardware.html`
   - Integration  -> `pages/05-integration.html`
   - Applications  -> `pages/06-applications.html`
   - Knowledge Center  -> `pages/07-knowledge-center.html`
   - About Us  -> `pages/08-about.html`
   - Contact Us  -> `pages/09-contact.html`
6. Insert each snippet on its corresponding page using a **Custom HTML block** (or the snippet's shortcode/render method).
7. Upload the hero image (from `assets/`) for each page to the Media Library, and **replace the `assets/xxx.webp` src** with the uploaded image URL.
8. Contact Form 7: create the form, replace the placeholder shortcode in `09-contact.html`, and style it to match (labels, required fields, email validation, submit).

---

## SEO (Rank Math) — per page

| Page | SEO URL |
|---|---|
| Homepage | https://utilconai.com/ |
| AI Functions | /ai-for-utility-construction-operations/ |
| IoT Software | /iot-software-utility-infrastructure-sites/ |
| Hardware | /aiot-technologies-utility-line-construction/ |
| Integration | /edge-integration-utility-construction/ |
| Applications | /utility-construction-applications/ |
| Knowledge Center | /resources/ |
| About Us | /about-us/ |
| Contact Us | /contact/ |

Each page body already contains a comment at the top with its **SEO Meta Title**, **SEO Meta Description**, and **SEO URL**. Copy those into Rank Math.

---

## Content Accuracy

- Every heading, paragraph, bullet, and list in the content document has been included **verbatim**.
- Page content lengths match the 1700–2000 word target from the document.
- **Hardware** page includes the full **U.S. & Canadian standards/regulations** list and all **4 case studies** (Houston, Phoenix, Columbus, Calgary) using the Problem–Solution–Result format.
- One optimized WebP hero image per page, no filler stock images.

---

## Responsiveness / QA

Review each page in the `preview/` folder on desktop, tablet, and mobile. The design system (Global CSS) handles responsiveness, spacing, typography, buttons, cards, sections, and animations consistently across every page. No horizontal scroll is introduced by the code.
