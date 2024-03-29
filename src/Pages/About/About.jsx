import FacthTest from "../../Component/FacthTest";
import ProgressCountReport from "../../Component/ProgressCounterReport/ProgressCountReport";
import Tastimonial from "../../Component/Testimonial/Tastimonial";
// import TestPurpas from "../../TestPurpas";
import FavouriteClients from "../Home/FavouriteClients/FavouriteClients";
import EducationExperience from "./EducationExprience/EducationExperience";


const About = () => {
    return (
        <div>









            {/* <TestPurpas /> */}




            <FacthTest/>

            <EducationExperience />
            <ProgressCountReport />
            <Tastimonial />
            <FavouriteClients />
        </div>
    );
};

export default About;