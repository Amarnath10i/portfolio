export const projects = [
  {
    id: "fraud-sentinel",
    title: "fraud-sentinel",
    category: "Fraud Detection · MLOps",
    description: "Real-time card fraud detection built end to end: point-in-time features in PostgreSQL and streaming, gradient boosting written from scratch, calibrated cost-based decisions and drift monitoring, with a FastAPI scorer and a Next.js investigation UI.",
    details: [
      "1.85M transactions; trained on labels as known on deploy day and evaluated on Jun–Dec 2020: PR-AUC 0.992 (tuned LightGBM) and 0.989 for the from-scratch GBDT.",
      "Every feature compiles to a SQL window query for training and a streaming state machine for serving, verified equal on all 1.85M transactions.",
      "Calibrated, amount-aware expected-cost decisions cost $7,145 on the test period against $31,860 for the best-F1 threshold (4.5× cheaper).",
      "Hand-written streaming structures (Count-Min Sketch, Bloom filter, monotonic deques), label-free drift monitoring and an 18-month retraining backtest."
    ],
    tech: ["Python", "PostgreSQL", "LightGBM", "FastAPI", "Next.js"],
    github: "https://github.com/Amarnath10i/fraud-sentinel",
    demo: null,
    image: "/projects/fraud-sentinel.png",
    screenshots: [
      "/projects/screenshots/fraud sentinel/frontend-overview.png",
      "/projects/screenshots/fraud sentinel/frontend-investigation.png",
      "/projects/screenshots/fraud sentinel/frontend-whatif.png",
      "/projects/screenshots/fraud sentinel/monitoring.png"
    ],
    featured: true
  },
  {
    id: "cinematime",
    title: "CinemaTime",
    category: "Recommender Systems",
    description: "A movie, TV and anime discovery app whose For You page is a two-stage recommender trained on MovieLens 32M, evaluated on a year it never saw and served by a NumPy-only engine that reproduces the offline model exactly.",
    details: [
      "Recency-weighted EASE, implicit ALS (with an SBERT-to-ALS map for cold-start films), content and popularity retrievers, re-ranked by LightGBM LambdaRank.",
      "Full-catalog ranking for 5,396 held-out users: NDCG@20 0.141, +13% over the best single model and 23× the content model the app used before.",
      "Serving parity checked by replaying every test user through the API (ΔNDCG −0.0000); ~17 ms per request.",
      "Semantic search over FAISS, diversity re-ranking (MMR), Group Watch and trailers for every title."
    ],
    tech: ["Python", "NumPy/SciPy", "LightGBM", "FastAPI", "Next.js"],
    github: "https://github.com/Amarnath10i/CinemaTime",
    demo: "https://cinema-time-black.vercel.app",
    image: "/projects/cinema.png",
    screenshots: [
      "/projects/screenshots/cinema time/Screenshot 2026-07-20 222646.png",
      "/projects/screenshots/cinema time/Screenshot 2026-07-20 222853.png",
      "/projects/screenshots/cinema time/Screenshot 2026-07-20 223033.png"
    ],
    featured: true
  },
  {
    id: "atom",
    title: "Atom (LAMA)",
    category: "EdTech · Knowledge Tracing",
    description: "An AI tutor for JEE/NEET: five agents over a per-student memory graph, with a student model learned from 16 million real practice attempts in place of hand-set mastery rules.",
    details: [
      "On 14,453 held-out Junyi students, the shipped LightGBM student model reaches AUC 0.742 and calibration error 0.001, +0.152 AUC over the old mastery rule; compared with BKT, Elo, DKT and SAKT.",
      "A strict visibility rule for 15-minute timestamp ties, with the leakage it prevents measured rather than assumed.",
      "Half-life regression reproduces Settles & Meeder (ACL 2016) on Duolingo; serving replays training features to within 5.6e-16.",
      "React + TanStack web app, FastAPI agents service, Supabase, Ollama-hosted LLMs."
    ],
    tech: ["Python", "LightGBM", "PyTorch", "TypeScript", "Supabase"],
    github: "https://github.com/Amarnath10i/Atom",
    demo: "https://theatom.vercel.app",
    image: "/projects/atom.png",
    screenshots: [
      "/projects/screenshots/atom/Screenshot 2026-07-20 221236.png",
      "/projects/screenshots/atom/Screenshot 2026-07-20 221311.png",
      "/projects/screenshots/atom/Screenshot 2026-07-20 221346.png",
      "/projects/screenshots/atom/Screenshot 2026-07-20 221414.png",
      "/projects/screenshots/atom/Screenshot 2026-07-20 221454.png"
    ],
    featured: true
  },
  {
    id: "car-manual",
    title: "Car Manual Assistant",
    category: "Multilingual Retrieval",
    description: "Ask a car owner's manual a question in English, Hindi or Telugu and get the pages that answer it, or an honest \"not covered\", benchmarked on 273 queries with page-level gold labels.",
    details: [
      "Hybrid BM25 + multilingual-e5 retrieval; Hindi and Telugu questions translated with NLLB-200 first (Hit@5 0.84 / 0.80 against 0.38 / 0.34 for untranslated hybrid search).",
      "Abstains on questions the manual does not answer (AUROC 0.91–0.95), with the threshold fitted on dev questions only.",
      "Repairs PDF headings set in a shifted font encoding and skips table-of-contents pages; error analysis of every miss."
    ],
    tech: ["Python", "sentence-transformers", "NLLB-200", "Streamlit"],
    github: "https://github.com/Amarnath10i/car_manual_assistant",
    demo: null,
    image: "",
    screenshots: [],
    featured: false
  },
  {
    id: "repo-runner",
    title: "Repo Runner",
    category: "Developer Tools",
    description: "Paste a GitHub URL → get a live demo. Detects the stack and runs it: Node, Python scripts, Flask/Django/FastAPI, Streamlit and notebooks in the browser, everything else on an auto-installing runner engine.",
    details: [
      "In-browser execution with WebContainers (Node) and Pyodide (Python, Streamlit via stlite, notebooks).",
      "Hugging Face pipelines run on the visitor's GPU through Transformers.js and WebGPU.",
      "A runner engine that installs Java, Go, Rust, .NET, PHP and Python toolchains on first use."
    ],
    tech: ["React", "WebContainers", "Pyodide", "Node.js"],
    github: "https://github.com/Amarnath10i/repo-runner",
    demo: "https://github-runner-kappa.vercel.app",
    image: "/projects/repo.png",
    screenshots: [
      "/projects/screenshots/repo runner/Screenshot 2026-07-20 222346.png"
    ],
    featured: false
  },
  {
    id: "smart-env",
    title: "Smart Environment System",
    category: "IoT Platform",
    description: "An environmental monitoring platform with live sensor feeds, alerts and community features, built with Next.js, TypeScript and Prisma.",
    details: [
      "Real-time updates over Server-Sent Events.",
      "Role-based access for administrators, analysts, field technicians and the public.",
      "Sensor management, historical analysis and threshold alerts."
    ],
    tech: ["Next.js", "TypeScript", "Prisma"],
    github: "https://github.com/Amarnath10i/smart-environment-system",
    demo: null,
    image: "/projects/iot.png",
    screenshots: [
      "/projects/screenshots/smart environment system/Screenshot 2026-07-20 223207.png",
      "/projects/screenshots/smart environment system/Screenshot 2026-07-20 223238.png",
      "/projects/screenshots/smart environment system/Screenshot 2026-07-20 223256.png"
    ],
    featured: false
  },
  {
    id: "fides",
    title: "FIDES",
    category: "Document AI · Prototype",
    description: "A prototype that screens shipment documents for small customs brokers: upload a bill of lading and invoice, get extracted fields, risk checks and a plain-language brief.",
    details: [
      "OCR for PDFs and images, and LLM extraction of shippers, consignees, vessels and amounts into JSON.",
      "Rule-based stand-ins for sanctions, vessel-tracking, pricing and address checks (not live data feeds yet).",
      "An audit-style report with a Q&A assistant; tested so a failing model returns an error instead of a fabricated analysis."
    ],
    tech: ["FastAPI", "Gemini", "EasyOCR"],
    github: "https://github.com/Amarnath10i/FIDES",
    demo: null,
    image: "",
    screenshots: [],
    featured: false
  },
  {
    id: "strada",
    title: "Strada",
    category: "Full-Stack Web",
    description: "A car and bike marketplace for Indian cities: rent by the hour, day or kilometre, or buy with ex-showroom and on-road prices and nearby showrooms.",
    details: [
      "Express + SQLite API with JWT auth and server-side checks against overlapping bookings.",
      "186 seeded vehicles across 17 cities, with buy and rent modes.",
      "Admin dashboard for the fleet, bookings and revenue."
    ],
    tech: ["React", "Express", "SQLite"],
    github: "https://github.com/Amarnath10i/Strada",
    demo: null,
    image: "/projects/strada.png",
    screenshots: [],
    featured: false
  }
];
