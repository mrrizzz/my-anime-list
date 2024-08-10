"use client";
import { searchKeyword } from "@/app/lib/data";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchData, setSearchData] = useState<{
    anime: any[];
    manga: any[];
    character: any[];
  }>({ anime: [], manga: [], character: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await searchKeyword(query);
        setSearchData({
          anime: data.anime || [],
          manga: data.manga || [],
          character: data.character || [],
        });

        setError(null);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      fetchData();
    }
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const displayAnime = (data: AnimeItem[]) => {
    return (
      <div className="flex flex-col mt-6 space-y-5">
        {data.length === 0 ? (
          <h1>No result found</h1>
        ) : (
          <>
            <h1 className="font-semibold text-2xl italic">
              Result for '{query}', {data.length} found :
            </h1>
            {data.map((anime, index) => (
              <>
                <div key={index} className="flex space-x-5">
                  <Image
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    width={80}
                    height={120}
                    priority
                  />
                  <div>
                    <h2 className="font-bold">{anime.title}</h2>
                    <p>
                      {anime.type} {anime.episodes}
                    </p>
                    <p>Score : {anime.score}</p>
                    <p>
                      Genre :
                      {anime.genres.map((l: ListDetail) => (
                        <span key={l.mal_id}>{l.name} </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="my-4 border-b-2 border-gray-300"></div>
              </>
            ))}
          </>
        )}
      </div>
    );
  };

  const displayManga = (data: MangaItem[]) => {
    return (
      <div className="flex flex-col mt-6 space-y-5">
        {data.length === 0 ? (
          <h1>No result found</h1>
        ) : (
          <>
            <h1 className="font-semibold text-2xl italic">
              Result for '{query}', {data.length} found :
            </h1>
            {data.map((manga, index) => (
              <>
                <div key={index} className="flex space-x-5">
                  <Image
                    src={manga.images.jpg.image_url}
                    alt={manga.title}
                    width={80}
                    height={120}
                    priority
                  />
                  <div>
                    <h2 className="font-bold">{manga.title}</h2>
                    <p>
                      {manga.type} {manga.chapters}
                    </p>
                    <p>Score : {manga.score}</p>
                    <p>
                      Genre :
                      {manga.genres.map((l: ListDetail) => (
                        <span key={l.mal_id}>{l.name} </span>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="my-4 border-b-2 border-gray-300"></div>
              </>
            ))}
          </>
        )}
      </div>
    );
  };

  const displayCharacter = (data: CharacterItem[]) => {
    return (
      <div className="flex flex-col mt-6 space-y-5">
        {data.length === 0 ? (
          <h1>No result found</h1>
        ) : (
          <>
            <h1 className="font-semibold text-2xl italic">
              Result for '{query}', {data.length} found :
            </h1>
            {data.map((char, index) => (
              <>
                <div key={index} className="flex space-x-5">
                  <Image
                    src={char.images.jpg.image_url}
                    alt={char.name}
                    width={80}
                    height={120}
                    priority
                  />
                  <div>
                    <h2 className="font-bold">{char.name}</h2>
                  </div>
                </div>
                <div className="my-4 border-b-2 border-gray-300"></div>
              </>
            ))}
          </>
        )}
      </div>
    );
  };

  return (
    <div>
      {displayAnime(searchData.anime)}
      {displayManga(searchData.manga)}
      {displayCharacter(searchData.character)}
    </div>
  );
}
