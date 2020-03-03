//switch

document.write("<br/> Escolha seu pedido</br>");
document.write("<br/>0 - Sorvete/1 - Suco/2 - Coca-cola</br>")

function pedir(){
    x = prompt("O que deseja pedir");

    switch(x){
        case "0":
            alert("você pediu um sorvetinho :3");
            break;
        case "1":
            alert("voce pediu um suco");
            break;
        case "2":
            alert("voce pediu uma coca");
            break;

        default: alert("Não temos saporra nao carai");
        break;
 }
}