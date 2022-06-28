import React from 'react'
import { Routes, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import HomeScreen from './components/HomeScreen'
import SearchBooks from './components/SearchBooks'
import BookDetails from './components/BookDetails'


class App extends React.Component {
  
  state = {
    books: [],
    query: '',
    booksFound: []
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
    
  // filter books
  filterNonCompleteBooks = (books) => {
    return books.filter((book) => Boolean(book.imageLinks) || Boolean(book.authors));
  };

  // set shelf to searched books
  setShelfToSearchedBooks = (books) => {
    // renamed the variable `books` to `ownedBooks`
    const { books: ownedBooks } = this.state; 
    
    // create an array of ids of all books you have on your own shelf
    const bookIds = ownedBooks.map((book) => book.id);

    return books.map((book) => {
      
      // `includes` will check if the books is in your shelf already
      if (bookIds.includes(book.id)) {
        
        // if it is, it will return a new object with the correct shelf
        return {
          ...book,
          shelf: ownedBooks.find((ownedBook) => ownedBook.id === book.id).shelf,
        };
      }

      return book;
    });
  };

  // search for books
  updateInput = (event) => {
    this.setState({
      query: event.target.value,
    });

    BooksAPI.search(event.target.value).then((response) => {
      if (Array.isArray(response)) {
        
        // new simplified way to separate concerns and functionality
        const filteredBooks = this.filterNonCompleteBooks(response);
        const booksWithMatchedShelfs = this.setShelfToSearchedBooks(
          filteredBooks
        );

        this.setState({
          booksFound: booksWithMatchedShelfs,
        });
      } else {
        this.setState({
          booksFound: []
        });
      }
    });
  };

  render() {
    const { books, booksFound, query } = this.state;
    return (
      <div>
        <Routes>
          <Route 
            path="*" 
            element={
              <HomeScreen 
                books={ books }
                updateController={ this.updateController }
                booksFound={ booksFound }
              />
            }
          />
          <Route
            path="/search" 
            element={
              <SearchBooks
                books={ books }
                query={ query }
                booksFound={ booksFound }
                updateController={ this.updateController }
                updateInput={ this.updateInput }
              />
            }
          />
          <Route 
            path="/bookDetails/:id" 
            element={ 
              <BookDetails 
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
