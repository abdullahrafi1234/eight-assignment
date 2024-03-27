import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {

    const { author, boodId, bookName, category, image, tags, rating} = book;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <div className="bg-[#F3F3F3] px-20 py-12 rounded-xl">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </div>
                </figure>

                <div className="pl-14 flex pt-8 gap-8">
                    <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">{tags[0]}</p>
                    <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">{tags[1]}</p>

                </div>
                <div className="card-body  pl-14">
                    <h2 className="card-title font-bold">{bookName}</h2>
                    <p className="font-medium">By: {author}</p>
                    <div className=" my-4 border border-dotted border-gray-300">
                      
                    </div>
                </div>

                <div className="flex pl-14  pr-14 justify-between pb-8 font-medium">
                    <p className="">{category}</p>

                    <p className="flex gap-2 items-center">{rating}<CiStar className="text-xl"></CiStar></p>
                </div>
            </div>
        </div>
    );
};

export default Book;