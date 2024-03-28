import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

    const [books , setBooks] = useState([])
    // console.log(books)

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <div className="p-12 pt-20">
                <h3 className="font-bold text-4xl text-center">Books</h3>
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