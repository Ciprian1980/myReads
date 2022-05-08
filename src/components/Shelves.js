import React from 'react'

function Shelves(props) {
    let { books, updateController } = props
    const shelves = [
      { title: 'Read', key: 'read' },
      { title: 'Want To Read', key: 'wantToRead' },
      { title: 'Currently Reading', key: 'currentlyReading' }
    ]
    
    return (
      <div className="bookshelf">
        {shelves.map((shelf) => (
          <>
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books
                  .filter((book) => book.shelf === shelf.key)
                  .map((book) => (
                    <li key={book.id}>
                      {console.log("book:", book)}
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
                          <div className="book-shelf-changer">
                            <select value={book.shelf || "none"} onChange={(event) => updateController(book, event.target.value)}>
                              <option value="move" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                    </li>
                  ))}
              </ol>
            </div>
          </>
        ))}
      </div>
    )
}
export default Shelves;