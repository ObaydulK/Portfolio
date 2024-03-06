import { Card } from "flowbite-react";
import SectionStartTitle from "../Title/SectionStartTitle";



const AwesomePortfolio = () => {
    return (
        <div className="bg-[#6c757d] bg-opacity-30 px-10">
            <SectionStartTitle SubStartTitle="Awesome Partfolio" SectionMainTitle="My Complete Projects" />

            <div className="grid lg:grid-flow-col gap-10 ">
                <Card className="bg-[#6c757d] " >
                    <div className="h-[400px] bg-[#4b4f53]"></div>

                    <div className="text-white">
                        <h5 className="text-2xl font-bold tracking-tight py-2">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </div>
                </Card>
                <Card className="bg-[#6c757d] " >
                    <div className="h-[400px] bg-[#4b4f53]"></div>

                    <div className="text-white">
                        <h5 className="text-2xl font-bold tracking-tight py-2">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </div>
                </Card>
                <Card className="bg-[#6c757d] " >
                    <div className="h-[400px] bg-[#4b4f53]"></div>

                    <div className="text-white">
                        <h5 className="text-2xl font-bold tracking-tight py-2">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default AwesomePortfolio;