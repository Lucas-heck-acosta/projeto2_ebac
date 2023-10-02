const form = document.getElementById('formAtv')
const imgApr = '<img src="./images/aprovado.png" alt="Emoji celebrando" />'
const imgRpv = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />'
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))

const atividades = []
const notas = []

const spanApr = '<span class="resultado aprovado">Aprovado</span>'
const spanRpr = '<span class="resultado reprovado">Reprovado</span>'

let linhas = ''



form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMedia()
})

function adicionaLinha()
{
    const inputNome = document.getElementById('nomeAtv')
    const inputNota = document.getElementById('notaAtv')

    if (atividades.includes(inputNome.value))
    {
        alert(`Atividade: ${inputNome.value} já foi inserida`)
    }
    else
    {
        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputNota.value}</td>`
        linha += `<td>${inputNota.value >= notaMinima ? imgApr : imgRpv}<td>`
        linha += '</tr>'

        linhas += linha

        atividades.push(inputNome.value)
        notas.push(parseFloat(inputNota.value))
    }
    

    inputNome.value = ''
    inputNota.value = ''
}

function atualizaTabela()
{
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}
function atualizaMedia()
{
    let soma = 0
    for (let i = 0; i < notas.length; i++)
    {
        soma += notas[i]
    }

    const media = soma / notas.length

    document.getElementById('mediaFinal').innerHTML = media.toFixed(2)
    document.getElementById('resultadoFinal').innerHTML = media >= notaMinima ? spanApr : spanRpr

}