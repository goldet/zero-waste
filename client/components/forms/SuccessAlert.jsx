const SuccessAlert = () => {
  return (
    <div className="bg-zinc-50">
      <div className="alert alert-success shadow-lg w-80 block ml-auto mr-auto mt-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Product successfully added!</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert;
