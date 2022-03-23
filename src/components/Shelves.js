import React from 'react'

function Shelves() {
  
    const shelves = [
      { title: 'Read', key: 'read' },
      { title: 'Want To Read', key: 'wantToRead' },
      { title: 'Currently Reading', key: 'currentlyReading' }
    ]
  return (
    <div>
      {shelves.map(shelf => { return shelf.title })}
    </div>
  )
}
export default Shelves;