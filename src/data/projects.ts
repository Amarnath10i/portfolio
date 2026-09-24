export const projects = [
  {
    id: "atom",
    title: "Atom (LAMA)",
    category: "AI Systems",
    description: "Layered Atomic Memory Architecture — an AI tutor with a nucleus/atom memory graph and a forgetting-curve learning OS.",
    details: [
      "Hierarchical long-term memory with dynamic semantic-graph bonding between memory 'atoms'.",
      "FAISS HNSW retrieval across episodic, semantic, and procedural memory stores.",
      "Token-budget-aware context injection, agentic tools and a forgetting-curve (spaced-repetition) learning OS."
    ],
    tech: ["TypeScript", "FAISS", "LLM Agents"],
    github: "https://github.com/Amarnath10i/Atom",
    demo: null,
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
    id: "repo-runner",
    title: "Repo Runner",
    category: "Web Platform",
    description: "Paste a GitHub URL → get a live demo. Auto-detects the stack and runs it: Node, Next.js, Python, static sites, monorepos — in-browser (WebContainers) or local backend.",
    details: [
      "Built with Next.js and WebContainers API for in-browser execution.",
      "Automated dependency installation and server initialization.",
      "Seamless GitHub API integration for repository cloning."
    ],
    tech: ["Next.js", "WebContainers", "GitHub API"],
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
    description: "An intelligent IoT-based environmental monitoring and management platform built with Next.js and TypeScript.",
    details: [
      "Real-time sensor data visualization.",
      "Automated alert systems for anomalous readings.",
      "Secure user authentication and device management."
    ],
    tech: ["Next.js", "TypeScript", "IoT"],
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
    category: "AI Compliance",
    description: "Federated Intelligence for Document & Entity Screening — upload trade documents and get a plain-language fraud-risk brief in about a minute, built to help small customs brokers screen shipments before filing.",
    details: [
      "OCR ingestion of PDFs and images, with LLM-based extraction of shippers, consignees, vessels, ports and invoice amounts.",
      "Five enrichment checks: sanctions screening, AIS vessel tracking, price benchmarking, address validation and corporate-identity verification.",
      "Federated risk fingerprinting across brokers, tamper detection, a 0–100 risk score and an explainable report with a Q&A assistant."
    ],
    tech: ["FastAPI", "Gemini", "EasyOCR"],
    github: "https://github.com/Amarnath10i/FIDES",
    demo: null,
    image: "",
    screenshots: [],
    featured: false
  },
  {
    id: "car-manual",
    title: "Car Manual Assistant",
    category: "Multilingual RAG",
    description: "A retrieval-augmented QA chatbot over the Maruti Suzuki Dzire owner's manual that answers questions in English, Hindi and Telugu.",
    details: [
      "PDF parsing and chunking of the owner's manual with PyMuPDF.",
      "TF-IDF retrieval with cosine similarity to surface the most relevant manual passages.",
      "Query and answer translation (Google Translate) for Hindi and Telugu speakers."
    ],
    tech: ["Python", "Streamlit", "RAG"],
    github: "https://github.com/Amarnath10i/car_manual_assistant",
    demo: null,
    image: "",
    screenshots: [],
    featured: false
  },
  {
    id: "strada",
    title: "Strada",
    category: "Web App",
    description: "A modern JavaScript web platform focused on smooth user interactions and a clean, component-driven architecture.",
    details: [
      "Component-driven architecture for scalable UI development.",
      "Optimized for performance and accessibility.",
      "Custom animation framework."
    ],
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Amarnath10i/Strada",
    demo: null,
    image: "/projects/strada.png",
    screenshots: [],
    featured: false
  },
  {
    id: "cinematime",
    title: "CinemaTime",
    category: "NLP Recommender",
    description: "Movie recommendation system using Sentence-BERT (SBERT) embeddings for semantic search and content-based recommendations over TMDB metadata.",
    details: [
      "Semantic search capabilities using SBERT embeddings.",
      "Content-based filtering leveraging TMDB dataset.",
      "Responsive frontend interface for browsing recommendations."
    ],
    tech: ["Python", "SBERT", "TMDB API"],
    github: "https://github.com/Amarnath10i/CinemaTime",
    demo: "https://cinema-time-black.vercel.app",
    image: "/projects/cinema.png",
    screenshots: [
      "/projects/screenshots/cinema time/Screenshot 2026-07-20 222646.png",
      "/projects/screenshots/cinema time/Screenshot 2026-07-20 222853.png",
      "/projects/screenshots/cinema time/Screenshot 2026-07-20 223033.png"
    ],
    featured: false
  }
];
