interface Pessoa {
    id: number;
    name: string;
    bio: string;
}

const lista: Array<Pessoa> = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

//Letra a) com função imperativa
function encontrarBioImperativa(idEscolhido: number): string {
    try {
        for (let indice = 0; indice < lista.length; indice++) {
            const dadosPessoa = lista[indice];
            const idPessoa = dadosPessoa.id;

            if (idPessoa === idEscolhido) {
                return dadosPessoa.bio;
            }
        }
        throw new Error("ID não encontrado");
    } catch (erro) {
        return erro.message;
    }
}

//Letra a) com função funcional
function encontrarBioFuncional(idEscolhido: number): string {
    try {
        const pessoa = lista.find(({id})=> id === idEscolhido);

        if (pessoa === undefined) {
            throw new Error("ID não encontrado");
        }
        return pessoa.bio;
    } catch (erro) {
        return erro.message;
    }
}

//Letra b) com função imperativa
function encontrarNomeImperativa(idEscolhido: number): string {
    try {
        for (let indice = 0; indice < lista.length; indice++) {
            const dadosPessoa = lista[indice];
            const idPessoa = dadosPessoa.id;

            if (idPessoa === idEscolhido) {
                return dadosPessoa.name;
            }
        }
        throw new Error("ID não encontrado");
    } catch (erro) {
        return erro.message;
    }
}

//Letra b) com função funcional
function encontrarNomeFuncional(idEscolhido: number): string {
    try {
        const pessoa = lista.find(({id})=> id === idEscolhido);

        if (pessoa === undefined) {
            throw new Error("ID não encontrado");
        }
        return pessoa.name;
    } catch (erro) {
        return erro.message;
    }
}

//Letra c) com função imperativa
function deletarItemImperativa(idEscolhido: number): void {
    for (let indice = 0; indice < lista.length; indice++) {
        const dadosPessoa = lista[indice];
        const idPessoa = dadosPessoa.id;

        if (idPessoa === idEscolhido) {
            lista.splice(indice, 1);
            break
        }
    }
}

//Letra c) com função funcional
function deletarItemFuncional(idEscolhido: number): void {
    lista.splice(lista.findIndex(i=> i.id === idEscolhido), 1)
}

//Letra d) com função imperativa
function atualizarItemImperativa(idEscolhido: number, tipo: string, informacaoAtualizada: string): void {
    for (let indice = 0; indice < lista.length; indice++) {
        const dadosPessoa = lista[indice];
        const idPessoa = dadosPessoa.id;

        if (idPessoa === idEscolhido) {
            if (tipo === "nome") {
                const nomePessoa = informacaoAtualizada
                dadosPessoa.name = nomePessoa
                break
            }
            else if (tipo === "bio") {
                const bioPessoa = informacaoAtualizada
                dadosPessoa.bio = bioPessoa
                break
            }
        }
    }
}

//Letra d) com função funcional
function atualizarItemFuncional(idEscolhido: number, tipo: string, informacaoAtualizada: string): void {
    if (tipo === "nome") {
        lista[lista.findIndex(indice=> indice.id === idEscolhido)].name = informacaoAtualizada
    }
    else if (tipo === "bio") {
        lista[lista.findIndex(indice=> indice.id === idEscolhido)].bio = informacaoAtualizada
    }
}

//Letra e) feita demonstrando as funções imperativas e funcionais em cada letra
