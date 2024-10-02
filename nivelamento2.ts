//Letra a) com função imperativa
function encontrarBioImperativa (idEscolhido: number): string {
    for (let indice = 0; indice < lista.length; indice++) {
        let dadosPessoa = lista[indice];
        let idPessoa = dadosPessoa.id;

        if (idPessoa === idEscolhido) {
            let bioPessoa = dadosPessoa.bio;
            return bioPessoa
        }
    }

    return "Bio não encontrada"
}

//Letra a) com função funcional
function encontrarBioFuncional (idEscolhido: number): string {
    return lista.find(({id}) => id === idEscolhido)?.bio || "Bio não encontrada"
}

//Letra b) com função imperativa
function encontrarNomeImperativa (idEscolhido: number): string {
    for (let indice = 0; indice < lista.length; indice++) {
        let dadosPessoa = lista[indice];
        let idPessoa = dadosPessoa.id;

        if (idPessoa === idEscolhido) {
            let nomePessoa = dadosPessoa.name;
            return nomePessoa
        }
    }

    return "Nome não encontrado"
}

//Letra b) com função funcional
function encontrarNomeFuncional (idEscolhido: number):string {
    return lista.find(({id}) => id === idEscolhido)?.name || "Nome não encontrado"
}

//Letra c) com função imperativa
function deletarItemImperativa (idEscolhido: number): void {
    for (let indice = 0; indice < lista.length; indice++) {
        let dadosPessoa = lista[indice];
        let idPessoa = dadosPessoa.id;

        if (idPessoa === idEscolhido) {
            lista.splice(indice, 1);
            break
        }
    }
}

//Letra c) com função funcional
function deletarItemFuncional (idEscolhido: number): void {
    lista.splice(lista.findIndex(i => i.id === idEscolhido), 1)
}

//Letra d) com função imperativa
function atualizarItemImperativa (idEscolhido: number, tipo: string, informacaoAtualizada: string): void {
    for (let indice = 0; indice < lista.length; indice++) {
        let dadosPessoa = lista[indice];
        let idPessoa = dadosPessoa.id;

        if (idPessoa === idEscolhido) {
            if (tipo === "n") {
                let nomePessoa = informacaoAtualizada
                dadosPessoa.name = nomePessoa
                break
            }
            else if (tipo === "b") {
                let bioPessoa = informacaoAtualizada
                dadosPessoa.bio = bioPessoa
                break
            }
        }
    }
}

//Letra d) com função funcional
function atualizarItemFuncional (idEscolhido: number, tipo: string, informacaoAtualizada: string): void {
    if (tipo === "n") {
        lista[lista.findIndex(indice => indice.id === idEscolhido)].name = informacaoAtualizada
    }
    else if (tipo === "b") {
        lista[lista.findIndex(indice => indice.id === idEscolhido)].bio = informacaoAtualizada
    }
}

//Letra e) feita demonstrando as funções imperativas e funcionais em cada letra