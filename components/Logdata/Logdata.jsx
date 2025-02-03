import React from "react";
import Input from "../Input";
import Button from "../Button";
import Link from "next/link";

function Logdata({ register, setValue, errors, id }) {
  return (
    <div className="Logdata">
      <div className="row">
        <div className="col-lg-4">
          <Input
            label="Email*"
            placeholder="Enter  your email (e.g., contact@example.com)"
            type="email"
            {...register("email", {
              required: "Required field.",
              pattern: {
                message: "Required field",
              },
            })}
          />
          {errors.email && (
            <p className="smtext mb-2">{errors.email.message}</p>
          )}
        </div>
        <div className="col-lg-4">
          <Input
            label="WhatsApp*"
            placeholder="Enter your WhatsApp number"
            type="tel"
            {...register("whatsapp", {
              pattern: {
                value: /^\+([0-9]{1,4})?([0-9]{10,15})$/,
                message:
                  "Please enter a valid WhatsApp number (e.g., +1 234 567 890)",
              },
            })}
          />
          <p className="smtext">Include country code (e.g., +1).</p>
          {errors.whatsapp && (
            <p className="error-text">{errors.whatsapp.message}</p>
          )}
        </div>

        <div className="col-lg-4">
          <Input
            label="Telegram*"
            placeholder="Enter your Telegram username"
            {...register("telegram", {
              required: true,
              pattern: {
                message:
                  "Please enter a valid Telegram username (e.g., username123).",
              },
            })}
          />
          {errors.telegram && (
            <p className="smtext">{errors.telegram.message}</p>
          )}
        </div>
      </div>

      <div className="col-lg-4">
        <div className="buttonContainer">
          <Link href={`/Booths/${id}`}>
            <Button value="Preview Booth Page" />
          </Link>
          <Button value="Generate QR Code" type="submit" className="fillBtn" />
        </div>
      </div>
    </div>
  );
}

export default Logdata;
