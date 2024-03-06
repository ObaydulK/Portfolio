import Card from "../../../Component/Card/Card";
import SectionStartTitle from "../../../Component/Title/SectionStartTitle";
const MyServices = () => {
    return (
        <div className="p-10">
            {/* Section title my services part */}
            <SectionStartTitle SubStartTitle="My Services" SectionMainTitle="Service Provide For My Clients." />
            {/* intro this part for my services              */}
            <div className="grid lg:grid-flow-col gap-8">
                <Card />
                <Card />
                <Card />
 


            </div> 








        </div>
    );
};

export default MyServices;