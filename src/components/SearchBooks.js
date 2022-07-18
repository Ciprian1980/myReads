import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import '../App.css'

export default function SearchBooks(props) {
  const { updateController } = props
  const [ query, setQuery ] = useState('')
  const [ booksFound, setBooksFound ] = useState([])

  const updateInput = (event) => {
    setQuery(event.target.value)
    BooksAPI
      .search(event.target.value)
      .then((response) => {
          if(Array.isArray(response)){
            const filteredBooks = response.filter((r) => { 
              return r.authors !== undefined && r.imageLinks !== undefined 
            })
            setBooksFound(filteredBooks)
          } else {
            setBooksFound([])
          }
      })
  }
  
  return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input 
            type="text" 
            placeholder="Search by title or author"
            value={ query }
            onChange={ updateInput }
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
      <div className="bookshelf-books">
        <ol className="books-grid">
            {booksFound.map((book) => (
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
  )
}