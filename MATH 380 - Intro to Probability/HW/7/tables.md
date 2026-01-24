```rust
use statrs::{distribution::{Binomial, ContinuousCDF, DiscreteCDF, Normal}, statistics::Distribution};

fn q402() {
    let p = 0.42;
    let n  = 1000;
    let dist = Binomial::new(p, n).unwrap();
    let approx = Normal::new(dist.mean().unwrap(), dist.std_dev().unwrap()).unwrap();
    println!("Actual Binomial: {}", 1f64 - dist.cdf(450-1));
    println!("Normal Approximation: {}", 1f64 - approx.cdf(449.5));
}
```
^42code

```rust
fn q406() {
    let confidence_level = 0.95;
    let margin_of_error = 0.02;
    let p = 0.5; // Maximises our minimum sample size

    // Get z-score for 95% confidence
    let alpha = 1.0 - confidence_level;
    let z = Normal::new(0.0, 1.0).unwrap().inverse_cdf(1.0 - alpha / 2.0);

    // z^2 * p(1-p) / e^2
    let n = (z * z * p * (1.0 - p)) / (margin_of_error * margin_of_error);

    println!("Required sample size: {}", n.ceil());
}
```
^46code

```rust
fn q416a() {
    let p = 0.5 / (4.8-1.5);
    let trials = 500;
    let n = Binomial::new(p, trials).unwrap();
    println!("{}", n.cdf(64));
}
```
^q416acode

```rust
fn q416b() {
    let p = 1.0 / (4.8-1.5);
    let trials = 500;
    let n = Binomial::new(p, trials).unwrap();
    println!("{}", 1.0 - n.cdf(160));
}
```
^q416bcode

```rust
fn q424b() {
    let p = 1.0 / 6.0;
    let std = (p*(1.0-p)/10.0_f64.powf(100.0)).powf(0.5);
    println!("STD: {}", std);
    let pn = Normal::new(p, std).unwrap();
    println!("P(0.16 < pn < 0.17): {}", pn.cdf(0.17) - pn.cdf(0.16))
}
```
^q424bcode

```rust
fn q435() {
    let p = 2_f64.powf(-9.0);
    let b = Binomial::new(p, 365).unwrap();

    println!("More than 1 days: {}", 1.0 - b.cdf(1));

    let n = Poisson::new(b.mean().unwrap()).unwrap();
    println!("Poisson Approx: {}", 1.0 - n.cdf(1));
}
```
^q435code