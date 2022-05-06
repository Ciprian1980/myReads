import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import HomeScreen from './components/HomeScreen'
import SearchBooks from './components/SearchBooks'


function App() {
  const [ books, setBooks ] = useState([])

  /**
   * Every useEffect is a componentWillMount, componentDidMount, componentWillUnmount
   */
  useEffect(() => {
    const getBooks = async () => {
      const fetchedBooks = await BooksAPI.getAll()
      setBooks(fetchedBooks)  
    }

    // Now invoke the async function:
    getBooks()
  })

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
        </Routes>
      </div>
    )
  }
}

export default App
