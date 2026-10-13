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
  }
];
