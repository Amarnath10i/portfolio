<div align="center">

# Madaka Amarnath

**Machine Learning Engineer & Researcher** · B.Tech CSE, NIT Andhra Pradesh

Source code for my personal portfolio: machine learning systems built and evaluated end to end (fraud detection, recommenders, knowledge tracing, multilingual retrieval, flood forecasting), research in remote sensing and medical imaging, and the software around them.

[![Live Site](https://img.shields.io/badge/Live_Site-amarnath10i--portfolio.vercel.app-000?style=for-the-badge&logo=vercel)](https://amarnath10i-portfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>

---

## Research

| Study | Area | Summary | Status |
|---------|------|---------|--------|
| [**Identifiable HSI–MSI Fusion**](https://github.com/Amarnath10i/Research-On-Hyperspectral-ImageFussion) | Remote Sensing | Theory of what hyperspectral fusion can recover: admissible ambiguity, identifiable rank, phase transition and sensor-shift bounds. KrylovNet (~2.3k params) and NullFusion. | Ongoing |
| **DAXNet** | Medical Imaging | Edge-aware geodesic axial state-space network for polyp segmentation (6.15M params); successor study to BAMPolyp. Code released on publication. | Ongoing |
| [**SPECTRA+**](https://github.com/Amarnath10i/spectra-plus-research) | Deep Learning | Orthogonal feature decomposition for CNN calibration — 85.54% accuracy, 0.0061 ECE on CIFAR-100. | Completed |
| [**Layer-wise Calibration**](https://github.com/Amarnath10i/Calibration-in-CNN) | Deep Learning | Probed all 54 ResNet-110 blocks to trace a three-phase miscalibration lifecycle — 83% ECE reduction. | Completed |

## Projects

| Project | Summary | Stack |
|---------|---------|-------|
| [**fraud-sentinel**](https://github.com/Amarnath10i/fraud-sentinel) | Real-time card fraud detection: point-in-time SQL and streaming features, from-scratch GBDT, calibrated cost-based decisions, drift monitoring. PR-AUC 0.992 on six later months. | Python, PostgreSQL, LightGBM, FastAPI, Next.js |
| [**CinemaTime**](https://github.com/Amarnath10i/CinemaTime) | Two-stage recommender on MovieLens 32M (EASE, ALS, LambdaRank) served by a NumPy engine; NDCG@20 0.141 on a held-out year. [Demo](https://cinema-time-black.vercel.app) | Python, LightGBM, FastAPI, Next.js |
| [**Atom (LAMA)**](https://github.com/Amarnath10i/Atom) | AI tutor whose student model is learned from 16M practice attempts: AUC 0.742, +0.152 over the hand-set rule. [Demo](https://theatom.vercel.app) | Python, LightGBM, TypeScript, Supabase |
| [**Car Manual Assistant**](https://github.com/Amarnath10i/car_manual_assistant) | English, Hindi and Telugu questions over a 416-page manual with page citations and abstention; Hit@5 0.92 / 0.84 / 0.80. | Python, sentence-transformers, NLLB, Streamlit |
| [**VARUNA**](https://github.com/Amarnath10i/VARUNA) | Flood early warning benchmarked on 239 Indian catchments: regional LSTM at median NSE 0.44 on 2016–2020, conformal intervals that cover flood days, Kerala 2018 replay. | Python, PyTorch, LightGBM |
| [**LAMA — Embodied AI**](https://github.com/Amarnath10i/LAMA-EmbodiedAI) | Affordance learning under an interaction budget: 115 interactions per confirmed affordance against 185 for random, over 15 seeds × 40 episodes. | Python, NumPy |
| [**Nuclear Glass Corrosion**](https://github.com/Amarnath10i/nuclear-glass-corrosion) | Dissolution physics, a staged alteration model and conformal prediction for long-term waste-glass corrosion; neural surrogates not yet trained on lab data. | Python, NumPy/SciPy |
| [**Neural Operators for PDEs**](https://github.com/Amarnath10i/neural-operators) | FNO vs DeepONet, CNN and linear baselines on Burgers and Darcy with tested solvers: 0.39% error on Burgers, and "zero-shot super-resolution" checked against plain interpolation. | PyTorch, NumPy, SciPy |
| [**Adverse Weather Detection**](https://github.com/Amarnath10i/adverse-weather-self-adaptive-detection) | Object detection under depth-aware synthetic fog, rain, snow, dust, night and glare with targeted retraining; full run pending. | PyTorch, YOLOv8, OpenCV |
| [**Repo Runner**](https://github.com/Amarnath10i/repo-runner) | Paste a GitHub URL, get a live demo — runs the stack in the browser or on an auto-installing engine. [Demo](https://github-runner-kappa.vercel.app) | React, WebContainers, Pyodide |
| [**Smart Environment System**](https://github.com/Amarnath10i/smart-environment-system) | Environmental monitoring with live sensor feeds over SSE, alerts and roles. | Next.js, TypeScript, Prisma |
| [**FIDES**](https://github.com/Amarnath10i/FIDES) | Prototype that screens shipment documents for customs brokers: OCR, LLM field extraction, rule-based risk checks, plain-language brief. | FastAPI, Gemini, EasyOCR |
| [**Strada**](https://github.com/Amarnath10i/Strada) | Car and bike marketplace: rent by hour/day/km or buy with on-road prices. | React, Express, SQLite |


---

## About This Site

Built with **Next.js 14 (App Router)** and **TypeScript**, set in IBM Plex and Source Serif, with light and dark themes and no animation or icon libraries; deployed on **Vercel**. All content lives in typed data files, so adding a project or paper is a one-file change.

```
src/
├── app/                 # App Router entry, layout and global styles
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, Projects, Research, Background, Skills, Contact
│   └── ui/              # ProjectDialog, Icons
└── data/                # profile, research, projects, experience, skills
public/projects/         # screenshots and result figures
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
- **Headline results** in the hero — `src/components/sections/Hero.tsx`.

---

## Contact

- **Email:** amarnath10chinu@gmail.com
- **GitHub:** [@Amarnath10i](https://github.com/Amarnath10i)
- **LinkedIn:** [amar-nath-896232363](https://www.linkedin.com/in/amar-nath-896232363/)
- **Kaggle:** [amarnath10](https://kaggle.com/amarnath10)
