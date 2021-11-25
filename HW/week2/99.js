function table99(){
    document.write("<table>");
    for (let i = 0; i <= 9; i++){
        for (let j = 0; j <= 9; j++){
            if(i==0){document.write(`<th></th>`)}
            else if(i == 1){document.write(`<th>${i*j}</th>`)}
            else if(j == 1){document.write(`<tr><th>${i*j}</th>`)}
            else{document.write(`<td>${i*j}</td>`)}
        }
    }
}