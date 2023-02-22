import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const GridButtons = () => {
  return (
    <div>
      <div className="dropdown dropdown-top w-36">
        <label tabIndex={0} className="btn button flex">
          Go Back
          {/* <FiArrowRight className="text-white "/> */}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <div className="btn btn-xs mb-3 button">
            <Link className="text-base rounded" href="/grids/foodavailable">
              Food Available
            </Link>
          </div>
          <div className="btn btn-xs button">
            <Link className=" text-base rounded" href="/grids/foodneeds">
              Food Needs
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default GridButtons;
