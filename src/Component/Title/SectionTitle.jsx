
const SectionTitle = ({ Subtitle, MainTitle }) => {
    return (
        <div className=" text-center py-10">
            <div>
                <h1 className="lg:text-3xl font-semibold   mb-5 text-white opacity-30">|| {Subtitle} </h1>
            </div>
            <div>
                <h1 className=" lg:text-5xl font-semibold font-serif text-white">{MainTitle}</h1>
            </div>

        </div>
    );
};

export default SectionTitle;