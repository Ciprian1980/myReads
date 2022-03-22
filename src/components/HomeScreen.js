import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

class HomeScreen extends React.Component {
  render() {
    const { books, updateController, shelves } = this.props
    console.log('books', books)
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
            <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">
                      {shelves.map(shelf => {
                        return shelf.title
                      })}
                    </h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                          {books.filter(b => b.shelf === 'currentlyReading')
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
                  </div>
                </div>
              </div>
            </div>
          <div className="open-search">
            <Link to="/search">
              <button>Add a book</button>
            </Link>
          </div>
        </div>
    )
  }
}

export default HomeScreen