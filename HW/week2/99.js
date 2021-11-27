function table99(){
    document.write("<table border=1>");
    document.write(`<tr><th></th>`)
    for (let i = 1; i <= 9; i++){
        document.write(`<th>${i}</th>`)
    }
    for (let i = 1; i <= 9; i++){
        document.write(`<tr><th>${i}</th>`)
        for (let j = 1; j <= 9; j++){
            document.write(`<td>${i*j}</td>`)
        }
    }
}