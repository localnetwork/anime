import { useRouter } from "next/router";

async function fetchAnimeIdsFromYourAPI() {
  const response = await fetch(
    "https://raw.githubusercontent.com/seanbreckenridge/mal-id-cache/master/cache/anime_cache.json"
  );
  const data = await response.json();
  return data;
}

export async function getStaticPaths({}) {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }
  const resAnim = await fetchAnimeIdsFromYourAPI();

  const animeIds = resAnim.sfw.concat(resAnim.nsfw);

  const paths = animeIds.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
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
    revalidate: 120, // In seconds
  };
}

export default function AnimePage({ animeData }) {
  const anime = animeData;
  const router = useRouter();
  return (
    <>
      {anime && (
        <div>
          <h1 className="text-white">{anime.title}</h1>
        </div>
      )}
    </>
  );
}
