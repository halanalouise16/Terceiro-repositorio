const botoes = document.querySelectora11(".botao");

for (let i=0; i < botoes,length i++){
    botoes[i]. onclick = function() {

       for(let j=0; j <botoes.length; j++) {
        botoes[j].classlist.remover("ativo");
       }
        botoes[i].classlist.add("ativo");
    }
}