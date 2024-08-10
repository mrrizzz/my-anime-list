export async function fetchPopularData(): Promise<{
  topAnime: AnimeItem[];
  topManga: MangaItem[];
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

export async function searchKeyword(query: string): Promise<{
  anime: AnimeItem[];
  manga: MangaItem[];
  character: CharacterItem[];
}> {
  try {
    const searchAnimeURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${query}`;
    const searchMangaURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/manga?q=${query}`;
    const searchCharacterURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/character?q=${query}`;

    const [searchAnimeResponse, searchMangaResponse, searchCharacterResponse] =
      await Promise.all([
        fetchWithRetry(searchAnimeURL),
        fetchWithRetry(searchMangaURL),
        fetchWithRetry(searchCharacterURL),
      ]);

    const searchAnimeResult = searchAnimeResponse.ok
      ? await searchAnimeResponse.json()
      : [];
    const searchMangaResult = searchMangaResponse.ok
      ? await searchMangaResponse.json()
      : [];
    const searchCharacterResult = searchCharacterResponse.ok
      ? await searchCharacterResponse.json()
      : [];

    return {
      anime: searchAnimeResult.data || [],
      manga: searchMangaResult.data || [],
      character: searchCharacterResult.data || [],
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch card data.");
  }
}

async function fetchWithRetry(
  url: string,
  retries = 5,
  delay = 500,
): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    const response = await fetch(url);
    if (response.status === 429) {
      // If we hit rate limit, wait and retry
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2; // Exponential backoff
    } else if (response.status === 404) {
      // If resource is not found, return an empty response
      return response;
    } else {
      return response;
    }
  }
  throw new Error("Max retries reached");
}
