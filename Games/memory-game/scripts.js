document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'node',
            img: 'imgs/nodeJs.png'
        },
        {
            name: 'react',
            img: 'imgs/reactJs.png'
        },
        {
            name: 'next',
            img: 'imgs/nextJs.png'
        },
        {
            name: 'express',
            img: 'imgs/expressJs.png'
        },
        {
            name: 'angular',
            img: 'imgs/angularJs.png'
        },
        {
            name: 'vue',
            img: 'imgs/vueJs.png'
        },
        {
            name: 'node',
            img: 'imgs/nodeJs.png'
        },
        {
            name: 'react',
            img: 'imgs/reactJs.png'
        },
        {
            name: 'next',
            img: 'imgs/nextJs.png'
        },
        {
            name: 'express',
            img: 'imgs/expressJs.png'
        },
        {
            name: 'angular',
            img: 'imgs/angularJs.png'
        },
        {
            name: 'vue',
            img: 'imgs/vueJs.png'
        }
    ];

    const grid = document.querySelector('.grid');

    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', 'imgs/blank.png');
            card.setAttribute('data-id', i);
            grid.appendChild(card);
        }
    }
    createBoard();
})
