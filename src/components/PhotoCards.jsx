import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const PhotoCards = ({ photo }) => {
  return (
    <Card className="border rounded-xl">
      <div>
        <div className="relative aspect-square w-full">
          <Image
            src={photo.imageUrl}
            fill
            alt={photo.title}
            className="rounded-xl object-cover"
          />

          <Chip className="absolute right-2 top-2" size="sm">
            {photo.category}
          </Chip>
        </div>
        <div>
          <h2 className="font-medium">{photo.title}</h2>
        </div>

        <div className="flex gap-6">
          <div className="flex gap-2 items-center">
            <p>
              <FaHeart />
            </p>
            <p>{photo.likes}</p>
          </div>

          <Separator orientation="vertical" />

          <div className="flex gap-2 items-center">
            <p>
              <IoMdDownload />
            </p>
            <p>{photo.downloads}</p>
          </div>
        </div>
      </div>

      <Button className="w-full" variant="outline">
        View
      </Button>
    </Card>
  );
};

export default PhotoCards;
