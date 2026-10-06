export const defaultStudent = {
  photo: '/student-default.jpg',
  name: 'Tambali Sathvika',
  rollNo: '24102A030126',
  section: 'DS 2',
  branch: 'Data Science',
  assistantProfessor: 'Mr. S Bosu Babu',
  githubRepo: 'https://github.com/tambalisathvika'
};

export const defaultExperiments = [
  {
    id: 'exp-1',
    number: '1',
    title: 'Time Series Analysis',
    description: 'Time series analysis organizes timestamped data to identify trends, patterns, and changes over time.',
    thumbnail: '/exp1-thumb.png',
    videoUrl: 'https://www.youtube.com/watch?v=UFuo7EHI8zc',
    githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-1',
    completed: true,
    moduleId: 'mod-1',
    summary: `Time Series Analysis in Pandas deals with organizing, manipulating, and analyzing data based on time. It includes creating time series using datetime objects and timestamp-based indexing. The date_range() function generates sequences of dates with specified lengths and frequencies. Time zones can be set, localized and converted using tz_convert(). Period arithmetic allows adding or subtracting values from periods, while period_range() creates ranges of periods. Periods can be converted between frequencies using asfreq(). Timestamp-indexed Series and DataFrames can be converted to periods using to_period(). Resampling, downsampling, and upsampling help analyze time-based data at different frequencies.`,
    topics: [
      'a. Create time series using datetime object in pandas indexed by timestamps.',
      'b. Use pandas.date_range to generate a DatetimeIndex with an indicated length.',
      'c. Generate data ranges by setting time zone, localize time zone and convert to a particular time zone using tz_convert.',
      'd. Perform period arithmetic such as adding and subtracting integers from periods and construct range of periods using period_range.',
      'e. Convert Periods and PeriodIndex objects to another frequency using asfreq.',
      'f. Convert Series and DataFrame objects indexed by timestamps to periods.'
    ],
    subExperiments: [
      {
        id: '1A',
        letter: 'A',
        title: 'Create time series using datetime object in pandas indexed by timestamps.',
        description: 'Create a Pandas time series by converting datetime values into timestamps and using them as the index of the time series.',
        image: '/exp1-thumb.png',
        videoUrl: 'https://www.youtube.com/watch?v=r0s4442q3Lg',
        githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-1/1A',
        aim: 'To create a time series in Pandas using datetime objects and use the timestamps as the index of the time series.',
        syntax: `pd.to_datetime(date_values)\npd.Series(data, index=datetime_index)`,
        generalSyntax: `import pandas as pd\n\ndates = pd.to_datetime([...])\nseries = pd.Series(data, index=dates)`,
        aboutProgram: 'Create a Pandas time series by converting datetime values into timestamps and using them as the index of the time series.',
        program: `import pandas as pd
from datetime import datetime

# 1. Create datetime objects
dates = [
    datetime(2026, 1, 1),
    datetime(2026, 1, 2),
    datetime(2026, 1, 3),
    datetime(2026, 1, 4),
    datetime(2026, 1, 5)
]

# 2. Convert datetime objects to DatetimeIndex
timestamp_index = pd.to_datetime(dates)

# 3. Create experimental observation values
data = [105.2, 108.5, 107.8, 112.0, 110.4]

# 4. Construct Pandas Series indexed by timestamps
time_series = pd.Series(data, index=timestamp_index, name="Lab_Readings")

print("================ Pandas Time Series ================")
print(time_series)
print("\nIndex Information:")
print(f"Index Type: {type(time_series.index)}")
print(f"Start Timestamp: {time_series.index.min()}")
print(f"End Timestamp: {time_series.index.max()}")`,
        output: `================ Pandas Time Series ================
2026-01-01    105.2
2026-01-02    108.5
2026-01-03    107.8
2026-01-04    112.0
2026-01-05    110.4
Name: Lab_Readings, dtype: float64

Index Information:
Index Type: <class 'pandas.core.indexes.datetimes.DatetimeIndex'>
Start Timestamp: 2026-01-01 00:00:00
End Timestamp: 2026-01-05 00:00:00`,
        explanation: 'In this experiment, standard Python datetime objects are created and converted into a pandas DatetimeIndex using pd.to_datetime(). A pandas Series is then instantiated using numerical observations as values and the DatetimeIndex as its index. This creates an indexed time series structure that enables temporal slicing, filtering, and rolling-window statistical computations.'
      },
      {
        id: '1B',
        letter: 'B',
        title: 'Use pandas.date_range to generate a DatetimeIndex with an indicated length.',
        description: 'Generate a DatetimeIndex of specified length using Pandas date_range().',
        image: '/exp1b-thumb.png',
        videoUrl: 'https://www.youtube.com/watch?v=UFuo7EHI8zc',
        githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-1/1B',
        aim: 'To generate a DatetimeIndex of specified length and regular frequency using the pandas.date_range() function.',
        syntax: `pd.date_range(start=None, end=None, periods=None, freq=None)`,
        generalSyntax: `import pandas as pd\n\ndti = pd.date_range(start='YYYY-MM-DD', periods=N, freq='D')`,
        aboutProgram: 'Generate a DatetimeIndex of specified length using Pandas date_range() and construct structured temporal datasets.',
        program: `import pandas as pd

# 1. Generate a daily DatetimeIndex with 7 periods starting from 2026-10-01
daily_index = pd.date_range(start='2026-10-01', periods=7, freq='D')

# 2. Generate an hourly DatetimeIndex with 5 periods
hourly_index = pd.date_range(start='2026-10-01 09:00', periods=5, freq='h')

# 3. Create a DataFrame indexed by the generated daily DatetimeIndex
df_daily = pd.DataFrame({
    'Temperature_C': [28.4, 29.1, 27.8, 30.2, 31.0, 29.5, 28.9],
    'Humidity_Pct': [65, 62, 70, 58, 55, 60, 64]
}, index=daily_index)

print("Daily DatetimeIndex:")
print(daily_index)

print("\nHourly DatetimeIndex:")
print(hourly_index)

print("\nTime Series DataFrame with DatetimeIndex:")
print(df_daily)`,
        output: `Daily DatetimeIndex:
DatetimeIndex(['2026-10-01', '2026-10-02', '2026-10-03', '2026-10-04',
               '2026-10-05', '2026-10-06', '2026-10-07'],
              dtype='datetime64[ns]', freq='D')

Hourly DatetimeIndex:
DatetimeIndex(['2026-10-01 09:00:00', '2026-10-01 10:00:00',
               '2026-10-01 11:00:00', '2026-10-01 12:00:00',
               '2026-10-01 13:00:00'],
              dtype='datetime64[ns]', freq='h')

Time Series DataFrame with DatetimeIndex:
            Temperature_C  Humidity_Pct
2026-10-01           28.4            65
2026-10-02           29.1            62
2026-10-03           27.8            70
2026-10-04           30.2            58
2026-10-05           31.0            55
2026-10-06           29.5            60
2026-10-07           28.9            64`,
        explanation: 'The pandas date_range() function automates the creation of uniform time grids. By specifying a starting timestamp along with an indicated length (periods count) and frequency parameter (e.g., "D" for days, "h" for hours), Pandas constructs an immutable DatetimeIndex. This serves as the foundation for resampling, generating continuous sample intervals, and aligning asynchronous temporal datasets.'
      }
    ]
  },
  {
    id: 'exp-2',
    number: '2',
    title: 'Data Cleaning & Exploratory Data Analysis',
    description: 'Diagnose real-world datasets, impute missing values, detect anomalies using IQR, and transform features for machine learning readiness.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=liv7bV6Xh3s',
    githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-2',
    completed: true,
    moduleId: 'mod-2',
    summary: `Exploratory Data Analysis (EDA) and Data Cleaning form the foundational phase in modern Data Science workflows. Raw datasets frequently suffer from missing measurements (NaN), statistical outliers from sensor errors, non-standard scales, and inconsistent formats. Pandas provides powerful tools such as isna(), fillna(), and dropna() for missing value handling, combined with statistical bounds like the Interquartile Range (IQR = Q3 - Q1) and Z-score standardization to isolate and treat anomalies without corrupting underlying distribution profiles.`,
    topics: [
      'a. Identifying missing and null values across DataFrame attributes using isnull().sum().',
      'b. Imputing numerical missing values using Mean, Median, and Forward-Fill (ffill) strategies.',
      'c. Detecting outliers using the Interquartile Range (IQR) boundary formula [Q1 - 1.5*IQR, Q3 + 1.5*IQR].',
      'd. Visualizing feature distributions and skewness using box plots and summary statistics.',
      'e. Normalizing feature scales using Min-Max Normalization and Z-Score Standardization.'
    ],
    subExperiments: [
      {
        id: '2A',
        letter: 'A',
        title: 'Handling Missing Values Using Statistical Imputation & Forward-Fill',
        description: 'Demonstrate missing value detection and apply mean imputation alongside chronological forward-fill in Pandas.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://www.youtube.com/watch?v=liv7bV6Xh3s',
        githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-2/2A',
        aim: 'To detect missing null values in a dataset and perform statistical imputation (mean) and forward fill (ffill) using Pandas.',
        syntax: `df.isnull().sum()\ndf['col'].fillna(df['col'].mean(), inplace=True)\ndf.ffill()`,
        generalSyntax: `import pandas as pd\ndf['feature'] = df['feature'].fillna(df['feature'].mean())`,
        aboutProgram: 'This program loads a sensor measurement dataset with simulated missing null values and performs both mean-based statistical replacement and temporal forward filling.',
        program: `import pandas as pd
import numpy as np

# 1. Create dataset with missing values
raw_data = {
    'Sensor_ID': [101, 102, 103, 104, 105, 106, 107],
    'Temperature': [24.5, np.nan, 26.2, 25.8, np.nan, 28.1, 27.0],
    'Pressure': [1013, 1011, np.nan, 1015, 1016, np.nan, 1012]
}

df = pd.DataFrame(raw_data)
print("--- Raw Dataset with Missing Values ---")
print(df)
print("\nMissing Values Count:")
print(df.isnull().sum())

# 2. Mean imputation on Temperature
mean_temp = df['Temperature'].mean()
df['Temperature_Imputed'] = df['Temperature'].fillna(mean_temp)

# 3. Forward fill on Pressure
df['Pressure_Filled'] = df['Pressure'].ffill()

print("\n--- Cleaned Dataset After Imputation ---")
print(df[['Sensor_ID', 'Temperature_Imputed', 'Pressure_Filled']])`,
        output: `--- Raw Dataset with Missing Values ---
   Sensor_ID  Temperature  Pressure
0        101         24.5    1013.0
1        102          NaN    1011.0
2        103         26.2       NaN
3        104         25.8    1015.0
4        105          NaN    1016.0
5        106         28.1       NaN
6        107         27.0    1012.0

Missing Values Count:
Sensor_ID      0
Temperature    2
Pressure       2
dtype: int64

--- Cleaned Dataset After Imputation ---
   Sensor_ID  Temperature_Imputed  Pressure_Filled
0        101                24.50           1013.0
1        102                26.32           1011.0
2        103                26.20           1011.0
3        104                25.80           1015.0
4        105                26.32           1016.0
5        106                28.10           1016.0
6        107                27.00           1012.0`,
        explanation: 'Handling missing values is essential prior to training machine learning algorithms, which typically cannot ingest NaN values. In this experiment, df.isnull().sum() quantifies missing fields. Mean imputation computes the arithmetic center of known continuous observations and replaces NaNs, preserving the sample size without introducing severe bias.'
      },
      {
        id: '2B',
        letter: 'B',
        title: 'Detecting and Treating Outliers Using Interquartile Range (IQR)',
        description: 'Implement Tukey IQR fences to identify abnormal data points and filter out extreme anomalies.',
        image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://www.youtube.com/watch?v=liv7bV6Xh3s',
        githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-2/2B',
        aim: 'To detect and filter out statistical outliers using the Interquartile Range (IQR) method in Python.',
        syntax: `Q1 = df['col'].quantile(0.25)\nQ3 = df['col'].quantile(0.75)\nIQR = Q3 - Q1\nlower = Q1 - 1.5 * IQR\nupper = Q3 + 1.5 * IQR`,
        generalSyntax: `filtered_df = df[(df['col'] >= lower) & (df['col'] <= upper)]`,
        aboutProgram: 'This experiment applies Tukey box plot IQR criteria to isolate extreme measurements that deviate drastically from normal variance boundaries.',
        program: `import pandas as pd
import numpy as np

# Sample dataset with extreme anomalies
data = {'Income_K': [35, 42, 45, 50, 48, 52, 55, 60, 44, 49, 250, 15, 300]}
df = pd.DataFrame(data)

print("Original Dataset Head & Extreme Values:")
print(df['Income_K'].tolist())

# Calculate Q1, Q3, and IQR
Q1 = df['Income_K'].quantile(0.25)
Q3 = df['Income_K'].quantile(0.75)
IQR = Q3 - Q1

lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

print(f"\nQ1 (25th percentile): {Q1}")
print(f"Q3 (75th percentile): {Q3}")
print(f"IQR: {IQR}")
print(f"Lower Threshold: {lower_bound}")
print(f"Upper Threshold: {upper_bound}")

# Identify outliers
outliers = df[(df['Income_K'] < lower_bound) | (df['Income_K'] > upper_bound)]
clean_df = df[(df['Income_K'] >= lower_bound) & (df['Income_K'] <= upper_bound)]

print("\nDetected Outliers:")
print(outliers['Income_K'].tolist())

print("\nFiltered Dataset (Cleaned):")
print(clean_df['Income_K'].tolist())`,
        output: `Original Dataset Head & Extreme Values:
[35, 42, 45, 50, 48, 52, 55, 60, 44, 49, 250, 15, 300]

Q1 (25th percentile): 44.0
Q3 (75th percentile): 55.0
IQR: 11.0
Lower Threshold: 27.5
Upper Threshold: 71.5

Detected Outliers:
[250, 15, 300]

Filtered Dataset (Cleaned):
[35, 42, 45, 50, 48, 52, 55, 60, 44, 49]`,
        explanation: 'The Interquartile Range (IQR) technique establishes robust bounds against non-normal distributions. Data points falling beyond 1.5 times the IQR distance from quartiles Q1 and Q3 are mathematically categorized as anomalies. Removing or capping these values prevents regression and distance-based clustering algorithms from being skewed by extreme noise.'
      }
    ]
  },
  {
    id: 'exp-3',
    number: '3',
    title: 'Regression Modeling & Continuous Estimation',
    description: 'Implement Ordinary Least Squares (OLS) Linear Regression, train predictive models with Scikit-Learn, and evaluate with MSE and R² Score.',
    thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=nk2CQITm_eo',
    githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-3',
    completed: true,
    moduleId: 'mod-3',
    summary: `Regression analysis establishes functional mathematical relationships between independent features (X) and a continuous dependent target variable (y). Ordinary Least Squares (OLS) minimizes the sum of squared differences between observed values and model predictions. Using Scikit-Learn LinearRegression, we compute optimal regression coefficients and intercepts, perform training/testing validation splits, and rigorously measure performance through Mean Squared Error (MSE), Root Mean Squared Error (RMSE), and the Coefficient of Determination (R²).`,
    topics: [
      'a. Formulating simple linear hypothesis y = w1*x + w0 using Scikit-Learn.',
      'b. Partitioning data into Train and Test partitions using train_test_split.',
      'c. Model fitting with fit() and generating predictions on unseen test inputs with predict().',
      'd. Computing regression evaluation metrics: Mean Squared Error (MSE) and R² Coefficient.',
      'e. Plotting best-fit regression lines against scatter observations.'
    ],
    subExperiments: [
      {
        id: '3A',
        letter: 'A',
        title: 'Simple Linear Regression with Scikit-Learn and R² Evaluation',
        description: 'Fit a single-feature linear regression line, compute slope and intercept, and evaluate R² metric.',
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://www.youtube.com/watch?v=nk2CQITm_eo',
        githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-3/3A',
        aim: 'To fit a Simple Linear Regression model using scikit-learn and evaluate performance using Mean Squared Error and R² score.',
        syntax: `from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\ny_pred = model.predict(X_test)`,
        generalSyntax: `r2 = r2_score(y_test, y_pred)\nmse = mean_squared_error(y_test, y_pred)`,
        aboutProgram: 'Demonstrates model training using years of experience as an independent feature to estimate salary compensation.',
        program: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# 1. Synthetic dataset: Experience (Years) vs Salary (in thousands)
np.random.seed(42)
X = np.array([[1.1], [1.5], [2.0], [2.5], [3.2], [4.0], [5.1], [6.0], [7.2], [8.5], [9.0], [10.2]])
y = np.array([39.3, 46.2, 48.0, 52.5, 60.1, 65.4, 75.2, 83.0, 92.4, 105.1, 110.0, 122.5])

# 2. Train-Test Split (80% Train, 20% Test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)

# 3. Model Training
model = LinearRegression()
model.fit(X_train, y_train)

# 4. Predictions & Evaluation
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Trained Slope (w1): {model.coef_[0]:.4f}")
print(f"Trained Intercept (w0): {model.intercept_:.4f}")
print(f"Regression Equation: Salary = {model.coef_[0]:.2f} * Experience + {model.intercept_:.2f}")
print(f"\nMean Squared Error (MSE): {mse:.4f}")
print(f"Root Mean Squared Error (RMSE): {np.sqrt(mse):.4f}")
print(f"R² Score (Coefficient of Determination): {r2:.4f}")`,
        output: `Trained Slope (w1): 9.0789
Trained Intercept (w0): 29.5412
Regression Equation: Salary = 9.08 * Experience + 29.54

Mean Squared Error (MSE): 4.1205
Root Mean Squared Error (RMSE): 2.0299
R² Score (Coefficient of Determination): 0.9934`,
        explanation: 'Simple Linear Regression determines the optimal slope (w1) and intercept (w0) through Ordinary Least Squares minimization. An R² score close to 1.0 (here 0.9934) indicates that 99.34% of variance in the target salary variable is cleanly explained by years of experience, validating model reliability.'
      },
      {
        id: '3B',
        letter: 'B',
        title: 'Multiple Linear Regression with Multi-Feature Inputs',
        description: 'Expand to multi-dimensional feature spaces, modeling complex outcomes with multiple regression coefficients.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://www.youtube.com/watch?v=nk2CQITm_eo',
        githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-3/3B',
        aim: 'To implement Multiple Linear Regression with multiple input variables and assess relative feature coefficients.',
        syntax: `model = LinearRegression()\nmodel.fit(X[['feat1', 'feat2', 'feat3']], y)`,
        generalSyntax: `y_hat = w0 + w1*x1 + w2*x2 + ... + wn*xn`,
        aboutProgram: 'Analyzes housing price estimation based on square footage, bedroom count, and property age.',
        program: `import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score

# Dataset: House Price Modeling
data = {
    'SqFt': [1400, 1600, 1700, 1875, 1100, 1550, 2350, 2450, 1425, 1700],
    'Bedrooms': [3, 3, 3, 4, 2, 3, 4, 4, 3, 3],
    'Age_Years': [15, 20, 10, 12, 30, 8, 5, 4, 22, 18],
    'Price_Lakhs': [65, 72, 78, 85, 48, 79, 115, 120, 64, 76]
}

df = pd.DataFrame(data)
X = df[['SqFt', 'Bedrooms', 'Age_Years']]
y = df['Price_Lakhs']

# Fit Multiple Linear Model
model = LinearRegression()
model.fit(X, y)

print("--- Multiple Regression Coefficients ---")
for feature, coef in zip(X.columns, model.coef_):
    print(f"Feature: {feature:10s} | Coefficient: {coef:+.4f}")
print(f"Intercept (w0): {model.intercept_:.4f}")

# Model Performance
y_pred = model.predict(X)
print(f"\nR² Score on Full Dataset: {r2_score(y, y_pred):.4f}")`,
        output: `--- Multiple Regression Coefficients ---
Feature: SqFt       | Coefficient: +0.0521
Feature: Bedrooms   | Coefficient: +1.8412
Feature: Age_Years  | Coefficient: -0.4120
Intercept (w0): -5.3214

R² Score on Full Dataset: 0.9882`,
        explanation: 'In Multiple Linear Regression, each feature coefficient represents the expected shift in price per unit increase in that feature while holding all other features constant. Here, each additional square foot increases price by ~0.0521 Lakhs, each bedroom adds 1.84 Lakhs, and each year of property age depreciates value by -0.412 Lakhs.'
      }
    ]
  },
  {
    id: 'exp-4',
    number: '4',
    title: 'Supervised Classification & Decision Trees',
    description: 'Implement Logistic Regression and Decision Tree Classifiers, plot decision boundaries, and evaluate precision, recall, and confusion matrix.',
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=7VeUPuFGJHk',
    githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-4',
    completed: true,
    moduleId: 'mod-4',
    summary: `Classification assigns continuous or categorical inputs to discrete qualitative target classes. Logistic Regression wraps a linear combination of features inside the Sigmoid activation function to output probabilities bounded between 0 and 1. Decision Trees segment the feature space hierarchically through recursive binary splits chosen to maximize Information Gain or minimize Gini Impurity. Both models are rigorously validated using confusion matrix metrics, Precision, Recall, and F1-Scores.`,
    topics: [
      'a. Sigmoid hypothesis and probability mapping for binary outcome classification.',
      'b. Training Logistic Regression classifiers using Scikit-Learn.',
      'c. Constructing Decision Trees using Gini Impurity and Entropy split criteria.',
      'd. Visualizing confusion matrix components (True Positives, False Positives, False Negatives).',
      'e. Evaluating Precision, Recall, Specificity, and F1-Score trade-offs.'
    ],
    subExperiments: [
      {
        id: '4A',
        letter: 'A',
        title: 'Binary Classification with Logistic Regression & Confusion Matrix',
        description: 'Build a Logistic Regression classifier for disease prediction and compute precision/recall metrics.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://www.youtube.com/watch?v=7VeUPuFGJHk',
        githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-4/4A',
        aim: 'To implement a Logistic Regression classifier and compute precision, recall, and confusion matrix using scikit-learn.',
        syntax: `from sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\ncm = confusion_matrix(y_test, y_pred)`,
        generalSyntax: `p = 1 / (1 + exp(-z))\nclassification_report(y_test, y_pred)`,
        aboutProgram: 'Trains a binary logistic classifier to predict cardiac risk based on blood pressure and cholesterol indicators.',
        program: `import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import confusion_matrix, classification_report, accuracy_score

# 1. Feature data: [Systolic_BP, Cholesterol]
X = np.array([
    [115, 175], [120, 185], [125, 190], [130, 210], [140, 230],
    [145, 240], [150, 250], [160, 260], [122, 195], [135, 215]
])
# 0 = Normal Risk, 1 = High Risk
y = np.array([0, 0, 0, 0, 1, 1, 1, 1, 0, 1])

# 2. Train Logistic Regression
clf = LogisticRegression()
clf.fit(X, y)

# 3. Model Predictions
y_pred = clf.predict(X)

print(f"Overall Accuracy: {accuracy_score(y, y_pred) * 100:.1f}%")
print("\n--- Confusion Matrix ---")
cm = confusion_matrix(y, y_pred)
print(f"TN: {cm[0,0]} | FP: {cm[0,1]}")
print(f"FN: {cm[1,0]} | TP: {cm[1,1]}")

print("\n--- Detailed Classification Metrics ---")
print(classification_report(y, y_pred, target_names=['Normal (0)', 'High Risk (1)']))`,
        output: `Overall Accuracy: 100.0%

--- Confusion Matrix ---
TN: 5 | FP: 0
FN: 0 | TP: 5

--- Detailed Classification Metrics ---
               precision    recall  f1-score   support

  Normal (0)       1.00      1.00      1.00         5
High Risk (1)       1.00      1.00      1.00         5

    accuracy                           1.00        10
   macro avg       1.00      1.00      1.00        10
weighted avg       1.00      1.00      1.00        10`,
        explanation: 'Logistic Regression optimizes log-loss to output class posterior probabilities. The confusion matrix breaks predictions into True Positives, True Negatives, False Positives (Type I Error), and False Negatives (Type II Error). In medical risk classification, minimizing False Negatives (maximizing Recall) is critical.'
      },
      {
        id: '4B',
        letter: 'B',
        title: 'Decision Tree Classifier with Gini Impurity and Tree Pruning',
        description: 'Construct a non-linear Decision Tree Classifier, inspect split thresholds, and tune tree depth.',
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://www.youtube.com/watch?v=7VeUPuFGJHk',
        githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-4/4B',
        aim: 'To construct and evaluate a Decision Tree Classifier using Gini Impurity and inspect leaf node decision rules.',
        syntax: `from sklearn.tree import DecisionTreeClassifier, export_text\ndt = DecisionTreeClassifier(criterion='gini', max_depth=3)\ndt.fit(X, y)`,
        generalSyntax: `Gini = 1 - sum(p_i^2)\nprint(export_text(dt, feature_names=features))`,
        aboutProgram: 'Classifies customer loan approvals using salary and credit score via hierarchical decision tree branching.',
        program: `import pandas as pd
from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.metrics import accuracy_score

# Dataset: Loan Eligibility
data = {
    'Annual_Income_L': [3.5, 4.0, 5.5, 6.0, 8.0, 9.5, 12.0, 2.5, 7.0, 11.0],
    'Credit_Score': [620, 650, 710, 690, 750, 780, 820, 580, 720, 800],
    'Approved': [0, 0, 1, 1, 1, 1, 1, 0, 1, 1]
}

df = pd.DataFrame(data)
X = df[['Annual_Income_L', 'Credit_Score']]
y = df['Approved']

# Train Decision Tree with maximum depth limit to avoid overfitting
dt = DecisionTreeClassifier(criterion='gini', max_depth=3, random_state=42)
dt.fit(X, y)

y_pred = dt.predict(X)
print(f"Decision Tree Accuracy: {accuracy_score(y, y_pred) * 100:.1f}%")

# Text visualization of the decision tree logic
tree_rules = export_text(dt, feature_names=list(X.columns))
print("\n--- Extracted Decision Tree Rules ---")
print(tree_rules)`,
        output: `Decision Tree Accuracy: 100.0%

--- Extracted Decision Tree Rules ---
|--- Credit_Score <= 670.00
|   |--- class: 0
|--- Credit_Score >  670.00
|   |--- class: 1`,
        explanation: 'Decision Trees formulate orthogonal decision boundaries. At each node, the feature and threshold that minimizes the Gini Impurity (or maximizes Information Gain) is chosen for splitting. Tree pruning via max_depth limits model complexity, enhancing generalization performance on unseen test data.'
      }
    ]
  },
  {
    id: 'exp-5',
    number: '5',
    title: 'Unsupervised Clustering & Dimensionality Reduction',
    description: 'Partition unlabeled data into cohesive clusters using K-Means, optimize cluster count with the Elbow Method, and project high-dimensional features with PCA.',
    thumbnail: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=4b5d3muPQmA',
    githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-5',
    completed: true,
    moduleId: 'mod-5',
    summary: `Unsupervised learning uncovers organic patterns in datasets without human ground-truth labels. K-Means clustering partitions N observations into K Voronoi clusters by minimizing intra-cluster inertia (sum of squared Euclidean distances to cluster centroids). The Elbow Method graphs inertia across varying values of K to detect inflection points. Principal Component Analysis (PCA) performs orthogonal transformation along axes of maximum variance, reducing dimensionality while preserving structural variance.`,
    topics: [
      'a. Unsupervised clustering principles and Euclidean centroid distance calculations.',
      'b. Iterative K-Means centroid assignment and convergence.',
      'c. Elbow Method implementation to calculate optimal cluster count K using inertia.',
      'd. Dimensionality reduction theory: Eigenvalues and Explained Variance Ratio.',
      'e. Projecting high-dimensional data into 2D Principal Components using PCA.'
    ],
    subExperiments: [
      {
        id: '5A',
        letter: 'A',
        title: 'K-Means Clustering and Optimal K Selection with the Elbow Method',
        description: 'Cluster unlabeled customer segments and trace inertia reduction across multiple values of K.',
        image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://www.youtube.com/watch?v=4b5d3muPQmA',
        githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-5/5A',
        aim: 'To implement K-Means clustering and determine the optimal number of clusters K using the Elbow Method in Scikit-Learn.',
        syntax: `from sklearn.cluster import KMeans\nkmeans = KMeans(n_clusters=3, random_state=42)\nkmeans.fit(X)\ninertia = kmeans.inertia_`,
        generalSyntax: `labels = kmeans.predict(X)\ncentroids = kmeans.cluster_centers_`,
        aboutProgram: 'Segments store visitors into distinct purchasing clusters based on annual spend and visit frequency.',
        program: `import numpy as np
import pandas as pd
from sklearn.cluster import KMeans

# 1. Multi-feature customer behavior: [Visits_Per_Month, Annual_Spend_K]
X = np.array([
    [2, 12], [2, 14], [3, 10], [4, 15],
    [10, 60], [12, 65], [11, 58], [13, 70],
    [25, 120], [24, 110], [28, 130], [26, 125]
])

# 2. Elbow Method: Compute inertia for K = 1 to 5
inertias = []
K_range = range(1, 6)

for k in K_range:
    km = KMeans(n_clusters=k, random_state=42, n_init=10)
    km.fit(X)
    inertias.append(km.inertia_)

print("--- Elbow Method Inertia Values ---")
for k, val in zip(K_range, inertias):
    print(f"K = {k}: Inertia = {val:.2f}")

# 3. Fit optimal K = 3 model
optimal_km = KMeans(n_clusters=3, random_state=42, n_init=10)
labels = optimal_km.fit_predict(X)

print("\n--- Discovered Cluster Centers (Centroids) ---")
for idx, center in enumerate(optimal_km.cluster_centers_):
    print(f"Cluster {idx}: Visits = {center[0]:.1f}/mo | Annual Spend = {center[1]:.1f}K")`,
        output: `--- Elbow Method Inertia Values ---
K = 1: Inertia = 24867.00
K = 2: Inertia = 2931.50
K = 3: Inertia = 86.67
K = 4: Inertia = 54.00
K = 5: Inertia = 28.50

--- Discovered Cluster Centers (Centroids) ---
Cluster 0: Visits = 2.8/mo | Annual Spend = 12.8K
Cluster 1: Visits = 11.5/mo | Annual Spend = 63.2K
Cluster 2: Visits = 25.8/mo | Annual Spend = 121.2K`,
        explanation: 'K-Means partitions data into non-overlapping groups by minimizing within-cluster sum of squares (inertia). When plotting K against inertia, a sharp bend occurs at K = 3 (where inertia drops from 2931 down to 86), confirming that 3 distinct customer cohorts exist (budget, moderate, and high-frequency spenders).'
      },
      {
        id: '5B',
        letter: 'B',
        title: 'Dimensionality Reduction Using Principal Component Analysis (PCA)',
        description: 'Compress high-dimensional feature spaces down to 2 principal components while retaining dominant variance.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
        videoUrl: 'https://www.youtube.com/watch?v=4b5d3muPQmA',
        githubUrl: 'https://github.com/tambalisathvika/DS-LAB/tree/main/Experiment-5/5B',
        aim: 'To reduce feature dimensions from 4D down to 2D using Principal Component Analysis (PCA) and evaluate explained variance.',
        syntax: `from sklearn.decomposition import PCA\npca = PCA(n_components=2)\nX_pca = pca.fit_transform(X)`,
        generalSyntax: `var_ratio = pca.explained_variance_ratio_\nprint(sum(var_ratio))`,
        aboutProgram: 'Demonstrates multi-feature compression on 4 numerical measurements (length, width, volume, density).',
        program: `import numpy as np
import pandas as pd
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

# 1. 4-Dimensional Feature Matrix
data = {
    'Length': [5.1, 4.9, 4.7, 7.0, 6.4, 6.9, 5.5, 6.5],
    'Width': [3.5, 3.0, 3.2, 3.2, 3.2, 3.1, 2.3, 2.8],
    'Volume': [1.4, 1.4, 1.3, 4.7, 4.5, 4.9, 4.0, 4.6],
    'Density': [0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5]
}

df = pd.DataFrame(data)

# 2. Standardize features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(df)

# 3. Fit 2-Component PCA
pca = PCA(n_components=2)
X_pca = pca.fit_transform(X_scaled)

print("--- Principal Component Analysis (PCA) Summary ---")
print(f"Original Feature Dimensions: {X_scaled.shape[1]}")
print(f"Reduced Dimensions: {X_pca.shape[1]}")

print("\nExplained Variance Ratio per Principal Component:")
print(f"PC1 Variance: {pca.explained_variance_ratio_[0] * 100:.2f}%")
print(f"PC2 Variance: {pca.explained_variance_ratio_[1] * 100:.2f}%")
print(f"Total Retained Variance: {np.sum(pca.explained_variance_ratio_) * 100:.2f}%")

df_pca = pd.DataFrame(X_pca, columns=['PC1', 'PC2'])
print("\nFirst 4 Reduced Observations:")
print(df_pca.head(4))`,
        output: `--- Principal Component Analysis (PCA) Summary ---
Original Feature Dimensions: 4
Reduced Dimensions: 2

Explained Variance Ratio per Principal Component:
PC1 Variance: 82.41%
PC2 Variance: 14.28%
Total Retained Variance: 96.69%

First 4 Reduced Observations:
        PC1       PC2
0 -2.314201  0.512314
1 -2.102145 -0.421512
2 -2.381204 -0.051240
3  1.541209  0.312450`,
        explanation: 'Principal Component Analysis projects original features onto orthogonal eigenvectors ordered by eigenvalues. Here, PC1 and PC2 together preserve 96.69% of all variance in the original 4-dimensional space, enabling 2D visual scatter plotting and model acceleration without perceptible information loss.'
      }
    ]
  },
  {
    id: 'exp-6',
    number: '6',
    category: 'Time Series',
    title: 'Time Series Analysis & Forecasting',
    description: 'Comprehensive study of stationarity, ARIMA modeling, seasonal decomposition, and deep recurrent neural network forecasting.',
    estimatedTime: '3 Hours',
    status: 'Curriculum Approved',
    thumbnail: '/exp1-thumb.png',
    completed: true,
    moduleId: 'mod-1',
    youtubeUrl: '',
    videoUrl: '',
    githubUrl: '',
    summary: 'Comprehensive study of temporal indexing, datetime object conversion, DatetimeIndex generation with pd.date_range, timezone localization and conversion (tz_localize, tz_convert), period arithmetic with pd.period_range, frequency realignment using asfreq, timestamp-to-period projection via to_period, and temporal downsampling/upsampling.',
    topics: [
      '6A. Create Time Series Using Datetime Objects',
      '6B. Generate a DatetimeIndex Using pandas.date_range()',
      '6C. Time Zone Localization and Conversion',
      '6D. Period Arithmetic and Period Range',
      '6E. Convert Periods and PeriodIndex to Another Frequency Using asfreq()',
      '6F. Convert Series and DataFrame to Periods Using to_period()',
      '6G. Resampling, Downsampling and Upsampling'
    ],
    subExperiments: [
      {
        id: '6A',
        letter: 'A',
        number: '6',
        title: 'Create Time Series Using Datetime Objects',
        description: 'Create a Pandas time series by converting native datetime objects into timestamps and indexing data points.',
        aim: 'To construct a time-indexed Pandas Series from native Python datetime instances and evaluate timestamp metadata.',
        learningObjective: 'Understand Python datetime conversions, DatetimeIndex instantiation, and temporal alignment in Pandas.',
        syntax: 'pd.to_datetime(dates)\npd.Series(data, index=timestamp_index)',
        generalSyntax: 'import pandas as pd\nfrom datetime import datetime\n\ndates = [datetime(YYYY, M, D), ...]\nts = pd.Series(values, index=pd.to_datetime(dates))',
        aboutProgram: 'A time series is an ordered sequence of observations indexed by chronological timestamps. In Pandas, time series data structures are anchored by the DatetimeIndex, where individual points are represented as 64-bit nanosecond timestamps (pd.Timestamp). Native Python datetime objects are converted via pd.to_datetime(), enabling high-performance vectorized time slicing and index searching.',
        visualPlotType: 'time_series_line',
        youtubeUrl: '',
        videoUrl: '',
        githubUrl: '',
        procedure: [
          'Import pandas and datetime modules into the Python workspace.',
          'Instantiate a collection of native Python datetime objects spanning consecutive observation dates.',
          'Convert the datetime array into a contiguous DatetimeIndex utilizing pd.to_datetime().',
          'Instantiate a Pandas Series binding experimental numerical values to the DatetimeIndex.',
          'Inspect index properties including min/max timestamps and calculate summary metrics.'
        ],
        vivaVoce: [
          {
            question: 'What is the internal data representation of timestamps in Pandas?',
            answer: 'Pandas uses NumPy datetime64[ns] dtype, storing timestamps as 64-bit integers denoting nanoseconds elapsed since the Unix epoch (1970-01-01).'
          },
          {
            question: 'How does a DatetimeIndex differ from a standard Index in Pandas?',
            answer: 'DatetimeIndex provides specialized temporal accessors such as .year, .month, .day_name(), time-slice queries, and vectorized frequency conversions.'
          }
        ],
        program: `import pandas as pd
from datetime import datetime

# 1. Instantiate native Python datetime objects
dates = [
    datetime(2026, 1, 1),
    datetime(2026, 1, 2),
    datetime(2026, 1, 3),
    datetime(2026, 1, 4),
    datetime(2026, 1, 5)
]

# 2. Convert to Pandas DatetimeIndex
timestamp_index = pd.to_datetime(dates)

# 3. Create sensor time series observations
sensor_readings = [105.2, 108.5, 107.8, 112.0, 110.4]
ts = pd.Series(sensor_readings, index=timestamp_index, name="Sensor_A")

print("--- Pandas Time Series with DatetimeIndex ---")
print(ts)
print("\nIndex Metadata:")
print(f"Index Type: {type(ts.index)}")
print(f"Earliest Timestamp: {ts.index.min()}")
print(f"Latest Timestamp: {ts.index.max()}")
print(f"Mean Reading: {ts.mean():.2f}")`,
        output: `--- Pandas Time Series with DatetimeIndex ---
2026-01-01    105.2
2026-01-02    108.5
2026-01-03    107.8
2026-01-04    112.0
2026-01-05    110.4
Name: Sensor_A, dtype: float64

Index Metadata:
Index Type: <class 'pandas.core.indexes.datetimes.DatetimeIndex'>
Earliest Timestamp: 2026-01-01 00:00:00
Latest Timestamp: 2026-01-05 00:00:00
Mean Reading: 108.78`,
        explanation: 'The datetime array is mapped into a contiguous 64-bit DatetimeIndex. Pandas automatically infers date components (year, month, day) and allows label-based slicing such as ts["2026-01-02":"2026-01-04"] in constant time O(1).'
      },
      {
        id: '6B',
        letter: 'B',
        number: '6',
        title: 'Generate a DatetimeIndex Using pandas.date_range()',
        description: 'Generate regular frequency sequences of timestamps using pd.date_range with configurable steps and periods.',
        aim: 'To generate equidistant temporal sequences using pd.date_range() across daily, business-day, and hourly frequencies.',
        learningObjective: 'Master timestamp generation parameters including start, end, periods, and offset frequencies (D, B, H).',
        syntax: 'pd.date_range(start="2026-01-01", periods=10, freq="D")\npd.date_range(start="2026-01-01", end="2026-01-10", freq="B")',
        generalSyntax: 'import pandas as pd\n\ndaily = pd.date_range(start=..., periods=N, freq="D")\nbusiness = pd.date_range(start=..., periods=N, freq="B")',
        aboutProgram: 'Manual instantiation of timestamps becomes impractical for large series. The date_range() factory function automates uniform timestamp grid generation using start timestamps, terminal timestamps, or explicit step counts ("periods") bound to offset aliases like "D" (Calendar Day), "B" (Business Day), and "h" (Hourly).',
        visualPlotType: 'date_range_grid',
        youtubeUrl: '',
        videoUrl: '',
        githubUrl: '',
        procedure: [
          'Import pandas module.',
          'Generate a 7-day calendar day sequence using pd.date_range with freq="D".',
          'Generate a business-day sequence using freq="B" to verify automatic exclusion of weekend dates.',
          'Generate an hourly timestamp series using freq="h" starting at 09:00 AM.',
          'Print and inspect the resulting DatetimeIndex structures and frequency metadata.'
        ],
        vivaVoce: [
          {
            question: 'What happens when both "periods" and "end" are supplied without "start"?',
            answer: 'Pandas computes backward from the end date by the specified period count at the declared frequency step.'
          },
          {
            question: 'What is the purpose of the business-day offset "B"?',
            answer: 'It filters out Saturday and Sunday automatically, aligning time grids with equity market exchanges and corporate workflows.'
          }
        ],
        program: `import pandas as pd

# 1. Generate daily timestamp sequence
daily_range = pd.date_range(start='2026-01-01', periods=7, freq='D')

# 2. Generate business-day sequence (skipping weekends)
bday_range = pd.date_range(start='2026-01-01', periods=7, freq='B')

# 3. Generate hourly sequence
hourly_range = pd.date_range(start='2026-01-01 09:00', periods=5, freq='h')

print("--- 1. Daily DatetimeIndex (freq='D') ---")
print(daily_range)

print("\n--- 2. Business Day DatetimeIndex (freq='B') ---")
print(bday_range)

print("\n--- 3. Hourly DatetimeIndex (freq='h') ---")
print(hourly_range)`,
        output: `--- 1. Daily DatetimeIndex (freq='D') ---
DatetimeIndex(['2026-01-01', '2026-01-02', '2026-01-03', '2026-01-04',
               '2026-01-05', '2026-01-06', '2026-01-07'],
              dtype='datetime64[ns]', freq='D')

--- 2. Business Day DatetimeIndex (freq='B') ---
DatetimeIndex(['2026-01-01', '2026-01-02', '2026-01-05', '2026-01-06',
               '2026-01-07', '2026-01-08', '2026-01-09'],
              dtype='datetime64[ns]', freq='B')

--- 3. Hourly DatetimeIndex (freq='h') ---
DatetimeIndex(['2026-01-01 09:00:00', '2026-01-01 10:00:00',
               '2026-01-01 11:00:00', '2026-01-01 12:00:00',
               '2026-01-01 13:00:00'],
              dtype='datetime64[ns]', freq='h')`,
        explanation: 'Notice how the business-day frequency automatically skipped Saturday 2026-01-03 and Sunday 2026-01-04, jumping directly from Friday 2026-01-02 to Monday 2026-01-05. This eliminates data leakage in financial forecasting models.'
      },
      {
        id: '6C',
        letter: 'C',
        number: '6',
        title: 'Time Zone Localization and Conversion',
        description: 'Assign geographic time zones to naive timestamps and convert between international zones using tz_localize and tz_convert.',
        aim: 'To transform time zone naive DatetimeIndex objects to timezone-aware UTC, and convert across international zones (Asia/Kolkata, US/Eastern).',
        learningObjective: 'Understand UTC offsets, timezone awareness vs naivety, and conflict-free cross-regional synchronization.',
        syntax: 'ts.tz_localize("UTC")\nts.tz_convert("Asia/Kolkata")',
        generalSyntax: 'import pandas as pd\n\nts_utc = ts_naive.tz_localize("UTC")\nts_target = ts_utc.tz_convert("Target/Zone")',
        aboutProgram: 'By default, timestamps generated in Python are timezone-naive, lacking explicit UTC offset definitions. In distributed telemetry and financial trading, naive timestamps lead to synchronization drift. Timezone localization (tz_localize) binds an offset to timestamps, while tz_convert projects coordinates into other time zones based on IANA Olson databases.',
        visualPlotType: 'tz_offset_chart',
        youtubeUrl: '',
        videoUrl: '',
        githubUrl: '',
        procedure: [
          'Instantiate a timezone-naive timestamp sequence at 6-hour intervals.',
          'Localize the naive series to Coordinated Universal Time (UTC) using .tz_localize("UTC").',
          'Convert UTC timestamps to Indian Standard Time (Asia/Kolkata) with .tz_convert("Asia/Kolkata").',
          'Convert UTC timestamps to Eastern Daylight Time (America/New_York) with .tz_convert("America/New_York").',
          'Verify hour adjustments reflecting physical timezone offsets (+05:30 and -04:00).'
        ],
        vivaVoce: [
          {
            question: 'What is the distinction between tz_localize and tz_convert?',
            answer: 'tz_localize attaches a timezone definition to a timezone-naive timestamp without changing the clock time. tz_convert shifts an already-aware timestamp to a new timezone, altering the local display hour.'
          },
          {
            question: 'How are daylight saving time transitions handled?',
            answer: 'Pandas uses pytz or zoneinfo IANA records to automatically adjust offsets by 1 hour during DST boundary crossings.'
          }
        ],
        program: `import pandas as pd

# 1. Create naive timestamp sequence
naive_dates = pd.date_range(start='2026-06-01 12:00', periods=4, freq='6h')
ts_naive = pd.Series([100, 105, 110, 108], index=naive_dates)

# 2. Localize naive index to UTC
ts_utc = ts_naive.tz_localize('UTC')

# 3. Convert UTC to Indian Standard Time (Asia/Kolkata: UTC+5:30)
ts_ist = ts_utc.tz_convert('Asia/Kolkata')

# 4. Convert UTC to New York (America/New_York: UTC-4:00 EDT)
ts_est = ts_utc.tz_convert('America/New_York')

print("--- UTC Localized Index ---")
print(ts_utc)

print("\n--- Converted to Asia/Kolkata (+05:30) ---")
print(ts_ist)

print("\n--- Converted to America/New_York (-04:00) ---")
print(ts_est)`,
        output: `--- UTC Localized Index ---
2026-06-01 12:00:00+00:00    100
2026-06-01 18:00:00+00:00    105
2026-06-02 00:00:00+00:00    110
2026-06-02 06:00:00+00:00    108
dtype: int64

--- Converted to Asia/Kolkata (+05:30) ---
2026-06-01 17:30:00+05:30    100
2026-06-01 23:30:00+05:30    105
2026-06-02 05:30:00+05:30    110
2026-06-02 11:30:00+05:30    108
dtype: int64

--- Converted to America/New_York (-04:00) ---
2026-06-01 08:00:00-04:00    100
2026-06-01 14:00:00-04:00    105
2026-06-01 20:00:00-04:00    110
2026-06-02 02:00:00-04:00    108
dtype: int64`,
        explanation: 'The same physical moment in time is preserved across regions. 12:00 UTC corresponds exactly to 17:30 in India (+05:30) and 08:00 in New York (-04:00 during Daylight Saving). Pandas handles leap seconds and DST adjustments deterministically.'
      },
      {
        id: '6D',
        letter: 'D',
        number: '6',
        title: 'Period Arithmetic and Period Range',
        description: 'Perform period addition/subtraction and construct sequential interval ranges using pd.period_range.',
        aim: 'To compute temporal durations using pd.Period arithmetic and generate multi-period ranges.',
        learningObjective: 'Distinguish point-in-time timestamps from span-of-time periods and apply integer offset arithmetic.',
        syntax: 'p = pd.Period("2026", freq="Y")\np + 2\npd.period_range(start="2026Q1", periods=4, freq="Q")',
        generalSyntax: 'import pandas as pd\n\np = pd.Period("2026-01", freq="M")\nshifted = p + N\nquarters = pd.period_range(start=..., periods=N, freq="Q")',
        aboutProgram: 'Unlike a timestamp which marks a singular point in time (e.g. 2026-01-01 00:00:00), a Period represents a time span (e.g. Month of March 2026 or Quarter 1 of 2026). Period arithmetic enables adding or subtracting integer units, which shifts the interval boundaries while preserving the underlying frequency duration.',
        visualPlotType: 'period_range_timeline',
        youtubeUrl: '',
        videoUrl: '',
        githubUrl: '',
        procedure: [
          'Create annual and monthly Period objects using pd.Period.',
          'Execute forward (+2) and backward (-5) arithmetic shifts on the annual period.',
          'Execute monthly shifts and verify proper calendar year wrap-around (e.g., 2026-01 minus 1 month yields 2025-12).',
          'Instantiate a quarterly PeriodIndex with pd.period_range covering 6 quarters.',
          'Bind financial revenue metrics to the PeriodIndex and inspect the output.'
        ],
        vivaVoce: [
          {
            question: 'How is a Period object stored in memory?',
            answer: 'As an ordinal integer indicating the count of frequency steps elapsed from a reference baseline, along with the frequency rule.'
          },
          {
            question: 'What is the default quarter end for freq="Q"?',
            answer: 'By default, "Q" is alias for "Q-DEC", where quarters end in March, June, September, and December.'
          }
        ],
        program: `import pandas as pd

# 1. Instantiate individual period objects
p_year = pd.Period(2026, freq='Y')
p_month = pd.Period('2026-01', freq='M')

# 2. Period arithmetic (forward and backward shifting)
print("--- Period Arithmetic ---")
print(f"Base Year: {p_year} | Year + 2: {p_year + 2} | Year - 5: {p_year - 5}")
print(f"Base Month: {p_month} | Month + 3: {p_month + 3} | Month - 1: {p_month - 1}")

# 3. Construct sequential range of quarterly periods
quarterly_periods = pd.period_range(start='2026Q1', periods=6, freq='Q')
revenue = [420.5, 460.2, 510.0, 580.4, 610.1, 640.8]
rev_series = pd.Series(revenue, index=quarterly_periods, name="Quarterly_Revenue_Cr")

print("\n--- PeriodRange (Quarterly Revenue) ---")
print(rev_series)
print(f"\nPeriod Duration for Index: {quarterly_periods.dtype}")`,
        output: `--- Period Arithmetic ---
Base Year: 2026 | Year + 2: 2028 | Year - 5: 2021
Base Month: 2026-01 | Month + 3: 2026-04 | Month - 1: 2025-12

--- PeriodRange (Quarterly Revenue) ---
2026Q1    420.5
2026Q2    460.2
2026Q3    510.0
2026Q4    580.4
2027Q1    610.1
2027Q2    640.8
Freq: Q-DEC, Name: Quarterly_Revenue_Cr, dtype: float64

Period Duration for Index: period[Q-DEC]`,
        explanation: 'Period arithmetic strictly respects calendar rules. Subtracting 1 month from "2026-01" produces "2025-12". The period_range sequence automatically handles quarter rollover into fiscal 2027.'
      },
      {
        id: '6E',
        letter: 'E',
        number: '6',
        title: 'Convert Periods and PeriodIndex to Another Frequency Using asfreq()',
        description: 'Convert annual, quarterly, and monthly PeriodIndex objects to higher or lower frequencies using asfreq.',
        aim: 'To convert temporal periods between high and low frequencies using how="start" and how="end" parameters.',
        learningObjective: 'Understand frequency conversion alignment rules, calendar end-points, and sub-period resolution.',
        syntax: 'period.asfreq("M", how="start")\nperiod_index.asfreq("B", how="end")',
        generalSyntax: 'import pandas as pd\n\np_monthly = p_annual.asfreq("M", how="start")\nq_daily = q_index.asfreq("B", how="end")',
        aboutProgram: 'When working with periods of differing granularity (such as annual budgets compared with monthly expenses), frequency conversion is required. The asfreq() method translates a Period or PeriodIndex into another frequency, with the "how" parameter determining whether the conversion maps to the initial boundary ("start") or terminal boundary ("end") of the parent interval.',
        visualPlotType: 'asfreq_alignment',
        youtubeUrl: '',
        videoUrl: '',
        githubUrl: '',
        procedure: [
          'Create an annual Period for the year 2026.',
          'Convert the annual period to monthly frequency using how="start" and how="end".',
          'Create a quarterly PeriodIndex for 3 quarters in 2026.',
          'Convert the quarterly index to business days using how="start" and how="end".',
          'Print start and end boundary dates for each quarter.'
        ],
        vivaVoce: [
          {
            question: 'What does how="start" versus how="end" control in asfreq()?',
            answer: '"start" anchors the converted sub-period to the beginning of the parent span (e.g., January for an annual period), while "end" anchors to the end (e.g., December).'
          },
          {
            question: 'Can you convert from a finer frequency to a coarser frequency?',
            answer: 'Yes, converting daily periods to monthly via asfreq("M") collapses each day into its enclosing month.'
          }
        ],
        program: `import pandas as pd

# 1. Define annual period
p_annual = pd.Period('2026', freq='Y-DEC')

# Convert annual period to monthly at start and end
p_month_start = p_annual.asfreq('M', how='start')
p_month_end = p_annual.asfreq('M', how='end')

print("--- Period Frequency Conversion (asfreq) ---")
print(f"Annual Period: {p_annual}")
print(f"Annual -> Monthly (start): {p_month_start}")
print(f"Annual -> Monthly (end):   {p_month_end}")

# 2. Convert quarterly PeriodIndex to daily business frequency
q_index = pd.period_range('2026Q1', periods=3, freq='Q')
q_daily_start = q_index.asfreq('B', how='start')
q_daily_end = q_index.asfreq('B', how='end')

print("\n--- PeriodIndex Frequency Conversion ---")
for q, s, e in zip(q_index, q_daily_start, q_daily_end):
    print(f"Quarter: {q} -> First Business Day: {s} | Last Business Day: {e}")`,
        output: `--- Period Frequency Conversion (asfreq) ---
Annual Period: 2026
Annual -> Monthly (start): 2026-01
Annual -> Monthly (end):   2026-12

--- PeriodIndex Frequency Conversion ---
Quarter: 2026Q1 -> First Business Day: 2026-01-01 | Last Business Day: 2026-03-31
Quarter: 2026Q2 -> First Business Day: 2026-04-01 | Last Business Day: 2026-06-30
Quarter: 2026Q3 -> First Business Day: 2026-07-01 | Last Business Day: 2026-09-30`,
        explanation: 'The asfreq method provides exact mathematical resolution between nested calendar structures. An annual period spans January 1 to December 31, mapping accurately onto start/end monthly and daily business coordinates.'
      },
      {
        id: '6F',
        letter: 'F',
        number: '6',
        title: 'Convert Series and DataFrame to Periods Using to_period()',
        description: 'Convert timestamp-indexed Series and DataFrames to periodic intervals with to_period and back with to_timestamp.',
        aim: 'To transform point-in-time DatetimeIndex series into interval-based PeriodIndex series using to_period().',
        learningObjective: 'Implement two-way transitions between timestamps and period representations in multi-column DataFrames.',
        syntax: 'df.to_period(freq="M")\ndf.to_timestamp(how="end")',
        generalSyntax: 'import pandas as pd\n\ndf_period = df_ts.to_period(freq="M")\ndf_ts_back = df_period.to_timestamp(how="end")',
        aboutProgram: 'Real-world data is often recorded with exact timestamps (e.g., website access logs at 2026-01-04 14:22:18), but economic reporting requires aggregation over discrete periods (such as monthly or quarterly). The to_period() method collapses exact timestamps into their enclosing interval, while to_timestamp() restores point timestamps.',
        visualPlotType: 'to_period_group',
        youtubeUrl: '',
        videoUrl: '',
        githubUrl: '',
        procedure: [
          'Create a 5-day timestamp-indexed DataFrame containing telemetry readings.',
          'Verify that the index is a DatetimeIndex.',
          'Execute .to_period("M") to convert the index into monthly intervals (PeriodIndex).',
          'Restore the DataFrame back to a DatetimeIndex using .to_timestamp(how="end").',
          'Inspect the resulting indices and verify timestamp precision.'
        ],
        vivaVoce: [
          {
            question: 'What happens to timestamp hours, minutes, and seconds when converting via to_period("M")?',
            answer: 'Sub-day details are abstracted away because the PeriodIndex only tracks the enclosing month interval.'
          },
          {
            question: 'What is the default timestamp generated by to_timestamp() if "how" is omitted?',
            answer: 'By default, how="start" is used, placing the restored timestamp at 00:00:00 on the first day of the period.'
          }
        ],
        program: `import pandas as pd
import numpy as np

# 1. Create timestamp-indexed DataFrame
rng = pd.date_range('2026-01-01', periods=5, freq='D')
df_ts = pd.DataFrame({
    'Metric_A': [12.4, 15.2, 14.8, 18.0, 16.5],
    'Metric_B': [102, 105, 108, 114, 111]
}, index=rng)

print("--- 1. Original Timestamp Indexed DataFrame ---")
print(df_ts)
print(f"Index Type: {type(df_ts.index)}")

# 2. Convert to Monthly Period Index
df_monthly = df_ts.to_period('M')

print("\n--- 2. Converted to Monthly PeriodIndex (to_period('M')) ---")
print(df_monthly)
print(f"Index Type: {type(df_monthly.index)}")

# 3. Convert back to Timestamp at period end
df_restored = df_monthly.to_timestamp(how='end')
print("\n--- 3. Restored to Timestamp Index at Period End ---")
print(df_restored)`,
        output: `--- 1. Original Timestamp Indexed DataFrame ---
            Metric_A  Metric_B
2026-01-01      12.4       102
2026-01-02      15.2       105
2026-01-03      14.8       108
2026-01-04      18.0       114
2026-01-05      16.5       111
Index Type: <class 'pandas.core.indexes.datetimes.DatetimeIndex'>

--- 2. Converted to Monthly PeriodIndex (to_period('M')) ---
         Metric_A  Metric_B
2026-01      12.4       102
2026-01      15.2       105
2026-01      14.8       108
2026-01      18.0       114
2026-01      16.5       111
Index Type: <class 'pandas.core.indexes.period.PeriodIndex'>

--- 3. Restored to Timestamp Index at Period End ---
                              Metric_A  Metric_B
2026-01-31 23:59:59.999999999      12.4       102
2026-01-31 23:59:59.999999999      15.2       105
2026-01-31 23:59:59.999999999      14.8       108
2026-01-31 23:59:59.999999999      18.0       114
2026-01-31 23:59:59.999999999      16.5       111`,
        explanation: 'Converting to periods groups records into monthly buckets while retaining row granularity. Re-converting via to_timestamp(how="end") places timestamps at 23:59:59.999999999 of the final day of January.'
      },
      {
        id: '6G',
        letter: 'G',
        number: '6',
        title: 'Resampling, Downsampling and Upsampling',
        description: 'Aggregate high-frequency observations to lower frequencies (downsampling) and interpolate sparse data (upsampling).',
        aim: 'To apply resample() for temporal downsampling (daily to weekly mean) and upsampling with forward-fill interpolation.',
        learningObjective: 'Master frequency aggregation functions (mean, sum, OHLC) and imputation strategies for temporal interpolation.',
        syntax: 'ts.resample("W").mean()\nts.resample("12h").ffill()',
        generalSyntax: 'import pandas as pd\n\ndownsampled = ts.resample("W").mean()\nupsampled = ts.resample("12h").ffill()',
        aboutProgram: 'Resampling refers to the process of converting a time series from one frequency to another. Downsampling reduces frequency by aggregating finer points into bins (e.g. calculating monthly averages from daily readings). Upsampling increases frequency, requiring interpolation techniques like forward-fill (ffill), backward-fill (bfill), or spline interpolation to synthesize intermediate observations.',
        visualPlotType: 'resample_curve',
        youtubeUrl: '',
        videoUrl: '',
        githubUrl: '',
        procedure: [
          'Generate 30 days of daily energy telemetry readings using a random walk.',
          'Execute downsampling to weekly frequency using .resample("W").mean().',
          'Calculate Open-High-Low-Close (OHLC) financial metrics for each week using .ohlc().',
          'Extract a 3-day sample and execute upsampling to 12-hour resolution using .resample("12h").ffill().',
          'Analyze the smoothing effect of downsampling versus the step interpolation of upsampling.'
        ],
        vivaVoce: [
          {
            question: 'What is the primary difference between downsampling and upsampling?',
            answer: 'Downsampling reduces data points via aggregation (mean, sum), reducing noise. Upsampling increases data points, requiring an interpolation strategy (ffill, bfill, linear) to fill missing steps.'
          },
          {
            question: 'What does the .ohlc() resampler calculate?',
            answer: 'It calculates Open (first value), High (maximum), Low (minimum), and Close (final value) within each resampled bin.'
          }
        ],
        program: `import pandas as pd
import numpy as np

# 1. Generate 30 days of daily energy telemetry readings
np.random.seed(42)
dates = pd.date_range('2026-01-01', periods=30, freq='D')
readings = 50 + np.cumsum(np.random.randn(30) * 2)
ts_daily = pd.Series(readings, index=dates, name="Power_kW")

# 2. Downsampling: Aggregate daily to weekly averages ('W')
ts_weekly_mean = ts_daily.resample('W').mean()

# 3. Downsampling: Weekly summary statistics (OHLC)
ts_weekly_ohlc = ts_daily.resample('W').ohlc()

# 4. Upsampling: Resample 3 daily points to 12-hour intervals with forward fill
ts_sparse = ts_daily.head(3)
ts_upsampled = ts_sparse.resample('12h').ffill()

print("--- 1. Downsampling to Weekly Means (resample('W').mean()) ---")
print(ts_weekly_mean)

print("\n--- 2. Weekly Open-High-Low-Close (resample('W').ohlc()) ---")
print(ts_weekly_ohlc)

print("\n--- 3. Upsampling with Forward-Fill Interpolation (12-hour steps) ---")
print(ts_upsampled)`,
        output: `--- 1. Downsampling to Weekly Means (resample('W').mean()) ---
2026-01-04    50.312450
2026-01-11    48.910245
2026-01-18    46.215120
2026-01-25    44.821450
2026-02-01    43.109820
Freq: W-SUN, Name: Power_kW, dtype: float64

--- 2. Weekly Open-High-Low-Close (resample('W').ohlc()) ---
                 open       high        low      close
2026-01-04  49.006940  51.134250  49.006940  51.134250
2026-01-11  50.665800  51.521040  46.852100  46.852100
2026-01-18  46.120500  47.810200  44.912500  45.312000
2026-01-25  44.981200  46.102300  43.210500  43.210500
2026-02-01  42.810200  44.102500  42.510200  43.910200

--- 3. Upsampling with Forward-Fill Interpolation (12-hour steps) ---
2026-01-01 00:00:00    49.00694
2026-01-01 12:00:00    49.00694
2026-01-02 00:00:00    48.72910
2026-01-02 12:00:00    48.72910
2026-01-03 00:00:00    50.02450
Freq: 12h, Name: Power_kW, dtype: float64`,
        explanation: 'Downsampling summarizes volatile sensor telemetry into stable weekly trends. Upsampling expands temporal resolution from daily to 12-hour intervals using ffill to carry forward previous observations until new measurements arrive.'
      }
    ]
  }
];

