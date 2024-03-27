import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="mt-12">
            <div className="hero p-8 rounded-3xl bg-base-200">
                <div className="hero-content lg:h-[500px] flex-col lg:flex-row-reverse ">
                    <div className="lg:ml-36">
                        <img width={'250px'} src="image1.png" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="lg:mr-40 space-y-16">
                        <h1 className="text-5xl font-bold mb-12">Books to freshen <br />
                            up your bookshelf</h1>

                        <Link to={'/listed-to-page'}>
                            <button className="btn text-white font-bold bg-[#23BE0A]">View The List</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;