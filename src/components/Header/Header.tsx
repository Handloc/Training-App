const Header: React.FC<{}> = () => {
  return (
    <div className="flex items-center justify-center bg-zinc-700 p-3">
      <p className="text-amber-400 text-3xl font-bold">Training App</p>
      <p className="absolute right-5 text-amber-400 font-bold cursor-pointer hover:text-fuchsia-500 transition-all">
        Logout
      </p>
    </div>
  );
};

export default Header;
