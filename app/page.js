"use client"; 
import Exhibition from "@/components/Exhibition/Exhibition";
import Logdata from "@/components/Logdata/Logdata";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import UploadImage from "@/components/UploadImage/UploadImage";
import { createBooth, generateQRCode, uploadFile } from "./api/api";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Home() {
  const [routeId, setRouteId] = useState(1);
  const [qrCode, setQRCode] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const {
      booth_name,
      booth_description,
      logo_url,
      email,
      whatsapp,
      telegram,
    } = data;

    let logoUrl = ""; 
    try {
      const uploadedFile = await uploadFile(logo_url);
      logoUrl = uploadedFile.url; 
    } catch (error) {
      console.error("Failed to upload file:", error);
    }

    const newBoothData = {
      exhibition_id: 1, 
      booth_name,
      booth_description,
      logo_url: logoUrl,
      email,
      whatsapp: whatsapp,
      telegram,
    };

    try {
      const createdBooth = await createBooth(newBoothData);  
      console.log(createdBooth);
      setRouteId(createdBooth.id);
      reset();
    } catch (error) {
      console.error("Failed to create booth:", error);
    }

    try {
      const qrCode = await generateQRCode(routeId);
      setQRCode(qrCode);
    } catch (error) {
      console.error("Failed to create QR code:", error);
    }
  };

  return (
    <div className="page">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Exhibition register={register} setValue={setValue} />
        <UploadImage qrCode={qrCode} />
        <NewArrivals />
        <Logdata
          id={routeId}
          register={register}
          setValue={setValue}
          errors={errors}
        />
      </form>
    </div>
  );
}
