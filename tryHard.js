
const onClickFunc = (id) => {
    const card = document.getElementById(id)
    card.style.transition = 'transform 0.5s'
    card.style.transform = `
            translate(
                ${290}px,
                ${-window.innerHeight}px
                )
            rotate(${90}deg)
            `
    card.classList.add('dismissing')
    setTimeout(() => {
        card.remove()

    }, 500)

    appendNewCard()

    console.log(card)
}