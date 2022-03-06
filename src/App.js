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
  updateController = () => {
    BooksAPI
      .update(this.state.books.id, )
        .then((response) => {
          console.log('response:', response)
          this.setState((prevBook) => ({
            books: prevBook.id.filter((b) => {

            })
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
                books={ books } 
              />}
          />
          <Route
            path="/search" 
            element={
              <SearchBooks 
                books={ books }
              />
            }
          />
        </Routes>
      </div>
    )
  }
}

export default App
