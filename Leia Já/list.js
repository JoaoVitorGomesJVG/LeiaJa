const request = await fetch(`http://localhost:3030/books`)
    .then(res => req.json())
    .then(data =>{
        books = data.forEach(book => {
            const livro = document.querySelector("templatefoda").textContent.cloneNode(true).children[0]
            const imageElement = document.querySelector("#main_book_anchor")
            const titleElement = document.querySelector("#info_title")
            const authorElement = document.querySelector("#info_author")
            const yearElement = document.querySelector("#info_year")

            const publisherElement = document.querySelector("#info_publisher")


            imageElement.src = book.imageUrl
            titleElement.textContent = book.title
            authorElement.textContent = book.author
            yearElement.textContent = book.year
            publisherElement.textContent = book.publisher

            
        });
    })
    

async function fetchBook(bookId) {
    const request = await fetch(`http://localhost:3030/books/${bookId}`)

    if(!request.ok) {
        return alert("Deu erro")
    }

    const response = await request.json()

    return response
}

loadBook()