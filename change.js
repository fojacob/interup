document.getElementById("confirmButton").onclick = function (){
    var numb = document.getElementById("value").value
    var price = document.getElementById("price").value
    const out1 = document.getElementById("output1");
    if(numb<price){
        console.log("WTF")
        window.alert("Preço maior que o valor recebido, tente novamente!")
    }
    else{
        out1.innerHTML = 'Quantidade:' + generatelist(troco(numb, price));
    }
}

function generatelist(arg){
    const money = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
    let items = ""
    for(let i=0; i<arg.length; i++){
        if(arg[i]!=0){
        if(i<6){items += arg[i] +  'x' + money[i] + '€ ';}
        else{items += arg[i] +  'x' + money[i]*100 + '¢ ';}
        }
    }
    return items
}

function troco(value, price){
    const money = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
    var quant = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var troco = value - price
    console.log(troco)
    for(let i=0; i<money.length; i++){
        if(troco>=money[i]){
            d = Math.floor(troco/money[i])
            quant[i] = quant[i] + d
            troco -= d*money[i]
        }
    }
    console.log(money)
    console.log(quant)
    return quant
}
