import React from 'react'

function Shelves(props) {
    let { books, updateController } = props
    
    const shelves = [
      { title: 'Read', key: 'read' },
      { title: 'Want To Read', key: 'wantToRead' },
      { title: 'Currently Reading', key: 'currentlyReading' }
    ]
    
  return (
    <div>
      <div className="bookshelf">{ shelves.map(shelf => 
          (<h2 className="bookshelf-title">{ shelf.title }</h2> )
          )}
        <div className="bookshelf-books">
          
        </div>
      </div>
      <ol className="books-grid">
        {books.filter(b =>  b.shelf === shelves.key
        // console.log('b.shelf:', b.shelf, 'b.shelf === shelves.key:', b.shelf === shelves.key, 'books:', books)
        )
       
              .map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div 
                    className="book-cover"
                    style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}
                  ></div>
                  <div className="book-shelf-changer">
                    <select         
                      value={book.shelf || 'none'}    
                      onChange={(event) => updateController(book, event.target.value)} 
                    >
                      <option value="move" disabled>Move to...</option>
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
  )
}
export default Shelves;