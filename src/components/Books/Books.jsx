import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books , setBooks] = useState([])
    console.log(books)

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <div className="p-12 pt-20">
                <h3 className="font-bold text-4xl text-center">Books: {books.length}</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    books.map((book,idx) => <Book key={idx} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;