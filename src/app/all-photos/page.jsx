import PhotoCards from "@/components/PhotoCards";
import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const AllPhotosPage = async () => {
  const res = await fetch("https://pixen-next-js.vercel.app/data.json");
  const photos = await res.json();
  return (
    <div>
      <h2 className="text-2xl font-bold my-5 text-center">All Photos</h2>

      <div className="grid grid-cols-4 gap-3">
        {photos.map((photo) => (
          <PhotoCards photo={photo} key={photo.id} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
