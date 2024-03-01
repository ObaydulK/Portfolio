import SectionStartTitle from "../../../Component/Title/SectionStartTitle";
import "../FavouriteClients/FovouriteClient.css"
import client1 from "../../../assets/1.webp"



const FavouriteClients = () => {
    return (
        <div className="bg-[#858792] py-10">
            {/* intro this is the section title */}
            <SectionStartTitle SubStartTitle="Favourite Clients" SectionMainTitle="Work With Trusted Company" />
            <div>
                <div className="grid grid-flow-col grid-cols-4 gap-10   ">

                    <div className=" images-logo hover:bg-white hover:text-[#858792] " >
                        <img className=" images " src={client1} alt="" />
                    </div>
                    <div className="images-logo  ">
                        <img className=" p-5" src={client1} alt="" />
                    </div>
                    <div className="images-logo ">
                        <img className=" p-5" src={client1} alt="" />
                    </div>
                    <div className="images-logo   ">
                        <img className=" p-5" src={client1} alt="" />
                    </div>
                </div>
            </div>







        </div>
    );
};

export default FavouriteClients;