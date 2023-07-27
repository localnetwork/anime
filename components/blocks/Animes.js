import React from 'react'
import { useState, useEffect } from 'react';
import { CardSkeleton } from '../cards/cardSkeleton';
import { Card } from '../cards/card';
export const Animes = ({ animes }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);
  return (
    <>
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
    </>
    )
}
