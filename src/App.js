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
  
  updateInput = (event) => {
    this.setState({
      query: event.target.value
    })
    BooksAPI
      .search(event.target.value)
        .then((response) => {
          if(Array.isArray(response)){
            this.setState(() => ({
              booksFound: response.filter((r) => { 
                return r.authors !== undefined && r.imageLinks !== undefined 
              })
            }))
          } else {
              this.setState(() => ({ booksFound: [] })); 
          }
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
                booksFound={ this.booksFound }
              />
            }
          />
          <Route
            path="/search" 
            element={
              <SearchBooks
                books={ this.books }
                query={ this.query }
                booksFound={ this.booksFound }
                updateController={ this.updateController }
                updateInput={ this.updateInput }
              />
            }
          />
          <Route 
            path="/bookDetails/:id" 
            element={ 
              <BookDetails 
                books={ this.books }
              /> 
            } 
          />
        </Routes>
      </div>
    )
  }
}

export default App
