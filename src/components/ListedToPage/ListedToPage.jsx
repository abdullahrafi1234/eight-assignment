import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../Utility/Utility";



const ListedToPage = () => {

    const [tabIndex, setTabIndex] = useState(0)

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

            //     console.log(books, storedBookIds,  booksListed)
        }
    }, [books])
    return (
        <div className="mt-8">
            <h2 className="text-4xl text-center bg-base-200 py-6 rounded-xl font-bold">Books: {booksListed.length}</h2>
            {/* <div>
                {
                    booksListed.map(book => <li key={book.bookId}>{book.bookName}</li>)
                }
            </div> */}

            <div className="text-center m-8  ">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white font-bold">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><Link>Item 1</Link></li>
                        <li><Link>Item 2</Link></li>
                    </ul>
                </details>
            </div>


            {/* tabs */}
            <div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start text-black flex-nowrap">
                <Link
                    to={''}
                    onClick={() => setTabIndex(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 font-medium' : 'border-b'} rounded-t-lg border-gray-400`}>

                    <span>Read Books</span>
                </Link>
                <Link
                    to={`wishlist`}
                    onClick={() => setTabIndex(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0 font-medium' : 'border-b'} rounded-t-lg border-gray-400`}>

                    <span>Wishlist Books</span>
                </Link>

            </div>
            <Outlet></Outlet>

            

        </div>
    );
};

export default ListedToPage;