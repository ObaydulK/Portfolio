
const Title = ({ Subtitle, Title }) => {
    return (
        <div>
            <div>
                <h1 className="lg:text-3xl font-semibold font-serif">******{Subtitle}******</h1>
            </div>
            <div>
                <h1 className=" lg:text-5xl font-semibold font-serif">{Title}</h1>
            </div>

        </div>
    );
};

export default Title;