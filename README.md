<p align="center">
  <img src="https://raw.githubusercontent.com/Stirling-Tools/Stirling-PDF/main/docs/stirling.png" width="80" alt="Stirling PDF logo">
</p>

<h1 align="center">Stirling PDF - The Open-Source PDF Platform</h1>

Stirling PDF is a powerful, open-source PDF editing platform. Run it as a personal desktop app, in the browser, or deploy it on your own servers with a private API. Edit, sign, redact, convert, and automate PDFs without sending documents to external services.

<p align="center">
  <a href="https://hub.docker.com/r/stirlingtools/stirling-pdf">
    <img src="https://img.shields.io/docker/pulls/frooodle/s-pdf" alt="Docker Pulls">
  </a>
  <a href="https://discord.gg/HYmhKj45pU">
    <img src="https://img.shields.io/discord/1068636748814483718?label=Discord" alt="Discord">
  </a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/Stirling-Tools/Stirling-PDF">
    <img src="https://api.scorecard.dev/projects/github.com/Stirling-Tools/Stirling-PDF/badge" alt="OpenSSF Scorecard">
  </a>
  <a href="https://github.com/Stirling-Tools/stirling-pdf">
    <img src="https://img.shields.io/github/stars/stirling-tools/stirling-pdf?style=social" alt="GitHub Repo stars">
  </a>
</p>

![Stirling PDF - Dashboard](images/home-light.png)

## Key Capabilities

- **Everywhere you work** - Desktop client, browser UI, and self-hosted server with a private API.
- **50+ PDF tools** - Edit, merge, split, sign, redact, convert, OCR, compress, and more.
- **Automation & workflows** - No-code pipelines direct in UI with APIs to process millions of PDFs.
- **Enterprise‑grade** - SSO, auditing, and flexible on‑prem deployments.
- **Developer platform** - REST APIs available for nearly all tools to integrate into your existing systems.
- **Global UI** - Interface available in 40+ languages.

For a full feature list, see the docs: **https://docs.stirlingpdf.com**

## Quick Start

```bash
docker run -p 8080:8080 docker.stirlingpdf.com/stirlingtools/stirling-pdf
```

Then open: http://localhost:8080

