import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

class SearchBooks extends Component {
  render() {
    //console.log(this.props)
    const { books, currentlyReading, wantToRead, read } = this.props
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/shelves">
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
              value={this.props.shelves}
              
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>

          <ol className="books-grid">
            <li>
              {books.map((book) => (
                <div className="book">
                  <div className="book-top">
                    <li key={book.id}>{book.name}</li>
                    <div 
                      className="book-cover"
                      style={{backgroundImage: `url(${book.IneedToChangeThisURL})`}}
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
                  <div className="book-title">{book.name.ChangeThisName}</div>
                  <div className="book-authors">{book.author.CheckThisAuthor}</div>
                </div>
              ))}
            </li>
          </ol>
          
      </div>
    )
  }
}
export default SearchBooks 