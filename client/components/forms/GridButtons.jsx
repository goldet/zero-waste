import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const GridButtons = () => {
  return (
    <div className="flex flex-row justify-start ml-7 mt-3">
      <div className="dropdown dropdown-top">
        <label tabIndex={0} className="btn m-1 mb-3">
          {" "}
          <FiArrowRight />{" "}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <div className="btn btn-xs mb-3">
            <Link className="text-base rounded" href="/grids/foodavailable">
              Food Available
            </Link>
          </div>
          <div className="btn btn-xs ">
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
