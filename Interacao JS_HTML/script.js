const entrada = window.document.getElementById('entrada')
const saida = window.document.getElementById('saida')
const select = document.getElementById('caixa')
const criador = document.createElement('option')


var vec = []


function salvar() {
    var numero = Number(entrada.value)

    if (numero <= 0 || numero > 100) {
        alert("Número Inválido")
    }
    else {
        var option = document.createElement("option");
        option.text = `${numero} add`
        select.add(option)
        vec.push(numero)
    }
}


function pronto() {
    vec.sort()
    var tamanho = vec.length
    var menor = vec[0]
    var maior = vec[tamanho-1]

    var soma = 0
    for (let i in vec) {
        soma += vec[i]
    }
    
    const media = soma / vec.length

    saida.innerHTML = `<p>
    <strong>Foram adicionados:</strong> ${vec.length} números <br>
    <strong>O maior:</strong> ${maior}<br>
    <strong>O menor:</strong> ${menor}<br>
    <strong>A soma de todos:</strong> ${soma}<br>
    <strong>E a média dos valores foi:</strong> ${media}
    </p>`
}