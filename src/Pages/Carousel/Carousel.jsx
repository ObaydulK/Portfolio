

const Carousel = () => {


    return (
        <div>
            <div className="  dark:bg-violet-400 dark:text-gray-900">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className=" px-10 pt-10 ">
                        <div className="space-x-2 text-center py-2 lg:py-0 ">
                            <div className=" min-[320px]:text-center lg:text-start capitalize font-bold "  >
                                <h1 className="text-5xl font-mono italic">Hello !</h1>
                                <h1 className="lg:text-4xl  uppercase font-serif py-5"> Wellcome my Portfolio  </h1>
                                <h1 className="text-3xl font-serif  "> I'm Obaydul_Kuasha  </h1>
                            </div>
                        </div>
                    </div>
                    <div className=" ">
                        <img src="https://i.ibb.co/TwWztNX/Obaydul-bg.png" />
                    </div>
                </div>
            </div>

            <section>
                <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leadi sm:text-5xl">Quisquam necessita vel
                        <span className="dark:text-violet-400">laborum doloribus</span>delectus
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                    <div className="flex flex-wrap justify-center">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button>
                        <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Learn more</button>
                    </div>
                </div>
            </section>
        </div >




    );


};




export default Carousel;