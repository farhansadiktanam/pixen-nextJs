import { Badge, Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://pixen-next-js.vercel.app/data.json/`);
  const photos = await res.json();

  const expectedPhoto = photos.find((p) => p.id === parseInt(id));
  console.log(expectedPhoto);

  return (
    <Card className="overflow-hidden border-none shadow-lg max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* --- Left Side: High-Res Image Showcase --- */}
        <div className="md:col-span-7 flex items-center justify-center relative group mt-5">
          <div className="relative aspect-4/5 w-full">
            <div className="relative aspect-square w-full">
              <Image
                src={expectedPhoto?.imageUrl}
                sizes="lg"
                fill
                alt={expectedPhoto.title}
                className="rounded-xl object-cover"
              />

              <Chip className="absolute right-2 top-2" size="sm">
                {expectedPhoto.category}
              </Chip>
            </div>
          </div>
        </div>

        {/* --- Right Side: Details & Actions --- */}
        <div className="md:col-span-5 flex flex-col p-6 lg:p-8 bg-card">
          <div className="space-y-4 grow">
            <h1 className="text-3xl font-bold tracking-tight">
              {expectedPhoto.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              {expectedPhoto.description ||
                "A beautiful captured moment highlighting the interplay of light and shadow."}
            </p>

            <Separator className="my-6" />

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <FaHeart className="text-red-500" /> Likes
                </span>
                <span className="font-medium">
                  {expectedPhoto.likes.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <IoMdDownload className="text-primary" /> Downloads
                </span>
                <span className="font-medium">
                  {expectedPhoto.downloads.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Technical Meta (Optional) */}
            <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm mt-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Uploaded</span>
                <span className="font-medium">{expectedPhoto.createdAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Resolution</span>
                <span className="font-medium">
                  {expectedPhoto.resolution} px
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3">
            <Button size="lg" className="w-full gap-2">
              <IoMdDownload className="text-lg" />
              Download High Res
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 gap-2">
                <FaHeart /> Like
              </Button>
              <Link href="/all-photos" className="flex-1">
                <Button variant="ghost" className="w-full">
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PhotoDetailsPage;
