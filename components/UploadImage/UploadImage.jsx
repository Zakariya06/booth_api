"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import upload_image from "@/public/upload_image.png";
import { useSelector } from "react-redux";

function UploadImage({ qrCode }) {
  return (
    <div className="UploadImageContainer">
      {qrCode ? (
        <img src={qrCode} loading="lazy" alt="Qr Code" className="qrCodeImage" />
      ) : (
        <Image
          src={upload_image}
          alt="Genarated Image"
          className="uploadedImage"
          width={"100"}
          height={"100"}
        />
      )}

      <Button value="Replace/Delete" className="mt-3" />
    </div>
  );
}

export default UploadImage;
