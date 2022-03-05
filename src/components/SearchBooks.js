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
        // console.log('response', response)
          if(Array.isArray(response)){
            this.setState(() => ({
            booksFound: response.filter((r) => { 
              if (r.imageLinks !== undefined) 
                    return  r.imageLinks.smallThumbnail !== undefined 
                            && r.imageLinks.thumbnail !== undefined 
            })
          }))
        } else {
          this.setState(() => ({ booksFound: [] })); 
        }
      })
}
  
render() {
  const { query, booksFound } = this.state
  const { currentlyReading, wantToRead, read } = this.props
  // console.log('booksFound:', booksFound)
  return(
    <div className="search-books">
      {/* {JSON.stringify(showingBooks)} */}
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
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
                    <select>
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
  )
 }
}
export default SearchBooks 