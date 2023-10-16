function showhide() {
    var div = document.getElementById("info_synopsis_container");
    div.classList.toggle('hidden');
     
}

async function loadBook() {
    const url = window.location.href
    const splittedUrl = url.split("?")[1]

    if(!splittedUrl) {
        console.log("Sem livro pra carregar parceiro")
    }

    const bookId = splittedUrl.split("=")[1]
    const book = await fetchBook(bookId)

    const imageElement = document.querySelector("#review_image")
    const titleElement = document.querySelector("#info_title")
    const authorElement = document.querySelector("#info_author")
    const yearElement = document.querySelector("#info_year")
    const synopsisElement = document.querySelector("#info_synopsis_container")

    const publisherElement = document.querySelector("#info_publisher")
    const pagesElement = document.querySelector("#info_page")

    const reviewTitleElement = document.querySelector("#review_title_content")
    const reviewContentElement = document.querySelector("#review_paragraph")

    imageElement.src = book.imageUrl
    titleElement.textContent = book.title
    authorElement.textContent = book.author
    yearElement.textContent = book.year
    publisherElement.textContent = book.publisher

    pagesElement.textContent = book.pages

    synopsisElement.textContent = book.synopsis

    reviewTitleElement.textContent = book.reviewTitle
    reviewContentElement.textContent = book.review

}

async function fetchBook(bookId) {
    const request = await fetch(`http://localhost:3030/books/${bookId}`)

    if(!request.ok) {
        return alert("Deu erro")
    }

    const response = await request.json()

    return response
}

loadBook()