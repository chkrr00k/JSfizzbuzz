function fizzbuzz(max=100, min=1, cond={3 : "fizz", 5 : "buzz"}){
    'use strict';
    if(min >= max){
        throw new Error("min >= max");
    }
    for(let i in cond){
        if(i != parseInt(i, 10)){
            throw new Error("Invalid json");
        }
    }
    let chcond = (inp) => {
        let result = "";
        for(let tmp in cond){
            if(!(inp % tmp)){
                result += cond[tmp];
            }
        }
        return result || inp;
    };
    for(let i = min; i < max; i++){
        console.log(chcond(i));
    }
}
