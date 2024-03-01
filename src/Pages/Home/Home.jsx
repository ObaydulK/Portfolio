import Carousel from "../Carousel/Carousel";
import BlogPost from "./Blog/BlogPost";
import FavouriteClients from "./FavouriteClients/FavouriteClients";


const Home = () => {
    return (
        <div>
            <Carousel />


            <FavouriteClients/>
            <BlogPost />
        </div>
    );
};

export default Home;