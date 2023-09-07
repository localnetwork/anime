import React, { useState, useEffect } from 'react';

// async function getData() {
//     const res = await fetch('https://api.jikan.moe/v4/anime')
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
   
//     // Recommendation: handle errors
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }
   
//     return res.json()
//   }


export const TopRated = () => {
    // const data = await getData()
    // log(data)
    // const [data, setData] = useState(null);

    // useEffect(() => {

    //     // Function to fetch JSON data from the API
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch('https://api.jikan.moe/v4/anime'); // Replace 'YOUR_API_ENDPOINT' with your actual API URL
    //         if (!response.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         const jsonData = await response.json();
    //         setData(jsonData);
    //       } catch (error) {
    //         console.error('Error fetching JSON data:', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []); // The empty dependency array ensures this effect runs only once after the initial render.

      
    //   console.log(data);
    return (
        <div>TopRated</div>
    )
}
