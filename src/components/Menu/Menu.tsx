const Menu: React.FC<{
  headerLinks: {
    linkName: string;
    linkTo: string;
  }[];
}> = ({ headerLinks }) => {
  return (
    <div className="bg-[#222831] absolute m-0 top-0 left-0 w-full h-full text-white text-3xl flex flex-col items-center z-[1]">
      <div className="absolute top-40">
        {headerLinks.map((link) => {
          return <p>{link.linkName.toUpperCase()}</p>;
        })}
      </div>
    </div>
  );
};
//
export default Menu;
