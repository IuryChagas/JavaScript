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
    let cardsChosen = [];
    let cardsChosenId = [];

    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', 'imgs/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }
    function flipcard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(500);
        };

    };
    createBoard();
})
