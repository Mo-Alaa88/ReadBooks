import React from 'react'

class Book extends React.Component {
  handleChange (value){
    // for Optimizations
    // this.props.sendShelfChange(this.props.book,value);
    this.props.sendShelfChange(Object.assign({} , this.props.book),value);
  }

  render(){

    return (
      // Book Componanent
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover">
{/* set book cover and If the book dont have cover set https://i.pinimg.com/236x/f3/cd/53/f3cd53ed7012177a3e396e55d4a3f492--college-books-college-life.jpg */}
            <img  style ={{width: 128,height: 193}}
              src={this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : "https://i.pinimg.com/236x/f3/cd/53/f3cd53ed7012177a3e396e55d4a3f492--college-books-college-life.jpg"}
              alt={this.props.title}
            />
            </div>
            <div className="book-shelf-changer">
              <select
                value={this.props.book.shelf}
                onChange={(event)=> this.handleChange(event.target.value)}
              >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          {/* for display book title */}
          <div className="book-title">{this.props.book.title}</div>
          {/* set book authors and If the book dont have authors set undefined authors */}
          <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(', '):'Undefined Authors'}</div>
        </div>
      </li>
    )
  }
}
export default Book