export type ResearchItem = {
  id: string;
  title: string;
  category: string;
  status: "Ongoing" | "Completed";
  description: string;
  details: string[];
  metrics: { label: string; value: string }[];
  github: string | null;
};

export const research: ResearchItem[] = [
  {
    id: "hsi-fusion",
    title: "Identifiable Hyperspectral–Multispectral Fusion",
    category: "Remote Sensing",
    status: "Ongoing",
    description: "A unified theoretical and experimental framework for HSI–MSI image fusion that asks what a fusion network can actually recover from its observations — and what it merely invents.",
    details: [
      "Admissible-ambiguity theory: an exact range/null-space split of the fusion operator with a hallucination metric computable from observations alone.",
      "Identifiable-rank, phase-transition and sensor-shift results (five theorems) explaining when fusion is recoverable and why zero-shot transfer degrades.",
      "KrylovNet — an unrolled GMRES solver with a spectral-graph preconditioner in ~2.3k parameters; NullFusion — a network that only fills the null space, so it cannot contradict the measurements.",
      "Validated on Houston and Chikusei, including cross-sensor zero-shot experiments under a single reproducible protocol."
    ],
    metrics: [
      { label: "KrylovNet Parameters", value: "2.3k" },
      { label: "Theorems", value: "5" }
    ],
    github: "https://github.com/Amarnath10i/Research-On-Hyperspectral-ImageFussion"
  },
  {
    id: "daxnet",
    title: "DAXNet — Polyp Segmentation",
    category: "Medical Imaging",
    status: "Ongoing",
    description: "An edge-aware geodesic axial state-space network for colonoscopy polyp segmentation, built as a successor study to BAMPolyp (ICCVW 2025).",
    details: [
      "Exact bidirectional edge-aware axial state-space scanning at three encoder strides on an EfficientNet-B0 backbone.",
      "Evaluated on Kvasir-SEG, CVC-ClinicDB, CVC-ColonDB and PolypGen under both the original and the standard PraNet protocols.",
      "Reproducibility audit of the baseline, with held-out test-set evaluation and leakage-free data splits."
    ],
    metrics: [
      { label: "Parameters", value: "6.15M" },
      { label: "Benchmarks", value: "4" }
    ],
    github: null
  },
  {
    id: "varuna",
    title: "VARUNA",
    category: "Scientific ML",
    status: "Ongoing",
    description: "An uncertainty-aware neural-operator flood early-warning system that turns public satellite and reanalysis data into calibrated, auditable flood alerts and parametric-insurance triggers for monsoon-prone South Asia.",
    details: [
      "RainCast: a Fourier Neural Operator with a per-wavenumber log-variance branch, trained on closed-form CRPS and spectral Gaussian NLL.",
      "HydroNet: a graph neural ODE that routes rainfall through the river network, wrapped in split-conformal prediction intervals at every lead time.",
      "FloodMap: a cross-modal SAR↔optical masked autoencoder that learns flood maps from fewer than 50 labelled masks.",
      "Live data clients for NOAA GFS, IMD, GloFAS, Sentinel-1/2 and ERA5 feeding an end-to-end forecast pipeline."
    ],
    metrics: [
      { label: "Conformal Coverage", value: "90%" },
      { label: "Live Data Feeds", value: "5" }
    ],
    github: "https://github.com/Amarnath10i/VARUNA"
  },
  {
    id: "lama-embodied",
    title: "LAMA — Embodied Affordance Learning",
    category: "Embodied AI",
    status: "Ongoing",
    description: "Lifelong affordance learning through counterfactual verification: an agent imagines interactions in a world model, spends its limited real-interaction budget only on the hypotheses it is most uncertain about, and keeps only what verification confirms.",
    details: [
      "Imagine → select → verify → adjudicate → remember loop, with selection that separates epistemic uncertainty from irreducible randomness.",
      "Bayesian affordance bank keyed on online appearance concepts, plus a backward-chaining planner that acts only on confirmed knowledge.",
      "Fast NumPy warehouse environment with hidden mass and deliberately indistinguishable object pairs, and a matching Isaac Lab (PhysX) backend."
    ],
    metrics: [
      { label: "Interactions / sec", value: "2.6k" },
      { label: "Action Verbs", value: "12" }
    ],
    github: "https://github.com/Amarnath10i/LAMA-EmbodiedAI"
  },
  {
    id: "nuclear-glass",
    title: "Nuclear Waste Glass Corrosion",
    category: "Scientific ML",
    status: "Ongoing",
    description: "Physics-informed, multi-scale machine-learning surrogates that predict the long-term corrosion of vitrified nuclear waste glass over a 100,000-year repository horizon.",
    details: [
      "Physics-informed neural operators (PINO) and DeepONets penalised by transition-state-theory rate laws and reactive-transport PDE residuals.",
      "Bridges atomistic (ReaxFF), gel-layer mesoscale and continuum reactive-transport scales.",
      "Bayesian neural networks and split conformal prediction to separate epistemic and aleatoric uncertainty for regulatory safety cases."
    ],
    metrics: [
      { label: "Prediction Horizon", value: "100k yr" },
      { label: "Physical Scales", value: "3" }
    ],
    github: "https://github.com/Amarnath10i/nuclear-glass-corrosion"
  },
  {
    id: "neural-operators",
    title: "Neural Operators for PDEs",
    category: "Scientific ML",
    status: "Ongoing",
    description: "A research framework for operator learning on parametric PDEs — Fourier, DeepONet and graph neural operators with spectral solvers, zero-shot super-resolution evaluation and generalisation theory.",
    details: [
      "FNO 1D/2D/3D, factorised FNO, wavelet and hybrid variants; DeepONet, stacked and POD-DeepONet; graph, multipole and low-rank neural operators.",
      "Spectral solvers for Burgers, Darcy flow and 2D/3D Navier–Stokes benchmarks.",
      "Mixed-precision, distributed training with spectral losses and physics-aware metrics (energy, enstrophy, zero-shot resolution transfer)."
    ],
    metrics: [
      { label: "Operator Families", value: "3" },
      { label: "PDE Benchmarks", value: "3" }
    ],
    github: "https://github.com/Amarnath10i/neural-operators"
  },
  {
    id: "spectra",
    title: "SPECTRA+",
    category: "Deep Learning",
    status: "Completed",
    description: "Geometric Feature Orthogonal Decomposition for CNN calibration — a training framework that splits feature space into a discriminative subspace and an uncertainty subspace.",
    details: [
      "Gram-Schmidt initialisation plus a Frobenius orthogonality penalty to keep the two subspaces genuinely independent.",
      "Combined with JSR, AHTS, CCKD and TTSE to improve calibration and accuracy together."
    ],
    metrics: [
      { label: "Accuracy (CIFAR-100)", value: "85.54%" },
      { label: "Expected Calibration Error", value: "0.0061" }
    ],
    github: "https://github.com/Amarnath10i/spectra-plus-research"
  },
  {
    id: "layer-calib",
    title: "Layer-wise Calibration in CNNs",
    category: "Deep Learning",
    status: "Completed",
    description: "Linear-probed all 54 residual blocks of a ResNet-110 on CIFAR-100 to trace how miscalibration develops layer by layer, revealing a consistent three-phase lifecycle.",
    details: [
      "Early layers: ECE 0.01–0.05 — well calibrated by default.",
      "Middle layers: ECE peaks near 0.38 — confidence runs far ahead of accuracy.",
      "Late layers: a 'confidence correction' phase pulls ECE back down to ~0.056."
    ],
    metrics: [
      { label: "ECE Reduction", value: "83%" },
      { label: "Residual Blocks Probed", value: "54" }
    ],
    github: "https://github.com/Amarnath10i/Calibration-in-CNN"
  },
  {
    id: "weather",
    title: "Adverse Weather Self-Adaptive Detection",
    category: "Computer Vision",
    status: "Completed",
    description: "A self-adaptive object-detection framework that maintains accuracy when visual input is degraded by rain, fog or low light.",
    details: [
      "Dynamic adaptation to varying illumination and weather conditions.",
      "Robust feature extraction for degraded visual inputs."
    ],
    metrics: [
      { label: "Weather Conditions (Rain, Fog, Night)", value: "3" }
    ],
    github: "https://github.com/Amarnath10i/adverse-weather-self-adaptive-detection"
  }
];
