import React from "react";
import CoronaNews from "components/coronaNews";

const InfoCorona = () => {
  return (
    <div className="pageInfoCorona-wrapper">
      <h1 className="text-3xl text-center py-3 text-green-800 font-semibold">
        Info Corona
      </h1>
      <CoronaNews />
    </div>
  );
};

export default InfoCorona;
