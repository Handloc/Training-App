import { NavLink } from "react-router-dom";

const GraphButton: React.FC<{ linkTo: string; displayName: string }> = ({
  linkTo,
  displayName,
}) => {
  return (
    <div className="bg-[#F05454] hover:bg-[#30475E] hover:shadow-md text-white rounded-md transition-all duration-200 text-lg mt-4 w-full p-4 text-center cursor-pointer">
      <NavLink to={linkTo}>{displayName}</NavLink>
    </div>
  );
};

export default GraphButton;
