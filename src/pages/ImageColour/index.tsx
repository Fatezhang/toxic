const ImageColour = () => {
  return (
    <div className="p-2 h-full">
      <div className="flex flex-row h-full bg-white card shadow-2xl shadow-gray-500">
        <div className="w-1/2 h-full flex items-center">
          <div className="h-2/5 bg-black rounded-r-lg w-full"/>
        </div>
        <div className="w-1/2 h-full flex items-center p-5 gap-24 justify-center">
          <div className="w-20 h-20 border bg-black rounded"/>
          <div className="w-20 h-20 border bg-black rounded"/>
          <div className="w-20 h-20 border bg-black rounded"/>
        </div>
      </div>
    </div>
  );
};

export { ImageColour };
