import React, { useState } from 'react'
import { db, imgDb } from '../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { arrayUnion, doc, setDoc } from 'firebase/firestore'

function UploadImage({setaddNew}) {
    const [img, setImg] = useState('')
    const [loading, setLoading] = useState(false)

    const handleUpload = async () => {
        try {
            // Upload image to Firebase Storage
            setLoading(true)
            const refrs = ref(imgDb, `pravesh/${crypto.randomUUID()}`);
            const data = await uploadBytes(refrs, img);
            const imgURL = await getDownloadURL(data.ref);

            const userPostRef = doc(db, 'pravesh', "weddings");
            await setDoc(userPostRef, {
                images: arrayUnion(imgURL)
            }, { merge: true });

        } catch (error) {
            console.error('Error creating post:', error);
        } finally {
            setLoading(false)
        }
        setImg("");
        setaddNew(false)
    }

    return (
        <div className='p-4 md:max-w-md '>
            {img && <div className='my-10'>
                <img src={URL.createObjectURL(img)} alt='' />
            </div>
            }
            <div className='bg-gray-100 relative text-black px-3 py-1 rounded-md inline-block cursor-pointer'>
                upload image
                <input type="file" onChange={(e) => setImg(e.target.files[0])
                } className=' absolute top-0 left-0 w-full opacity-0' />
            </div>
            <div>
                <button disabled={loading} className='bg-white text-black px-3 py-2 w-full rounded-md mt-5' onClick={handleUpload}>{loading ? "Loading..." : "Upload"}</button>
            </div>
        </div>
    )
}

export default UploadImage