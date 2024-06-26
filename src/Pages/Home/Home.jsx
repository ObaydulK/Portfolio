import AwesomePortfolio from "../../Component/AwesomePortolio/AwesomePortfolio";
import BlogPost from "../../Component/Blog/BlogPost";
import ProgressCountReport from "../../Component/ProgressCounterReport/ProgressCountReport";
import Tastimonial from "../../Component/Testimonial/Tastimonial";
import Carousel from "../Carousel/Carousel"; 
import FavouriteClients from "./FavouriteClients/FavouriteClients";
import MyServices from "./MyServices/MyServices";
import SpecialSkills from "./SpecialSkills/SpecialSkills";


const Home = () => {
    return (
        <div>
            <Carousel />
            <MyServices />
            <SpecialSkills />
            <ProgressCountReport/>
            <AwesomePortfolio/>
            <Tastimonial/>

            <FavouriteClients /> 
            <BlogPost/>
        </div>
    );
};

export default Home;