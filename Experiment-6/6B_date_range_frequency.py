"""
Experiment 6B — Generate a DatetimeIndex Using pandas.date_range()
Mohan Babu University — School of Computing — Department of Data Science
"""
import pandas as pd

# 1. Generate daily timestamp sequence (freq='D')
daily_range = pd.date_range(start='2026-01-01', periods=7, freq='D')

# 2. Generate business-day sequence (freq='B', skipping weekends)
bday_range = pd.date_range(start='2026-01-01', periods=7, freq='B')

# 3. Generate hourly sequence (freq='h')
hourly_range = pd.date_range(start='2026-01-01 09:00', periods=5, freq='h')

print("--- 1. Daily DatetimeIndex (freq='D') ---")
print(daily_range)

print("\n--- 2. Business Day DatetimeIndex (freq='B') ---")
print(bday_range)

print("\n--- 3. Hourly DatetimeIndex (freq='h') ---")
print(hourly_range)
