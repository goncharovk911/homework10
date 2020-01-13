sortMass = (massiv) => {
    let num = massiv.length;
    for (let i = 0; i < num-1; i++)
     { for (let j = 0; j < num-1-i; j++)
        { if (massiv[j+1] < massiv[j])
           { let t = massiv[j+1]; massiv[j+1] = massiv[j]; massiv[j] = t; }
        }
     }                     
    return massiv;
}

let arr = [34,211,1,5,85,23,423,21]
sortMass(arr)
console.log(arr);
