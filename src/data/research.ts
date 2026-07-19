export const research = [
  {
    id: "spectra",
    title: "SPECTRA+",
    category: "Deep Learning",
    description: "Geometric Feature Orthogonal Decomposition for CNN calibration — a training framework that splits feature space into a discriminative subspace and an uncertainty subspace.",
    details: [
      "Gram-Schmidt initialization plus a Frobenius orthogonality penalty to keep the two subspaces genuinely independent.",
      "Combined with JSR, AHTS, CCKD, and TTSE for calibration and accuracy gains together."
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
    category: "Computer Vision",
    description: "Linear-probed all 54 residual blocks of a ResNet-110 on CIFAR-100 to trace how miscalibration develops layer by layer, finding a consistent three-phase lifecycle.",
    details: [
      "Early layers: ECE 0.01–0.05 — well calibrated by default.",
      "Middle layers: ECE peaks near 0.38 — confidence runs far ahead of accuracy.",
      "Late layers: a 'confidence correction phase' pulls ECE back down to ~0.056."
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
    description: "A self-adaptive object detection framework optimized for challenging and adverse weather conditions. Designed to maintain high accuracy when visual data is compromised by rain, fog, or low light.",
    details: [
      "Dynamic adaptation to varying illumination and weather elements.",
      "Robust feature extraction mechanisms for degraded visual inputs."
    ],
    metrics: [
      { label: "Domain", value: "CV" }
    ],
    github: "https://github.com/Amarnath10i/adverse-weather-self-adaptive-detection"
  }
];
