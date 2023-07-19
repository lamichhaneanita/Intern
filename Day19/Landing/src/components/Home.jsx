import React from "react";

function Home() {
  return (
    <div className="bg-black h-screen w-full text-white mx-[500px] ">
      <h1 className="text-4xl  justify-center items-center">
        Driving License <br /> Process
      </h1>
      <br />

      <div className="box-above text-center items-center">
        <div className="h-10 w-[250px] border border-white rounded-lg text-center py-2 pointer:cursor  hover:bg-sky-300">
          Online Form
        </div>
        <br />
        <div className="h-10 w-[250px] border border-white rounded-lg text-center py-2 pointer:cursor  hover:bg-sky-300">
          Document Submisson
        </div>
        <br />
        <div className="h-10 w-[250px] border border-white rounded-lg text-center py-2 pointer:cursor  hover:bg-sky-300">
          Exam(Likhit)
        </div>
        <br />
        <div className="h-10 w-[250px] border border-white rounded-lg text-center py-2 pointer:cursor  hover:bg-sky-300">
          Trial
        </div>
        <br />
        <div className="h-10 w-[250px] border border-white rounded-lg text-center py-2 pointer:cursor  hover:bg-sky-300">
          Payment and License
        </div>
      </div>
    </div>
  );
}

export default Home;
