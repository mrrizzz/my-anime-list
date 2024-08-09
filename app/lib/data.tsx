export async function fetchPopularData(): Promise<{
  topAnime: CardData[];
  topManga: CardData[];
}> {
  try {
    const topMangaURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga`;
    const topAnimeURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`;

    const [topMangaResponse, topAnimeResponse] = await Promise.all([
      fetch(topMangaURL),
      fetch(topAnimeURL),
    ]);

    if (!topAnimeResponse.ok || !topMangaResponse.ok) {
      throw new Error("Failed to fetch card data.");
    }

    const topAnimeData = await topAnimeResponse.json();
    const topMangaData = await topMangaResponse.json();

    return {
      topAnime: topAnimeData.data,
      topManga: topMangaData.data,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}
