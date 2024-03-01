import { Datepicker } from "flowbite-react";
import SectionTitle from "../../../Component/Title/SectionTitle";


const BlogPost = () => {
    return (
        <div>
            {/* intro this is the Blog Post title  */}
            <SectionTitle Subtitle="Blog Post" MainTitle="Latest Tips & Ticks" />

            {/* this is th block site  */}
            <div>
                <div className=" flex gap-4 text-center items-center">
                    <div className="w-3/12"> <img src="" alt="imgegs" /></div>
                    <div className="w-3/6 text-start ">
                        <h1>Business- 07 February 2021 </h1>
                        <p>Don't wait until you officially started business to line these up</p>
                    </div>
                    <div className="w-3/12">read more</div>
                </div>
            </div>








        </div>
    );
};

export default BlogPost;