For full installation options (including desktop and Kubernetes), see our [Documentation Guide](https://docs.stirlingpdf.com/#documentation-guide).

#### Convert to PDF
- **Image to PDF**: Convert images to PDF format
- **Convert file to PDF**: Convert various common file types to PDF
- **HTML to PDF**: Transform HTML documents to PDF
- **Markdown to PDF**: Convert Markdown files to PDF
- **CBZ to PDF**: Convert comic book archives
- **CBR to PDF**: Convert comic book rar archives
- **Email to PDF**: Convert email files to PDF
- **Vector Image to PDF**: Convert vector images (PS, EPS, EPSF) to PDF format

#### Convert from PDF
- **PDF to Word**: Convert to documet (docx, doc, odt) format
- **PDF to Image**: Extract PDF pages as images
- **PDF to RTF (Text)**: Convert to Rich Text Format
- **PDF to Presentation**: Convert to presentation (pptx, ppt, odp) format
- **PDF to CSV**: Extract tables to CSV
- **PDF to XML**: Convert to XML format
- **PDF to HTML**: Transform to HTML
- **PDF to PDF/A**: Convert to archival (PDF/A-1b, PDF/A-2b) format
- **PDF to Markdown**: Convert PDF to Markdown
- **PDF to CBZ**: Convert to comic book archive
- **PDF to CBR**: Convert to comic book rar archive
- **PDF to Vector Image**: Convert PDF to vector image (EPS, PS, PCL, XPS) format

## Resources

- [**Documentation**](https://docs.stirlingpdf.com)
- [**Homepage**](https://stirling.com)
- [**API Docs**](https://registry.scalar.com/@stirlingpdf/apis/stirling-pdf-processing-api/)
- [**Server Plan & Enterprise**](https://docs.stirlingpdf.com/Paid-Offerings)

## Support

- **Community** [Discord](https://discord.gg/HYmhKj45pU)
- **Bug Reports**: [Github issues](https://github.com/Stirling-Tools/Stirling-PDF/issues)

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

This project uses [Task](https://taskfile.dev/) as a unified command runner for all build, dev, and test commands. Run `task dev` to get started running the editor, run `task` to see the most common commands, or see the [Developer Guide](DeveloperGuide.md) for full details.

For adding translations, see the [Translation Guide](devGuide/HowToAddNewLanguage.md).

## License

## License

Stirling PDF is open-core. See [LICENSE](LICENSE) for details.

## Supported Languages

Stirling-PDF currently supports 40 languages!

| Language                                     | Progress                               |
|----------------------------------------------|----------------------------------------|
| Arabic (العربية) (ar_AR)                     | ![58%](https://geps.dev/progress/58)   |
| Azerbaijani (Azərbaycan Dili) (az_AZ)        | ![59%](https://geps.dev/progress/59)   |
| Basque (Euskara) (eu_ES)                     | ![35%](https://geps.dev/progress/35)   |
| Bulgarian (Български) (bg_BG)                | ![65%](https://geps.dev/progress/65)   |
| Catalan (Català) (ca_CA)                     | ![65%](https://geps.dev/progress/65)   |
| Croatian (Hrvatski) (hr_HR)                  | ![94%](https://geps.dev/progress/94)   |
| Czech (Česky) (cs_CZ)                        | ![67%](https://geps.dev/progress/67)   |
| Danish (Dansk) (da_DK)                       | ![59%](https://geps.dev/progress/59)   |
| Dutch (Nederlands) (nl_NL)                   | ![57%](https://geps.dev/progress/57)   |
| English (English) (en_GB)                    | ![100%](https://geps.dev/progress/100) |
| English (US) (en_US)                         | ![100%](https://geps.dev/progress/100) |
| French (Français) (fr_FR)                    | ![87%](https://geps.dev/progress/87)   |
| German (Deutsch) (de_DE)                     | ![98%](https://geps.dev/progress/98)   |
| Greek (Ελληνικά) (el_GR)                     | ![64%](https://geps.dev/progress/64)   |
| Hindi (हिंदी) (hi_IN)                        | ![64%](https://geps.dev/progress/64)   |
| Hungarian (Magyar) (hu_HU)                   | ![98%](https://geps.dev/progress/98)   |
| Indonesian (Bahasa Indonesia) (id_ID)        | ![59%](https://geps.dev/progress/59)   |
| Irish (Gaeilge) (ga_IE)                      | ![65%](https://geps.dev/progress/65)   |
| Italian (Italiano) (it_IT)                   | ![95%](https://geps.dev/progress/95)   |
| Japanese (日本語) (ja_JP)                       | ![89%](https://geps.dev/progress/89)   |
| Korean (한국어) (ko_KR)                         | ![64%](https://geps.dev/progress/64)   |
| Norwegian (Norsk) (no_NB)                    | ![63%](https://geps.dev/progress/63)   |
| Persian (فارسی) (fa_IR)                      | ![61%](https://geps.dev/progress/61)   |
| Polish (Polski) (pl_PL)                      | ![69%](https://geps.dev/progress/69)   |
| Portuguese (Português) (pt_PT)               | ![66%](https://geps.dev/progress/66)   |
| Portuguese Brazilian (Português) (pt_BR)     | ![72%](https://geps.dev/progress/72)   |
| Romanian (Română) (ro_RO)                    | ![55%](https://geps.dev/progress/55)   |
| Russian (Русский) (ru_RU)                    | ![88%](https://geps.dev/progress/88)   |
| Serbian Latin alphabet (Srpski) (sr_LATN_RS) | ![95%](https://geps.dev/progress/95)   |
| Simplified Chinese (简体中文) (zh_CN)            | ![89%](https://geps.dev/progress/89)   |
| Slovakian (Slovensky) (sk_SK)                | ![49%](https://geps.dev/progress/49)   |
| Slovenian (Slovenščina) (sl_SI)              | ![68%](https://geps.dev/progress/68)   |
| Spanish (Español) (es_ES)                    | ![93%](https://geps.dev/progress/93)   |
| Swedish (Svenska) (sv_SE)                    | ![62%](https://geps.dev/progress/62)   |
| Thai (ไทย) (th_TH)                           | ![56%](https://geps.dev/progress/56)   |
| Tibetan (བོད་ཡིག་) (bo_CN)                   | ![62%](https://geps.dev/progress/62)   |
| Traditional Chinese (繁體中文) (zh_TW)           | ![95%](https://geps.dev/progress/95)   |
| Turkish (Türkçe) (tr_TR)                     | ![95%](https://geps.dev/progress/95)   |
| Ukrainian (Українська) (uk_UA)               | ![67%](https://geps.dev/progress/67)   |
| Vietnamese (Tiếng Việt) (vi_VN)              | ![54%](https://geps.dev/progress/54)   |
| Malayalam (മലയാളം) (ml_IN)                   | ![70%](https://geps.dev/progress/70)   |

## Stirling PDF Enterprise

Stirling PDF offers an Enterprise edition of its software. This is the same great software but with added features, support and comforts.
Check out our [Enterprise docs](https://docs.stirlingpdf.com/Pro)


## 🤝 Looking to contribute?

Join our community:
- [Contribution Guidelines](CONTRIBUTING.md)
- [Translation Guide (How to add custom languages)](devGuide/HowToAddNewLanguage.md)
- [Developer Guide](devGuide/DeveloperGuide.md)
- [Issue Tracker](https://github.com/Stirling-Tools/Stirling-PDF/issues)
- [Discord Community](https://discord.gg/HYmhKj45pU)
