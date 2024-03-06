import { Link } from "react-router-dom";
import SectionStartTitle from "../../../Component/Title/SectionStartTitle";
import { Progress } from "flowbite-react";


const SpecialSkills = () => {
    return (
        <div className="p-10 bg-[#2a2c39]">
            <div className="grid lg:grid-flow-col lg:grid-cols-2 gap-10 items-center px-4">
                <div className="">
                    <SectionStartTitle SubStartTitle="Special Skills" SectionMainTitle="My special Skill Field Here." />
                    <Link className="btn btn-outline text-white hover:bg-white hover:text-black rounded-full"> Get Resume **</Link>
                </div>
                <div className="grid grid-flow-row gap-6">
                    <div className="bg-[#343a40] px-4 py-6 rounded">
                        <div className="text-base font-medium dark:text-white font-serif capitalize py-2" >communication</div>
                        <Progress progress={95} textLabel=" Communication" size="xxl" labelProgress labelText />
                    </div>
                    <div className="bg-[#343a40] px-4 py-6 rounded">
                        <div className="flex justify-between">
                            <div className="text-base font-medium dark:text-white font-serif capitalize py-2" >Leadership</div>
                        </div>

                        <Progress progress={90} textLabel="Teamwork" size="xxl" labelProgress labelText />
                    </div>
                    <div className="bg-[#343a40] px-4 py-6 rounded">
                        <div className="text-base font-medium dark:text-white font-serif capitalize py-2" >Teamwork</div>
                        <Progress progress={80} textLabel="Flexibility" size="xxl" labelProgress labelText />
                    </div>
                    <div className="bg-[#343a40] px-4 py-6 rounded">
                        <div className="text-base font-medium dark:text-white font-serif capitalize py-2" >Flexibility</div>
                        <Progress progress={95} textLabel="Leadership" size="xxl" labelProgress labelText />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SpecialSkills;