import React from 'react';
import { useParams } from 'react-router-dom';

function BookDetails(props) {
  const { books } = props
  const { id } = useParams();
  return (
    <div className="main-description-page">
      <div className="description-book">
        <ul className="description-list">
          {books
          .filter(book => book.id === id)
          .map(book =>
            <li key={book.id}>
              <h1 className="list-books-title">My Reads</h1>
              <h5>Book Details</h5>
              <h4>Title: {book.title}</h4>
              <h4>Subtitle: {book.subtitle}</h4>
              <h4>Authors: {book.authors}</h4>
              <h4>Publisher: {book.publisher}</h4>
              <h4>Description: {book.description}</h4>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
export default BookDetails