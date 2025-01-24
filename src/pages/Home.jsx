// import React, { useEffect, useState } from 'react'
// import '../output.css'
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../firebase';
// function Home() {
//   // const images = [
//   //   "DSC_0991.JPG",
//   //   "DSC_0610.JPG",
//   //   "DSC_0675.jpg",
//   //   "_MG_0405.jpg",
//   //   "DSC_0179 (1).jpg",
//   //   "DSC_0187 (1).jpg",
//   //   "DSC_0229.jpg",
//   //   "DSC_0174.jpg",
//   //   "DSC_0615.jpg",
//   //   "DSC_0230 (1).jpg",
//   //   "DSC_0272 (1).jpg",
//   //   "DSC_0997.jpg",
//   //   "DSC_0628 (1).jpg",
//   //   "DSC_1024.JPG",
//   //   "DSC_1000.JPG",
//   //   "DSC_0234.jpg",
//   // ];

//   const [images, setImages] = useState([]);

//   const fetchImages = async () => {
//     try {
//       // Reference to the document
//       const docRef = doc(db, 'pravesh', 'weddings');

//       // Fetch the document
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         // Get the images array from the document
//         const data = docSnap.data();
//         setImages(data.images || []); // Fallback to empty array if images field is missing
//       } else {
//         console.log('No such document!');
//       }
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);


//   return (
//     <div className="dark:bg-black bg-white min-h-screen text-black dark:text-white px-5 md:px-20">
//       <div className="container mx-auto">
//         <h1 className="text-4xl pt-10 pb-8 font-bold">PORTFOLIO</h1>
//         <section className="text-neutral-700">
//           <div className="container w-full">
//             <div className="flex flex-wrap w-full">
//               <div className="flex w-full md:w-1/2 flex-wrap">
//                 <div className="w-full md:w-1/2 p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_0991.JPG"
//                       data-fancybox="gallery">
//                       <img alt="a person standing in front of a rock formation"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./DSC_0991.JPG" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_0610.jpg"
//                       data-fancybox="gallery">
//                       <img alt="a person standing in front of a rock formation"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./DSC_0610.jpg" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="w-full p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_0675.jpg"
//                       data-fancybox="gallery">
//                       <img alt="a man standing on a beach next to the ocean"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./DSC_0675.jpg" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex w-full md:w-1/2 flex-wrap">
//                 <div className="w-full p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./hands.jpg"
//                       data-fancybox="gallery">
//                       <img alt="a snow covered mountain with trees on the side"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./hands.jpg" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_0179 (1).jpg"
//                       data-fancybox="gallery">
//                       <img alt="a branch of a plant floating in a body of water"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./DSC_0179 (1).jpg" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_0187 (1).jpg"
//                       data-fancybox="gallery">
//                       <img alt="a blue sky with a lot of red and orange clouds"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./DSC_0187 (1).jpg" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_0229.jpg"
//                       data-fancybox="gallery">
//                       <img alt="a view of the ocean from the top of a hill"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./DSC_0229.jpg" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_0174.jpg"
//                       data-fancybox="gallery">
//                       <img alt="a pheasant flying in the sky with its wings spread"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./DSC_0174.jpg" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex w-full md:w-1/2 flex-wrap">
//                 <div className="w-full p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_0615.jpg"
//                       data-fancybox="gallery">
//                       <img alt="a statue of a man next to a statue of a woman"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./DSC_0615.jpg" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_0230 (1).jpg"
//                       data-fancybox="gallery">
//                       <img alt="a city street with tall buildings in the background"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./DSC_0230 (1).jpg" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_0272 (1).jpg"
//                       data-fancybox="gallery">
//                       <img alt="25 de abril bridge spanning over Tagus river"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./DSC_0272 (1).jpg" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_0997.jpg"
//                       data-fancybox="gallery">
//                       <img alt="a lot of lanterns floating in the air at night"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./DSC_0997.jpg" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_0628 (1).jpg"
//                       data-fancybox="gallery">
//                       <img alt="a flock of seaguls flying over a body of water"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./DSC_0628 (1).jpg" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex w-full md:w-1/2 flex-wrap">
//                 <div className="w-full md:w-1/2 p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_1024.JPG"
//                       data-fancybox="gallery">
//                       <img alt="a statue of a headless angel"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src=".s/DSC_1024.JPG" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="w-full md:w-1/2 p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_1000.JPG"
//                       data-fancybox="gallery">
//                       <img alt="Monument to the Discoveries viewed from top to bottom"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./DSC_1000.JPG" />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="w-full p-1">
//                   <div className="overflow-hidden h-full w-full">
//                     <a href="./DSC_0234.jpg"
//                       data-fancybox="gallery">
//                       <img
//                         alt="a group of people walking along the museum of art, architecture and technology of lisbon next to the Tagus river"
//                         className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                         src="./DSC_0234.jpg" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section></section>
//       </div>
//     </div>
//   )
// }

// export default Home


// import React, { useEffect, useState } from 'react';
// import '../output.css';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../firebase';

// function Home() {
//   const [images, setImages] = useState([]);

//   const fetchImages = async () => {
//     try {
//       // Reference to the document
//       const docRef = doc(db, 'pravesh', 'weddings');

//       // Fetch the document
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         setImages(data.images || []); // Fallback to empty array if images field is missing
//       } else {
//         console.log('No such document!');
//       }
//     } catch (error) {
//       console.error('Error fetching images:', error);
//     }
//   };

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   return (
//     <div className="dark:bg-black bg-white min-h-screen text-black dark:text-white px-5 md:px-20">
//       <div className="container mx-auto">
//         <h1 className="text-4xl pt-10 pb-8 font-bold">PORTFOLIO</h1>
//         <section className="text-neutral-700">
//           <div className="container w-full">
//             <div className="flex flex-wrap w-full">
//               {images.length > 0 ? (
//                 images.map((img, index) => (
//                   <div
//                     key={index}
//                     className={`${
//                       index % 2 === 0 ? 'w-full md:w-1/2' : 'w-full'
//                     } p-1`}
//                   >
//                     <div className="overflow-hidden h-full w-full">
//                       <a href={img} data-fancybox="gallery">
//                         <img
//                           alt={`Image ${index + 1}`}
//                           className="block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
//                           src={img}
//                         />
//                       </a>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p>No images available.</p>
//               )}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Home;



import React, { useEffect, useState } from 'react'
import '../output.css'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Masonry from 'react-masonry-css';
import { Fancybox } from '@fancyapps/ui';

function Home() {

  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      // Reference to the document
      const docRef = doc(db, 'pravesh', 'weddings');

      // Fetch the document
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // Get the images array from the document
        const data = docSnap.data();
        setImages(data.images || []); // Fallback to empty array if images field is missing
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);


  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2
  }

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      // Fancybox options
      infinite: true,
      transitionEffect: "fade",
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);
  return (
    <div className="dark:bg-black bg-white min-h-screen text-black dark:text-white px-5 md:px-20">
      <div className="container mx-auto">
        <h1 className="text-4xl pt-10 pb-8 font-bold">PORTFOLIO</h1>
        <section className='flex'>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column pr-2 md:pr-5" >
            {images.slice().reverse().map((img) => (
              <div key={img} className="overflow-hidden w-full my-2 md:my-5 ">
                <a href={img}
                  data-fancybox="gallery">
                  <img alt={img}
                    className="block h-full w-full max-w-[400px] object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
                    src={img} />
                </a>
              </div>
            ))}
          </Masonry>
        </section>
      </div>
    </div>
  )
}

export default Home