const InfoUpdateButton: React.FC<{ displayName: string }> = ({
  displayName,
}) => {
  return (
    <button className="bg-[#F05454] hover:bg-[#30475E] hover:shadow-md text-white rounded-md transition-all duration-200 text-lg mt-4 w-full mx-4 p-2 text-center cursor-pointer">
      {displayName}
    </button>
  );
};

export default InfoUpdateButton;
