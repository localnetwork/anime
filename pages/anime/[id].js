import { useRouter } from "next/router";

async function fetchAnimeIdsFromYourAPI() {
  const response = await fetch(
    "https://raw.githubusercontent.com/seanbreckenridge/mal-id-cache/master/cache/anime_cache.json"
  );
  const data = await response.json();
  return data;
}

export async function getStaticPaths() {
  const resAnim = await fetchAnimeIdsFromYourAPI();

  const animeIds = resAnim.sfw.concat(resAnim.nsfw);

  const paths = animeIds.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  let animeData = {
    data: [],
  };
  try {
    const apiUrl = `https://api.jikan.moe/v4/anime/${id}`;
    const response = await fetch(apiUrl);

    if (response.status === 200) {
      animeData = await response.json();
      animeData = animeData.data;
    } else {
      return {
        notFound: true,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      animeData,
    },
  };
}

export default function AnimePage({ animeData }) {
  const anime = animeData;
  const router = useRouter();
  return (
    <div>
      <h1 className="text-white">{anime.title}</h1>
    </div>
  );
}
