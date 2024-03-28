

const ViewReadBooks = ({book}) => {

    const { author, bookName, category, image, tags, rating, review, totalPages, publisher, yearOfPublishing
    } = book;

    return (
        <div>
            <h3>hi hello</h3>
            <div className="hero  justify-between p-4 pl-8 border rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="bg-base-200 px-8 py-4 rounded-lg">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="lg:pl-36">
                        <h1 className="text-xl font-bold">{bookName}</h1>
                        <p className="py-2">By: {author}</p>

                        <p className="flex gap-5 items-center border-b pb-8"> <span className="font-bold">Tags</span>
                        <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">#{tags[0]}</p>
                        <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">#{tags[1]}</p>

                    </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewReadBooks;