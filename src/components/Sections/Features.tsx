const Features = () => {
  return (
    <div className="w-full flex flex-col items-start gap-6 my-16">
      <div className="flex items-start gap-4 w-full">
        <div className="flex flex-col items-start gap-4 w-[40%]">
          <h1 className="text-3xl">Why Careersync Stands Out</h1>
        </div>
        <div className="w-[60%] rounded-lg bg-slate-800 h-[500px] backdrop-blur-md bg-opacity-40 p-4 shadow-lg"></div>
      </div>
      <div className="flex items-start w-full gap-10">
        <div className="w-[50%] rounded-lg bg-slate-800 h-[500px] backdrop-blur-md bg-opacity-40 p-4 shadow-lg"></div>
        <div className="w-[50%] rounded-lg bg-slate-800 h-[500px] backdrop-blur-md bg-opacity-40 p-4 shadow-lg"></div>
      </div>
    </div>
  );
};

export default Features;
