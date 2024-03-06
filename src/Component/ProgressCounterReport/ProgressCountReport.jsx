
const ProgressCountReport = () => {
    return (
        <div className="">
            <div className=" grid lg:grid-flow-col lg:grid-cols-3   gap-10 bg-[#282a37] text-white shadow p-10 font-mono">
                <div className="stat flex gap-5 items-center ">
                    <div className=" ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className=" font-semibold text-3xl ">
                        <div className=" py-4 ">000+</div>
                        <div className=" opacity-30 ">Happy Client</div>
                    </div>
                </div>
                <div className="stat flex gap-5 items-center">
                    <div className=" ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className=" font-semibold  text-3xl">
                        <div className=" py-4 ">057+</div>
                        <div className=" opacity-30 "> Project Complete</div>
                    </div>
                </div>
                <div className="stat flex gap-5 items-center">
                    <div className="avatar online">
                        <div className="w-16 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className=" font-semibold  text-3xl">
                        <div className=" py-4 ">002+</div>
                        <div className=" opacity-30 "> Years of Experience</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProgressCountReport;