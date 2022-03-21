import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import '../App.css'

class SearchBooks extends Component {
  
state = {
  query: '',
  booksFound: []
}

updateInput = (event) => {
  this.setState({
    query: event.target.value
  })
  BooksAPI
    .search(event.target.value)
      .then((response) => {
          if(Array.isArray(response)){
            this.setState(() => ({
              booksFound: response.filter((r) => { 
                if (r.imageLinks !== undefined) {
                  return  r.imageLinks.smallThumbnail !== undefined 
                          && r.imageLinks.thumbnail !== undefined 
                } else {
                  return <div><p>'This book does not have a controller'</p></div>
                }
              })
            }))
          } else {
              this.setState(() => ({ booksFound: [] })); 
          }
      })
}
  
render() {
  const { query, booksFound } = this.state
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
            onChange={ this.updateInput }
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
                        onChange={(event) => this.props.updateController(book, event.target.value)} 
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
}
export default SearchBooks 