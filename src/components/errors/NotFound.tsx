import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-[#F8F8FF] text-lightBlue">
      <div className="text-9xl text-black font-bold">404</div>
      <div className="text-3xl text-black font-medium">Not Found</div>
      <p className="mt-3 text-xl text-gray-700 font-normal">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <div className="flex space-x-4 mt-6">
        <Link
          to={"/"}
          className="flex items-center px-4 py-2 border border-transparent text-base font-medium shadow-sm text-white bg-lightBlue/80 hover:bg-lightBlue"
        >
          <Home className="mr-2" /> Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;