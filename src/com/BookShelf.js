import React from 'react'
import Book from './Book.js'

class BookShelf extends React.Component {
	sendShelfChange(book,shelf){
		this.props.sendShelfChange(book,shelf)
	}

	render(){
		if (this.props.books.length===0){
			return null;
		}
		return (
			<div className="bookshelf">
				{/* set title props for every books */}
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{
							/* check for books  */
							this.props.books.length>0 && this.props.books.map((item)=>(
							<Book key ={item.id} book = {item} sendShelfChange={(book,shelf)=>
								{this.sendShelfChange(book,shelf)}}/>
							))
						}
					</ol>
				</div>
			</div>
                
		)
	}
} 
export default BookShelf