import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { Card } from '@/components/cards/card'
import { useState, useEffect } from 'react'
import { CardSkeleton } from '@/components/cards/cardSkeleton'

function Home({animes}) { 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return ( 
    <> 
      <div className='container mx-auto py-[100px]'>
        <h2 className='text-white mb-[30px]'>{animes.pagination.items.total} items</h2>
          <div className="flex flex-wrap mx-[-15px]">
            {loading === true ? 
              <>
                {Array.from({ length: 10 }, (_, index) => (
                    <CardSkeleton key={index} />
                ))}
              </>
            :
              <>
                {animes.data.map((anime, index) => (
                    <Card card={anime} key={index} />
                ))}
              </>
            }
        </div>
      </div>
    </>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.

export async function getStaticProps() {
  const api = await fetch('https://api.jikan.moe/v4/anime')
  const animes = await api.json()
  return {
    props: {
      animes,
    },
  }  
} 

export default Home;