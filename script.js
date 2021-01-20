const banner = document.querySelector('.banner')

for(var i = 1; i < 400; i++) {
    banner.innerHTML += "<div class='blocks'></div>"
}

const blocks = document.querySelectorAll('.blocks')

for(var i = 1; i < 400; i++) {
    blocks[i].style.animationDelay = `${i * 0.05}s`
}