export const personal = {
  name: "Shubham Naik",
  title: "Senior AI Engineer",
  tagline: "Building agentic AI systems at enterprise scale.",
  email: "shubhamnaik321@gmail.com",
  linkedin: "https://linkedin.com/in/shubham-rajan-naik",
  github: "https://github.com/naikshubham14",
  resumeUrl: "/resume.pdf",
  bio: "Senior AI Engineer at SAP, architecting the AI backbone of Joule — SAP's flagship enterprise copilot. Specializing in multi-agent orchestration, RAG pipelines, and LLM fine-tuning at production scale. 4+ years moving AI from prototype to production in complex, high-stakes environments.",
}

export const experience = [
  {
    company: "SAP",
    role: "Senior AI Engineer",
    period: "March 2025 — Present",
    location: "Bengaluru, KA",
    bullets: [
      "Engineered core components for Joule, SAP's flagship agentic copilot — implementing RAG pipelines with LangChain and LlamaIndex over Neo4j graph databases for a unified, context-aware experience across the SAP ecosystem.",
      "Built an end-to-end code generation pipeline for Joule for Developer (J4D) using FastAPI on SAP BTP and Azure, accelerating legacy ECC-to-S/4HANA migration and reducing migration timelines by 35%.",
      "Executed parameter-efficient fine-tuning (PEFT/QLoRA) on open-source LLMs (Codestral, StarCoder) on curated domain-specific datasets for text-to-code and code-to-code generation.",
      "Developed a benchmarking framework integrating MLflow and custom Python scripts to validate code quality via dynamic unit tests, static analysis, and LLM-as-a-judge evaluation — improving feature shipping velocity by 15%.",
    ]
  },
  {
    company: "Accenture",
    role: "AI/ML Engineer",
    period: "June 2021 — March 2025",
    location: "Bengaluru, KA",
    bullets: [
      "Engineered a scalable pipeline to convert enterprise website content into an indexed vector database, powering a RAG-enabled chat agent that reduced user search time by 15% and improved retention.",
      "Implemented a content approval system for a pharmaceutical client, reducing per-page approval time from 4 hours to 2.5 hours and accelerating campaign go-live timelines.",
      "Built a risk assessment model predicting at-risk deliverables, increasing timebound objective delivery by 25% across remote-working projects.",
      "Spearheaded cross-functional collaboration across 12 projects to develop standardized GenAI runbooks, enhancing work efficiency by 20% and maintaining data integrity across 600+ personnel.",
      "Deployed 15+ generative AI systems with agentic architecture using Llama-2/3, Mistral, and GPT-3.5/4 augmented with vector databases via LangChain.",
    ]
  },
]

export const projects = [
  {
    name: "Resumagic",
    tagline: "AI-powered resume optimization engine",
    description: "One-stop job application suite — job fit analysis, resume review, keyword optimization, and custom cover letter generation. 300+ unique users.",
    stack: ["LangChain", "Llama 3.1", "Streamlit", "Python", "NLP"],
    github: "https://github.com/naikshubham14/resume_bot",
    live: "https://resumagic-bot.streamlit.app/",
  },
  {
    name: "RapidML Toolkit",
    tagline: "Zero-boilerplate ML experimentation suite",
    description: "Full ML lifecycle tooling — EDA, algorithm selection, hyperparameter tuning, and multi-metric model evaluation for rapid prototyping.",
    stack: ["Scikit-Learn", "Pandas", "NumPy", "Streamlit", "Plotly", "Python"],
    github: "https://github.com/naikshubham14/AMLToolkit-landing",
    live: "https://naikshubham14.github.io/AMLToolkit-landing/",
  },
  {
    name: "Document Bot",
    tagline: "RAG-based document Q&A system",
    description: "Chat with any document using a RAG pipeline — semantic chunking, vector retrieval, and LLM-powered question answering.",
    stack: ["OpenAI", "LangChain", "Vector DB", "Streamlit", "Python"],
    github: "https://github.com/naikshubham14/RAG_BOT",
    live: "https://document-rag-bot.streamlit.app/",
  },
  {
    name: "AgriSmart",
    tagline: "Precision agriculture decision engine",
    description: "Built for Maharashtra's Agricultural Department — recommends crops, fertilizers, and assesses crop health using ML models and real-time weather data.",
    stack: ["Python", "Random Forest", "XGBoost", "Flask", "OpenWeatherMap API"],
    github: "https://github.com/naikshubham14/AgriSmart",
    live: "https://agrismart.onrender.com/",
  },
]

export const education = [
  {
    institution: "K.J. Somaiya Institute of Engineering",
    degree: "Bachelor of Engineering — Computer Engineering",
    period: "2017 — 2021",
    grade: "7.49 GPA",
  }
]

export const skills = {
  "LLMs & Agents": ["LangChain", "LangGraph", "LlamaIndex", "RAG", "Agentic AI", "Multi-Agent Orchestration", "Prompt Engineering", "HuggingFace"],
  "ML & Data": ["PyTorch", "TensorFlow", "Scikit-learn", "MLflow", "PEFT", "QLoRA", "Transformers", "Vector Search", "NLTK", "Pandas", "Neo4j"],
  "Infrastructure": ["FastAPI", "Flask", "Azure", "AWS", "SAP BTP", "Docker", "CI/CD", "MLOps", "LLMOps"],
  "Languages & Tools": ["Python", "Java", "JavaScript", "SQL", "Git", "Streamlit"],
}