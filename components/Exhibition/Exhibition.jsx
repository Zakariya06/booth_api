"use client";
import { useState } from "react";
import Input from "../Input";
import BoothDetails from "../BoothDetails";
import { useDispatch } from "react-redux";
import { addImage } from "@/lib/feature/ImageSlice";

function Exhibition({ register, setValue }) {
  const [imageName, setImageName] = useState("");

  const handleFileOpen = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setValue("logo_url", file);
        setImageName(file.name);
      }
    };
  };

  return (
    <div className="row">
      <div className="col-lg-6">
        <Input
          label={"Exhibition Name*"}
          placeholder={"Start typing to select or add a new exhibition."}
          {...register("Exhibition_name", { required: true })}
        />
      </div>
      <div className="col-lg-6">
        <Input
          label={"Booth Name*"}
          placeholder={"Enter booth name (e.g., InnovationsHub)"}
          {...register("booth_name", { required: true })}
        />
      </div>
      <div className="col-lg-12">
        <Input
          label={"Booth Description"}
          placeholder={"Enter booth description"}
          input={false}
          {...register("booth_description", { required: true })}
        />
      </div>

      <div className="col-lg-6">
        <BoothDetails />
      </div>
      <div className="col-lg-6">
        <Input
          label={" Logo/Banner Upload"}
          placeholder={"Drag  and drop an image or upload"}
          onClick={handleFileOpen}
          value={imageName}
          readOnly={true}
        />
      </div>
    </div>
  );
}

export default Exhibition;
