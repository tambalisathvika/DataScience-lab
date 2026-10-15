# ==============================================================================
# EXPERIMENT 7C: GROUPED AGGREGATIONS & EXPLORATORY DATA ANALYSIS (EDA)
# Course: Data Science Laboratory (22DS102006)
# Institution: Mohan Babu University (MBU), School of Computing
# Student: Tambali Sathvika (24102A030126)
# ==============================================================================

import pandas as pd

# Read the online Iris dataset
url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
try:
    df = pd.read_csv(url)
except Exception:
    import io
    fallback_iris = """sepal_length,sepal_width,petal_length,petal_width,species
5.1,3.5,1.4,0.2,setosa
4.9,3.0,1.4,0.2,setosa
4.7,3.2,1.3,0.2,setosa
4.6,3.1,1.5,0.2,setosa
5.0,3.6,1.4,0.2,setosa
7.0,3.2,4.7,1.4,versicolor
6.4,3.2,4.5,1.5,versicolor
6.9,3.1,4.9,1.5,versicolor
5.5,2.3,4.0,1.3,versicolor
6.5,2.8,4.6,1.5,versicolor
6.3,3.3,6.0,2.5,virginica
5.8,2.7,5.1,1.9,virginica
7.1,3.0,5.9,2.1,virginica
6.3,2.9,5.6,1.8,virginica
6.5,3.0,5.8,2.2,virginica"""
    df = pd.read_csv(io.StringIO(fallback_iris))

# Display first 5 records
print("First 5 Records:")
print(df.head())

# Display dataset information
print("\nDataset Information:")
print(df.info())

# Display statistical summary
print("\nStatistical Summary:")
print(df.describe())

# 1. GroupBy using a single column
print("\n1. GroupBy using a Single Column:")
group_single = df.groupby('species')['sepal_length'].agg(
    ['count', 'sum', 'mean', 'std', 'min', 'max']
)
print(group_single)

# 2. GroupBy using multiple columns
print("\n2. GroupBy using Multiple Columns:")
group_multiple = df.groupby(
    ['species', 'sepal_width']
)['sepal_length'].mean()
print(group_multiple.head(15))

# 3. Summary statistics for each species
print("\n3. Summary Statistics:")
summary = df.groupby('species').agg({
    'sepal_length': ['mean', 'std', 'min', 'max'],
    'sepal_width': ['mean', 'std', 'min', 'max'],
    'petal_length': ['mean', 'std', 'min', 'max'],
    'petal_width': ['mean', 'std', 'min', 'max']
})
print(summary)

# 4. Exploratory Data Analysis
print("\n4. Number of Records in Each Species:")
print(df['species'].value_counts())

print("\nAverage Petal Length by Species:")
print(df.groupby('species')['petal_length'].mean())

print("\nAverage Petal Width by Species:")
print(df.groupby('species')['petal_width'].mean())

print("\nMaximum Sepal Length by Species:")
print(df.groupby('species')['sepal_length'].max())
