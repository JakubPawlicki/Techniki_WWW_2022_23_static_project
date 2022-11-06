let pred_div = document.querySelector("#pred")
let newsletterButton = document.querySelector("#newsletter-button")
let afterNewsletterButton = document.querySelector("#after-newsletter-button")

pred_div.classList.remove("hidden")
pred_div.classList.add("visible")

function onNewsletterButton() {

    afterNewsletterButton.innerHTML = "Nie czekaj!"
}
function offNewsletterButton() {
    afterNewsletterButton.innerHTML = "<br>"
}

function onClick() {
    afterNewsletterButton.innerHTML = "Sprawdź skrzynkę pocztową!<br>"
    newsletterButton.remove()
}

newsletterButton.addEventListener("mouseenter", onNewsletterButton)
newsletterButton.addEventListener("mouseleave", offNewsletterButton)
newsletterButton.addEventListener("click", onClick)