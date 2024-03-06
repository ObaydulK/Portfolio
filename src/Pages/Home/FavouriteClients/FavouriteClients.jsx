import SectionStartTitle from "../../../Component/Title/SectionStartTitle";
import "../FavouriteClients/FovouriteClient.css"
import client1 from "../../../assets/1.webp"
import client2 from "../../../assets/2.webp"
import client3 from "../../../assets/3.webp"
import client4 from "../../../assets/4.webp"



const FavouriteClients = () => {
    return (
        <div className=" p-10">
            {/* intro this is the section title */}
            <SectionStartTitle SubStartTitle="Favourite Clients" SectionMainTitle="Work With Trusted Company" />
            <div>
                <div className="grid lg:grid-flow-col lg:grid-cols-4 gap-10   ">

                    <div className=" images-logo bg-[#858792] shadow-2xl rounded hover:bg-black hover:text-[#858792] " >
                        <img className=" images " src={client1} alt="" />
                    </div>
                    <div className="images-logo bg-[#858792]  shadow-2xl rounded ">
                        <img className=" p-5" src={client2} alt="" />
                    </div>
                    <div className="images-logo bg-[#858792]  shadow-2xl rounded">
                        <img className=" p-5" src={client3} alt="" />
                    </div>
                    <div className="images-logo bg-[#858792]  shadow-2xl rounded ">
                        <img className=" p-5" src={client4} alt="" />
                    </div>
                </div>
            </div>







        </div>
    );
};

export default FavouriteClients;