module.exports = function solveEquation(equation) {
  const firXpos = equation.indexOf("x");
  const secXpos = equation.indexOf("x",firXpos + 1);
    let a = equation.slice(0,equation.indexOf(" "));
    let b = equation.slice(firXpos + 3, secXpos - 3);
    let c = equation.slice(secXpos + 1);
      a = eval(a);
      b = eval(b);
      c = eval(c);
        const dis = Math.sqrt(b*b - 4*a*c);
        const x1 = Math.round((-b + dis) / (2*a));
        const x2 = Math.round((-b - dis) / (2*a));
          if(x1 < x2)
          return [x1,x2];
          else return [x2,x1];

}
