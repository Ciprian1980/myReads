import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import HomeScreen from './components/HomeScreen'
import SearchBooks from './components/SearchBooks'
import Shelves from './components/Shelves'

class App extends React.Component {

  state = {
    books: []
  }
  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }
  updateController = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
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
    return (
      <div>
        <Routes>
          <Route 
            path="*" 
            element={
              <HomeScreen 
                books={ books }
                updateController={ this.updateController }
              />
            }
          />
          <Route
            path="/search" 
            element={
              <SearchBooks
                updateController={ this.updateController }
              />
            }
          />
          <Route 
            element={
              <Shelves
                updateController={ this.updateController }
              />
            }
          />
        </Routes>
      </div>
    )
  }
}

export default App
