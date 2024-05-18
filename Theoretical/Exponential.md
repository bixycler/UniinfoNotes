      

# Exponential

With the identity \( a^{x+y} = a^x a^y \), exponential bridges between addition and multiplication, and with the identity \( \d a^x = a^x\d x \cdot \ln(a) \), exponential plays an essential role in differential-integral calculus. There are various phenomena related to exponential: [power law](https://en.wikipedia.org/wiki/Power_law), [scale invariance](https://en.wikipedia.org/wiki/Scale_invariance), [exponential growth](https://en.wikipedia.org/wiki/Exponential_growth), [exponential decay](https://en.wikipedia.org/wiki/Exponential_decay), etc. Here we start from the normal exponential on real number to see its role as [[#EigenvectorDifferential|the eigenvector of differential-integral calculus]] and derive its definition in the form of limit. Then using that limit-form definition, we show a [[#ExponentialMap|deeper meaning]] of exponential as a mapping from tangent space to the background manifold in general.

## The eigenvector of differential-integral calculus

For exponential function \( f(x) = a^x \) with the identity \( f(x+y) = a^{x+y} = a^x a^y \), we have its derivative  
\[ f'(x) = \frac{\d(a^x)}{\d x} = \lim_{ε\to 0}{\frac{a^{x+ε}-a^{x}}{ε}} = \lim_{ε\to 0}{\frac{a^{x}a^{ε}-a^{x}}{ε}} \] \[ = a^{x}\cdot \left(\lim_{ε\to 0}{\frac {a^{ε}-1}{ε}}\right) = a^{x}\cdot \left(\lim_{ε\to 0}{\frac {a^{0+ε}-a^0}{ε}}\right) = a^{x}\cdot \left(\frac{\d(a^x)}{\d x}\Bigr|_{\substack{x=0}}\right) \] \[ = f(x)\cdot f'(0) \] where \( f'(0) \) is a constant only depending on the base _a_. That means the derivative of exponential function is the exponential function itself scaled by a constant, i.e. exponential is the [eigenvector](https://en.wikipedia.org/wiki/Eigenvalues_and_eigenvectors) of differential-integral calculus. The scaling constant is the eigenvalue of that eigenvector and is called "rate constant" \( λ = f'(x)/f(x) = f'(0) \), which is the "[growth constant](https://en.wikipedia.org/wiki/Exponential_growth)" when positive, and the "[decay constant](https://en.wikipedia.org/wiki/Exponential_decay)" when negative.

The **natural exponential** \( \exp(x) = \e^x \) is defined to have _unit rate constant_ \( \exp'(0) = 1 \), so that it's the _**unit eigenvector** of differential-integral calculus_, i.e. \( \exp'(x) = \exp(x) \). Its inverse function, natural logarithm \( \ln(x) := \exp^{-1}(x) \), gives meaning to the _**rate constant** as the natural logarithm of the base a_, i.e. \( λ = f'(0) = \ln(a) \), as shown in the following: From the definition of inverse function, we have \( a = \e^{\ln(a)} \), combined with the exponential identity \( (\e^α)^x = \e^{α\cdot x} \), we have the identity \( a^x = \e^{x\cdot \ln(a)} \) to convert arbitrary base-_a_ exponential \( f(x) = a^x \) to natural exponential \( f(x) = \exp(x\cdot \ln(a)) \). With \( y := x\cdot \ln(a) \), we have \( f(x) = \exp(y) \) and  
  
\( f'(x) = \)  ...  \[ \frac{\d(\exp(y))}{\d x} = \frac{\d(\exp(y))}{\d(x\cdot \ln(a))} \cdot \ln(a) = \frac{\d(\exp(y))}{\d(y)} \cdot \ln(a) \] \( = \exp'(y) \cdot \ln(a) = \exp(y) \cdot \ln(a) = f(x) \cdot \ln(a) \)  
  
compared to the previous result \( f'(x) = f(x)\cdot f'(0) \), we have \( f'(0) = \ln(a) \). That gives us the differential identity:

|   |   |
|---|---|
|\[ \d(a^x) = a^x\d x \cdot \ln(a) \] \[ \d(\e^x) = \e^x\d x \]|(Id.Eigen)|

## The limit of scaling operations

\[ \lim_{ε\to 0}{\frac {\e^{ε}-1}{ε}} = 1 \Leftrightarrow \lim_{ε\to 0}{\left(\frac {\e^{ε}-1}{ε} - 1\right)} = 0 \Leftrightarrow \lim_{n\to\infty}{n\cdot( \e^{1/n} - (1+1/n))} = 0 \] ... \[ \Leftrightarrow \lim_{n\to\infty}{\frac{n} {\sum_{k=0}^{n-1} \left(\e^{\frac{n-1-k}{n}} (1+\frac{1}{n})^k \right)} \cdot\left(\e - (1+\frac{1}{n})^n \right)} = 0 \]

|   |   |   |
|---|---|---|
|\[ \Leftarrow \lim_{n\to\infty}{\left(\e - (1+\frac{1}{n})^n \right)} = 0 \]|, because|\[ n < \sum_{k=0}^{n-1} \left(\e^{\frac{n-1-k}{n}} (1+\frac{1}{n})^k \right) \]|

\[ \Leftarrow \e = \lim_{n\to\infty}{\left(1+\frac{1}{n}\right)^n} \]

With this definition of the constant [e (Euler's number)](https://en.wikipedia.org/wiki/E_(mathematical_constant)#In_calculus), we have  
\[ f'(0) = \ln(a) = \lim_{ε\to 0}{\frac {a^{ε}-1}{ε}} \] \[ \Leftrightarrow \lim_{n\to\infty}{n\cdot( a^{1/n} - (1+\ln(a)/n))} = 0 \] ... (similar to the above) \[ \Leftarrow a = \lim_{n\to\infty}{\left(1+\frac{\ln(a)}{n}\right)^n} = \e^α = \lim_{n\to\infty}{\left(1+\frac{α}{n}\right)^n} \]

## Exponential map

The expression of \( \e^α \) via limit  

|   |   |
|---|---|
|\[ \e^α = \exp(α) = \lim_{n\to\infty}{\left(1+\frac{α}{n}\right)^n} \]|(Def.1)|

shows a deeper meaning of exponential: For any ring \(A \ni α\) endowed with addition, multiplication and scalar multiplication, we can define a function \( \exp(α) \) satisfying exponential identities using [[#Def.1|Def.1]] (see derivation steps [[#ExponentialIdentities|below]]). Moreover, we should consider \(α\) and \(\e^α\) as parameters of some [operators](https://en.wikipedia.org/wiki/Operator_(physics)) acting on some background object \(T_α(o) = α*o = o_t \) and \(X_α(o) = (\e^α)*o = o' \), just like the [functions in programming](https://en.wikipedia.org/wiki/Functional_programming), so \(A\) is a [ring of operators](https://en.wikipedia.org/wiki/Von_Neumann_algebra). For the simplest case, the "background object" is just the normal number and the operator is the normal multiplication \(α*x = α\cdot x\). In exponential growth/decay, while \(T_α\) acts on intermediate values \(T_α(x_t) = α\cdot x_t\), \(X_α\) acts on the initial value \(x_0\) so that the value at time \(t\) is \(x_t = X_α(x_0) = (\e^{α_0 t})\cdot x_0\). And in physics, \(α\) is usually a matrix, a complex number, a quaternion, etc. In this sense, using the propery of scalar multiplication, we take derivative with respect to that scalar \(\frac{\partial α}{\partial t} = α_0\) \(\Rightarrow α = α_0 t\), so that we can divide the operator \(T_α\) into \(n\) differentials \(T_{\d α} = (α_0 t/n)*\), where \(\d α := α_0\d t = α_0 t/n = α/n\), and then "integrate" them up to get \(X_α = \e^α\).

[![](ExponentialMap-tangent-displacement.png)](https://www.geogebra.org/m/kmpr2jx2 "View in 3D applet")

To be general, we consider a background object in a manifold \(o\in M\) and the operator \(T_α\) as a [tangent operator](https://en.wikipedia.org/wiki/Tangent_vector#Tangent_vector_on_manifolds) of that manifold, i.e. \( \forall o\in M, o + T_{\dα}(o)\in M \). Applying the differential \(T_{\d α}\) to the whole manifold, we have a [vector field](https://en.wikipedia.org/wiki/Vector_field#Vector_fields_on_manifolds) on \(M\). Then the displacement operator \(X_α(o) = o'\in M\) [generated](https://en.wikipedia.org/wiki/Operator_(physics)#Generators) by that vector field, tracing a [geodesic](https://en.wikipedia.org/wiki/Geodesic) \( [o,o'] \subset M\), is expressed as the exponential \(\e^α\). That's because the infinitesimal displacement is \( X_{\dα}(o) = o + T_{\dα}(o) = (1+α_0\d t)*o \), and the whole displacement is the composition of infinitely many infinitesimal displacements \( X_α = X_{\dα}\circ X_{\dα}\circ X_{\dα}\cdots \) \(= (1+α_0\d t)\cdot(1+α_0\d t)\cdot(1+α_0\d t)\cdots \) \(= \e^{α_0 t} = \e^α \).

[GeoGebra applet TangentAndMicrodisplacement](https://www.geogebra.org/m/tham8zkb)

In this sense, the exponential is the fundamental building block of differential-integral calculus which is called "exponential map" (in [Lie theory](https://en.wikipedia.org/wiki/Exponential_map_(Lie_theory)) as well as in [Riemannian geometry](https://en.wikipedia.org/wiki/Exponential_map_(Riemannian_geometry))). In essence, any continuous operator mapping objects from one domain into the same domain, i.e. any [flow](https://en.wikipedia.org/wiki/Flow_(mathematics)) \(X_α\) on \(M\), given its [differential operator](https://en.wikipedia.org/wiki/Differential_operator) \(\frac{\partial}{\partial t} = T_{α_0} = α_0*\), can be expressed as an exponential operator \((\e^{α_0 t})*\) on \(M\).  

|   |   |
|---|---|
|\[ \forall M, \forall X_α:M\rightarrow M, F(t) := X_{α_0,M}(t) = X_α(M),\] \[ \frac{\d F(t)}{\d t} = α_0*F(t) \Rightarrow F(t) = (\e^{α_0 t})*F(0) = (\e^{α_0 t})*M \]|(Id.Flow)|

Here, instead of acting on individual objects in the manifold, the operators \( α_0*\) and \( (\e^{α_0 t})*\) act on the whole manifold so that the result \(F(t)\) has only one variable \(t\), and the differential operator is total \(\frac{\d}{\d t}\) instead of partial \(\frac{\partial}{\partial t}\), as shown in these vizualizations for [Lorenz attractor](http://www.malinc.se/m/Lorenz.php), [Mandelbrot set](https://youtu.be/JYlAPaPsoSY). In physics, the manifold \(M\) is considered as (phase) space and the differential operator \(\frac{\partial}{\partial t} = T_{α_0}\) is usually considered as [time derivative](https://en.wikipedia.org/wiki/Time_derivative) operator, as shown in [this video clip](https://youtu.be/O85OWBJ2ayo). However in general, the differential operator can be with respect to any spatial coordinate or any other scalar variable. Note that [exponential map in dynamical systems](https://en.wikipedia.org/wiki/Exponential_map_(discrete_dynamical_systems)) is just a mapping from complex plane to itself, which is somehow relevant but different from the exponential map here.

### Identities

Here we derive the identities of exponential directly from the limit definition [[#Def.1|Def.1]] and the expression of composition of operators above.

- \( \e^{0} = 1 \): When \(α=0\), there is no displacement, thus \(\e^{0} = X_0\) is an [identity operator](https://en.wikipedia.org/wiki/Identity_function) \(X_0(o) = o\).
- \( \e^{α+β} = \e^β\cdot \e^α \): The displacement of a sum \(α+β\) is the composition of component displacements \( \e^{α+β} = X_{α+β} = X_{β}\circ X_{α} = \e^{β}\cdot \e^{α} \), just like the parallelogram rule of vector addition (but may not be commutative).  
    [![](ExponentialMap-tangent-displacement-addition.png)](https://www.geogebra.org/m/yvv8fvqg "View in 3D applet")
- \( \e^{αs} = (\e^α)^s \): The displacement of a parameter \(α\) scaled by a real number \(s\) is \(X_α\) raised to the power of \(s\) in the sense of "\(s\) times" (more/less) infinitesimal displacements. \[ \e^{αs} = \lim_{n\to\infty}\left(1+\frac{αs}{n}\right)^n = \lim_{n\to\infty}\left(1+\frac{α}{n/s}\right)^{(n/s)s} = \left(\lim_{n'\to\infty}\left(1+\frac{α}{n'}\right)^{n'}\right)^s = (\e^{α})^s \]
- \( \d(\e^{α}) = \e^α\cdot \dα \): We deduce this from the limit definition, which is the converse of the induction in [[#Id.Flow|Id.Flow]]. From \(α = α_0 t\) and [[#Def.1|Def.1]], we have \[ \frac{\d(\e^{α})}{\d t} = \lim_{n\to\infty}\frac{\d}{\d t}\left(1+\frac{α_0 t}{n}\right)^n = \lim_{n\to\infty}\left(\left(1+\frac{α}{n}\right)^{n-1}\cdot n\frac{α_0}{n}\right) \] \[= α_0 \lim_{n\to\infty}\left(1+\frac{α}{n}\right)^{n\frac{n-1}{n}} = α_0 \e^α \] \[ \Rightarrow \d(\e^{α}) = \e^α\cdot α_0\d t = \e^α\cdot \dα \]

### Taylor series

We can also [expand the binomial](https://en.wikipedia.org/wiki/Binomial_theorem) in [[#Def.1|Def.1]] to retrieve its Taylor series  
\[ \exp(α) = \lim_{n\to\infty}{\left(1+\frac{α}{n}\right)^n} = \lim_{n\to\infty} {\sum _{k=0}^{n}{\binom{n}{k} \left(\frac{α}{n}\right)^k}} \]  ...  \[ = \lim_{n\to\infty} {\sum _{k=0}^{n} {\frac{\prod_{j=0}^{k-1}{(n-j)}}{k!} \frac{α^k}{n^k}} } = \lim_{n\to\infty} {\sum _{k=0}^{n} {\left( \frac{α^k}{k!} \cdot \prod_{j=0}^{k-1}{\frac{n-j}{n}} \right)} } \] \[ = \lim_{n\to\infty} {\sum _{k=0}^{n}{\frac{α^{k}}{k!}}} = \sum _{k=0}^{\infty }{\frac{α^{k}}{k!}}=1+α+{\frac {α^{2}}{2}}+{\frac {α^{3}}{6}}+{\frac {α^{4}}{24}}+\cdots \]