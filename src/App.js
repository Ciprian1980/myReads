import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelves from './components/Shelves'
import SearchBooks from './components/SearchBooks'

class App extends React.Component {

  state = {
    books: [],
    query: '',
    searchTerm: '',
    bookFound: [],
    shelves: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }
  
  componentDidMount() {
    // BooksAPI
    //   .getAll()
    //     .then((books) => {
    //       this.setState(() => ({
    //         books
    //       }))
    //     })
    BooksAPI  
        .search(this.state.query)
          .then((searchTerm) => {
            this.setState(() => ({
              bookFound: searchTerm
            }))
          })
  }
  
  render() {
    const { books, query, searchTerm, bookFound } = this.state
    console.log('searchTerm', searchTerm)
    console.log('books', books)
    const { currentlyReading, wantToRead, read } = this.state.shelves
    return (
      <div>
        <Routes>
          <Route 
            path="/" 
            element={
              <Shelves 
                books={ books } 
                query={ query }
                currentlyReading={ currentlyReading } 
                wantToRead={ wantToRead }
                read={ read }
              />}
          />
          <Route
            path="/search" 
            element={
              <SearchBooks 
                books={ books }
                query={ query }
                searchTerm={ searchTerm }
                bookFound={ bookFound }
                currentlyReading={ currentlyReading } 
                wantToRead={ wantToRead }
                read={ read }
              />
            }
          />
        </Routes>
      </div>
    )
  }
}

export default App
