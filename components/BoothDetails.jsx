import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function BoothDetails() {
  return (
    <>
      <div className="inputHolder">
        <label htmlFor="#" className="inputLabel">Step 1 of 4: Booth Details</label>
        <ProgressBar now={20} className="progressBar" />
      </div>
    </>
  );
}

export default BoothDetails;
