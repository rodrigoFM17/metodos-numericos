interface IterationsData {
    i: number;
    xn: number;
}

function newtonRaphson(
    func: (x: number) => number,
    funcDer: (x: number) => number,
    xi: number,
    tolerance: number = 0.0001,
    maxIterations: number = 100
): { root: number | null, iterations: IterationsData[] }{
    const iterations: IterationsData[] = [];
    let i = 1;
    let root: number | null = null;

    while (i < maxIterations) {
        const fxn = func(xi);
        const fxnDeri = func(xi);
        const xn = xi - (fxn/fxnDeri);

        if(Math.abs(xn) < tolerance){
            root = xn;
        }

        iterations.push({i, xn});

        if(root != null){
            break;
        }

        xi = xn;

        i++
    }
    return {root, iterations};
}

export default newtonRaphson;
