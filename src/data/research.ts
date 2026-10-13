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
    category: "Scientific ML · Hydrology",
    status: "Ongoing",
    description: "Flood early warning and parametric flood triggers for Indian rivers, benchmarked on 239 real catchments (CAMELS-IND, 1980–2020) with every number on 2016–2020, which no model was tuned on.",
    details: [
      "A regional LSTM ensemble reaches median NSE 0.44, beating GR4J calibrated per catchment (+0.040) and the best of 47 conceptual models (+0.042); it ties LightGBM and the dataset's published LSTM.",
      "With whole river basins held out, the ungauged LSTM matches GR4J calibrated on the river's own 25 years of flow.",
      "The original single-width conformal intervals covered 6.5% of flood days; per-catchment, log-scale adaptive intervals cover 61.7% (87% overall).",
      "Replays the August 2018 Kerala floods through the full decision chain; the live pipeline now records why it cannot decide instead of firing on untrained inputs."
    ],
    metrics: [
      { label: "Catchments", value: "239" },
      { label: "Median NSE (2016–20)", value: "0.44" }
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
    description: "Building blocks for predicting nuclear waste glass corrosion over geological time: dissolution physics, a staged alteration model and conformal prediction, with the neural surrogates still to be trained on laboratory data.",
    details: [
      "Transition-state-theory rate law (temperature, pH, silica saturation) and a closed-form three-stage alteration model, tested against their governing equations.",
      "Split and quantile conformal prediction, with coverage checked over repeated splits.",
      "PINO, DeepONet and Bayesian-NN implementations; no laboratory data is in the repository yet, so no accuracy is claimed."
    ],
    metrics: [
      { label: "Time span explored", value: "100k yr" },
      { label: "Status", value: "Early stage" }
    ],
    github: "https://github.com/Amarnath10i/nuclear-glass-corrosion"
  },
  {
    id: "neural-operators",
    title: "Neural Operators: What They Learn",
    category: "Scientific ML",
    status: "Completed",
    description: "A controlled benchmark of Fourier Neural Operators against DeepONet, CNN/U-Net and linear baselines on Burgers and Darcy flow, testing the usual claims: zero-shot super-resolution, data efficiency and speed against a solver.",
    details: [
      "Numerical solvers tested against exact solutions (heat-equation limit, second-order manufactured-solution convergence).",
      "Burgers: FNO 0.39% and DeepONet 0.32% relative error; running the FNO on a 4× finer grid is exactly as good as interpolating its coarse prediction.",
      "A CNN run on a finer grid degrades from 17% to 72% error, which is what discretisation invariance actually protects against.",
      "Trained FNOs exported to NumPy (matching PyTorch to 1e-8) power an in-browser demo next to the live solvers."
    ],
    metrics: [
      { label: "Burgers rel. L2 (FNO)", value: "0.39%" },
      { label: "Models compared", value: "5" }
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
    status: "Ongoing",
    description: "Object detection that adapts to adverse weather: depth-aware synthetic fog, rain, snow, dust, sandstorm, haze, night and glare, failure maps over weather × severity, and targeted retraining.",
    details: [
      "Physically motivated generators for 9 conditions plus 10 time-of-day mixes; bounding-box labels survive every effect.",
      "Self-adaptation loop that oversamples weak weather cells and grows YOLOv8n to YOLOv8s on plateau, plus channel pruning.",
      "Runs end to end in a smoke-test configuration; the full BDD100K run is next."
    ],
    metrics: [
      { label: "Weather conditions", value: "9 + 10 mixed" }
    ],
    github: "https://github.com/Amarnath10i/adverse-weather-self-adaptive-detection"
  }
];
