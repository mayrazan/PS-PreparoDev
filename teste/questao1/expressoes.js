function validaEmail(email){
    const expressao = /^\w+([-+.']\w+)*@\w+([.]\w+)?\.com([.]\w+)*$/;
    ///^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if(expressao.test(email)){
        return true;
    } else {
        return false;
    }
}

console.log(validaEmail("nome@elem1.elem2.com"));
//Email (com até dois elementos após o @, sem contar o *.com*, ex.: nome@elem1.elem2.com)

function validaNumero(numero){
    ///^(?:\+)5{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/
    const validacao = /^(?:\+)?5{2}\s?(?:\()?[0-9]{2}(?:\)?)\s?9?[0-9]{4}(?:-?)[0-9]{4}$/;
    if(validacao.test(numero)){
        return true;
    } else {
        return false;
    }
}
console.log(validaNumero("5511998341293"));
console.log(validaNumero("+55 (41) 98856-1498"));
//Número de celular (qualquer formato, contato que seja um número de celular brasileiro)