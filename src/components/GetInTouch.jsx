import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBehanceSquare } from '@fortawesome/free-brands-svg-icons'
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDribbbleSquare } from '@fortawesome/free-brands-svg-icons'

const GetInTouch = () => {
    return (
        <div className="justify-center items-center px-4 md:px-16 pt-20 max-sm:px-5 w-full">
            <div className="flex flex-col mt-16 w-full max-md:mt-10 font-rubik">
                <div className="justify-center items-center min-md:mx-5 min-sm:mx-5 px-8 md:px-96 py-24 whitespace-nowrap bg-neutral-700 mt-28 bg-no-repeat bg-cover bg-center
		bg-[url('images/Hello.png')]">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col px-5 text-white text-center">
                            <div className="self-center text-3xl md:text-4xl">Get in touch</div>
                            <div className="mt-6 text-5xl md:text-6xl">Just Say Hello!</div>
                        </div>
                        <div className="justify-center px-10 py-5 mt-20 text-3xl whitespace-nowrap bg-white text-neutral-700 max-md:px-5 max-md:mt-10">
                            Contact
                        </div>
                        <div className="flex justify-center items-center px-5 mt-16 w-full">
                            <div className="flex gap-10 justify-between w-full md:justify-between md:gap-15">
                                <FontAwesomeIcon icon={faFacebookSquare} style={{ color: "#ffffff" }} className="w-10 h-10" />
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff" }} className="w-10 h-10" />
                                <FontAwesomeIcon icon={faBehanceSquare} style={{ color: "#ffffff" }} className="w-10 h-10" />
                                <FontAwesomeIcon icon={faSquareXTwitter} style={{ color: "#ffffff" }} className="w-10 h-10" />
                                <FontAwesomeIcon icon={faDribbbleSquare} style={{ color: "#ffffff" }} className="w-10 h-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full max-md:mt-10 font-rubik">
                <div className="justify-center items-center min-md:mx-5 min-sm:mx-5 px-8 md:px-5 py-32 whitespace-nowrap 
                bg-neutral-700 mt-28  bg-no-repeat bg-cover bg-center bg-[url('images/project.png')]">
                    <div className="justify-center">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-full md:w-1/4 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow justify-center px-10 text-zinc-800 self-center min-md:px-5">
                                    <div className="text-6xl max-md:text-4xl max-sm:px-12">750+</div>
                                    <div className="text-2xl max-sm:mb-8">Completed <wbr />Projects</div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-full md:w-1/4 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow justify-center px-10 text-zinc-800 self-center min-md:px-5">
                                    <div className="text-6xl max-md:text-4xl max-sm:px-16">15+</div>
                                    <div className="text-2xl max-sm:mb-8">On going<wbr /> projects</div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-full md:w-1/4 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow justify-center px-14 whitespace-nowrap text-zinc-800 max-md:px-5 self-center">
                                    <div className="text-6xl max-md:text-4xl max-sm:px-8">250+</div>
                                    <div className="text-2xl px-6 max-sm:mb-8  max-sm:px-8">Awards</div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-full md:w-1/4 max-md:pr-10 max-md:w-full">
                                <div className="flex flex-col grow justify-center px-14 text-zinc-800 max-md:px-5 self-center">
                                    <div className="text-6xl max-md:text-4xl max-sm:px-10">700+</div>
                                    <div className="text-2xl max-sm:mb-8">Happy<wbr /> Clients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch;
