import React from 'react'
import { Routes } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelves from './components/Shelves'
import SearchBooks from './components/SearchBooks'

class App extends React.Component {

  state = {
    books: [],
    shelves: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }
  
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }
  
  render() {
    const { books } = this.state
    const { currentlyReading, wantToRead, read} = this.state.shelves
    return (
      <div>
        <Routes 
          path="/shelves" 
          element={<Shelves books={books} />}
        />
        <Routes 
          path="/search" 
          element={
            <SearchBooks 
              currentlyReading={ currentlyReading } 
              wantToRead={ wantToRead }
              read={ read }
            />
          }
        />
      </div>
    )
  }
}

export default App
