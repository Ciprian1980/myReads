import React from 'react';

function DetailPage(props) {
  const { books } = props
  return (
    <div className="main-description-page">
      <div className="description-book">
        <ul className="description-list">
          <li>
            <h1 className="list-books-title">My Reads</h1>
            <h5>Book Details</h5>
            <h4>Title: {books.title}</h4>
            <h4>Subtitle: {books.subtitle}</h4>
            <h4>Authors: {books.authors}</h4>
            <h4>Publisher: {books.publisher}</h4>
            <h4>Description: {books.description}</h4>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default DetailPage