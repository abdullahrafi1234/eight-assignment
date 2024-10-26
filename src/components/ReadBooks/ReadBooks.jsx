import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../Utility/Utility";
import ViewReadBooks from "../ViewReadBooks/ViewReadBooks";


const ReadBooks = () => {
    // const books = useLoaderData()
    // console.log(books)

    // const [tabIndex, setTabIndex] = useState(0)
    // const { author, bookId, bookName, category, image, tags, rating, review, totalPages, publisher, yearOfPublishing
    // } = book;

    const books = useLoaderData()



    const [booksListed, setBooksListed] = useState([])

    useEffect(() => {
        const storedBookIds = getStoredBookApplication()
        if (books.length > 0) {

            // const booksListed = books.filter(book => storedBookIds.includes(book.bookId) )

            const booksListed = []
            for (const bookId of storedBookIds) {
                const book = books.find(book => book.bookId === bookId)

                if (book) {
                    booksListed.push(book)
                }
            }
            setBooksListed(booksListed)

                console.log(books, storedBookIds,  booksListed)
        }
    }, [books])

    



    return (
        <div>
            {/* <h3 className="text-center text-7xl">amr boi pora sesh {}</h3> */}


            <div>
                {
                    booksListed.map(book => <ViewReadBooks key={book.bookId} book= {book}></ViewReadBooks>)
                }
            </div>

            

        </div>
    );
};

export default ReadBooks;