"""
Experiment 6D — Period Arithmetic and Period Range
Mohan Babu University — School of Computing — Department of Data Science
"""
import pandas as pd

# 1. Base monthly period
month_p = pd.Period('2026-01', freq='M')
print(f"Base Period: {month_p}")
print(f"Forward by 3 Months (+3): {month_p + 3}")
print(f"Backward by 6 Months (-6): {month_p - 6}")

# 2. Quarterly period range
quarters = pd.period_range(start='2026Q1', periods=4, freq='Q')
print("\n--- 1. Fiscal Quarterly Range (PeriodIndex) ---")
print(quarters)

# 3. Monthly period index with financial observations
months = pd.period_range(start='2026-01', periods=5, freq='M')
revenue = pd.Series([120000, 135000, 128000, 142000, 150000], index=months)
print("\n--- 2. Monthly Revenue Series ---")
print(revenue)
