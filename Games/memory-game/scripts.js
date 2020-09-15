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
    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard(){
        for (let i = 0; i < cardArray.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', 'imgs/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        };
    };
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'imgs/blank.png');
            cards[optionTwoId].setAttribute('src', 'imgs/blank.png');
            alert('You have clicked the same image!');

        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('\nCongratulations.. You found a match!');
            cards[optionOneId].setAttribute('src', 'imgs/white.png');
            cards[optionTwoId].setAttribute('src', 'imgs/white.png');
            cards[optionOneId].removeEventListener('click', flipcard);
            cards[optionTwoId].removeEventListener('click', flipcard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'imgs/blank.png');
            cards[optionTwoId].setAttribute('src', 'imgs/blank.png');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = '\nCongratulations! You found them all!';
        };
    };
    function flipcard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        };

    };
    createBoard();
})
