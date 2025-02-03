"use client";

import Button from "@/components/Button";
import FileDataLabel from "@/components/FileDataLabel";
import exribition_image from "@/public/exribition_image.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getBoothById, getFiles } from "../../api/api";
import { useParams } from "next/navigation";

const Exhibition = () => {
  const { id } = useParams();
  const [boothData, setBoothData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchBoothData = async () => {
      try {
        const data = await getBoothById(id);
        setBoothData(data);
      } catch (error) {
        console.error("Failed to fetch booth data:", error);
      } finally {
        setLoading(false);
      }

      try {
        const imageData = await getFiles(id - 7);
        setFiles(imageData);
      } catch (error) {
        console.error("Failed to fetch booth data:", error);
      }
    };

    if (id) {
      fetchBoothData();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!boothData) {
    return <p>Booth not found!</p>;
  }

  const {
    booth_description,
    booth_name,
    email,
    exhibition,
    logo_url,
    telegram,
    whatsapp,
  } = boothData;

  return (
    <div className="ExhibitionPage">
      <div className="col-lg-5 mx-auto">
        <div className="regestierForm exibitionContent">
          <div className="regesHeader">
            <h1 className="lgHeading">{booth_name}</h1>
            <p className="smtext">{booth_description}</p>

            <div className="imageCotent">
              <Image
                src={logo_url ? logo_url : exribition_image}
                alt={exhibition?.name || "Exhibition"}
                className="extribitionImage"
                width={100}
                height={100}
                unoptimized={true}
                loading="lazy"
              />
            </div>

            <div className="filesData">
              <h2 className="mdHeading">Files</h2>
              <div className="fileDataDetail">
                <FileDataLabel files={files} />
              </div>
            </div>
          </div>

          <div className="exibitionFooter">
            <div className="exibitionButtonsContainer">
              <Button value="Preview" className="fillBtn" />
              <Button value="Download" />
            </div>

            <div className="ContactButton">
              <h1 className="mdHeading">Contact</h1>
              <div className="exibitionButtonsContainer">
                <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                  <Button value="Email" className="fillBtn" />
                </a>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button value="WhatsApp" className="fillBtn" />
                </a>
                <a
                  href={`https://t.me/${telegram}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button value="Telegram" className="fillBtn" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
