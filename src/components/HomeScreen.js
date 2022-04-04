import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Shelves from './Shelves'

class HomeScreen extends React.Component {

  render() {
    const { books } = this.props
    
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
            <div className="list-books-content">
              <Shelves books={ books }/>
            </div>
            </div>
          <div className="open-search">
            <Link to="/search">
              <button>Add a book</button>
            </Link>
          </div>
     </div>
    )
  }
}

export default HomeScreen;
