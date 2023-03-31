// Goi trau dung: x, trau nam: y, trau gia: z
for (let x = 1; x <= 19; x++){
    for(let y = 1; y <= 33; y++){
        for(let z = 3; z <= 98; z = z + 3){
            if(x + y + z == 100 && 5*x + 3*y + z/3 == 100){
                console.log("Trâu đứng:",x,", trâu nằm:", y,", trâu già: ", z);
            }
        }
    }
}