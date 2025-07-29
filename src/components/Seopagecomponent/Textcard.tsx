import React from "react";
type textcard = {
    textcardData:any;
}
const Textcard = ({textcardData}:textcard) => {
  return (
    <div>
      <div className="grid grid-cols-1  gap-8 mt-10">
        {textcardData.map((item: string,index:number) =>
          <div className="bg-white hover:shadow-lg  p-6 rounded-lg shadow-md duration-500 cursor-pointer" key={index}>
            <p className="text-lg leading-relaxed text-gray-700 m-0">
              {item}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Textcard;
