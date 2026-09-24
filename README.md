<div align="center">

# Madaka Amarnath

**AI Researcher & Software Engineer** · B.Tech CSE, NIT Andhra Pradesh

Source code for my personal portfolio: research in scientific machine learning, remote sensing, medical imaging and trustworthy deep learning, plus the software I build around it.

[![Live Site](https://img.shields.io/badge/Live_Site-amarnath10i--portfolio.vercel.app-000?style=for-the-badge&logo=vercel)](https://amarnath10i-portfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>

---

## Research

| Project | Area | Summary | Status |
|---------|------|---------|--------|
| [**Identifiable HSI–MSI Fusion**](https://github.com/Amarnath10i/Research-On-Hyperspectral-ImageFussion) | Remote Sensing | Theory of what hyperspectral fusion can recover: admissible ambiguity, identifiable rank, phase transition and sensor-shift bounds. KrylovNet (~2.3k params) and NullFusion. | Ongoing |
| **DAXNet** | Medical Imaging | Edge-aware geodesic axial state-space network for polyp segmentation (6.15M params); successor study to BAMPolyp. Code released on publication. | Ongoing |
| [**VARUNA**](https://github.com/Amarnath10i/VARUNA) | Scientific ML | Uncertainty-aware neural-operator flood early warning: FNO rainfall with spectral UQ, graph neural ODE discharge, cross-modal SAR/optical flood mapping. | Ongoing |
| [**LAMA — Embodied AI**](https://github.com/Amarnath10i/LAMA-EmbodiedAI) | Embodied AI | Lifelong affordance learning via counterfactual verification under a limited interaction budget. | Ongoing |
| [**Nuclear Glass Corrosion**](https://github.com/Amarnath10i/nuclear-glass-corrosion) | Scientific ML | Physics-informed neural operators and conformal UQ for 100,000-year corrosion prediction of nuclear waste glass. | Ongoing |
| [**Neural Operators for PDEs**](https://github.com/Amarnath10i/neural-operators) | Scientific ML | FNO, DeepONet and graph neural operator framework with spectral PDE solvers and zero-shot super-resolution. | Ongoing |
| [**SPECTRA+**](https://github.com/Amarnath10i/spectra-plus-research) | Deep Learning | Orthogonal feature decomposition for CNN calibration — 85.54% accuracy, 0.0061 ECE on CIFAR-100. | Completed |
| [**Layer-wise Calibration**](https://github.com/Amarnath10i/Calibration-in-CNN) | Deep Learning | Probed all 54 ResNet-110 blocks to trace a three-phase miscalibration lifecycle — 83% ECE reduction. | Completed |
| [**Adverse Weather Detection**](https://github.com/Amarnath10i/adverse-weather-self-adaptive-detection) | Computer Vision | Self-adaptive object detection under rain, fog and low light. | Completed |

## Projects

| Project | Summary | Stack |
|---------|---------|-------|
| [**Atom (LAMA)**](https://github.com/Amarnath10i/Atom) | AI tutor with a nucleus/atom memory graph, agentic tools and a forgetting-curve learning OS. | TypeScript, FAISS, LLM agents |
| [**Repo Runner**](https://github.com/Amarnath10i/repo-runner) | Paste a GitHub URL, get a live demo — auto-detects and runs the stack in-browser or locally. [Demo](https://github-runner-kappa.vercel.app) | Next.js, WebContainers |
| [**Smart Environment System**](https://github.com/Amarnath10i/smart-environment-system) | IoT environmental monitoring dashboard with alerts and device management. | Next.js, TypeScript |
| [**FIDES**](https://github.com/Amarnath10i/FIDES) | Trade-document fraud screening for customs brokers: OCR, LLM entity extraction, sanctions/AIS checks and federated risk fingerprints. | FastAPI, Gemini, EasyOCR |
| [**Car Manual Assistant**](https://github.com/Amarnath10i/car_manual_assistant) | Multilingual (English, Hindi, Telugu) RAG chatbot over a car owner's manual. | Python, Streamlit |
| [**Strada**](https://github.com/Amarnath10i/Strada) | Component-driven JavaScript web platform. | JavaScript |
| **CinemaTime** | SBERT-based semantic movie recommender over TMDB metadata. [Demo](https://cinema-time-black.vercel.app) | Python, SBERT |

---

## About This Site

Built with **Next.js 14 (App Router)**, **TypeScript**, **Framer Motion** and **Phosphor Icons**, deployed on **Vercel**. All content lives in typed data files, so adding a project or paper is a one-file change.

```
src/
├── app/                 # App Router entry, layout and global styles
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, Research, Projects, About, Experience, Skills, Contact
│   └── ui/              # AboutModal, ProjectModal
└── data/                # profile, research, projects, experience, skills
public/projects/         # project previews and screenshots
```

### Run locally

Requires Node.js 18+.

```bash
git clone https://github.com/Amarnath10i/portfolio.git
cd portfolio
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

### Updating content

- **Research** — add an entry to `src/data/research.ts` (set `github: null` for unreleased code).
- **Projects** — add an entry to `src/data/projects.ts`; images go in `public/projects/`.
- **Profile, skills, education** — `src/data/profile.ts`, `skills.ts`, `experience.ts`.

---

## Contact

- **Email:** amarnath10chinu@gmail.com
- **GitHub:** [@Amarnath10i](https://github.com/Amarnath10i)
- **Kaggle:** [amarnath10](https://kaggle.com/amarnath10)
