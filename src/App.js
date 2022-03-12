import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelves from './components/Shelves'
import SearchBooks from './components/SearchBooks'

class App extends React.Component {

  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI
      .getAll()
        .then((books) => {
          this.setState(() => ({
            books
          }))
        })
  }
  updateController = (book, shelf) => {
    BooksAPI
      .update(book, shelf)
        .then((response) => {
          console.log('response:', response)
          this.setState((prevBook) => ({
            books: prevBook.books
              .filter((_book) => {
              return _book.id !== book.id
            }).concat({...book, shelf})
          }))
        })
  }
  
  render() {
    const { books } = this.state;
    console.log('these are the books:', books)
    return (
      <div>
        <Routes>
          <Route 
            path="/" 
            element={
              <Shelves 
                updateController={this.updateController}
              />}
          />
          <Route
            path="/search" 
            element={
              <SearchBooks 
                updateController={this.updateController}
              />
            }
          />
        </Routes>
      </div>
    )
  }
}

export default App
