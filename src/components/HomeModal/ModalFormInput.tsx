const ModalFormInput: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <input
      type="number"
      placeholder={placeholder}
      className={
        " border-[#F05454] border-b-2 bg-[#222831] valid:bg-zinc-6010 focus:outline-none text-white focus:border-white mb-4"
      }
    ></input>
  );
};

export default ModalFormInput;
