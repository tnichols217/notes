# PHYS 122-119B Lab 3a: DSO

```
Trevor Nichols, John Paul Magbitang
PHYS 122-119B
Station 32
Lab 3a: DSO (Digital Storage Oscilloscope)
2024-10-03T17:15:58-04:00

Department of Physics,
Case Western Reserve University,
Cleveland, Ohio,
44106-7079
```

## 1

What is your estimate of the accuracy to which you can make measurements with your scope, in terms of cm, mm or DIV?

> [!answer]
> In both the vertical and horizontal axes:
> 
> $\frac{1}{5}~\text{DIV}$

## 2

What is your measured period and frequency (from counting divisions), with uncertainties, of the 1 kHz square wave calibration signal?

> [!answer]
> $\text{DIV}=250~\mu s$
> Period: $\frac{16}{4}~\text{DIV}=1000\pm10~\mu s$
> Frequency: $\frac{1}{t}\pm \frac{\delta_{t}}{t}f=1.00\pm0.01 \text{kHz}$

## 3

What is your measurement (by counting divisions) of the peak-to-peak voltage of the calibration signal?

> [!answer]
> $\text{DIV}=500~mV$
> Peak-to-peak: $6~\text{DIV}=3.0\pm0.1~V$

## 4

Provide a sketch of the waveform obtained from the doorbell transformer, with appropriate scales on the horizontal and vertical axes. Also provide the period, frequency and peak-to-peak voltage of the signal obtained from your measurements.

> [!answer]
> $\text{DIV}=2~V,5~ms$
> $V_{pp}=6~\text{DIV}=12.0\pm0.4~V$
> $p=\frac{16.6}{5}~\text{DIV}=16.6\pm0.2~ms$
> ![[sketche.svg#inv_L]]

## 5

What voltage did you measure for the doorbell transformer with your DMM? Is this consistent with the scope measurement? (Explain!)

> [!answer]
> DMM: $4.27~V\pm1\%$
> 
> If we know that:
> $V_{pp}=2\sqrt 2V_{rms}$
> 
> We can calculate our expected $V_{pp}$ from our DMM reading to compare with our DSO reading.
> 
> $V_{pp}=12.1~V\pm1\%$
> 
> This value lines up closely with the $V_{pp}$ obtained from the DSO.

## 6

Sketch your Lissajous pattern(s) at 60 Hz. (You should make more than 1 plot to show how this pattern changes during your observation.)

> [!answer]
> ![[Pasted image 20241010015226.png#^inv_L]]

## 7

Sketch the pattern at 120 Hz.

> [!answer]
> ![[Pasted image 20241010015239.png#inv_L]]

## 8

What frequency between 60-120 Hz gives another clear Lissajous pattern?

> [!answer]
> $90.0\pm0.1~Hz$

## 9

Sketch the pattern at this intermediate frequency.

> [!answer]
> ![[Pasted image 20241010015322.png#inv_L]]

## 10

What conditions are necessary to observe Lissajous patterns?

> [!answer]
> The ratios of the two waves must be simple or small integers.

## 11

What is the tuning fork frequency you measured from your scope?

> [!answer]
> $p=\frac{314\pm5}{30}~ns=10.5\pm0.2~ns$\
> $f=\frac{1}{p}\pm \frac{\delta_p}{p}f=95\pm2~MHz$
> 
> I doubt this is the actual frequency of the tuning fork, as I would likely be unable to hear it.
