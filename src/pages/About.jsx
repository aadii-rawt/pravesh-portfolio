import React from 'react'

function About() {
    return (
        <div className="dark:bg-black bg-white h-screen text-black dark:text-white px-5 md:px-20  animate-fade-in transition duration-500">
            <div className="container mx-auto">
                <h1 className="text-4xl pt-10 pb-8"><b>ABOUT ME</b></h1>
                <div className="grid grid-cols-2 gap-14 md:gap-20">
                    <div className="col-span-2 md:col-span-1">
                        <div
                            className="bg-white dark:bg-neutral-900 p-5 pb-28 m-6 md:m-12 shadow-lg border border-gray-100 dark:border-neutral-800 hover:rotate-0 transition duration-500 -rotate-6 relative">
                            <img src="./Avatar.jpeg" alt=""
                                className="smooth-edges flex flex-col w-full aspect-square object-cover h-auto" />
                            <div className="absolute bottom-0 left-0 right-0 text-center">
                                <p className="text-gray-800 dark:text-slate-200 pb-7 h-full text-6xl font-nothingyoucoulddo">me</p>
                            </div>
                        </div>

                    </div>
                    <section className="font-normal text-center text-base md:text-start mx-3 col-span-2 md:col-span-1 my-auto">
                        <div className="block md:hidden">
                            <p className="text-3xl font-serif font-bold mb-1">Hello there,</p>
                            <p className="text-3xl font-serif font-bold mb-6">I'm Pravesh <span className="animate-wave">👋</span></p>
                        </div>
                        <p className="hidden md:block text-3xl font-serif font-bold mb-6">Hello there, I'm Pravesh
                            <span className="animate-wave">👋</span>
                        </p>
                        <p className="mb-4">
                            I'm an Indian photographer passionate about capturing timeless moments. I specialize in
                            creating images that are both visually striking and emotionally
                            impactful, and I have developed a signature style that blends
                            natural beauty with vibrant colors and bold compositions.
                        </p>
                        <p className="mb-4">
                            When I'm not behind the camera, you can find me exploring the city's
                            diverse neighborhoods, trying out new restaurants, or spending time
                            with my family and friends. I believe that every moment is an
                            opportunity to experience something new and to create memories that
                            will last a lifetime.
                        </p>
                        <p>
                            Thank you for taking the time to learn a little bit about me and my
                            work. If you're interested in collaborating or would like to see
                            more of my portfolio, please don't hesitate to get in touch. Let's
                            work together to bring your vision to life!
                        </p>
                    </section>
                </div>
            </div>
        </div >
       
    )
}

export default About