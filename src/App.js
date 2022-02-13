import React from 'react'
import { Route } from 'react-router-dom'
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
        <Route 
          path="/shelves" 
          render={() => (
          <Shelves books={ books }/>
        )}
        />
        <Route 
          path="/search" 
          render={() => (
            <SearchBooks 
              currentlyReading={ currentlyReading } 
              wantToRead={ wantToRead }
              read={ read }
            />
          )}
        />
      </div>
    )
  }
}

export default App
