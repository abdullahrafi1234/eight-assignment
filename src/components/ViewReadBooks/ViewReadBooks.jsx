import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ViewReadBooks = ({ book }) => {

    const { author, bookName,bookId, category, image, tags, rating, review, totalPages, publisher, yearOfPublishing
    } = book;

    return (
        <div className="my-5">

            <div className="hero  justify-between p-4 pl-2 lg:pl-8 border-y lg:border rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="bg-base-200 px-10 py-10 rounded-lg">
                        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="lg:pl-36">
                        <h1 className="text-xl font-bold">{bookName}</h1>
                        <p className="py-2 font-medium pb-4">By: {author}</p>

                        <p className="flex gap-5 items-center  pb-4"> <span className="font-bold">Tags</span>
                            <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">#{tags[0]}</p>
                            <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">#{tags[1]}</p>
                            <p className="text-xl"><CiLocationOn></CiLocationOn></p>
                            <p className="  py-2 font-medium">Year of Publishing: {yearOfPublishing}</p>

                        </p>

                        <div className="flex gap-6 border-b py-4">
                            <p className="flex items-center gap-3">
                                <FaUserFriends className="text-xl"></FaUserFriends>
                                Publisher: {publisher}

                            </p>
                            <p className="flex items-center gap-3">
                                <IoDocumentTextOutline className="text-xl"></IoDocumentTextOutline>
                                Page: {totalPages}

                            </p>
                        </div>

                        <div className="flex py-2 lg:py-4 lg:gap-4">
                            <p className="text-[#328EFF] px-6 py-2.5 font-medium bg-[#328EFF26] rounded-full">Category: {category}</p>
                            <p className="text-[#FFAC33] px-6 py-2.5 font-medium bg-[#FFAC3326] rounded-full">Rating:{rating}</p>
                            <Link to={`/book/${bookId}`}>
                                <button className="btn bg-[#23BE0A] rounded-full font-semibold text-white text-[16px]">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewReadBooks;