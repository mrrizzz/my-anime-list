import CardWrapper from "../components/cards";
import { fetchPopularData } from "../lib/data";

export default async function Page() {
  const cardDisplayList = ["Anime", "Manga"];

  const [animeHeader, mangaHeader] = cardDisplayList;
  const { topAnime, topManga } = await fetchPopularData();

  return (
    <>
      <div className="flex flex-col mx-auto max-w-screen-xl py-4">
        <div>
          <CardWrapper data={topAnime} title={animeHeader} />
          <CardWrapper data={topManga} title={mangaHeader} />
        </div>
      </div>
    </>
  );
}
