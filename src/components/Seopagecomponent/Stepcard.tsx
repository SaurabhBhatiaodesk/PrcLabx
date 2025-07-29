import React from "react";

type stepcard = {
  replacementSteps: any;
};

const Stepcard = ({ replacementSteps }: stepcard) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {replacementSteps.map((step: any, index: number) =>
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="bg-prc text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600">
              {step.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stepcard;
