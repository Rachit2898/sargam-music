import { BiLoaderCircle } from "react-icons/bi";

const Button = ({ label, isFetching, ...rest }) => {
  return (
    <button
      {...rest}
      className={
        isFetching
          ? "primary_btn flex items-center justify-center"
          : "primary_btn hover:scale-105 focus:outline-black"
      }
    >
      {isFetching ? (
        <BiLoaderCircle size={25} className="text-black" />
      ) : (
        `${label}`
      )}
    </button>
  );
};

export default Button;
