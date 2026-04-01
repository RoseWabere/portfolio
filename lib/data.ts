// Professional Data - Rose Wabere

export const experience = [
  {
    id: 1,
    company: 'Data Science East Africa',
    position: 'Data and Analytics Engineer',
    location: 'Nairobi, Kenya',
    startDate: 'January 2025',
    endDate: 'Present',
    current: true,
    description: 'Building production data pipelines and analytics solutions for East African enterprises.',
    responsibilities: [
      'Design and deploy ETL/ELT pipelines using Apache Airflow and dbt',
      'Build real-time data platforms with PySpark and Kafka',
      'Develop analytics dashboards with Power BI and Grafana',
      'Implement data governance and compliance frameworks'
    ],
    technologies: ['Python', 'SQL', 'PySpark', 'Airflow', 'dbt', 'Power BI']
  },
  {
    id: 2,
    company: 'Data Scout KE',
    position: 'Founder & Lead Data Engineer',
    location: 'Nairobi, Kenya',
    startDate: 'January 2025',
    endDate: 'Present',
    current: true,
    description: 'Data intelligence consultancy targeting Kenyan SACCOs and SMEs with governance-aware data systems.',
    responsibilities: [
      'Build custom data pipelines for financial institutions',
      'Design compliance-focused analytics solutions',
      'Develop AI decision systems with RAG architecture',
      'Provide data strategy consulting for African enterprises'
    ],
    technologies: ['LangChain', 'FastAPI', 'PostgreSQL', 'React', 'Next.js']
  },
  {
    id: 3,
    company: 'Freelance Data Engineering',
    position: 'Data Engineer & AI Systems Developer',
    location: 'Remote',
    startDate: '2021',
    endDate: '2024',
    current: false,
    description: 'Built production data systems and AI applications for clients across tourism, environmental, and financial sectors.',
    responsibilities: [
      'Delivered 8+ production-grade data systems',
      'Built RAG AI systems with LangChain and vector databases',
      'Developed geospatial ETL pipelines with PostGIS',
      'Created real-time analytics dashboards'
    ],
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'LangChain', 'React']
  }
]

export const education = [
  {
    id: 1,
    institution: 'University Name',
    degree: 'Bachelor of Arts in Security Studies and Criminology',
    location: 'Nairobi, Kenya',
    startDate: '2017',
    endDate: '2021',
    description: 'Specialized in security analysis, criminology, and governance frameworks — background that informs governance-aware data system design.',
  }
]

export const certifications = [
  {
    id: 1,
    name: 'Data Engineering Professional Certificate',
    issuer: 'Online Learning Platform',
    date: '2023',
    description: 'Advanced ETL pipeline design, data warehousing, and orchestration',
  },
  {
    id: 2,
    name: 'Machine Learning Specialization',
    issuer: 'Online Learning Platform',
    date: '2022',
    description: 'ML algorithms, model deployment, and production systems',
  },
  {
    id: 3,
    name: 'Python for Data Science',
    issuer: 'Online Learning Platform',
    date: '2021',
    description: 'Advanced Python, Pandas, NumPy, and data analysis',
  }
]

export const skills = {
  'Data Engineering': ['Python', 'SQL', 'PySpark', 'Apache Airflow', 'dbt', 'Kafka'],
  'AI & ML': ['LangChain', 'OpenAI API', 'RAG Systems', 'Vector Databases', 'XGBoost'],
  'Databases': ['PostgreSQL', 'PostGIS', 'Redis', 'MongoDB', 'Weaviate'],
  'Backend': ['FastAPI', 'Node.js', 'Express', 'REST APIs'],
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  'Analytics & BI': ['Power BI', 'Grafana', 'Tableau', 'Metabase'],
  'DevOps': ['Docker', 'GCP', 'AWS', 'Vercel', 'GitHub Actions']
}

