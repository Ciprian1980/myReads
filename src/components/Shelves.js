import React from 'react'
import { Link } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import '../App.css'

class Shelves extends React.Component {

  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state
    const { updateController } = this.props
    //console.log('books:', this.props)
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        {booksFound.map((book, index) => (
                          <div className="book">
                            <div className="book-top">
                              <li key={book[index]}>{book.title}</li>
                              <div 
                                className="book-cover"
                                style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}
                              ></div>
                              <div className="book-shelf-changer">
                                <select             
                                  onChange={(event) => updateController(book, event.target.value)} 
                                >
                                  <option value="move" disabled>Move to...</option>
                                  <option value={ currentlyReading }>Currently Reading</option>
                                  <option value={ wantToRead }>Want to Read</option>
                                  <option value={ read }>Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                          </div>
                        ))}
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      {booksFound.map((book, index) => (
                        <div className="book">
                          <div className="book-top">
                            <li key={book[index]}>{book.title}</li>
                            <div 
                              className="book-cover"
                              style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}
                            ></div>
                            <div className="book-shelf-changer">
                              <select             
                                onChange={(event) => this.props.updateController(book, event.target.value)} 
                              >
                                <option value="move" disabled>Move to...</option>
                                <option value={ currentlyReading }>Currently Reading</option>
                                <option value={ wantToRead }>Want to Read</option>
                                <option value={ read }>Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      ))}
                    </li>
                  </ol>
                </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2> 
                  <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      {booksFound.map((book, index) => (
                        <div className="book">
                          <div className="book-top">
                            <li key={book[index]}>{book.title}</li>
                            <div 
                              className="book-cover"
                              style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}
                            ></div>
                            <div className="book-shelf-changer">
                              <select             
                                onChange={(event) => this.props.updateController(book, event.target.value)} 
                              >
                                <option value="move" disabled>Move to...</option>
                                <option value={ currentlyReading }>Currently Reading</option>
                                <option value={ wantToRead }>Want to Read</option>
                                <option value={ read }>Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      ))}
                    </li>
                  </ol>
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
      </div>
    )
  }
}

export default Shelves
