
import SectionTitle from "../../../Component/Title/SectionTitle";


const BlogPost = () => {
    return (
        <div className="p-10">
            {/* intro this is the Blog Post title  */}
            <SectionTitle Subtitle="Blog Post" MainTitle="Latest Tips & Ticks" />

            {/* this is th block site  */}
            <div>
                <div className="  grid lg:grid-flow-col gap-4 text-center items-center">
                    <div className="lg:w-3/12"> <img src="" alt="imgegs" /></div>
                    <div className="lg:w-3/6 lg:text-start text-center ">
                        <h1>Business- 07 February 2021 </h1>
                        <p>Don't wait until you officially started business to line these up</p>
                    </div>
                    <div className="lg:w-3/12">Read more</div>

                    <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracki">Donec lectus leo</h2>
                                <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                            </div>
                            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;