//Letra a) utilizando palavra via parâmetro
function contarVogaisParametro(texto: string): number {
    const listaLetras = texto.split('');
    const vogais: string[] = ["a", "e", "i", "o", "u", "á", "à", "ã", "â", "é", "ê", "í", "ó", "õ", "ô", "ú"];
    let contagem = 0;

    for (let i = 0; i < listaLetras.length; i++) {
        const letra = listaLetras[i].toLowerCase()

        if (vogais.includes(letra)) {
            contagem++;
        }
    }
    return contagem
}

//Letra b) contando a quantidade de vogais a partir do campo de formulário com o id dele sendo "idInputFormulario"
//A função é adicionada no evento onclick do botão do formulário
function contarVogaisFormulario(): number {
    const textoDigitado = document.querySelector('#idInputFormulario')?.value;
    const listaLetras = textoDigitado.split('');
    const vogais: string[] = ["a", "e", "i", "o", "u", "á", "à", "ã", "â", "é", "ê", "í", "ó", "õ", "ô", "ú"];
    let contagem = 0;
    
    for (let i = 0; i < listaLetras.length; i++) {
        const letra = listaLetras[i].toLowerCase();
        
        if (vogais.includes(letra)) {
            contagem++;
        }
    }
    alert(contagem)
}
