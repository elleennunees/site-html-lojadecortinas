const produtos = [
    {
        img: './images/foto1.jpg',
        nome: 'Cortina rústica corta luz- trilhos - cinza - 3,00x2,50',
        preco: 169
    },

    {
        img: './images/foto2.jpg',
        nome: 'Cortina blackout e voil desenhado - trilhos - cinza - 4,00x3,50',
        preco: 249
    },

    {
        img: './images/foto4.jpg',
        nome: 'Cortina de linho e voil - ilhóis - areia - 2,50x2,00',
        preco: 119
    },

    {
        img: './images/foto6.jpg',
        nome: 'Cortina rústica e voil - ilhóis - areia - 4,00x2,80',
        preco: 139
    },

    {
        img: './images/foto5.jpg',
        nome: 'Cortina blackout e voil - trilhos - cinza - 2,50x2,80',
        preco: 119
    },

    {
        img: './images/foto7.jpg',
        nome: 'Cortina blackout rústica e voil - trilhos - cinza - 5,00x3,00',
        preco: 349
    },

    {   
        img: './images/foto9.jpg',
        nome: 'Cortina voil semi transparente - trilhos - cinza - 5,00x3,00',
        preco: 129
    },

    {
        img: './images/foto10.jpg',
        nome: 'Cortina blackout branco - trilhos - 4,00x2,80',
        preco: 169
    },

    {
        img: './images/foto11.jpg',
        nome: 'Cortina de linho - trilhos - areia - 6,00x3,00',
        preco: 199
    },

    {
        img: './images/foto12.jpg',
        nome: 'Cortina oxford com voil - trilhos - creme - 3,00x2,80',
        preco: 119
    },

    {
        img: './images/foto8.jpg',
        nome: 'Cortina semi blackout e voil - trilhos - areia - 5,00x3,00',
        preco: 189
    },
    
    {
        img: './images/foto14.jpg',
        nome: 'Cortina semi blackout - ilhóis - creme - 4,00x2,80 ',
        preco: 149
    },

    {
        img: './images/foto15.jpg',
        nome: 'Cortina rústica - ilhóis - marrom - 2,00x1,50',
        preco: 89
    }

]

let mostrarProdutos = document.querySelector('div.container_produtos')
cafeOpen = () => {
    produtos.map((val) => {
        mostrarProdutos.innerHTML += `
        <div class="produtos" id="${val.nome}">
            <img src="${val.img}" alt="Img">
            <p class="nome_produto">
                ${val.nome}
            </p>
            <p class="preco_produto">
                R$ ${val.preco},00
            </p>
            <p class="btn_adicionar">
                <a href="#">Adicionar</a>
            </p>
        </div>
        `
    })
}

cafeOpen()