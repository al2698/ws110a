export function table99(){
    let table = ['<table>']
    table.push(`<tr><th></th>`)
    for (let i = 1; i <= 9; i++){
        table.push(`<th>${i}</th>`)
    }
    for (let i = 1; i <= 9; i++){
        table.push(`<tr><th>${i}</th>`)
        for (let j = 1; j <= 9; j++){
            table.push(`<td>${i*j}</td>`)
        }
    }
    return table.join(" ")
}
console.log(table99())