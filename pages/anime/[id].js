import { useRouter } from "next/router";

async function fetchAnimeIdsFromYourAPI() {
  // Your logic to fetch anime IDs from your API
  // For example:
  const response = await fetch(
    "https://raw.githubusercontent.com/seanbreckenridge/mal-id-cache/master/cache/anime_cache.json"
  );
  const data = await response.json();
  return data;
}

export async function getStaticPaths() {
  // Assume you have a function to fetch anime IDs from your API
  const resAnim = await fetchAnimeIdsFromYourAPI();

  const animeIds = resAnim.sfw.concat(resAnim.nsfw);

  // Generate paths based on anime IDs
  const paths = animeIds.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: true, // or 'blocking' for incremental static regeneration
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  // Fetch anime data from Jikan API based on the provided id
  const apiUrl = `https://api.jikan.moe/v4/anime/${id}/full`;
  const response = await fetch(apiUrl);
  const animeData = await response.json();

  return {
    props: {
      animeData,
    },
  };
}

export default function AnimePage({ animeData }) {
  const anime = animeData.data;
  const router = useRouter();

  // Show loading state while data is being fetched
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Render your page with the fetched data
  return (
    <div>
      <h1 className="text-white">{anime.title}</h1>
    </div>
  );
}
