import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" ">
            <div className="text-center items-center max-w-full">
                <h2 className="text-7xl backdrop:">Opps!!!</h2>
                <p className="text-xl p-4">Data Not Found !</p>

                <div
                    className="m-12"> <Link to="/"><button className="btn btn-accent">Go Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;