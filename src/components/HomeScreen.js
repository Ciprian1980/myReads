import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Shelves from './Shelves'

class HomeScreen extends React.Component {
  
  render() {
    const { books, shelves } = this.props
    console.log('Shelves', shelves)
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
            <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">
                      {shelves.map(shelf => { return shelf.title })}
                    </h2>
                    <div className="bookshelf-books">
                      <Shelves books={ books } shelves={shelves}/>}
                    </div>
                  </div>
                </div>
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
