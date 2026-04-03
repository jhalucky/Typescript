function typeNarrowing(kind: string | number ) {
    if(typeof kind === 'string') {
        return `Making ${kind} chai`
    }
    return `Making ${kind} tea`
}

function serveChai(msg? : string) {
    if(msg) {
        return `Serving ${msg}`
    }
    return `Serving chai with a special msg`
}

function orderChai(size: "small" | "medium" | "large" | number) {
     if(size === `small`) {
        return `Ek small chai`
     }    

     if(size === `large` || size === "medium") {
        return `make extra chai..`
     }

     return `chai order ${size}`
}

console.log(typeNarrowing("green"));
console.log(typeNarrowing(5));
console.log(serveChai());
console.log(serveChai("Special chai message"));
console.log(orderChai("small"));
console.log(orderChai("medium"));
console.log(orderChai("large"));
console.log(orderChai(10));