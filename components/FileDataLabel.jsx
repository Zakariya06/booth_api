import React from "react";

function FileDataLabel({files}) {
  return (
    <div className="fileDataLabel">
      <div className="fileLeft">
        <p className="smtext">New Arrivals</p>
        <p className="smtext subHeading">{files.name} - {files.size}</p>
      </div>
      <div className="fileLeft fileRight">
        <p className="smtext">Catalog</p>
        <p className="smtext subHeading">{files.name} - {files.size}</p>
      </div>
    </div>
  );
}

export default FileDataLabel;
