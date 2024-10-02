//Letra a) utilizando palavra via parâmetro
function contarVogaisParametro (texto: string): number {
    let listaLetras = texto.split('');
    let vogais: string[] = ["a", "e", "i", "o", "u"];
    let contagem = 0;

    for (let i = 0; i < listaLetras.length; i++) {
        let letra = listaLetras[i].toLowerCase()

        if (vogais.includes(letra)) {
            contagem += 1;
        }
    }

    return contagem
}
console.log(contarVogaisParametro("abacaxi"))

//Letra b) contando a quantidade de vogais a partir do campo de formulário com o id dele sendo "idInputFormulario"
//A função é adicionada no evento onclick do botão do formulário
function contarVogaisFormulario(): void {
    let textoDigitado = document.querySelector('#idInputFormulario')?.value;
    let listaLetras = textoDigitado.split('');
    let vogais: string[] = ["a", "e", "i", "o", "u"];
    let contagem = 0;
    
    for (let i = 0; i < listaLetras.length; i++) {
        let letra = listaLetras[i].toLowerCase();
        
        if (vogais.includes(letra)) {
            contagem += 1;
        }
    }
    alert(contagem)
    
}

