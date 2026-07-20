<h2>Intersection with the Perp Operator</h2>S
<a href="ReadMe.html">ReadMe.html</a>
<p> If vector \[u = \binom{x}{y}\] then vector $$u^{\perp} = \binom{-y}{x}$$. It's a definition.
</p>
Given two lines, $$
X=P+t\cdot\mathbf{u}$$ and $$X=Q+s\cdot\mathbf{v},
$$
and given that they are not parallel, find their intersection, $X.$
<p>Answer: First, equate the two equations, then subtract point $Q$ from both sides. 
$$
P+t\cdot\mathbf{u}=Q+s\cdot\mathbf{v}
$$
$$
(P-Q)+t\cdot\mathbf{u}=s\cdot\mathbf{v}
$$ </p>
<p>
Now multiply both sides by $\mathbf{u^{\perp}}$. Since $\mathbf{u\cdot u}^{\perp}=0,$ the $t\cdot\mathbf{u}$ term will disappear.
$$
(P-Q)\cdot\mathbf{u^{\perp}}=s\cdot\mathbf{v\cdot u}^{\perp}
$$
Since the lines are not parallel, $\mathbf{v}\cdot\mathbf{u}^{\perp}$ is not zero and it is admissible to divide by it. (A test for parallel is $\mathbf{v}\cdot\mathbf{u}^{\perp}=0?)$
$$
s=\frac{(P-Q)\cdot\mathbf{u}^{\perp}}{\mathbf{v}\cdot\mathbf{u}^{\perp}}
$$
</p>
<p>
Of course, we cannot cancel out the two vectors, $\mathbf{u^{\perp}},$ since that would lead to an inadmissible vector division, but the dot product, $\mathbf{v}\cdot\mathbf{u}^{\perp}$ is a scalar. Finally, we can substitute $s$  to get the intersection.
$$
X=Q+\frac{(P-Q)\cdot\mathbf{u}^{\perp}}{\mathbf{v}\cdot\mathbf{u}^{\perp}}\cdot\mathbf{v}.
$$
</p>
