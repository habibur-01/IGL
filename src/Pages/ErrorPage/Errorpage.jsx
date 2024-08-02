import { Link } from "react-router-dom";
import errorpic from "../../assets/images/error.png"

const Errorpage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="h-[400px] w-[500px] overflow-hidden">
                <img src={errorpic} alt="" className="h-full w-full"/>
            </div>
            <div className="space-y-4 text-center">
                <h1 className="text-4xl font-bold">Oops! Page Not Found</h1>
                <p className="text-sm font-thin">This page you are looking for might have been removed<br/>had its name changed or its temporarily unavailable.</p>
                <div className="flex justify-center">
                <Link to={"/"}><button className="btn btn-primary w-52">Go to home page</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Errorpage;