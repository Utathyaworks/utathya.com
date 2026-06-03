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
 */

const publications = [

  // ── 2026 — Published ──────────────────────────────────────────────
  {
    id: "cbms2026-cma",
    title: "Cross-Modal Alignment for Clinical Report Generation from Multimodal Patient Data",
    authors: "Aich U.*, Roy R.*, Sarkar R.",
    venue: "IEEE CBMS",
    year: 2026,
    type: "conference",
    status: "published",
    abstract: "Cross-modal alignment framework for structured clinical report generation leveraging radiology images and clinical notes jointly in a low-annotation regime.",
    highlight: "First to jointly align radiology images and clinical notes for structured report generation with limited annotations.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: true
  },
  {
    id: "cvprw2026-lve",
    title: "Lightweight Visual Encoders for Low-Resource Medical Image Analysis",
    authors: "Aich U., Singh P.K., Sarkar R.",
    venue: "CVPRW",
    year: 2026,
    type: "workshop",
    status: "published",
    abstract: "Semi-supervised visual encoders for clinical imaging under label-scarce settings using low-rank adaptation and sparse attention.",
    highlight: "Competitive performance with under 5% labeled data via low-rank sparse encoders.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: true
  },
  {
    id: "icpr2026-vistac2",
    title: "VISTAC 2: Vision and Language for Document Understanding in Challenging Scenarios",
    authors: "Aich U., Ghosh S., Bhattacharya U., Saha T.",
    venue: "ICPR",
    year: 2026,
    type: "challenge",
    status: "published",
    abstract: "Challenge overview for VISTAC 2 — multilingual, multi-layout document understanding benchmark with 10K+ samples.",
    highlight: "New multilingual benchmark across 5 layout categories and 3 languages.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },
  {
    id: "icpr2026-rag",
    title: "RAG-Guided Knowledge Graph Reasoning for Document-Level Question Answering",
    authors: "Aich U.*, Mandal D., Sarkar R.",
    venue: "ICPR",
    year: 2026,
    type: "conference",
    status: "published",
    abstract: "RAG + KG traversal for multi-hop document QA, reducing hallucination by 34% over vanilla RAG.",
    highlight: "34% hallucination reduction on multi-hop document QA benchmarks.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },
  {
    id: "icme2026-echo",
    title: "ECHO: Evaluating Cardiac Health from Echocardiography",
    authors: "Aich U., Roy R., Kaplun D., Sarkar R.",
    venue: "ICME",
    year: 2026,
    type: "challenge",
    status: "published",
    abstract: "Challenge benchmarking AI for cardiac function from echocardiograms across diverse cohorts, with 5K+ expert-annotated clips.",
    highlight: "First large-scale echo challenge benchmark for EF and wall-motion classification.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },

  // ── 2026 — Under Review ───────────────────────────────────────────
  {
    id: "ur-mmrag",
    title: "Multimodal RAG with Cross-Modal Memory for Clinical Decision Support",
    authors: "Aich U.*, Roy R.*, Sarkar R., Singh P.K.",
    venue: "Under Review",
    year: 2026,
    type: "preprint",
    status: "under_review",
    abstract: "Cross-modal memory-augmented RAG for clinical decision support, fusing EHR, radiology images, and free-text notes.",
    highlight: "Cross-modal memory bank enables evidence-grounded retrieval across heterogeneous EHR modalities.",
    paper: null,
    arxiv: "#",
    code: null,
    project: null,
    featured: false
  },
  {
    id: "ur-hpm",
    title: "Hallucination Propagation Mitigation in Multi-Agent LLM Pipelines via Fidelity Anchoring",
    authors: "Mandal D., Aich U.*, Acharjee S.",
    venue: "Under Review",
    year: 2026,
    type: "preprint",
    status: "under_review",
    abstract: "Fidelity anchoring injects structured fact checkpoints into multi-agent LLM chains, reducing hallucination by 52%.",
    highlight: "52% reduction in hallucination propagation on HITL-Trans benchmark.",
    paper: null,
    arxiv: "#",
    code: null,
    project: null,
    featured: false
  },
  {
    id: "ur-slra",
    title: "Sparse Low-Rank Adaptation for Efficient Multimodal Foundation Model Fine-Tuning",
    authors: "Aich U., Sarkar R., Bhattacharya U.",
    venue: "Under Review",
    year: 2026,
    type: "preprint",
    status: "under_review",
    abstract: "Sparse and low-rank adapters for parameter-efficient fine-tuning of multimodal foundation models.",
    highlight: "94% fewer trainable parameters while matching full fine-tune performance on 4 benchmarks.",
    paper: null,
    arxiv: "#",
    code: null,
    project: null,
    featured: false
  },

  // ── 2025 ──────────────────────────────────────────────────────────
  {
    id: "aacl2025-whr",
    title: "Who Remembers What? Tracing Information Fidelity in Human\u2013AI Chains",
    authors: "Acharjee S.*, Aich U.*, Mandal D., Ali A.*",
    venue: "IJCNLP-AACL",
    year: 2025,
    type: "conference",
    status: "published",
    abstract: "Large multi-hop human\u2013LLM transmission dataset with new IDR/MPE/CHPI metrics for hallucination propagation across AI relay chains.",
    highlight: "LLMs lose ~40% information fidelity after 3 relay hops.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: true
  },
  {
    id: "miua2025-drasu",
    title: "DRASU-Net: Dual-Backbone and Residual Atrous Squeeze Module-Aided U-Net for Polyp Segmentation",
    authors: "Aich U.*, Roy R.*, Eroshkin A., Kaplun D., Sarkar R.",
    venue: "MIUA",
    year: 2025,
    type: "conference",
    status: "published",
    abstract: "Lightweight dual-backbone U-Net with Residual Atrous Squeeze modules for SOTA polyp segmentation at 10.7M parameters.",
    highlight: "Matches models 5\u00d7 larger on CVC-ClinicDB (Dice 0.937).",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: true
  },
  {
    id: "icdar2025-hilex",
    title: "HiLEx: Image-based Hierarchical Layout Extraction from Question Papers",
    authors: "Aich U., Ghosh S., Saha T.",
    venue: "ICDAR",
    year: 2025,
    type: "conference",
    status: "published",
    abstract: "First dataset and benchmark for question-paper layout extraction across multi-level hierarchical layouts.",
    highlight: "First 3-level hierarchy annotation (section \u203a question \u203a sub-question).",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },
  {
    id: "sipaim2025-fsts",
    title: "FSTS-Net: Feature-Mixing Aided Semi-Supervised Teacher\u2013Student Network for Polyp Segmentation",
    authors: "Roy R.*, Aich U.*, Kaplun D., Sarkar R.",
    venue: "SIPAIM",
    year: 2025,
    type: "conference",
    status: "published",
    abstract: "Semi-supervised teacher\u2013student with feature-space mixing and EMA pseudo-labeling for polyp segmentation in low-label regimes.",
    highlight: "With 20% labels, outperforms fully-supervised baseline (Kvasir Dice 0.921 vs. 0.893).",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },
  {
    id: "scirep2025-eeg",
    title: "An Image-Encoding Based Deep Learning Model for Schizophrenia Detection using EEG Signals",
    authors: "Aich U.*, Saha A.*, Singh P.K.",
    venue: "Scientific Reports (Nature Portfolio)",
    year: 2025,
    type: "journal",
    status: "published",
    abstract: "EEG-based schizophrenia detection with time-frequency encodings and deep feature optimization on multiple public EEG datasets.",
    highlight: "96.3% accuracy \u2014 highest reported on the SZ dataset.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },

  // ── 2024 ──────────────────────────────────────────────────────────
  {
    id: "sncs2024-pose",
    title: "Optimized Feature Selection for Human Pose Classification using Ensemble Methods",
    authors: "Aich U., Dhibar S.",
    venue: "SN Computer Science (Springer)",
    year: 2024,
    type: "journal",
    status: "published",
    abstract: "Feature-optimized XGBoost and SVM on BlazePose keypoint representations with comprehensive ablation over feature subsets.",
    highlight: "18/33 keypoints give 97.1% accuracy, halving compute cost for real-time deployment.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },
  {
    id: "bmvcw2024-entropy",
    title: "Entropy-Controlled Text Generation for Explainability and Human-Likeness in LLMs",
    authors: "Aich U., Mandal D.",
    venue: "BMVC Workshop",
    year: 2024,
    type: "workshop",
    status: "published",
    abstract: "Entropy-controlled decoding and lexical-variance modeling to reduce AI-detectability in generated text.",
    highlight: "AI-detection signal drops from 92% to 18% without coherence loss.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: true
  },
  {
    id: "icvgip2024-geosam",
    title: "GEO-SAM: Segment Anything for Automated Agricultural Field Boundary Detection",
    authors: "Aich U., Sarkar R.",
    venue: "ICVGIP",
    year: 2024,
    type: "conference",
    status: "published",
    abstract: "SAM adapted for geospatial remote sensing enabling automated agricultural field-boundary detection at scale.",
    highlight: "First SAM-adapted pipeline for large-scale geospatial field-boundary analytics.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },
  {
    id: "compsac2024-sql",
    title: "Schema-Aware Text-to-SQL with Knowledge Graph Augmentation for Enterprise Analytics",
    authors: "Aich U.",
    venue: "COMPSAC",
    year: 2024,
    type: "conference",
    status: "published",
    abstract: "Schema-aware LLM + Neo4j KG for Text-to-SQL reasoning in enterprise data systems.",
    highlight: "60% faster resolution, 35% higher accuracy over vanilla LLM baselines.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },
  {
    id: "eccvw2024-gi",
    title: "Semi-Supervised Contrastive Learning for Gastrointestinal Lesion Segmentation",
    authors: "Aich U.*, Roy R.*, Sarkar R.",
    venue: "MedIA Workshop @ ECCV",
    year: 2024,
    type: "workshop",
    status: "published",
    abstract: "Boundary-aware pseudo-labels for semi-supervised contrastive GI lesion segmentation.",
    highlight: "Boundary-aware refinement improves lesion boundary precision by 12%.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },

  // ── 2023 ──────────────────────────────────────────────────────────
  {
    id: "icdarw2023-doc",
    title: "Hierarchical Feature Fusion for Printed and Handwritten Document Layout Analysis",
    authors: "Aich U., Ghosh S., Bhattacharya U.",
    venue: "ICDAR Workshop",
    year: 2023,
    type: "workshop",
    status: "published",
    abstract: "Hierarchical feature fusion for joint printed/handwritten document layout analysis, establishing baselines for question-paper understanding.",
    highlight: "CNN+Transformer fusion improves layout F1 by 8.3% on mixed documents.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },
  {
    id: "cbms2023-eeg",
    title: "Time-Frequency EEG Encoding with Deep Feature Selection for Neurological Disorder Classification",
    authors: "Aich U.*, Saha A.*, Singh P.K.",
    venue: "IEEE CBMS",
    year: 2023,
    type: "conference",
    status: "published",
    abstract: "Time-frequency EEG encoding with deep feature selection for neurological disorder classification.",
    highlight: "94.2% schizophrenia detection via spectrogram + wavelet + attention-guided selection.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  },
  {
    id: "cvip2023-pose",
    title: "BlazePose Keypoint Optimization for Real-Time Human Pose Classification",
    authors: "Aich U., Dhibar S.",
    venue: "CVIP",
    year: 2023,
    type: "conference",
    status: "published",
    abstract: "Optimized XGBoost and SVM with BlazePose keypoints and SHAP-based subset ablation for real-time pose classification.",
    highlight: "SHAP-guided selection reduces latency by 38% with under 1% accuracy drop.",
    paper: "#",
    arxiv: null,
    code: null,
    project: null,
    featured: false
  }

];
