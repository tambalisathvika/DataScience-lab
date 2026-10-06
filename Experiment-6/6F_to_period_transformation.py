"""
Experiment 6F — Convert Series and DataFrame to Periods Using to_period()
Mohan Babu University — School of Computing — Department of Data Science
"""
import pandas as pd

# 1. Discrete daily timestamp series
daily_timestamps = pd.date_range('2026-01-01', periods=5, freq='D')
ts = pd.Series([14.2, 15.8, 14.9, 16.5, 17.1], index=daily_timestamps)

print("--- 1. Original Timestamp-Indexed Series ---")
print(ts)
print("Index Class:", type(ts.index))

# 2. Transform to Monthly PeriodIndex using to_period()
ts_period = ts.to_period('M')
print("\n--- 2. Transformed to Period-Indexed Series (to_period) ---")
print(ts_period)
print("Index Class:", type(ts_period.index))

# 3. Restore to point-in-time timestamps using to_timestamp()
ts_restored = ts_period.to_timestamp()
print("\n--- 3. Restored to Timestamp Index (to_timestamp) ---")
print(ts_restored)
