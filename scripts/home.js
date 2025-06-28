
var botao = window.document.getElementById('botao1')
var botao2 = document.getElementById('botao2')
botao2.addEventListener('mouseenter', entrarum)
botao2.addEventListener('mouseout', sairum)
botao.addEventListener('mouseenter', entrardois)
botao.addEventListener('mouseout', sairdois)


function entrarum(){
    botao2.style.background = 'red'
}

function sairum(){
    botao2.style.background = 'hwb(220 2% 23%)'
}


function entrardois(){
    botao.style.background = 'red'
}

function sairdois(){
    botao.style.background = 'hwb(220 2% 23%)'
}