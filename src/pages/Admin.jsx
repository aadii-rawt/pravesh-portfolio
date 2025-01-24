import React, { useEffect, useState } from 'react'
import { db, imgDb } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { arrayUnion, doc, getDoc, setDoc } from 'firebase/firestore';
import Masonry from 'react-masonry-css';
import { Fancybox } from '@fancyapps/ui';
import Login from '../components/Login';
import UploadImage from '../components/UploadImage';
function Admin() {


  const [isLogin, setIsLogin] = useState(true);
  const [addNew, setaddNew] = useState(false);
  const [img, setImg] = useState('')
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true)

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
    } finally {
      setLoading(false)
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

  if (loading) {
    return <div className='w-full min-h-screen bg-black text-white flex items-center justify-center'>
      <span>Loading...</span>
    </div>
  }
  return (
    <div className='bg-black min-h-screen w-full text-white'>
      {isLogin ?
        <div> {!addNew ?
          <div>
            <div className='flex items-center justify-between p-4'>
              <h1 className='font-semibold text-xl '>Hi Pravesh 👋</h1>
              <button onClick={() => setaddNew(true)} className='bg-white text-black px-3 py-1 font-semibold rounded-md'>New</button>
            </div>
            <section className='px-2'>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column pr-2 md:pr-5" >
                {images.slice().reverse().map((img) => (
                  <div key={img} className="overflow-hidden w-full my-2 md:my-5 ">
                    <a href={img}
                      data-caption={img}
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
          :
          <UploadImage setaddNew={setaddNew} />
        }
        </div> :
        <Login setIsLogin={setIsLogin} />
      }
    </div>
  )
}

export default Admin