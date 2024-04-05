interface IterationsData {
    i: number,
    x0: number;
    x1: number;
    fx0: number;
    fx1: number;
    xi: number;
    fxi: number;
    e: number;
}
function secantMethod(
    func: (x:number) => number,
    x0: number,
    x1: number,
    tolerance: number = 0.0001,
    maxIterations: number = 100
): {root: number | null, iterations: IterationsData[]}{
    const iterations: IterationsData[] = [];
    let i = 2;
    let root: number | null = null;

    while (i < maxIterations) {
        let fx0 = func(x0);
        let fx1 = func(x1);
        const xi = x1 - (((x1-x0)/(fx1-fx0))*fx1);
        const fxi = func(xi);
        let e = 0;

        if (Math.abs(fxi) < tolerance) {
            root = xi;
        }
        
        if (i == 2) {
            e = xi - x1;
        }else{
            const prevXi = iterations[i-2].xi;
            e = xi - prevXi;
        }

        iterations.push({i, x0, x1, fx0, fx1, xi, fxi, e});

        if (root != null) {
            break;
        }

        x0 = x1;
        fx0 = fx1;
        x1 = xi;
        fx1 = fxi;

        i++;
    }
    return {root, iterations};
}

export default secantMethod;