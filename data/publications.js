/**
 * publications.js — Utathya Aich Academic Portfolio
 *
 * All publication sections on the website are generated from this array.
 * To add a new publication, append an object following the schema below.
 *
 * Fields:
 *   id        – unique kebab-case string
 *   title     – full paper title
 *   authors   – author string ("Aich U." is bolded automatically)
 *   venue     – conference / journal abbreviation
 *   year      – publication year (number)
 *   type      – "conference" | "workshop" | "journal" | "challenge" | "preprint"
 *   status    – "published" | "under_review"
 *   abstract  – one-paragraph abstract (optional, shown on year pages)
 *   highlight – one-line key contribution (optional)
 *   paper     – DOI / PDF URL, or null
 *   arxiv     – arXiv URL, or null
 *   code      – GitHub URL, or null
 *   project   – project-page URL, or null
 *   featured  – true to include in the Featured Publications section
 *
 * Source of truth: Utathya_Aich_Resume_Sept.pdf. Entries below are limited
 * to papers actually listed there — no invented abstracts or metrics.
 * "paper" links are placeholders ("#") until real DOIs/URLs are supplied.
 */

const publications = [

  // ── 2026 ──────────────────────────────────────────────────────────
  {
    id: "emnlp2026-tempo",
    title: "TEMPO: Temporally-grounded Multi-task Post-training for Large Audio-Language Models",
    authors: "Kulkarni A., Jayakumar K., Ghosh S., Aich U., Duraiswami R., Manocha D.",
    venue: "EMNLP 2026 (Main, Oral)",
    year: 2026,
    type: "conference",
    status: "published",
    abstract: "Multi-task post-training approach for large audio-language models that grounds outputs in temporal structure.",
    highlight: "Accepted as an oral presentation at EMNLP 2026 Main Conference.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: true
  },
  {
    id: "iconip2026-ciml",
    title: "CIML: Coupled Imbalance and Missingness Learning for Multimodal Skin Lesion Classification",
    authors: "Aich U., Bhattacharya A., Mandal S., Sinitca A., Kaplun D., Sarkar R.",
    venue: "ICONIP",
    year: 2026,
    type: "conference",
    status: "published",
    abstract: "Joint framework addressing class imbalance and missing modalities in multimodal skin lesion classification.",
    highlight: "Jointly tackles class imbalance and modality missingness for skin lesion classification.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: true
  },
  {
    id: "cvprw2026-fammatch",
    title: "FAM-Match: Fractal-Aligned Manifold Matching with Adaptive Routing Framework for Semi-Supervised Medical Image Classification",
    authors: "Gayen S., Aich U., Minenkov D., Kaplun D., Sarkar R.",
    venue: "CVPRW",
    year: 2026,
    type: "workshop",
    status: "published",
    abstract: "Semi-supervised medical image classification via fractal-aligned manifold matching with adaptive sample routing.",
    highlight: "Adaptive routing framework for semi-supervised medical image classification.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: true
  },
  {
    id: "cbms2026-hcafnet",
    title: "HCAF-Net: Hierarchical Cross-Attention Fusion for Retinal Disease Classification",
    authors: "Aich U.*, Bhanja H.*, Soto O.R., Oliva D., Ordaz L.F.R., Martinez S.Z., Sarkar R.",
    venue: "IEEE CBMS",
    year: 2026,
    type: "conference",
    status: "published",
    abstract: "Hierarchical cross-attention fusion architecture for retinal disease classification from fundus imaging.",
    highlight: "Hierarchical cross-attention fusion for retinal disease classification.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: true
  },
  {
    id: "icpr2026-qsfl",
    title: "QSFL: A Quasi-Sequential Federated Learning Framework with Performance-aware Aggregation",
    authors: "Aich U.*, Neogi S.*, Sengupta A.*, Bhanja H.*, Gulvanskii V., Kaplun D., Sarkar R.",
    venue: "ICPR",
    year: 2026,
    type: "conference",
    status: "published",
    abstract: "Federated learning framework using quasi-sequential client updates with performance-aware aggregation.",
    highlight: "Performance-aware aggregation for quasi-sequential federated learning.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },
  {
    id: "icpr2026-lifganet",
    title: "LiFGANet: Lightweight Frequency and Gradient Aware Network for Robust Image Classification",
    authors: "Banerjee J.*, Aich U.*, Bhattacharya U.",
    venue: "ICPR",
    year: 2026,
    type: "conference",
    status: "published",
    abstract: "Lightweight network combining frequency- and gradient-aware features for robust image classification.",
    highlight: "Lightweight frequency- and gradient-aware design for robust classification.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },
  {
    id: "kbs2026-damm",
    title: "DAMM: Dynamic Modality Aware Weighted Embeddings Fusion for Multimodal Meme Detection",
    authors: "Imam M.*, Aich U.*, Sarkar R.",
    venue: "Knowledge-Based Systems",
    year: 2026,
    type: "journal",
    status: "published",
    abstract: "Dynamic modality-aware weighting of embeddings for fusing text and image signals in meme detection.",
    highlight: "Dynamic, modality-aware embedding fusion for multimodal meme detection.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },

  // ── 2025 ──────────────────────────────────────────────────────────
  {
    id: "aacl2025-whr",
    title: "Who Remembers What? Tracing Information Fidelity in Human–AI Chains",
    authors: "Acharjee S.*, Aich U.*, Mandal D., Ali A.*",
    venue: "IJCNLP-AACL",
    year: 2025,
    type: "conference",
    status: "published",
    abstract: "Study of information fidelity as content is relayed through chains of human and AI participants.",
    highlight: "Traces information fidelity across human–AI relay chains.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: true
  },
  {
    id: "icdar2025-hilex",
    title: "HiLEx: Image-based Hierarchical Layout Extraction from Question Papers",
    authors: "Aich U., Chakraborty S., Sadhukhan D., Ghosh S., Saha T.",
    venue: "ICDAR",
    year: 2025,
    type: "conference",
    status: "published",
    abstract: "Image-based extraction of hierarchical layout structure from scanned question papers.",
    highlight: "Hierarchical layout extraction for question-paper images.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: true
  },
  {
    id: "miua2025-drasu",
    title: "DRASU-Net: Dual-Backbone Residual Atrous Squeeze U-Net for Polyp Segmentation",
    authors: "Aich U.*, Roy R.*, Eroshkin A., Kaplun D., Sarkar R.",
    venue: "MIUA",
    year: 2025,
    type: "conference",
    status: "published",
    abstract: "Dual-backbone U-Net with residual atrous squeeze modules for polyp segmentation.",
    highlight: "Dual-backbone, residual atrous squeeze U-Net for polyp segmentation.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: true
  },
  {
    id: "sipaim2025-fsts",
    title: "FSTS-Net: Feature-Mixing Semi-Supervised Teacher–Student Network for Polyp Segmentation",
    authors: "Roy R.*, Aich U.*, Kaplun D., Sarkar R.",
    venue: "SIPAIM",
    year: 2025,
    type: "conference",
    status: "published",
    abstract: "Semi-supervised teacher–student network with feature mixing for polyp segmentation.",
    highlight: "Feature-mixing teacher–student training for semi-supervised polyp segmentation.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },
  {
    id: "scirep2025-eeg",
    title: "Schizophrenia Detection from Electroencephalogram Signals using Image Encoding and Wrapper-Based Deep Feature Selection Approach",
    authors: "Aich U.*, Saha A.*, Singh P.K.",
    venue: "Scientific Reports",
    year: 2025,
    type: "journal",
    status: "published",
    abstract: "EEG-based schizophrenia detection using image-encoded signals and wrapper-based deep feature selection.",
    highlight: "Image-encoding and wrapper-based feature selection for EEG-based schizophrenia detection.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },

  // ── 2024 ──────────────────────────────────────────────────────────
  {
    id: "sncs2024-braintumor",
    title: "Efficient Brain Tumor Classification Using Filter-Based Deep Feature Selection Methodology",
    authors: "Kar S.*, Aich U.*, Singh P.K.",
    venue: "SN Computer Science",
    year: 2024,
    type: "journal",
    status: "published",
    abstract: "Filter-based deep feature selection methodology for efficient brain tumor classification.",
    highlight: "Filter-based deep feature selection for efficient brain tumor classification.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  }

];