export const projects = [
  {
    id: 'safari-scout',
    badge: 'RAG · AI SYSTEMS',
    title: 'Safari Scout — AI Travel Assistant',
    role: 'AI Engineer & Data Scientist',
    description: 'LangChain + Weaviate vector database RAG pipeline. Semantic search across 2,000+ curated Kenya travel experiences.',
    stack: ['LangChain', 'Weaviate', 'FastAPI', 'Next.js', 'RAG'],
    liveUrl: 'https://safari-scouts.vercel.app',
    githubUrl: 'https://github.com/Rozieroz/Travel-Assistant',
    impact: '70% reduction in research time. 94% retrieval accuracy.',
    featured: true,
  },
  {
    id: 'jobscout-ke',
    badge: 'AUTOMATION · STREAMLIT',
    title: 'JobScout KE — Automated Job Hunting System',
    role: 'Full Stack Engineer',
    description: 'Automated job aggregation system using Streamlit, Gmail API, Jooble API, Groq LLaMA, and Playwright. Multi-source scraping with Telegram notifications.',
    stack: ['Streamlit', 'Gmail API', 'Playwright', 'SQLite', 'Telegram Bot'],
    githubUrl: 'https://linkedin.com/in/rosewabere/details/projects',
    impact: 'Automated job search across 7 platforms. Real-time notifications.',
    featured: true,
  },
  {
    id: 'kijani-care',
    badge: 'GEOSPATIAL · ETL',
    title: 'Kijani Care 360 — Environmental Monitoring',
    role: 'Data Engineer',
    description: 'Geospatial ETL pipeline with PostgreSQL/PostGIS. Real-time dashboards tracking 10,000+ tree planting records across Kenya.',
    stack: ['FastAPI', 'PostgreSQL', 'PostGIS', 'React', 'Docker'],
    liveUrl: 'https://kijanicare-360.vercel.app',
    githubUrl: 'https://github.com/Rozieroz/kijani_care_360',
    impact: '10K+ records monitored in real-time',
    featured: true,
  },
  {
    id: 'bolmax-store',
    badge: 'E-COMMERCE · FULL STACK',
    title: 'Bolmax Store — E-commerce Platform',
    role: 'Full Stack Developer',
    description: 'Complete e-commerce solution with product catalog, shopping cart, and payment integration.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://bolmaxstore.netlify.app',
    impact: 'Full-featured online store',
    featured: true,
  },
  {
    id: 'apex-movies',
    badge: 'WEB · REACT',
    title: 'Apex Movies — Movie Discovery App',
    role: 'Frontend Developer',
    description: 'Movie discovery platform with search, filtering, and detailed information using TMDB API.',
    stack: ['React', 'REST API', 'Tailwind CSS'],
    liveUrl: 'https://apexmovies.netlify.app',
    impact: 'Clean UI for movie browsing',
    featured: false,
  },
  // {
  //   id: 'bank-compliance',
  //   badge: 'GOVERNANCE · ANALYTICS',
  //   title: 'Bank Compliance Analytics Dashboard',
  //   role: 'Analytics Engineer',
  //   description: 'Power BI dashboards with dbt transformations. Real-time compliance monitoring for Kenyan banking regulations.',
  //   stack: ['Power BI', 'dbt', 'PostgreSQL', 'Python'],
  //   impact: '95% reduction in manual compliance reporting',
  //   featured: true,
  // },
  {
    id: 'earthquake-pipeline',
    badge: 'REAL-TIME · ETL',
    title: 'Earthquake Data Pipeline',
    role: 'Data Engineer',
    description: 'Real-time ETL: USGS API → PostgreSQL with Apache Airflow orchestration.',
    stack: ['Python', 'PostgreSQL', 'Airflow', 'Grafana'],
    githubUrl: 'https://github.com/Rozieroz/Earthquake_Data_Pipline',
    impact: 'Processing 100+ daily seismic events globally',
    featured: false,
  },
]
