import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";

function page() {
  return (
    <>
      <div className="RegistrationPage">
        <div className="col-lg-5 mx-auto">
          <form className="regestierForm">
            <div className="regesHeader">
              <h1 className="lgHeading">Expo 2025 - Visitor Registration</h1>
              <p className="smtext">
                Please provide your details to access the booth content.
              </p>

              <Input label="Name" placeholder="Name" />
              <Input label="Email" placeholder="Email" type="email" />
              <Input
                label="Phone Number (Optional)"
                placeholder="Phone  Number (Optional)"
                type="number"
              />
            </div>
            <div className="RegistrationCotent">
              <div className="checkSection">
                <input type="checkbox" className="inputCheckBox" />
                <label className="checkBoxLabel">
                  I agree to the processing of my personal data
                </label>
              </div>

              <Button
                type="submit"
                value="Confirm & Continue"
                className="fillBtn"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default page;
