
const SectionStartTitle = ({ SubStartTitle, SectionMainTitle }) => {
    return (
        <div className="  text-start py-10">
            <div>
                <h1 className="lg:text-3xl font-semibold   mb-5 text-white opacity-30">|| {SubStartTitle} </h1>
            </div>
            <div>
                <h1 className=" lg:text-5xl font-semibold font-serif text-white">{SectionMainTitle}</h1>
            </div>
        </div>
    );
};

export default SectionStartTitle;