export type Metric = { label: string; value: string };

export type Project = {
  id: string;
  title: string;
  category: string;
  /** "ml": machine learning projects; "software": products and tools. */
  group: "ml" | "software";
  status: "Completed" | "Ongoing" | "Early stage" | "Prototype";
  summary: string;
  details: string[];
  metrics: Metric[];
  tech: string[];
  github: string;
  demo: string | null;
  /** Figure or screenshots shown in the detail view. */
  screenshots: string[];
};

export const projects: Project[] = [
  {
    id: "fraud-sentinel",
    title: "fraud-sentinel",
    category: "Fraud detection · MLOps",
    group: "ml",
    status: "Completed",
    summary: "Real-time card fraud detection built end to end: point-in-time features in PostgreSQL and streaming, gradient boosting written from scratch, calibrated cost-based decisions and drift monitoring.",
    details: [
      "1.85M transactions; trained on labels as known on deploy day and evaluated on Jun–Dec 2020: PR-AUC 0.992 (tuned LightGBM) and 0.989 for the from-scratch GBDT.",
      "Every feature compiles to a SQL window query for training and to a streaming state machine for serving, verified equal on all 1.85M transactions.",
      "Calibrated, amount-aware expected-cost decisions cost $7,145 on the test period against $31,860 for the best-F1 threshold.",
      "Hand-written streaming structures (Count-Min Sketch, Bloom filter, monotonic deques), label-free drift monitoring and an 18-month retraining backtest."
    ],
    metrics: [
      { label: "PR-AUC, 6 later months", value: "0.992" },
      { label: "cost vs best-F1 threshold", value: "4.5× lower" }
    ],
    tech: ["Python", "PostgreSQL", "LightGBM", "FastAPI", "Next.js"],
    github: "https://github.com/Amarnath10i/fraud-sentinel",
    demo: null,
    screenshots: [
      "/projects/screenshots/fraud sentinel/frontend-whatif.png",
      "/projects/screenshots/fraud sentinel/frontend-overview.png",
      "/projects/screenshots/fraud sentinel/frontend-investigation.png",
      "/projects/screenshots/fraud sentinel/monitoring.png"
    ]
  },
  {
    id: "cinematime",
    title: "CinemaTime",
    category: "Recommender systems",
    group: "ml",
    status: "Completed",
    summary: "A two-stage recommender trained on MovieLens 32M, evaluated on a year it never saw and served by a NumPy-only engine that reproduces the offline model exactly.",
    details: [
      "Recency-weighted EASE, implicit ALS (with an SBERT-to-ALS map for cold-start films), content and popularity retrievers, re-ranked by LightGBM LambdaRank.",
      "Full-catalog ranking for 5,396 held-out users: NDCG@20 0.141, +13% over the best single model and 23× the content model the app used before.",
      "Serving parity checked by replaying every test user through the API (ΔNDCG −0.0000); about 17 ms per request.",
      "Semantic search over FAISS, diversity re-ranking (MMR), Group Watch and trailers for every title."
    ],
    metrics: [
      { label: "NDCG@20, held-out year", value: "0.141" },
      { label: "over best single model", value: "+13%" }
    ],
    tech: ["Python", "NumPy/SciPy", "LightGBM", "FastAPI", "Next.js"],
    github: "https://github.com/Amarnath10i/CinemaTime",
    demo: "https://cinema-time-black.vercel.app",
    screenshots: [
      "/projects/screenshots/cinema time/Screenshot 2026-07-20 222646.png",
      "/projects/screenshots/cinema time/Screenshot 2026-07-20 222853.png",
      "/projects/screenshots/cinema time/Screenshot 2026-07-20 223033.png"
    ]
  },
  {
    id: "atom",
    title: "Atom",
    category: "Knowledge tracing · LLM agents",
    group: "ml",
    status: "Ongoing",
    summary: "An AI tutor for JEE/NEET whose student model is learned from 16 million practice attempts instead of hand-set mastery rules, served with exact training-serving parity.",
    details: [
      "On 14,453 held-out Junyi students the shipped LightGBM student model reaches AUC 0.742 and calibration error 0.001, +0.152 AUC over the old rule; compared with BKT, Elo, DKT and SAKT.",
      "A strict visibility rule for 15-minute timestamp ties, with the leakage it prevents measured rather than assumed.",
      "Half-life regression reproduces Settles & Meeder (ACL 2016) on Duolingo; serving replays training features to within 5.6e-16.",
      "Five agents over a per-student memory graph; React + TanStack web app, FastAPI agents service, Supabase, Ollama-hosted LLMs."
    ],
    metrics: [
      { label: "AUC, 14,453 unseen students", value: "0.742" },
      { label: "over the hand-set rule", value: "+0.152" }
    ],
    tech: ["Python", "LightGBM", "PyTorch", "TypeScript", "Supabase"],
    github: "https://github.com/Amarnath10i/Atom",
    demo: "https://theatom.vercel.app",
    screenshots: [
      "/projects/screenshots/atom/Screenshot 2026-07-20 221236.png",
      "/projects/screenshots/atom/Screenshot 2026-07-20 221311.png",
      "/projects/screenshots/atom/Screenshot 2026-07-20 221346.png",
      "/projects/screenshots/atom/Screenshot 2026-07-20 221414.png",
      "/projects/screenshots/atom/Screenshot 2026-07-20 221454.png"
    ]
  },
  {
    id: "varuna",
    title: "VARUNA",
    category: "Flood forecasting · Hydrology",
    group: "ml",
    status: "Ongoing",
    summary: "Flood early warning and parametric flood triggers for Indian rivers, benchmarked on 239 real catchments (CAMELS-IND, 1980–2020) with every number on 2016–2020, which no model was tuned on.",
    details: [
      "A regional LSTM ensemble reaches median NSE 0.44, beating GR4J calibrated per catchment (+0.040) and the best of 47 conceptual models (+0.042); it ties LightGBM and the dataset's published LSTM.",
      "With whole river basins held out, the ungauged LSTM matches GR4J calibrated on the river's own 25 years of flow.",
      "The original single-width conformal intervals covered 6.5% of flood days; per-catchment, log-scale adaptive intervals cover 61.7% (87% overall).",
      "Replays the August 2018 Kerala floods through the full decision chain; a dashboard explores every report."
    ],
    metrics: [
      { label: "median NSE, 2016–2020", value: "0.44" },
      { label: "flood-day interval coverage", value: "6.5% → 62%" }
    ],
    tech: ["Python", "PyTorch", "LightGBM", "Conformal prediction"],
    github: "https://github.com/Amarnath10i/VARUNA",
    demo: null,
    screenshots: ["/projects/figures/varuna-kerala-2018.png"]
  },
  {
    id: "car-manual",
    title: "Car Manual Assistant",
    category: "Multilingual retrieval",
    group: "ml",
    status: "Completed",
    summary: "Ask a car owner's manual a question in English, Hindi or Telugu and get the pages that answer it, or an honest \"not covered\". Benchmarked on 273 queries with page-level gold labels.",
    details: [
      "Hybrid BM25 + multilingual-e5 retrieval; Hindi and Telugu questions are translated with NLLB-200 first (Hit@5 0.84 / 0.80, against 0.38 / 0.34 for untranslated hybrid search).",
      "Declines questions the manual does not answer (AUROC 0.91–0.95), with the threshold fitted on dev questions only.",
      "Repairs PDF headings set in a shifted font encoding, skips table-of-contents pages, and lists every remaining miss in an error analysis."
    ],
    metrics: [
      { label: "page Hit@5, en / hi / te", value: "0.92 / 0.84 / 0.80" },
      { label: "abstention AUROC", value: "0.91–0.95" }
    ],
    tech: ["Python", "sentence-transformers", "NLLB-200", "Streamlit"],
    github: "https://github.com/Amarnath10i/car_manual_assistant",
    demo: null,
    screenshots: ["/projects/figures/car-manual-retrieval.png"]
  },
  {
    id: "neural-operators",
    title: "Neural Operators",
    category: "Scientific ML",
    group: "ml",
    status: "Completed",
    summary: "A controlled benchmark of Fourier Neural Operators against DeepONet, CNN/U-Net and linear baselines on Burgers and Darcy flow, testing zero-shot super-resolution, data efficiency and speed against a solver.",
    details: [
      "Numerical solvers tested against exact solutions (heat-equation limit; second-order convergence to a manufactured solution).",
      "Burgers: FNO 0.39% and DeepONet 0.32% relative error. At the standard ν = 0.1 the solution decays to 1.6% of its initial norm by t = 1, so super-resolution cannot beat interpolation there.",
      "Darcy: run natively off its training grid the FNO doubles its error (1.09% → 2.05%), while resampling through the training grid keeps 1.10%; a sparse solver is about 6× faster on CPU.",
      "Trained FNOs exported to NumPy (matching PyTorch to 1e-8) power an in-browser demo next to the live solvers."
    ],
    metrics: [
      { label: "Burgers rel. L2 (FNO)", value: "0.39%" },
      { label: "Darcy rel. L2 (FNO)", value: "1.09%" }
    ],
    tech: ["PyTorch", "NumPy", "SciPy", "Streamlit"],
    github: "https://github.com/Amarnath10i/neural-operators",
    demo: null,
    screenshots: ["/projects/figures/neural-operators.png"]
  },
  {
    id: "lama-embodied",
    title: "LAMA-EmbodiedAI",
    category: "Embodied AI · Active learning",
    group: "ml",
    status: "Ongoing",
    summary: "An agent that learns what objects afford by imagining interactions, spending a limited budget only on the hypotheses it is most uncertain about, and keeping what verification confirms.",
    details: [
      "Imagine → select → verify → adjudicate → remember loop, with a Bayesian affordance bank keyed on online appearance concepts.",
      "15 seeds × 40 episodes against random, novelty and uncertainty-only baselines: best overall and primary recall, and 115 interactions per confirmed affordance against 185 for random.",
      "Reports where it loses: uncertainty-only selection finds more secondary affordances.",
      "NumPy warehouse with deliberately indistinguishable object pairs (2,600 interactions/s) and an Isaac Lab backend."
    ],
    metrics: [
      { label: "interactions per confirmed affordance", value: "115 vs 185" },
      { label: "tests", value: "210" }
    ],
    tech: ["Python", "NumPy", "Bayesian inference", "Isaac Lab"],
    github: "https://github.com/Amarnath10i/LAMA-EmbodiedAI",
    demo: null,
    screenshots: ["/projects/figures/lama-learning-curves.png"]
  },
  {
    id: "nuclear-glass",
    title: "Nuclear Glass Corrosion",
    category: "Scientific ML",
    group: "ml",
    status: "Early stage",
    summary: "Building blocks for predicting nuclear waste glass corrosion over geological time: dissolution physics, a staged alteration model and conformal prediction. The neural surrogates are not yet trained on laboratory data.",
    details: [
      "Transition-state-theory rate law (temperature, pH, silica saturation) and a closed-form three-stage alteration model, tested against their governing equations.",
      "Split and quantile conformal prediction, with coverage checked over repeated splits.",
      "PINO, DeepONet and Bayesian-NN implementations; no laboratory data is in the repository yet, so no accuracy is claimed."
    ],
    metrics: [
      { label: "time span explored", value: "100k years" },
      { label: "tests", value: "24" }
    ],
    tech: ["Python", "NumPy/SciPy", "PyTorch"],
    github: "https://github.com/Amarnath10i/nuclear-glass-corrosion",
    demo: null,
    screenshots: ["/projects/figures/nuclear-glass-alteration.png"]
  },
  {
    id: "adverse-weather",
    title: "Adverse-Weather Detection",
    category: "Computer vision",
    group: "ml",
    status: "Ongoing",
    summary: "Object detection that adapts to adverse weather: depth-aware synthetic fog, rain, snow, dust, sandstorm, haze, night and glare, failure maps over weather × severity, and targeted retraining.",
    details: [
      "Physically motivated generators for 9 conditions plus 10 time-of-day mixes; bounding-box labels survive every effect.",
      "Self-adaptation loop that oversamples weak weather cells and grows YOLOv8n to YOLOv8s on plateau, plus channel pruning.",
      "Runs end to end in a smoke-test configuration; the full BDD100K run is next."
    ],
    metrics: [
      { label: "weather conditions", value: "9 + 10 mixed" }
    ],
    tech: ["PyTorch", "YOLOv8", "OpenCV"],
    github: "https://github.com/Amarnath10i/adverse-weather-self-adaptive-detection",
    demo: null,
    screenshots: ["/projects/figures/adverse-weather-grid.jpg"]
  },
  {
    id: "repo-runner",
    title: "Repo Runner",
    category: "Developer tools",
    group: "software",
    status: "Completed",
    summary: "Paste a GitHub URL, get a live demo: Node, Python, Streamlit and notebooks run in the browser; everything else on an auto-installing runner engine.",
    details: [
      "In-browser execution with WebContainers (Node) and Pyodide (Python, Streamlit via stlite, notebooks).",
      "Hugging Face pipelines run on the visitor's GPU through Transformers.js and WebGPU.",
      "A runner engine that installs Java, Go, Rust, .NET, PHP and Python toolchains on first use."
    ],
    metrics: [],
    tech: ["React", "WebContainers", "Pyodide", "Node.js"],
    github: "https://github.com/Amarnath10i/repo-runner",
    demo: "https://github-runner-kappa.vercel.app",
    screenshots: ["/projects/screenshots/repo runner/Screenshot 2026-07-20 222346.png"]
  },
  {
    id: "smart-env",
    title: "Smart Environment System",
    category: "IoT platform",
    group: "software",
    status: "Completed",
    summary: "Environmental monitoring with live sensor feeds over Server-Sent Events, threshold alerts, role-based access and community features.",
    details: [
      "Real-time updates over Server-Sent Events.",
      "Roles for administrators, analysts, field technicians and the public.",
      "Sensor management, historical analysis and threshold alerts."
    ],
    metrics: [],
    tech: ["Next.js", "TypeScript", "Prisma"],
    github: "https://github.com/Amarnath10i/smart-environment-system",
    demo: null,
    screenshots: [
      "/projects/screenshots/smart environment system/Screenshot 2026-07-20 223207.png",
      "/projects/screenshots/smart environment system/Screenshot 2026-07-20 223238.png",
      "/projects/screenshots/smart environment system/Screenshot 2026-07-20 223256.png"
    ]
  },
  {
    id: "fides",
    title: "FIDES",
    category: "Document AI",
    group: "software",
    status: "Prototype",
    summary: "Screens shipment documents for small customs brokers: OCR, LLM field extraction, rule-based risk checks and a plain-language brief.",
    details: [
      "OCR for PDFs and images, and LLM extraction of shippers, consignees, vessels and amounts into JSON.",
      "Rule-based stand-ins for sanctions, vessel-tracking, pricing and address checks (not live data feeds yet).",
      "Tested so a failing model returns an error instead of a fabricated analysis."
    ],
    metrics: [],
    tech: ["FastAPI", "Gemini", "EasyOCR"],
    github: "https://github.com/Amarnath10i/FIDES",
    demo: null,
    screenshots: []
  },
  {
    id: "strada",
    title: "Strada",
    category: "Full-stack web",
    group: "software",
    status: "Completed",
    summary: "Car and bike marketplace for Indian cities: rent by the hour, day or kilometre, or buy with on-road prices and nearby showrooms.",
    details: [
      "Express + SQLite API with JWT auth and server-side checks against overlapping bookings.",
      "186 seeded vehicles across 17 cities, with buy and rent modes.",
      "Admin dashboard for the fleet, bookings and revenue."
    ],
    metrics: [],
    tech: ["React", "Express", "SQLite"],
    github: "https://github.com/Amarnath10i/Strada",
    demo: null,
    screenshots: []
  }
];
