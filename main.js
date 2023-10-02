const form = document.getElementById('formAtv')
const imgApr = '<img src="./images/aprovado.png" alt="Emoji celebrando" />'
const imgRpv = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />'
let linhas = ''
form.addEventListener('submit', function(e){
    e.preventDefault()

    const inputNome = document.getElementById('nomeAtv')
    const inputNota = document.getElementById('notaAtv')

    let linha = '<tr>'
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputNota.value}</td>`
    linha += `<td>${inputNota.value >= 7 ? imgApr : imgRpv}<td>`
    linha += '</tr>'

    linhas += linha
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

    inputNome.value = ''
    inputNota.value = ''


    //alert(`Atividade: ${inputNome.value} - nota: ${inputNota.value}`)
})