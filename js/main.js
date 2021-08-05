$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,

    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})



function youtube(filme) {
    // let novaPagina = window.open('https://www.youtube.com/watch?v=fIqE8jND6SY&list=RDMMfIqE8jND6SY&start_radio=1&ab_channel=SteffiVertriest')
    let novaPagina = window.open(filme)

    novaPagina = document.getElementById('novoFilme').novaPagina;

}