// DOM
const swiper = document.querySelector('#swiper')

// constants
const urls = [
    "https://loremflickr.com/1000/1000?random=kitten1",
    "https://loremflickr.com/1000/1000?random=kitten2",
    "https://loremflickr.com/1000/1000?random=kitten3",
    "https://loremflickr.com/1000/1000?random=kitten4",
    "https://loremflickr.com/1000/1000?random=kitten5",
]

// variables

let cardCount = 0

// functions

function appendNewCard() {
    const card = new Card({
        imageUrl: urls[cardCount % 5],
        onDismiss: appendNewCard,
        id: `card${cardCount % 5}`
    })

    // card.element.style.setProperty('--i', cardCount % 5)
    swiper.append(card.element)
    cardCount++

    const cards = swiper.querySelectorAll('.card:not(.dismissing)')
    cards.forEach((card, index) => {
        card.style.setProperty('--i', index)
        card.id = `card${index}`
    })
}

// first 5 cards

for (let i = 0; i < 5; i++) {
    appendNewCard();
}