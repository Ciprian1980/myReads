import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import HomeScreen from './components/HomeScreen'
import SearchBooks from './components/SearchBooks'


function App() {
  const [ books, setBooks ] = useState([])
  const [ query, setQuery ] = useState();

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
    
  // filter books
  const filterNonCompleteBooks = (books) => {
    return books.filter((book) => Boolean(book.imageLinks) || Boolean(book.authors));
  };

  // set shelf to searched books
  const setShelfToSearchedBooks = () => {
  
    // create an array of ids of all books you have on your own shelf
    const bookIds = setBooks.map((book) => book.id);

    return books.map((book) => {
      
      // `includes` will check if the books is in your shelf already
      if (bookIds.includes(book.id)) {
        
        // if it is, it will return a new object with the correct shelf
        return {
          ...book,
          shelf: setBooks.find((ownedBook) => ownedBook.id === book.id).shelf,
        };
      }

      return book;
    });
  };

  // search for books
  const updateInput = (event) => {
    setQuery(event.target.value);

    BooksAPI.search(query).then((response) => {
      if (Array.isArray(response)) {
        
        // new simplified way to separate concerns and functionality
        const filteredBooks = filterNonCompleteBooks(response);
        const booksWithMatchedShelfs = setShelfToSearchedBooks(
          filteredBooks
        );
        setQuery({
          booksFound: booksWithMatchedShelfs,
        });
      } else {
        setQuery({
          booksFound: []
        });
      }
    });
  };
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
                updateInput= { updateInput }
              />
            }
          />
        </Routes>
      </div>
    )
  }


export default App
