import Image from "next/image";

export default function CardWrapper({
  data,
  title,
}: {
  data: CardData[];
  title: string;
}) {
  return (
    <>
      <h3 className="text-lg font-semibold">Most Popular {title}</h3>
      <div className="overflow-x-auto p-4 flex space-x-2">
        <Card data={data} />
      </div>
    </>
  );
}

function Card({ data }: { data: CardData[] }) {
  return (
    <>
      {data.map((d) => (
        <div className="relative w-40 shadow-xl mx-2 border border-gray-700">
          <a href={d.url} className="block relative">
            <div className="relative w-40 h-[220px]">
              <Image
                src={d.images.webp.image_url}
                alt="gambar"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>

            <div
              className="absolute bottom-0 left-0 right-0 bg-opacity-30 p-2"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.05))",
              }}
            >
              <p className="text-white text-[11px] leading-tight">{d.title}</p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
