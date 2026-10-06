// ============================================================================
// MOHAN BABU UNIVERSITY (MBU) — DEPARTMENT OF DATA SCIENCE
// OFFICIAL ACADEMIC MODULES SPECIFICATION & CURRICULUM DATA
// Source: University Data Science Lecture Notes (AY 2026–2027)
// ============================================================================

export const dataScienceModules = [
  // ==========================================================================
  // MODULE 1 — INTRODUCTION
  // ==========================================================================
  {
    id: 'mod-1',
    number: 'Module 1',
    code: 'DS-MOD-101',
    title: 'Module 1 — Introduction',
    displayTitle: 'Introduction to Data Science',
    shortDescription: 'Foundations of Data Science, its applications, skills, tools, data types, data collection, preprocessing and descriptive analysis.',
    summary: 'Foundations of Data Science, its applications, skills, tools, data types, data collection, preprocessing and descriptive analysis.',
    theme: {
      primaryColor: '#0d9488', // Teal
      accentColor: '#14b8a6',
      badgeBg: 'rgba(13, 148, 136, 0.12)',
      badgeBorder: 'rgba(13, 148, 136, 0.3)',
      gradient: 'linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(6, 182, 212, 0.04) 100%)',
      accentBorder: 'rgba(13, 148, 136, 0.35)',
      cardGlow: '0 8px 30px -6px rgba(13, 148, 136, 0.15)'
    },
    duration: '4 Weeks • 16 Lecture Hours',
    credits: '3 Credits',
    level: 'Undergraduate Core',
    department: 'Department of Data Science',
    institution: 'Mohan Babu University (MBU)',
    prerequisites: ['Basic Mathematics & Statistics', 'Introductory Python Programming'],
    defaultProgress: 100,
    importantTopics: [
      'Definition of Data Science',
      'Skills & Industry Roles',
      'Tools for Data Science',
      'Data Preprocessing Pipelines',
      'Descriptive Analysis & Metrics'
    ],
    videoResource: {
      title: 'Lecture 1: Foundations of Modern Data Science & Exploratory Analytics',
      duration: '18:45 min',
      embedUrl: 'https://www.youtube.com/embed/UFuo7EHI8zc',
      instructor: 'Department of Data Science Faculty',
      tags: ['Foundations', 'Data Types', 'Preprocessing', 'Descriptive Stats']
    },
    relatedExperimentIds: ['exp-1', 'exp-2'],
    relatedExperiments: [
      {
        id: 'exp-1',
        number: '1',
        title: 'Time Series Analysis',
        relevance: 'Demonstrates timestamp data structures, pandas date_range, frequency conversion, and period arithmetic.'
      },
      {
        id: 'exp-2',
        number: '2',
        title: 'Data Cleaning & Exploratory Data Analysis',
        relevance: 'Implements practical data preprocessing, outlier detection using IQR, and descriptive statistical summarization.'
      }
    ],
    codeExample: {
      filename: 'module1_foundations_pipeline.py',
      language: 'python',
      title: 'Module 1 — Complete Python Exploratory Pipeline',
      code: `# ==============================================================================
# MOHAN BABU UNIVERSITY (MBU) — DEPARTMENT OF DATA SCIENCE
# MODULE 1: FOUNDATIONS OF DATA SCIENCE & PREPROCESSING PIPELINE
# ==============================================================================
import numpy as np
import pandas as pd

# 1. DATA COLLECTION & INGESTION (Simulated Sensor / Transaction Dataset)
raw_records = {
    'Transaction_ID': ['TX101', 'TX102', 'TX103', 'TX104', 'TX105', 'TX106', 'TX107', 'TX108'],
    'Client_Category': ['Retail', 'Corporate', 'Retail', 'SME', 'Corporate', 'Retail', 'Retail', 'Corporate'],
    'Purchase_Amount': [1450.0, 3200.0, np.nan, 950.0, 8900.0, 1200.0, 13200.0, 4100.0],  # Contains NaN & Outlier
    'Processing_Time_Sec': [1.2, 2.5, 0.8, 1.1, 4.2, 1.4, 18.5, 2.8]
}

df = pd.DataFrame(raw_records)
print("--- [1] Raw Data Ingestion ---")
print(df)

# 2. DATA PREPROCESSING: Missing Value Imputation
mean_purchase = df['Purchase_Amount'].mean()
df['Purchase_Amount'] = df['Purchase_Amount'].fillna(mean_purchase)
print(f"\\n--- [2] Missing Values Imputed with Mean ({mean_purchase:.2f}) ---")

# 3. OUTLIER DETECTION: Interquartile Range (IQR Rule)
q25 = df['Purchase_Amount'].quantile(0.25)
q75 = df['Purchase_Amount'].quantile(0.75)
iqr = q75 - q25
lower_bound = q25 - 1.5 * iqr
upper_bound = q75 + 1.5 * iqr

outliers = df[(df['Purchase_Amount'] < lower_bound) | (df['Purchase_Amount'] > upper_bound)]
print(f"\\n--- [3] Outlier Diagnostics (IQR={iqr:.2f}) ---")
print(f"Boundaries: [{lower_bound:.2f}, {upper_bound:.2f}]")
print(f"Identified Outliers Count: {len(outliers)}")

# 4. DESCRIPTIVE ANALYSIS: Central Tendency & Dispersion
print("\\n--- [4] Descriptive Statistical Summary ---")
summary_stats = df[['Purchase_Amount', 'Processing_Time_Sec']].describe()
print(summary_stats.round(2))

# 5. CATEGORICAL AGGREGATION
print("\\n--- [5] GroupBy Aggregations by Client Category ---")
cat_summary = df.groupby('Client_Category')['Purchase_Amount'].agg(['count', 'mean', 'sum'])
print(cat_summary.round(2))`
    },
    // Complete 11 Topics explicitly based on student notes
    topics: [
      {
        number: 1,
        code: '1.1',
        title: 'Definition of Data Science',
        shortDescription: 'Interdisciplinary domain synthesizing mathematics, statistics, computer science, and domain expertise to extract actionable knowledge from raw data.',
        concept: 'Data Science is an interdisciplinary field that utilizes scientific methods, processes, algorithms, and systems to extract knowledge and actionable insights from noisy, structured, and unstructured data. It combines domain expertise, programming prowess, and mathematics to discover patterns that inform tactical decision-making.',
        keyPoints: [
          'Unifies statistics, data analysis, informatics, and machine learning methods.',
          'Focuses on the entire data lifecycle: acquisition, storage, processing, modeling, and communication.',
          'Differentiates from pure computer science through heavy reliance on empirical inference and domain validation.'
        ],
        formulaOrSyntax: 'Data Science = Computer Science (Hacking Skills) ∩ Mathematics & Statistics ∩ Domain Specialization',
        realWorldApplication: 'Healthcare predictive diagnostics, autonomous vehicle vision systems, and fraud prevention engines in high-frequency fintech.'
      },
      {
        number: 2,
        code: '1.2',
        title: 'Where Do We See Data Science?',
        shortDescription: 'Pervasive real-world applications across industry verticals, scientific research, and daily consumer digital experiences.',
        concept: 'Data Science touches every aspect of digital society. From personalized streaming recommendation engines to clinical genomics, automated risk scoring in financial banking, smart city traffic management, and predictive supply chain management.',
        keyPoints: [
          'E-Commerce & Media: Recommendation engines (Netflix, Amazon, Spotify collaborative filtering).',
          'FinTech & Banking: Credit scoring, algorithmic trading, real-time AML (Anti-Money Laundering) anomaly alerts.',
          'Healthcare & Medicine: Automated radiology image classification, early cancer biomarker detection, genomics.',
          'Smart Logistics: Dynamic route optimization, automated warehouse robotics, and predictive equipment maintenance.'
        ],
        formulaOrSyntax: 'Applications: Recommenders • Fraud Detection • Diagnostics • Predictive Maintenance • NLP Search',
        realWorldApplication: 'Amazon dynamic pricing algorithms adjusting millions of catalog prices based on real-time competitor elasticity.'
      },
      {
        number: 3,
        code: '1.3',
        title: 'Skills for Data Science',
        shortDescription: 'The core tripartite competencies: quantitative mathematical foundations, software engineering, and strategic domain fluency.',
        concept: 'A proficient Data Scientist requires balanced competency across three core pillars: (1) Mathematics & Statistics (Linear Algebra, Multivariable Calculus, Probability Distributions), (2) Programming & Computer Science (Python/R, Data Structures, Algorithms, SQL, Git), and (3) Business & Domain Acumen (Problem formulation, storytelling, stakeholder communication).',
        keyPoints: [
          'Mathematical Core: Probability, Bayesian inference, hypothesis testing, matrix decomposition.',
          'Software Engineering: Vectorized programming (NumPy/Pandas), version control (Git), APIs, Linux shell scripting.',
          'Communication: Translating mathematical model metrics into executive business KPIs.'
        ],
        formulaOrSyntax: 'Competencies: Coding (Python/SQL) + Math (Linear Algebra/Stats) + Domain Knowledge + Visual Storytelling',
        realWorldApplication: 'Data scientists structuring A/B experiment hypotheses to scientifically test whether a UI redesign increases checkout conversions.'
      },
      {
        number: 4,
        code: '1.4',
        title: 'Roles and Job Types in Data Science',
        shortDescription: 'The organizational ecosystem of specialized data professionals and their complementary responsibilities.',
        concept: 'Modern organizations deploy specialized teams rather than expecting a single "unicorn". Key roles include Data Analysts (reporting & exploratory metrics), Data Engineers (data pipelines, ETL/ELT, distributed clusters), Machine Learning Engineers (model deployment & production infrastructure), Data Scientists (hypothesis validation & algorithmic modeling), and MLOps Engineers (monitoring and continuous training).',
        keyPoints: [
          'Data Analyst: SQL queries, BI dashboards (Tableau/Power BI), descriptive analytics.',
          'Data Engineer: Apache Spark, Kafka, Snowflake, database architecture, data warehouse pipelines.',
          'Data Scientist: Statistical modeling, hypothesis validation, exploratory prototyping, Scikit-Learn.',
          'ML / MLOps Engineer: Containerization (Docker), Kubernetes, CI/CD pipelines, inference latency optimization.'
        ],
        formulaOrSyntax: 'Data Analyst (What happened?) → Data Scientist (Why & What next?) → ML Engineer (Scale to Production)',
        realWorldApplication: 'Uber operational architecture where Data Engineers maintain real-time trip streams, Data Scientists build surge pricing models, and ML Engineers deploy models at sub-millisecond latencies.'
      },
      {
        number: 5,
        code: '1.5',
        title: 'Tools for Data Science',
        shortDescription: 'The modern technology stack: programming languages, scientific computation libraries, databases, and visualization tools.',
        concept: 'The Data Science tool stack spans programming languages (Python, R, SQL, Julia), exploratory notebook environments (Jupyter, Google Colab), computational libraries (NumPy, SciPy, Pandas), machine learning packages (Scikit-Learn, PyTorch, TensorFlow), and interactive business intelligence software (Tableau, PowerBI).',
        keyPoints: [
          'Programming: Python 3.11+ (dominant industry choice), SQL (structured querying), R (biostatistics).',
          'Scientific Libraries: NumPy (C-compiled ndarrays), Pandas (DataFrame tabular manipulation), Matplotlib/Seaborn.',
          'Cloud & Interactive IDEs: JupyterLab, VS Code, Google Colab, Amazon SageMaker, Databricks.'
        ],
        formulaOrSyntax: 'Stack: Python • Pandas • NumPy • Scikit-Learn • SQL • JupyterLab • Git',
        realWorldApplication: 'Developing an end-to-end churn prediction pipeline using Pandas for data manipulation, Scikit-learn for modeling, and Jupyter for rapid exploratory iterations.'
      },
      {
        number: 6,
        code: '1.6',
        title: 'Data Types',
        shortDescription: 'Taxonomy of data formats: structured, semi-structured, unstructured, and mathematical measurement scales.',
        concept: 'Data is categorized structurally into Structured (rigid schemas like relational SQL tables and CSVs), Semi-Structured (hierarchical schemas with tags like JSON, XML, NoSQL documents), and Unstructured (raw audio, video, free text, sensor telemetry). Mathematically, variables are qualitative/categorical (Nominal, Ordinal) or quantitative/numeric (Interval, Ratio).',
        keyPoints: [
          'Structured: Fixed schema, row-column relational model, easily indexed by SQL engines.',
          'Semi-Structured: Key-value or tagged documents (JSON payloads, REST API responses).',
          'Unstructured: 80%+ of worldwide enterprise data; requires deep learning, NLP, or computer vision to extract embeddings.',
          'Scales of Measurement: Nominal (categories), Ordinal (ranked), Interval (arbitrary zero), Ratio (true absolute zero).'
        ],
        formulaOrSyntax: 'Categorical: Nominal (Color), Ordinal (Education) | Numerical: Discrete (Count), Continuous (Height)',
        realWorldApplication: 'Preprocessing customer loan applications containing structured tabular credit scores alongside unstructured scanned PDF identity documents.'
      },
      {
        number: 7,
        code: '1.7',
        title: 'Data Collections',
        shortDescription: 'Methodologies and protocols for acquiring data from primary and secondary data sources.',
        concept: 'Data collection is the systematic process of gathering observations from heterogeneous channels. Methods include automated web scraping (BeautifulSoup, Scrapy, Selenium), RESTful APIs (Twitter/X, OpenWeather), IoT streaming sensors, database change data capture (CDC), controlled clinical trials, and observational surveys.',
        keyPoints: [
          'Primary Data: Collected firsthand specifically for the research study (e.g., custom A/B testing telemetry).',
          'Secondary Data: Pre-existing data collected by third parties (e.g., Kaggle datasets, government census, World Bank).',
          'Automated Ingestion: Batch ETL (Extract-Transform-Load) vs. Streaming pipelines (Apache Kafka).'
        ],
        formulaOrSyntax: 'Data Collection Channels = APIs + Web Scrapers + IoT Streams + Database Dumps + Surveys',
        realWorldApplication: 'Fetching real-time stock tick data via WebSocket APIs for intraday algorithmic trend evaluation.'
      },
      {
        number: 8,
        code: '1.8',
        title: 'Data Storage and Presentation',
        shortDescription: 'Architectures for modern persistence (Data Warehouses, Data Lakes) and visual storytelling principles.',
        concept: 'Storing data efficiently requires balancing read/write performance, schema rigidity, and query throughput. Technologies include Relational Databases (PostgreSQL, MySQL), NoSQL Document Stores (MongoDB), Columnar Data Warehouses (Snowflake, Google BigQuery), and Data Lakes (S3, Apache Parquet). Presentation relies on cognitive visualization principles (Edward Tufte guidelines) to craft intuitive charts.',
        keyPoints: [
          'Data Warehouse: Highly structured, cleaned, optimized for analytical OLAP querying.',
          'Data Lake: Stores raw data in native formats at petabyte scale; flexible schema-on-read.',
          'Visual Presentation: Bar charts for discrete comparison, line charts for temporal trends, heatmaps for correlations.'
        ],
        formulaOrSyntax: 'Storage: OLTP (Postgres) → ETL → OLAP (Snowflake / BigQuery) → BI Dashboards (Tableau / PowerBI)',
        realWorldApplication: 'Storing raw clickstream telemetry in AWS S3 and querying aggregated weekly retention reports in BigQuery.'
      },
      {
        number: 9,
        code: '1.9',
        title: 'Data Preprocessing',
        shortDescription: 'Transforming raw, noisy real-world data into clean, normalized feature matrices suitable for algorithms.',
        concept: 'Raw data is inevitably incomplete, noisy, and inconsistent. Preprocessing consists of: (1) Handling missing values (mean/median/KNN imputation or deletion), (2) Identifying and managing outliers (Z-score, Tukey IQR rule), (3) Feature scaling (Min-Max normalization, StandardScaler Z-score scaling), and (4) Encoding categorical variables (One-Hot Encoding, Ordinal Encoding).',
        keyPoints: [
          'Missingness mechanisms: MCAR (Completely at Random), MAR (at Random), MNAR (Not at Random).',
          'IQR Outlier Rule: Inliers within [Q1 - 1.5×IQR, Q3 + 1.5×IQR].',
          'Standardization: Z = (X - μ) / σ ensures features have zero mean and unit variance.',
          'Categorical Encoding: One-hot encoding creates binary indicators; label encoding assigns sequential integers.'
        ],
        formulaOrSyntax: 'StandardScaler: z = (x - μ) / σ | MinMax: x_norm = (x - x_min) / (x_max - x_min)',
        realWorldApplication: 'Standardizing patient medical readings (e.g. blood pressure, glucose) before feeding into a Support Vector Machine classifier.'
      },
      {
        number: 10,
        code: '1.10',
        title: 'Data Analysis and Data Analytics',
        shortDescription: 'The four-tiered taxonomy of analytical maturity: descriptive, diagnostic, predictive, and prescriptive.',
        concept: 'Data Analysis is the detailed examination of data components to understand characteristics. Data Analytics is the broader umbrella encompassing data analysis along with computational modeling, automation, and decision-making logic. The analytical hierarchy progresses from historical reflection to automated optimization.',
        keyPoints: [
          'Descriptive: What happened? (Summary statistics, KPIs, past performance reports).',
          'Diagnostic: Why did it happen? (Root cause analysis, correlation discovery, drill-down slicing).',
          'Predictive: What is likely to happen? (Statistical forecasting, machine learning models, probability estimates).',
          'Prescriptive: What specific action should we take? (Optimization algorithms, reinforcement learning, automated intervention).'
        ],
        formulaOrSyntax: 'Descriptive (What?) → Diagnostic (Why?) → Predictive (What Next?) → Prescriptive (How to Act?)',
        realWorldApplication: 'An airline analyzing why flight cancellations spiked (diagnostic) and forecasting tomorrow\'s overbooking probability (predictive).'
      },
      {
        number: 11,
        code: '1.11',
        title: 'Descriptive Analysis',
        shortDescription: 'Quantitative summarization of dataset characteristics using measures of central tendency, dispersion, and distribution shapes.',
        concept: 'Descriptive Analysis uses statistical metrics and exploratory graphics to summarize sample features quantitatively without drawing conclusions about the broader population. It calculates central location (Mean, Median, Mode), spread/dispersion (Range, Variance, Standard Deviation, Interquartile Range), and shape (Skewness, Kurtosis).',
        keyPoints: [
          'Central Tendency: Mean (sensitive to outliers), Median (robust middle rank), Mode (most frequent category).',
          'Measures of Dispersion: Variance (σ² = Σ(x - μ)² / N), Standard Deviation (σ = √Variance), IQR = Q3 - Q1.',
          'Shape: Positive Skew (right tail pulled by large values), Negative Skew (left tail pulled by small values).',
          'Pandas API: df.describe() generates count, mean, std, min, 25%, 50%, 75%, and max in one call.'
        ],
        formulaOrSyntax: 'Mean: x̄ = (1/n) Σ x_i | Std Dev: s = √[ (1/(n-1)) Σ (x_i - x̄)² ] | IQR = Q3 - Q1',
        realWorldApplication: 'Summarizing employee salary distributions across departments to identify pay disparities and detect extreme compensation outliers.'
      }
    ]
  },

  // ==========================================================================
  // MODULE 2 — DATA EXTRACTION
  // ==========================================================================
  {
    id: 'mod-2',
    number: 'Module 2',
    code: 'DS-MOD-102',
    title: 'Module 2 — Data Extraction',
    displayTitle: 'Data Extraction & Predictive Modeling',
    shortDescription: 'Data extraction, feature selection, predictive modelling, decision trees, ensemble methods and dimensionality reduction.',
    summary: 'Data extraction, feature selection, predictive modelling, decision trees, ensemble methods and dimensionality reduction.',
    theme: {
      primaryColor: '#6366f1', // Indigo / Cobalt
      accentColor: '#38bdf8',
      badgeBg: 'rgba(99, 102, 241, 0.12)',
      badgeBorder: 'rgba(99, 102, 241, 0.3)',
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(56, 189, 248, 0.04) 100%)',
      accentBorder: 'rgba(99, 102, 241, 0.35)',
      cardGlow: '0 8px 30px -6px rgba(99, 102, 241, 0.15)'
    },
    duration: '5 Weeks • 20 Lecture Hours',
    credits: '4 Credits',
    level: 'Undergraduate Advanced Core',
    department: 'Department of Data Science',
    institution: 'Mohan Babu University (MBU)',
    prerequisites: ['Module 1 — Introduction', 'Linear Algebra & Probability', 'Scikit-Learn Basics'],
    defaultProgress: 90,
    importantTopics: [
      'Feature Selection (Filter, Wrapper, Embedded)',
      'Entropy & Decision Tree Algorithm',
      'Random Forests & Bagging vs Boosting',
      'Singular Value Decomposition (SVD)',
      'Principal Component Analysis (PCA)'
    ],
    videoResource: {
      title: 'Lecture 2: Advanced Feature Engineering, Tree Ensembles & Dimensionality Reduction',
      duration: '22:15 min',
      embedUrl: 'https://www.youtube.com/embed/r0s4442q3Lg',
      instructor: 'Department of Data Science Faculty',
      tags: ['Feature Selection', 'Decision Trees', 'Ensemble Learning', 'PCA & SVD']
    },
    relatedExperimentIds: ['exp-3', 'exp-4', 'exp-5'],
    relatedExperiments: [
      {
        id: 'exp-3',
        number: '3',
        title: 'Regression Modeling & Continuous Estimation',
        relevance: 'Demonstrates Stepwise regression principles, Ordinary Least Squares, and model evaluation metrics.'
      },
      {
        id: 'exp-4',
        number: '4',
        title: 'Supervised Classification & Decision Trees',
        relevance: 'Directly implements Entropy calculation, Information Gain splitting, and Decision Tree visualization.'
      },
      {
        id: 'exp-5',
        number: '5',
        title: 'Unsupervised Clustering & Dimensionality Reduction',
        relevance: 'Implements Principal Component Analysis (PCA), covariance matrix decomposition, and dimensionality reduction.'
      }
    ],
    codeExample: {
      filename: 'module2_feature_selection_pca_trees.py',
      language: 'python',
      title: 'Module 2 — Decision Trees, Feature Importance & PCA Pipeline',
      code: `# ==============================================================================
# MOHAN BABU UNIVERSITY (MBU) — DEPARTMENT OF DATA SCIENCE
# MODULE 2: DATA EXTRACTION, DECISION TREES & PCA WORKBENCH
# ==============================================================================
import numpy as np
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.decomposition import PCA
from sklearn.feature_selection import SelectKBest, f_classif

# 1. SYNTHETIC HIGH-DIMENSIONAL FEATURE MATRIX (Simulated Customer Churn)
np.random.seed(42)
n_samples = 200
n_features = 8

# Generate features: 3 informative, 5 noise
X = np.random.randn(n_samples, n_features)
# Target depends strongly on Feature 0 and Feature 1
y = (X[:, 0] * 1.5 + X[:, 1] * -2.0 + np.random.randn(n_samples) * 0.5 > 0).astype(int)

feature_names = [f'Feat_{i}' for i in range(n_features)]
df_features = pd.DataFrame(X, columns=feature_names)
print("--- [1] Dataset Formatted (200 Samples, 8 Features) ---")
print(df_features.head(3))

# 2. FILTER METHOD: ANOVA F-Test Feature Selection
selector = SelectKBest(score_func=f_classif, k=4)
X_filtered = selector.fit_transform(X, y)
selected_indices = selector.get_support(indices=True)
print("\\n--- [2] Filter Method: SelectKBest (ANOVA F-Score) ---")
for idx in selected_indices:
    print(f"Selected: {feature_names[idx]} (F-score: {selector.scores_[idx]:.2f})")

# 3. DECISION TREE ALGORITHM (Entropy Splitting Criterion)
dt_clf = DecisionTreeClassifier(criterion='entropy', max_depth=3, random_state=42)
dt_clf.fit(X, y)
print("\\n--- [3] Decision Tree (Entropy Criterion) ---")
print(f"Tree Depth: {dt_clf.get_depth()} | Leaves: {dt_clf.get_n_leaves()}")
print("Feature Importances:")
for name, imp in zip(feature_names, dt_clf.feature_importances_):
    if imp > 0.01:
        print(f"  • {name}: {imp:.4f}")

# 4. ENSEMBLE LEARNING: Random Forest (Bagging + Feature Subspacing)
rf_clf = RandomForestClassifier(n_estimators=50, max_features='sqrt', random_state=42)
rf_clf.fit(X, y)
print(f"\\n--- [4] Random Forest Ensemble Accuracy: {rf_clf.score(X, y)*100:.1f}% ---")

# 5. DIMENSIONALITY REDUCTION: Principal Component Analysis (PCA)
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X)
print("\\n--- [5] Principal Component Analysis (PCA) ---")
print(f"Explained Variance Ratio: PC1={pca.explained_variance_ratio_[0]:.3f}, PC2={pca.explained_variance_ratio_[1]:.3f}")
print(f"Cumulative Variance Captured (2 Components): {np.sum(pca.explained_variance_ratio_)*100:.1f}%")`
    },
    // Complete 21 Topics explicitly based on student notes
    topics: [
      {
        number: 1,
        code: '2.1',
        title: 'Extracting Meaning from Data',
        shortDescription: 'The foundational objective of machine learning: discovering generalizable semantic patterns and latent representations from raw observations.',
        concept: 'Extracting meaning from data transcends superficial summarization. It involves mapping high-dimensional sensory inputs (tabular records, text tokens, pixel arrays) into latent feature representations where distances and boundaries reflect genuine underlying physical or behavioral relationships.',
        keyPoints: [
          'Transforms raw uncalibrated signals into validated decision boundaries.',
          'Distinguishes true predictive signal from idiosyncratic sample noise.',
          'Establishes the foundation for feature engineering, dimensionality reduction, and model inference.'
        ],
        formulaOrSyntax: 'Mapping: f: X ⊂ ℝ^d → Y (Predictive Target) or Z ⊂ ℝ^k (Latent Semantic Space, k ≪ d)',
        realWorldApplication: 'Extracting consumer purchase sentiment patterns from unstructured product review sentences.'
      },
      {
        number: 2,
        code: '2.2',
        title: 'Kaggle Competition Framework',
        shortDescription: 'The gold-standard competitive benchmark framework that shaped modern applied machine learning engineering.',
        concept: 'The Kaggle Competition Framework provides a standardized protocol for comparing predictive models. It establishes explicit problem formulation, train/test dataset splits, public and private leaderboards to guard against overfitting, standardized loss functions (e.g., LogLoss, RMSE, ROC-AUC), and reproducible code notebook execution.',
        keyPoints: [
          'Public vs. Private Leaderboard: Public score uses 20–30% of test data; private score reveals final standings on remaining 70–80%.',
          'Guards against adaptive overfitting where models inadvertently overfit to test feedback.',
          'Fosters iterative collaboration, reproducible kernels, and competitive benchmarking.'
        ],
        formulaOrSyntax: 'Framework: Problem Definition → Train/Test Split → Cross-Validation Scheme → Metric Optimization → Submission Kernel',
        realWorldApplication: 'Corporate predictive modeling teams hosting internal Kaggle-style competitions to crowd-source optimal customer retention algorithms.'
      },
      {
        number: 3,
        code: '2.3',
        title: 'Leapfrogging',
        shortDescription: 'Rapid iterative convergence in competitive modeling through modular architecture combination and public kernel baseline evolution.',
        concept: 'In competitive machine learning, "Leapfrogging" refers to the dynamic phenomenon where teams rapidly advance baseline predictive performance by systematically analyzing public top-ranking solutions, borrowing strong feature engineering ideas, and stacking or ensembling complementary model families to jump ahead on leaderboards.',
        keyPoints: [
          'Accelerates innovation by building on validated community baselines rather than starting from scratch.',
          'Emphasizes model diversity: blending LightGBM, CatBoost, neural nets, and linear models.',
          'Requires disciplined out-of-fold (OOF) cross-validation to ensure true generalizability.'
        ],
        formulaOrSyntax: 'Ensemble Leapfrog: ŷ_blend = w_1 · ŷ_GBDT + w_2 · ŷ_NN + w_3 · ŷ_RF, where Σ w_i = 1',
        realWorldApplication: 'Competitive Kaggle grandmasters blending 15 distinct tree architectures to incrementally gain 0.002 on classification AUC.'
      },
      {
        number: 4,
        code: '2.4',
        title: 'Kaggle Corporate Collaborations',
        shortDescription: 'How multinational enterprises and academic institutions leverage crowdsourced modeling for complex domain problems.',
        concept: 'Enterprises partner with competitive platforms like Kaggle to crowd-source solutions to intractable predictive challenges that exceed in-house engineering bandwidth. Examples include the Netflix Prize ($1M for recommendation improvement), Kaggle Zillow Home Value Prize, and Mercedes-Benz manufacturing testing optimization.',
        keyPoints: [
          'Allows enterprises to benchmark their proprietary algorithms against thousands of global data scientists.',
          'Requires strict data anonymization, NDA protocols, and data obfuscation to protect intellectual property.',
          'Produces robust, ensemble-driven pipelines that inspire production architectures.'
        ],
        formulaOrSyntax: 'Corporate Challenge = Anonymized Enterprise Data + Cash Prize Bounty + Validated Metric + IP Transfer License',
        realWorldApplication: 'Pharmaceutical companies hosting Kaggle molecular screening competitions to identify novel drug candidate compounds.'
      },
      {
        number: 5,
        code: '2.5',
        title: 'Ethical Considerations',
        shortDescription: 'Safeguarding privacy, mitigating algorithmic prejudice, and preventing data leakage across modeling partitions.',
        concept: 'Data science introduces profound societal and technical ethical responsibilities. Technical ethics demands preventing data leakage (target contamination in validation sets). Societal ethics mandates algorithmic fairness, mitigating historical demographic bias, ensuring model explainability (XAI), and protecting privacy regulations (GDPR, DPDP).',
        keyPoints: [
          'Data Leakage: Information from outside the training dataset used to create the model (e.g., scaling before splitting).',
          'Algorithmic Bias: Models learning and reinforcing historical societal inequities present in training data.',
          'Privacy Compliance: Differential privacy, anonymization, and right-to-be-forgotten protocols.'
        ],
        formulaOrSyntax: 'Ethics Checklist: No Target Leakage • Disparate Impact Ratio > 0.8 • Feature Provenance Logged • GDPR Compliant',
        realWorldApplication: 'Auditing automated loan approval algorithms to ensure denial rates do not unfairly penalize protected demographic cohorts.'
      },
      {
        number: 6,
        code: '2.6',
        title: 'Feature Selection',
        shortDescription: 'The strategic selection of the optimal subset of input features to combat the Curse of Dimensionality.',
        concept: 'Feature Selection is the process of isolating the most relevant variables from a candidate feature pool. Its advantages include: (1) Mitigating the Curse of Dimensionality, (2) Reducing model variance and overfitting, (3) Accelerating training and inference speeds, and (4) Enhancing model interpretability.',
        keyPoints: [
          'Curse of Dimensionality: Volume of space increases exponentially with dimension; data becomes sparse.',
          'Irrelevant and redundant features degrade non-regularized estimators.',
          'Three primary methodological families: Filter, Wrapper, and Embedded methods.'
        ],
        formulaOrSyntax: 'Optimization: S* = argmax_{S ⊆ F, |S| ≤ k} Performance(Model(S))',
        realWorldApplication: 'Reducing 5,000 genomic gene expression measurements down to 50 key diagnostic biomarkers for leukemia classification.'
      },
      {
        number: 7,
        code: '2.7',
        title: 'Filter Methods',
        shortDescription: 'Fast, model-agnostic feature scoring based on intrinsic statistical properties of the data.',
        concept: 'Filter methods assess feature relevance using statistical tests without involving machine learning algorithms. They evaluate individual features independently or compute pair-wise dependencies with the target label. Because they do not train models, they are computationally fast and scale effortlessly to millions of rows.',
        keyPoints: [
          'Pearson Correlation: Measures linear dependency for continuous features and continuous targets.',
          'Chi-Square Test (χ²): Evaluates independence between categorical features and categorical classes.',
          'ANOVA F-Test: Analyzes variance ratios between continuous features across categorical groups.',
          'Mutual Information: Measures linear and non-linear mutual dependence based on information entropy.'
        ],
        formulaOrSyntax: 'Pearson r = Σ(x - x̄)(y - ȳ) / [ √Σ(x - x̄)² √Σ(y - ȳ)² ] | χ² = Σ (O - E)² / E',
        realWorldApplication: 'Rapidly filtering out 10,000 low-variance features from high-throughput satellite telemetry before training neural networks.'
      },
      {
        number: 8,
        code: '2.8',
        title: 'Wrapper Methods',
        shortDescription: 'Iterative feature subset selection treating a machine learning algorithm as an evaluation black box.',
        concept: 'Wrapper methods wrap a machine learning model around a feature search strategy, evaluating feature subsets directly by their cross-validation performance. While they account for feature interactions, they are computationally demanding and carry a higher risk of overfitting when sample sizes are modest.',
        keyPoints: [
          'Forward Selection: Starts with zero features, greedily adding the single feature that most improves performance at each step.',
          'Backward Elimination: Starts with all features, iteratively removing the least significant feature.',
          'Recursive Feature Elimination (RFE): Fits a model, ranks feature weights, and iteratively eliminates the lowest-ranked attributes.'
        ],
        formulaOrSyntax: 'Algorithm: Forward Search: F_{t+1} = F_t ∪ { argmax_{f ∉ F_t} CV_Score(F_t ∪ {f}) }',
        realWorldApplication: 'Using RFE with an SVM classifier to find the top 15 biometric metrics that best predict cardiovascular risks.'
      },
      {
        number: 9,
        code: '2.9',
        title: 'Embedded Methods',
        shortDescription: 'Feature selection organically integrated into the mathematical learning algorithm during model optimization.',
        concept: 'Embedded methods perform feature selection as an intrinsic part of model training. They combine the computational efficiency of filter methods with the interaction-awareness of wrapper methods. Classic examples include L1 LASSO regularization (which forces uninformative coefficients to exactly zero) and tree-based Gini feature importances.',
        keyPoints: [
          'L1 Regularization (LASSO): Adds penalty λ Σ|w_i| to loss function, producing sparse coefficient vectors.',
          'L2 Regularization (Ridge): Adds penalty λ Σ w_i²; shrinks weights smoothly but does not zero them out.',
          'Tree Feature Importance: Tallies total decrease in node impurity (Gini or Entropy) contributed by each feature.'
        ],
        formulaOrSyntax: 'LASSO Loss: L(w) = (1/2n) ||y - Xw||² + λ ||w||_1 (promotes mathematical sparsity)',
        realWorldApplication: 'Applying LASSO logistic regression to clinical risk data to automatically set hundreds of irrelevant lab tests to weight zero.'
      },
      {
        number: 10,
        code: '2.10',
        title: 'Hybrid Methods',
        shortDescription: 'Two-stage cascading feature engineering combining the computational speed of filters with the precision of wrappers.',
        concept: 'Hybrid methods strategically combine multiple feature selection paradigms into a cohesive pipeline. In the first phase, a fast filter method (e.g., Variance Threshold or Mutual Information) prunes thousands of redundant features down to a manageable candidate set. In the second phase, a wrapper or embedded method fine-tunes the final optimal subset.',
        keyPoints: [
          'Overcomes the computational bottleneck of running wrapper methods on massive feature dimensions.',
          'Avoids the limitation of filter methods which ignore non-linear multi-feature interactions.',
          'Widely implemented in enterprise automated machine learning (AutoML) systems.'
        ],
        formulaOrSyntax: 'Pipeline: Raw Features (10,000) → [Filter Screening] → (500) → [Wrapper / RFE] → Final Optimal (25)',
        realWorldApplication: 'FinTech fraud engines screening 50,000 real-time payment attributes down to the 30 highest-impact behavioral signals.'
      },
      {
        number: 11,
        code: '2.11',
        title: 'Stepwise Regression',
        shortDescription: 'Iterative classical statistical regression modeling adding or pruning regressors based on statistical F-tests.',
        concept: 'Stepwise regression is a classical statistical automated feature selection technique for linear models. It alternates between adding features with high statistical significance (p-value < α_enter) and removing features that lose significance after new variables enter (p-value > α_remove).',
        keyPoints: [
          'Forward Stepwise: Iteratively introduces variables that yield the greatest reduction in Residual Sum of Squares (RSS).',
          'Backward Stepwise: Iteratively drops variables whose deletion causes the smallest increase in RSS.',
          'Bidirectional Elimination: Combines forward entry and backward removal checks at every step.'
        ],
        formulaOrSyntax: 'Entry Test: F = (RSS_p - RSS_{p+1}) / [ RSS_{p+1} / (n - p - 1) ] > F_critical',
        realWorldApplication: 'Econometric forecasting modeling national GDP growth using macroeconomic indicators with strict statistical significance testing.'
      },
      {
        number: 12,
        code: '2.12',
        title: 'Model Selection Criteria',
        shortDescription: 'Rigorous information-theoretic criteria that balance model goodness-of-fit against mathematical complexity penalties.',
        concept: 'Model Selection Criteria provide objective mathematical scores to compare candidate models with varying parameter counts. They prevent overfitting by explicitly penalizing the inclusion of extraneous parameters. The two most prominent criteria are Akaike Information Criterion (AIC) and Bayesian Information Criterion (BIC).',
        keyPoints: [
          'Akaike Information Criterion (AIC): Derived from Kullback-Leibler divergence; rewards log-likelihood with penalty 2k.',
          'Bayesian Information Criterion (BIC): Derived from Bayesian asymptotic theory; imposes a harsher penalty k·ln(n).',
          'Adjusted R²: Adjusts linear regression R² for the number of predictors, only increasing if new predictors improve fit beyond chance.'
        ],
        formulaOrSyntax: 'AIC = 2k - 2 ln(L̂) | BIC = k ln(n) - 2 ln(L̂) | Adj R² = 1 - [ (1 - R²)(n - 1) / (n - k - 1) ]',
        realWorldApplication: 'Comparing 8 candidate ARIMA time-series models for stock volatility and choosing the model that minimizes BIC.'
      },
      {
        number: 13,
        code: '2.13',
        title: 'User Retention',
        shortDescription: 'Practical industry predictive modeling to analyze customer churn, survival trajectories, and cohort engagement.',
        concept: 'User Retention modeling applies classification, survival analysis, and cohort mechanics to forecast whether an active subscriber will remain engaged over time. Key techniques include calculating day-N retention rates, modeling customer lifetime value (LTV), and predicting churn probability using gradient boosted decision trees.',
        keyPoints: [
          'Cohort Retention: Grouping users by acquisition date to observe survival curves over 7, 30, and 90-day intervals.',
          'Feature Engineering: Activity recency, engagement frequency, payment history, and session velocity.',
          'Survival Analysis: Kaplan-Meier estimator modeling duration until the churn event occurs.'
        ],
        formulaOrSyntax: 'Retention Rate = [ (Users at End of Period - New Users Acquired) / Users at Start ] × 100',
        realWorldApplication: 'SaaS platforms detecting early warning usage declines to trigger automated customer success retention offers.'
      },
      {
        number: 14,
        code: '2.14',
        title: 'Entropy',
        shortDescription: 'Claude Shannon\'s mathematical measure of uncertainty, impurity, and information content within a probability distribution.',
        concept: 'In information theory and machine learning, Entropy quantifies the expected unpredictability or impurity in a random variable. A homogeneous set containing only one class has Entropy 0 (perfect certainty). An evenly balanced binary set has Entropy 1.0 (maximum disorder). It forms the fundamental basis of Information Gain in Decision Trees.',
        keyPoints: [
          'Measures the average number of bits required to encode the class identity of a random sample.',
          'Entropy is 0 when all samples belong to the same target class (pure node).',
          'Entropy peaks at 1.0 for binary targets when p_positive = p_negative = 0.5.'
        ],
        formulaOrSyntax: 'H(S) = - Σ_{i=1}^{c} p_i · log_2(p_i), where p_i is the proportion of class i',
        realWorldApplication: 'Evaluating the purity of a customer segmentation cluster before performing targeted digital marketing.'
      },
      {
        number: 15,
        code: '2.15',
        title: 'Decision Tree Algorithm',
        shortDescription: 'Non-parametric supervised algorithm that recursively partitions feature space into hierarchical rectangular regions.',
        concept: 'A Decision Tree builds classification or regression models in the form of a tree structure. It recursively partitions the dataset into smaller subsets while simultaneously an associated decision tree is incrementally developed. At each internal node, it selects the feature split that maximizes Information Gain (ID3) or minimizes Gini Impurity (CART).',
        keyPoints: [
          'Information Gain (IG): Decrease in entropy achieved by partitioning on attribute A: IG(S, A) = H(S) - Σ (|S_v| / |S|) H(S_v).',
          'Gini Impurity (CART): Gini(S) = 1 - Σ p_i²; computationally faster as it avoids logarithmic operations.',
          'Pruning: Cost-complexity pruning (ccp_alpha) or setting max_depth to prevent overgrown overfitting trees.'
        ],
        formulaOrSyntax: 'IG(S, A) = H(S) - Σ_{v ∈ Values(A)} (|S_v| / |S|) · H(S_v) | Gini = 1 - Σ p_i²',
        realWorldApplication: 'Medical triage decision trees providing human-interpretable clinical rules for emergency room cardiovascular admission.'
      },
      {
        number: 16,
        code: '2.16',
        title: 'Handling Continuous Variables',
        shortDescription: 'Dynamic split-point evaluation to partition continuous numerical features within decision trees.',
        concept: 'Unlike categorical features with discrete outcomes, continuous features have infinite potential threshold points. Decision trees handle continuous variables by: (1) Sorting distinct values in ascending order, (2) Evaluating adjacent midpoints as candidate threshold candidates, and (3) Selecting the single threshold that maximizes Information Gain or Gini reduction.',
        keyPoints: [
          'Given sorted unique values {v_1, v_2, ..., v_m}, test candidate splits: T_i = (v_i + v_{i+1}) / 2.',
          'Converts a continuous numerical variable into a binary indicator: x ≤ T vs. x > T.',
          'Enables decision trees to handle non-linear numerical boundaries without requiring normalization.'
        ],
        formulaOrSyntax: 'Threshold Candidates: T_i = (v_i + v_{i+1}) / 2 for sorted unique values {v_1, v_2, ..., v_m}',
        realWorldApplication: 'Determining the optimal age split point (e.g., Age ≤ 42.5 vs. Age > 42.5) in health insurance risk scoring.'
      },
      {
        number: 17,
        code: '2.17',
        title: 'Random Forests',
        shortDescription: 'Powerhouse ensemble algorithm combining bootstrap aggregation with random feature subspacing.',
        concept: 'Random Forest is an ensemble learning method consisting of a collection of de-correlated decision trees. It introduces two sources of randomness: (1) Training each tree on a distinct bootstrap sample with replacement (Bagging), and (2) Selecting a random subset of features (typically √p) at each node split to prevent dominant features from creating correlated trees.',
        keyPoints: [
          'De-correlation: Restricting candidates to a random subset of features prevents all trees from choosing the same top split.',
          'Aggregation: Final prediction is determined by majority voting (classification) or mean averaging (regression).',
          'Out-of-Bag (OOB) Error: Unused bootstrap samples (~36.8%) provide built-in validation without separate validation sets.'
        ],
        formulaOrSyntax: 'Prediction: ŷ = mode{ h_b(x) }_{b=1}^{B} (Classification) or (1/B) Σ_{b=1}^{B} h_b(x) (Regression)',
        realWorldApplication: 'Real-time credit card transaction authorization detecting complex fraudulent patterns with low false-positive rates.'
      },
      {
        number: 18,
        code: '2.18',
        title: 'Bagging',
        shortDescription: 'Bootstrap Aggregating — parallel ensemble methodology designed to drastically reduce model prediction variance.',
        concept: 'Bagging (Bootstrap Aggregating) is an ensemble meta-algorithm designed to improve the stability and accuracy of high-variance machine learning algorithms. Given a standard dataset of size N, Bagging draws B independent bootstrap samples of size N with replacement, trains a base estimator on each, and aggregates their outputs.',
        keyPoints: [
          'Primary Benefit: Dramatically reduces variance without increasing bias.',
          'Parallelizable: Each base model is trained completely independently across CPU cores.',
          'Most effective with "unstable" high-variance learners (e.g., deep unpruned decision trees).'
        ],
        formulaOrSyntax: 'Variance Reduction: Var(f̄_B) = ρ σ² + [(1 - ρ) / B] σ², where ρ is the correlation between trees',
        realWorldApplication: 'Ensembling high-variance image defect recognition models to stabilize predictions in semiconductor wafer manufacturing.'
      },
      {
        number: 19,
        code: '2.19',
        title: 'Boosting',
        shortDescription: 'Sequential ensemble methodology converting weak base learners into a strong collective predictive model.',
        concept: 'Boosting is a sequential ensemble technique where base models are trained iteratively rather than in parallel. Each successive model focuses specifically on correcting the mistakes and residuals generated by its predecessors by re-weighting misclassified samples (AdaBoost) or fitting directly to gradient loss residuals (Gradient Boosting, XGBoost, LightGBM).',
        keyPoints: [
          'Sequential Execution: Model m relies on the output and residual errors of Model m-1.',
          'Primary Benefit: Drastically reduces model bias, creating exceptionally high accuracy.',
          'State-of-the-Art: Gradient Boosted Decision Trees (GBDT) dominate tabular competitions worldwide.'
        ],
        formulaOrSyntax: 'Additive Model: F_m(x) = F_{m-1}(x) + γ_m · h_m(x), where h_m minimizes empirical loss gradient',
        realWorldApplication: 'Search engine ranking algorithms (e.g. Yahoo/Google RankNet, LambdaMART) optimizing relevance ordering of query results.'
      },
      {
        number: 20,
        code: '2.20',
        title: 'Singular Value Decomposition (SVD)',
        shortDescription: 'Fundamental matrix factorization decomposing any rectangular matrix into orthogonal singular vectors and singular values.',
        concept: 'Singular Value Decomposition (SVD) is a theorem in linear algebra stating that any real m × n matrix A can be factored into the product of three matrices: A = U Σ V^T, where U is an m × m orthogonal matrix, Σ is an m × n diagonal matrix containing non-negative singular values, and V is an n × n orthogonal matrix.',
        keyPoints: [
          'U contains the left singular vectors (eigenvectors of A A^T).',
          'V contains the right singular vectors (eigenvectors of A^T A).',
          'Σ contains singular values σ_i ordered by decreasing magnitude, representing variance energy.',
          'Truncated SVD: Keeping the top k singular values yields the optimal low-rank matrix approximation (Eckart-Young Theorem).'
        ],
        formulaOrSyntax: 'Matrix Factorization: A_{m × n} = U_{m × m} · Σ_{m × n} · (V_{n × n})^T',
        realWorldApplication: 'Latent Semantic Analysis (LSA) in Natural Language Processing and collaborative filtering matrix factorization in Netflix recommender systems.'
      },
      {
        number: 21,
        code: '2.21',
        title: 'Principal Component Analysis (PCA)',
        shortDescription: 'Orthogonal linear transformation that projects high-dimensional data onto maximal variance coordinate axes.',
        concept: 'Principal Component Analysis (PCA) is an unsupervised dimensionality reduction technique that transforms a set of correlated variables into a smaller set of linearly uncorrelated variables called Principal Components. The 1st principal component accounts for the largest possible variance, and each succeeding component has the highest possible variance under the constraint that it is orthogonal to preceding components.',
        keyPoints: [
          'Mathematical steps: (1) Center the data (zero mean), (2) Compute the Covariance Matrix C = (1/n) X^T X, (3) Solve for eigenvalues and eigenvectors C v = λ v, (4) Sort eigenvectors by eigenvalue magnitude.',
          'Total Variance Explained: Ratio = λ_i / Σ λ_j represents proportion of information captured.',
          'Eliminates multicollinearity and enables high-dimensional 2D/3D visual cluster projections.'
        ],
        formulaOrSyntax: 'Covariance Eigendecomposition: Σ v_i = λ_i v_i | Transformed Data: Z = X · V_k',
        realWorldApplication: 'Compressing 10,000 spectral facial features in Eigenfaces computer vision models down to 50 principal components.'
      }
    ]
  }
];
