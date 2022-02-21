import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelves from './components/Shelves'
import SearchBooks from './components/SearchBooks'

class App extends React.Component {

  state = {
    books: [],
    query: '',
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
          .then((response) => {
            this.setState(() => ({
              bookFound: response
            }))
          })
  }
  
  render() {
    const { books, query, bookFound } = this.state
    
    console.log('bookFound', bookFound)
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
