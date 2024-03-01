import { Button, Datepicker, Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsMailbox, BsPhone, BsTwitter } from 'react-icons/bs';
import SectionTitle from "../../Component/Title/SectionTitle";
import { useFocus } from "../../CustomHook/CustomHook";



const Footers = () => {
    const [inputRef, focusInput] = useFocus();

    return (
        <>
            <Footer container className="bg-[#343a40]    font-serif " >
                <div className=" w-full  ">

                    {/* this is the footer section so this is the component  */}
                    <SectionTitle Subtitle="Get Latest Updates" MainTitle="Subscribe For Newsletter" />
                    {/* Look it the subscribe part  */}
                    <div className="grid grid-flow-col justify-stretch space-x-4 ">
                        <from className=" grid grid-flow-col grid-cols-2 justify-center space-x-4">
                            <input className="  rounded text-black text-end justify-end" type="text" placeholder="YonMail@gmail.com"  id="" ref={inputRef} />
                            <Button className=" " onClick={focusInput} >Subscribe</Button>
                        </from>
                    </div>

                    {/* Look this contact mail, phone and social media part so connect this  */}
                    <div className="grid lg:grid-cols-3 gap-8 w-full justify-between lg:py-10 md:py-5     md:flex md:grid-cols-1            sm:flex sm:justify-between sm:mt-4 sm:grid-cols-1 sm:gap-6">
                        {/* this is contact phone part  */}
                        <div className="flex gpa-4 text-center items-center  ">
                            <div className="border rounded-full hover:bg-[#fff] hover:text-[#343a40] hover:duration-500 ">
                                <div className=" lg:text-5xl lg:p-10 "> <Footer.Icon href="#" className="text-lg" icon={BsPhone} /></div>
                            </div>
                            <div className="m-2 lg:text-3xl">01581199801</div>
                        </div>


                        {/* This is contact Gmail part  */}
                        <div className="flex gpa-4 text-center items-center">
                            <div className="border rounded-full hover:bg-[#fff]  hover:text-[#343a40] hover:duration-500 ">
                                <div className=" lg:text-3xl lg:p-10"> <Footer.Icon href="#" icon={BsMailbox} /></div>
                            </div>
                            <div className="m-2 lg:text-3xl">obaydul00000@gmail.com</div>
                        </div>

                        {/* this is social media part  */}
                        <div className="grid grid-cols-4 gap-6 text-center items-center">
                            <div className="border rounded-full hover:bg-[#fff]  hover:text-[#343a40] hover:duration-500 ">
                                <div className=" lg:text-3xl lg:p-6"> <Footer.Icon href="#" icon={BsFacebook} /></div>
                            </div>
                            <div className="border rounded-full hover:bg-[#fff]  hover:text-[#343a40] hover:duration-500 ">
                                <div className=" lg:text-3xl lg:p-6"> <Footer.Icon href="#" icon={BsInstagram} /></div>
                            </div>
                            <div className="border rounded-full hover:bg-[#fff]  hover:text-[#343a40] hover:duration-500 ">
                                <div className=" lg:text-3xl lg:p-6"> <Footer.Icon href="#" icon={BsTwitter} /></div>
                            </div>
                            <div className="border rounded-full hover:bg-[#fff]  hover:text-[#343a40] hover:duration-500 ">
                                <div className=" lg:text-3xl lg:p-6"> <Footer.Icon href="#" icon={BsGithub} /></div>
                            </div>
                        </div>
                    </div>

                    <Footer.Divider />
                    {/* intro this part , so part last footer for copyright part  */}
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        {/* this is the footer date and time paker  */}
                        <Datepicker />

                        {/* This is the footer copyright part */}
                        <Footer.Copyright href="#" by="Obaydul_Kuasha™" />
                        {/* Social media part of footer  */}
                        {/* <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                        </div> */}
                    </div>
                </div>
            </Footer>





        </>
    );
};

export default Footers;