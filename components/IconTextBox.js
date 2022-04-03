import React from "react";
// import familyIcon from "/images/icon-family.svg";
// import "./icontextbox.css";
import Image from 'next/image'
const IconTextBox = (props) => {
  return (
    <div className="text-input-wrapper">
      <Image
        src="/images/icon-family.svg"
        className="img"
        alt=""
        // layout="fill"
        width={20}
        height={20}
        style={{ paddingRight: 5 }}
        // returns:
        // {naturalWidth: <imageNaturalWidth>, naturalHeight: <imageNaturalHeight>}
        onLoadingComplete={(imageDimension) => console.log(imageDimension)}
      />
      {/* <img
        src="/images/icon-family.svg"
        style={{ width: 20, height: 20, paddingRight: 5 }}
      /> */}
      <input
        type="text"
        style={{ height: 30, width: "100%", border: "none" }}
      />
    </div>
  );
};

export default IconTextBox;
