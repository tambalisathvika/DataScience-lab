"""
Experiment 6G — Resampling, Downsampling and Upsampling
Mohan Babu University — School of Computing — Department of Data Science
"""
import pandas as pd
import numpy as np

# 1. High-frequency daily sensor readings (30 days)
np.random.seed(42)
dates = pd.date_range('2026-01-01', periods=30, freq='D')
daily_kw = pd.Series(48.0 + np.random.normal(0, 1.8, 30), index=dates, name='Power_kW')

# 2. Downsampling: Daily -> Weekly Average (freq='W')
weekly_mean = daily_kw.resample('W').mean()

# 3. Upsampling: First 3 daily readings -> 12-hour resolution using forward-fill (ffill)
short_sample = daily_kw.iloc[:3]
upsampled_12h = short_sample.resample('12h').ffill()

print("--- 1. Downsampled Weekly Average (Mean) ---")
print(weekly_mean)

print("\n--- 2. Upsampled 12-Hour Telemetry (Forward-Fill) ---")
print(upsampled_12h)
