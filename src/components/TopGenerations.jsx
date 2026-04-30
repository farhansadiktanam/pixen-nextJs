import PhotoCards from "./PhotoCards";

const TopGenerations = async () => {
  const res = await fetch("https://pixen-next-js.vercel.app/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);

  return (
    <div>
      <h2 className="text-2xl font-bold my-5 text-center">Top Generations</h2>

      <div className="grid grid-cols-4 gap-3">
        {topPhotos.map((photo) => (
          <PhotoCards photo={photo} key={photo.id} />
        ))}
      </div>
    </div>
  );
};

export default TopGenerations;
