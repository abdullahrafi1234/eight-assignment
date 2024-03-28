import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const books = useLoaderData()
    const { bookId } = useParams()
    const bookIdInt = parseInt(bookId)
    const book = books.find(book => book.bookId === bookIdInt)


    // console.log(book)
    const { author, bookName, category, image, tags, rating, review, totalPages, publisher, yearOfPublishing
    } = book;


    return (
        <div className="">
            <div className="hero-content flex-col lg:flex-row">
                <div className="bg-[#1313130D] p-36 rounded-lg">
                    <img width={'500px'} src={image} className=" rounded-lg shadow-2xl" />
                </div>

                <div className="w-2/3 pl-20 text-start">
                    <h1 className="text-4xl font-bold">{bookName}</h1>
                    <p className="py-4 font-medium" >By: {author}</p>
                    <p className="font-medium border-y border-gray-300 py-3">{category}</p>

                    <p className="py-6 pb-12"> <span className="font-bold">Review : </span>{review}</p>

                    <p className="flex gap-5 items-center border-b pb-8"> <span className="font-bold">Tags</span>
                        <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">#{tags[0]}</p>
                        <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">#{tags[1]}</p>

                    </p>


                    <p className="pt-7">Number of Pages: <span className="font-bold">{totalPages}</span></p>

                    <p className="py-2">Publisher: <span className="font-bold">{publisher}</span></p>

                    <p className="">Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>

                    <p className="py-2">Rating: <span className="font-bold">{rating}</span></p>

                    <div className="py-8 space-x-6">
                        <button className="btn btn-outline btn-accent font-bold">Read</button>
                        <button className="btn btn-info text-white font-bold">Wishlist</button>
                    </div>

                    

                </div>
            </div>
        </div>
    );
};

export default BookDetails;