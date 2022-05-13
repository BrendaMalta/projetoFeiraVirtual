function finalizar(){
    var txtmaca = document.getElementById('txtmaca')
    var txtpera = document.getElementById('txtpera')
    var txtabacaxi = document.getElementById('txtabacaxi')
    var txtmelancia = document.getElementById('txtmelancia')
    var txtmanga = document.getElementById('txtmanga')
    var txtbanana = document.getElementById('txtbanana')

    var pedidos = document.getElementById('finalPedido')
    var nome = document.getElementById('nomeCliente')
    var endereco = document.getElementById('endereco')
    var pag = document.getElementsByName('radioPag')

    maca = Number(txtmaca.value)
    pera = Number(txtpera.value)
    abacaxi = Number(txtabacaxi.value)
    melancia = Number(txtmelancia.value)
    manga = Number(txtmanga.value)
    banana = Number(txtbanana.value)
    nome = String(nome.value)
    endereco = String(endereco.value)

    pagou = ''
    if(pag[0].checked){
        pagou = "Dinheiro"
    }else if(pag[1].checked){
        pagou = "Cartão"
    }
    
    var valorTotal = ((maca + abacaxi + pera + manga + banana + melancia) * 2)

    pedidos.innerHTML = `Pedido efetuado com sucesso! <br> Voce comprou: 
    <br> 
    ${maca} Maçã(s)
    <br> 
    ${pera} Pera(s)
    <br>
    ${abacaxi} Abacaxi(s)
    <br>
    ${melancia} Melancia(s)
    <br>
    ${manga} Manga(s)
    <br>
    ${banana} Banana(s)
    <br>
    Valor total: R$${valorTotal}
    <br>
    O pedido será entregue no endereço: ${endereco}
    <br>
    O tempo médio de chegada é de 30 minutos.
    <br>
    Obrigada por comprar na minha feira, ${nome}!  `

}