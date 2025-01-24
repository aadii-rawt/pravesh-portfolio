import React from 'react'

function Gallery({ images }) {
    return (
        <section className="text-neutral-700">
            {/* <h1>del</h1> */}
            <div className="container w-full">
                <div className="flex flex-wrap w-full">
                    {images.map((image, index) => (
                        <div key={index} className="flex w-full md:w-1/2 flex-wrap">
                            {/* <div className="overflow-hidden h-full w-full">
                                <a href={image} data-fancybox="gallery">
                                    <img
                                        className="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
                                        // src={`./${image}`}
                                        src="./DSC_1024.JPG"
                                    />
                                </a>
                            </div> */}
                            <img src={`./${image}`} alt="" className='"block h-full w-full object-cover object-center animate-fade-in transition duration-500 transform scale-100 hover:scale-110"' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery