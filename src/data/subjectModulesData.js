export const subjectTheoryModules = [
  {
    id: 'unit-1',
    code: 'UNIT I',
    title: 'Introduction to Data Science & Mathematical Foundations',
    subtitle: 'Data Science Lifecycle, Linear Algebra & Probability Distributions',
    pdfFileName: 'Unit-1_Data_Science_Foundations.pdf',
    pageCount: 38,
    credits: '3 Credits • Theory Course',
    author: 'Department of Data Science',
    syllabus: [
      '1.1 Defining Data Science: Evolution, facets of data, data science process and lifecycle phases.',
      '1.2 Mathematical Foundations: Vectors, matrices, matrix multiplication, determinants, and eigenvalues.',
      '1.3 Probability & Distributions: Random variables, Bayes Theorem, Normal/Gaussian distribution, Poisson distribution.',
      '1.4 Descriptive Statistics: Measures of central tendency (Mean, Median, Mode) and dispersion (Variance, Standard Deviation, IQR).',
      '1.5 Python for Data Science: NumPy vectorized operations, Pandas core structures, broadcasting mechanisms.'
    ],
    summaryNotes: `Data Science is an interdisciplinary field synthesizing domain expertise, programming proficiency, and mathematical knowledge to extract actionable intelligence from structured and unstructured data. 

The standard lifecycle consists of:
1. Business/Domain Understanding: Defining the analytical hypothesis and objectives.
2. Data Acquisition & Gathering: Ingesting data across disparate relational, NoSQL, or API streaming pipelines.
3. Data Cleaning & Preparation: Rectifying missing observations, deduplication, and anomaly resolution.
4. Exploratory Data Analysis (EDA): Uncovering underlying geometries, skewness, and correlation structures.
5. Mathematical Modeling: Formulating mathematical hypotheses, estimating parameter matrices, and optimizing loss functions.
6. Deployment & Monitoring: Operationalizing models into production APIs and tracking distribution drift.

Key Mathematical Concepts:
- Vector Norms: L1-norm (Manhattan distance, sum of absolute coordinates) and L2-norm (Euclidean distance, square root of squared coordinates).
- Probability Density Functions: Gaussian distribution parameterized by mean μ and variance σ², satisfying 68-95-99.7 empirical rule.
- Bayes' Theorem: P(A|B) = [P(B|A) * P(A)] / P(B), foundational to Naive Bayes and posterior updating.`,
    examQuestions: [
      {
        q: '1. Describe the various stages of the Data Science Lifecycle with an architectural workflow diagram. (10 Marks)',
        a: 'The lifecycle comprises Domain Understanding, Data Acquisition, Data Cleaning, EDA, Model Building, Model Evaluation, and Operational Deployment. Each stage operates in feedback loops where evaluation metrics may trigger feature re-engineering.'
      },
      {
        q: '2. State Bayes\' Theorem and explain its mathematical significance in probabilistic machine learning. (5 Marks)',
        a: 'Bayes\' Theorem computes posterior probability P(Hypothesis|Evidence) by multiplying likelihood P(Evidence|Hypothesis) with prior P(Hypothesis) normalized by marginal evidence P(Evidence).'
      },
      {
        q: '3. Distinguish between L1 and L2 vector regularization norms with geometric interpretation. (5 Marks)',
        a: 'L1 norm produces diamond-shaped constraints inducing sparse feature weights (Lasso). L2 norm produces spherical constraints penalizing large weights smoothly without forcing zero coefficients (Ridge).'
      }
    ]
  },
  {
    id: 'unit-2',
    code: 'UNIT II',
    title: 'Data Wrangling, Cleaning & Exploratory Data Analysis',
    subtitle: 'Data Ingestion, Imputation Strategies, Tukey IQR & Feature Scaling',
    pdfFileName: 'Unit-2_Data_Wrangling_PreProcessing.pdf',
    pageCount: 44,
    credits: '3 Credits • Theory Course',
    author: 'Department of Data Science',
    syllabus: [
      '2.1 Data Ingestion & Formats: Parsing CSV, JSON, Parquet, and SQL relational tables.',
      '2.2 Handling Incomplete Data: Missing Completely at Random (MCAR), Missing at Random (MAR), Mean/Median vs KNN imputation.',
      '2.3 Outlier Diagnostics: Tukey Interquartile Range (IQR) fences, Z-Scores, and Mahalanobis multi-dimensional distance.',
      '2.4 Feature Engineering & Transformation: Min-Max Normalization, Standard Z-Score Standardization, Box-Cox Power transformations.',
      '2.5 Categorical Encoding: Nominal One-Hot Encoding, Ordinal Label Encoding, and Target/Mean encoding.'
    ],
    summaryNotes: `Real-world empirical data is inherently noisy, incomplete, and heterogeneous. Data wrangling transforms raw, unstructured data into clean, machine-interpretable tensors.

Missing Data Typology:
- MCAR (Missing Completely at Random): Null probability is entirely independent of observed and unobserved features. Deletion or simple statistical imputation is mathematically unbiased.
- MAR (Missing at Random): Missingness depends systematically on other observable variables. Conditional regression or MICE (Multivariate Imputation by Chained Equations) is required.
- MNAR (Missing Not at Random): Missingness is tied to the unobserved value itself (e.g., high-income respondents refusing to report salary).

Outlier Detection Principles:
- Tukey IQR Criterion: Calculates lower fence Q1 - 1.5*IQR and upper fence Q3 + 1.5*IQR. Points outside are flagged as anomalous.
- Z-Score: Computes Z = (x - μ) / σ. Under standard normality assumptions, points with |Z| > 3 are statistical outliers (<0.27% probability).

Feature Scaling:
- Min-Max Scaling: x_scaled = (x - x_min) / (x_max - x_min) ∈ [0, 1]. Highly sensitive to outliers.
- Standard Z-Score: x_scaled = (x - μ) / σ, yielding mean zero and unit variance. Preferred for Gradient Descent and PCA.`,
    examQuestions: [
      {
        q: '1. What are the different types of missing data mechanisms? Compare statistical imputation vs forward fill. (10 Marks)',
        a: 'Examines MCAR, MAR, and MNAR. Mean/Median imputation preserves sample size but suppresses variance. Forward fill is appropriate exclusively for chronologically ordered temporal streams.'
      },
      {
        q: '2. Derive the mathematical formulation of Tukey IQR fences and explain why it is more robust than Z-score. (5 Marks)',
        a: 'IQR relies on order statistics (median, percentiles) which have a 50% breakdown point, whereas mean and standard deviation in Z-scores have a 0% breakdown point and are corrupted by extreme outliers.'
      }
    ]
  },
  {
    id: 'unit-3',
    code: 'UNIT III',
    title: 'Statistical Inference, Estimation & Regression Analysis',
    subtitle: 'Sampling Distributions, Hypothesis Testing, OLS & Multiple Regression',
    pdfFileName: 'Unit-3_Statistical_Inference_Regression.pdf',
    pageCount: 52,
    credits: '3 Credits • Theory Course',
    author: 'Department of Data Science',
    syllabus: [
      '3.1 Sampling Theory & Central Limit Theorem: Sample variance, standard error, t-distribution vs standard normal.',
      '3.2 Hypothesis Testing Framework: Null hypothesis H0, Alternative hypothesis H1, Type I (alpha) and Type II (beta) errors.',
      '3.3 Parametric & Non-Parametric Tests: Student’s t-test (one-sample, paired), Chi-Square test of independence, ANOVA F-test.',
      '3.4 Simple Linear Regression: Ordinary Least Squares (OLS) closed-form derivation, Gauss-Markov assumptions.',
      '3.5 Multiple Regression Diagnostics: Multicollinearity, Variance Inflation Factor (VIF), Homoscedasticity, Residual normality.'
    ],
    summaryNotes: `Statistical Inference provides the mathematical framework for drawing population generalizations from finite empirical samples.

Central Limit Theorem (CLT):
Regardless of the parent distribution's underlying shape, the sampling distribution of the sample mean converges toward a Gaussian Normal Distribution as sample size n increases (typically n ≥ 30), with standard error SE = σ / sqrt(n).

Hypothesis Testing Paradigm:
- Null Hypothesis (H0): Represents the status quo or absence of effect.
- Alternative Hypothesis (H1): Represents the research claim.
- p-value: Probability of observing test results at least as extreme as observed data, assuming H0 is true. If p < α (commonly 0.05), reject H0.

Ordinary Least Squares (OLS) Regression:
Minimizes the residual sum of squares: RSS = sum((y_i - (w1*x_i + w0))^2).
Closed form solution:
- w1 = Cov(X, y) / Var(X) = sum((x - x_bar)(y - y_bar)) / sum((x - x_bar)^2)
- w0 = y_bar - w1 * x_bar

Assumptions of OLS (Gauss-Markov Theorem):
1. Linearity in parameters.
2. Strict exogeneity: E[ε | X] = 0.
3. Homoscedasticity: Constant error variance Var(ε_i) = σ².
4. No multicollinearity: Rank(X) = p + 1.`,
    examQuestions: [
      {
        q: '1. State and prove the Gauss-Markov Theorem for Ordinary Least Squares (OLS) estimators. (10 Marks)',
        a: 'Proves that under classical assumptions, OLS estimators are BLUE (Best Linear Unbiased Estimators), possessing the minimum variance among all linear unbiased estimators.'
      },
      {
        q: '2. Explain the concept of Multicollinearity and how Variance Inflation Factor (VIF) detects it. (5 Marks)',
        a: 'Multicollinearity occurs when predictor variables are highly correlated. VIF_j = 1 / (1 - R_j²). VIF > 5 or 10 signals severe inflation in coefficient standard errors.'
      }
    ]
  },
  {
    id: 'unit-4',
    code: 'UNIT IV',
    title: 'Supervised Learning, Classification & Decision Trees',
    subtitle: 'Logistic Regression, Information Gain, Gini Impurity & Performance Metrics',
    pdfFileName: 'Unit-4_Supervised_Machine_Learning.pdf',
    pageCount: 48,
    credits: '3 Credits • Theory Course',
    author: 'Department of Data Science',
    syllabus: [
      '4.1 Classification Paradigm: Binary vs Multi-class targets, decision boundaries, Bayes optimal classifier.',
      '4.2 Logistic Regression: Odds ratio, logit link function, Sigmoid activation, Maximum Likelihood Estimation (MLE).',
      '4.3 Decision Tree Construction: ID3 and CART algorithms, Shannon Entropy, Information Gain, Gini Impurity.',
      '4.4 Overfitting Mitigation: Cost-complexity pruning, minimum impurity decrease, maximum tree depth constraints.',
      '4.5 Evaluation Metrics: Confusion matrix, Precision, Recall, F1-Score, ROC curve, Area Under Curve (AUC).'
    ],
    summaryNotes: `Classification models map continuous or categorical feature vectors into discrete categorical class labels.

Logistic Regression Mathematical Foundation:
Linear regression is unsuited for probabilities because predictions can fall outside [0, 1]. Logistic regression models log-odds:
logit(p) = ln(p / (1 - p)) = w^T * x + b
Solving for p yields the Sigmoid activation function:
p = 1 / (1 + exp(-(w^T * x + b)))
Parameters are estimated via Maximum Likelihood Estimation (MLE) minimizing Binary Cross-Entropy Loss:
L(w) = - 1/N * sum(y_i * log(p_i) + (1 - y_i) * log(1 - p_i))

Decision Tree Splitting Metrics:
- Shannon Entropy: H(S) = - sum(p_i * log2(p_i))
- Information Gain: IG(S, A) = H(S) - sum((|S_v| / |S|) * H(S_v))
- Gini Impurity (CART): Gini(S) = 1 - sum(p_i²)

Model Evaluation:
- Precision: TP / (TP + FP) — fraction of positive predictions that were accurate.
- Recall (Sensitivity): TP / (TP + FN) — fraction of actual positives identified.
- F1-Score: 2 * (Precision * Recall) / (Precision + Recall) — harmonic mean balanced against class imbalance.`,
    examQuestions: [
      {
        q: '1. Compare and contrast Information Gain (Entropy) versus Gini Impurity in Decision Tree splitting. (10 Marks)',
        a: 'Information Gain requires logarithmic calculations (computationally heavier) and tends to favor features with many distinct values. Gini Impurity computes squared probabilities (computationally faster) and measures the probability of misclassification.'
      },
      {
        q: '2. In medical cancer diagnostics, explain whether Precision or Recall is the primary optimization objective. (5 Marks)',
        a: 'Recall is critical because a False Negative means a malignant tumor goes undetected (fatal), whereas a False Positive only requires secondary confirmatory biopsy.'
      }
    ]
  },
  {
    id: 'unit-5',
    code: 'UNIT V',
    title: 'Unsupervised Learning, Clustering & Dimensionality Reduction',
    subtitle: 'K-Means, Agglomerative Hierarchical, PCA & Big Data Architectures',
    pdfFileName: 'Unit-5_Clustering_Dimensionality_Reduction.pdf',
    pageCount: 50,
    credits: '3 Credits • Theory Course',
    author: 'Department of Data Science',
    syllabus: [
      '5.1 Unsupervised Learning Principles: Latent structure discovery, density estimation, curse of dimensionality.',
      '5.2 K-Means Clustering: Lloyd algorithm, centroid updates, Voronoi tessellation, initialization sensitivity (K-Means++).',
      '5.3 Cluster Validation: Inertia elbow curve, Silhouette Coefficient (-1 to +1), Davies-Bouldin index.',
      '5.4 Hierarchical Clustering: Dendrogram interpretation, Single/Complete/Average linkage, Ward minimum variance.',
      '5.5 Principal Component Analysis (PCA): Covariance matrix, Eigenvalue-Eigenvector decomposition, Scree plot.'
    ],
    summaryNotes: `Unsupervised learning uncovers patterns in feature spaces without supervisory feedback or labeled ground truth.

K-Means Clustering Algorithm:
1. Initialize K cluster centroids randomly (or via K-Means++ weighted probability heuristic).
2. Assignment Step: Assign each sample x_i to the closest centroid c_k using Euclidean distance.
3. Update Step: Recompute each centroid c_k as the coordinate arithmetic mean of all assigned samples.
4. Repeat until centroid movement falls below convergence tolerance threshold ε.

Optimal K Determination:
- Elbow Method: Plots K vs. Within-Cluster Sum of Squares (Inertia). The inflection point signifies diminishing returns.
- Silhouette Coefficient: s(i) = (b(i) - a(i)) / max(a(i), b(i)), where a(i) is mean intra-cluster distance and b(i) is nearest-cluster distance. Values close to +1 denote cohesive clustering.

Principal Component Analysis (PCA):
Linear dimensionality reduction that identifies orthogonal axes of maximum variance:
1. Center feature matrix X by subtracting column means.
2. Compute Covariance Matrix: C = (1 / (N - 1)) * (X^T * X).
3. Compute Eigenvalues λ_i and Eigenvectors v_i: C * v_i = λ_i * v_i.
4. Sort eigenvectors in descending order of eigenvalues.
5. Project data into top k principal components: Z = X * V_k.
The explained variance ratio for component j is λ_j / sum(λ).`,
    examQuestions: [
      {
        q: '1. Derive the step-by-step mathematical algorithm for Principal Component Analysis (PCA). (10 Marks)',
        a: 'Details zero-centering data, deriving the empirical covariance matrix, finding characteristic polynomial roots det(C - λI) = 0, computing orthonormal eigenvectors, and projecting observations onto the reduced subspace.'
      },
      {
        q: '2. Discuss the sensitivity of K-Means to initial centroid placement and explain the K-Means++ initialization mechanism. (5 Marks)',
        a: 'Random initialization can trap algorithms in sub-optimal local minima. K-Means++ chooses initial centers iteratively with probability proportional to the squared distance from the closest existing center, spreading initial seeds.'
      }
    ]
  }
];
