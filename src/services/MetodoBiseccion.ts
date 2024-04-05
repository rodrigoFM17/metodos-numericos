interface IterationData {
    x1: number;
    x2: number;
    xp: number;
    fxp: number;
    e: number;
}

function bisectionMethod(
    func:(x: number) => number,
    x1: number,
    x2: number,
    tolerance: number = 0.0001,
    maxIterations: number = 100
): { root: number | null; iterations: IterationData[] } {
    const iterations: IterationData[] = [];
    let iteration = 0;
    let root: number | null = null;

    while(iteration < maxIterations){
        const xp = (x1+x2)/2;
        const fxp = func(xp);
        let e = 0;

        if (Math.abs(fxp)<tolerance) {
            root = xp;
            break;
        }

        if(func(x1) * fxp < 0){
            x2 = xp;
        }else{
            x1 = xp;
        }

        if(iteration > 0){
            const prevXp = iterations[iteration-1].xp;
            e = Math.abs(xp - prevXp);
        }

        iterations.push({ x1, x2, xp, fxp, e });

        iteration++;
    }
    return {root, iterations};
}

function f(x: number): number {
    return x ** 3 - 2 * x - 5;
}

const {root, iterations} = bisectionMethod(f, 2, 3);

if (root !== null) {
    console.log(`La raíz aproximada es: ${root.toFixed(6)}`);
} else {
    console.log("No se pudo encontrar la raíz dentro de la tolerancia especificada.");
}

console.log("Datos de cada iteración:");
iterations.forEach((data, index) => {
    console.log(`Iteración ${index + 1}: x1 = ${data.x1.toFixed(6)}, x2 = ${data.x2.toFixed(6)}, xp = ${data.xp.toFixed(6)}, fxp = ${data.fxp.toFixed(6)}, error = ${data.e.toFixed(6)}`);
});