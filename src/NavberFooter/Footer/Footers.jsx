import { Datepicker, Footer } from "flowbite-react";
import logo from "../../assets/obaydur-rahman-rifat.png"
const Footers = () => {
    return (
        <>
            <Footer container>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand className="uppercase"
                                href="https://Linkedin.com"
                                src={logo}
                                target="blank"
                                alt="Obadyul Kuasha Portfolio Logo"
                                name="Obadyul"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Portfolio</Footer.Link>
                                    <Footer.Link href="#">Recent Project</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Github</Footer.Link>
                                    <Footer.Link href="#">Linkedin</Footer.Link>
                                    <Footer.Link href="#">Instagram</Footer.Link>
                                    <Footer.Link href="#">Twitter</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Datepicker />
                        <Footer.Copyright href="#" by="Obaydul_Kuasha™" />

                        {/* <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon href="#" icon={BsFacebook} />
                            <Footer.Icon href="#" icon={BsInstagram} />
                            <Footer.Icon href="#" icon={BsTwitter} />
                            <Footer.Icon href="#" icon={BsGithub} />
                            <Footer.Icon href="#" icon={BsDribbble} />
                        </div> */}
                    </div>
                </div>
            </Footer>
        </>
    );
};

export default Footers;