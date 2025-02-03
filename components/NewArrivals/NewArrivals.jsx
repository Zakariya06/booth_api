"use client"
import React from "react";
import Button from "../Button";
import Input from "../Input";
import FileExample from "../FileExample";

function NewArrivals() {
  const [logo_url, setLogo_url] = React.useState("");

  const handleFileUpload = () => {
    let input = document.createElement("input");
    input.type = "file";
    input.click();
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) { 
        setLogo_url(file.name);
      }
    };
  };

  const buttonData = ["New Arrivals", "Catalog", "General Info", "Price List"];
  return (
    <div className="NewArrivals">
      <div className="navTabsButtonContainer">
        {buttonData.map((item, index) => (
          <Button key={index} value={item} className="newArrivalButton" />
        ))}
      </div>

      <div className="row">
        <div className="col-lg-6">
          <Input
            onClick={handleFileUpload}
            placeholder="Drag  and drop files or upload"
            label="File Upload"
            value={logo_url}
            readOnly={true}
          />
          <p className="smtext">
            Supported formats: JPG, PNG, PDF. Max size: 10MB.
          </p>
        </div>
        <div className="col-lg-6">
          <FileExample />
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
