import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import HomeScreen from './components/HomeScreen'
import SearchBooks from './components/SearchBooks'


function App() {
  const [ books, setBooks ] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const fetchedBooks = await BooksAPI.getAll()
      setBooks(fetchedBooks)  
    }
    getBooks()
  }, []) // just run when the component mounts and unmounts if [] here

  const updateController = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        useState((setBooks) => ({
        books: setBooks.books
          .filter((_book) => {
          return _book.id !== book.id
        }).concat({...book, shelf})
      }))
    })
  }
    
    return (
      <div>
        <Routes>
          <Route 
            path="*" 
            element={
              <HomeScreen 
                books={ books }
                updateController={ updateController }
              />
            }
          />
          <Route
            path="/search" 
            element={
              <SearchBooks
                updateController={ updateController }
              />
            }
          />
        </Routes>
      </div>
    )
  }


export default App
