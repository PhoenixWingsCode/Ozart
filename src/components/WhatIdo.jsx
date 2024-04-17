import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const WhatIdo = () => {
    return (
        <div className="flex justify-center items-center px-16 py-20 max-md:px-5">
            <div className="flex flex-col mt-16 max-w-full w-[1262px] max-md:mt-10 font-rubik">
                <div className="self-center text-6xl font-medium text-zinc-800 max-md:text-4xl">
                    What I Do
                </div>
                <div className="justify-between mt-16 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-center p-10 mx-auto w-full bg-zinc-300 text-zinc-800 max-md:px-5 max-md:mt-10 hover:bg-zinc-800 hover:text-white">
                                <div className="flex flex-col">
                                    <div className="text-5xl max-md:text-4xl">Ui & UX Design</div>
                                    <div className="mt-5 text-lg">
                                        User interface design, user experience design, user
                                        research.
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between mt-16 text-lg font-semibold max-md:mt-10">
                                    <div>Read more</div>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-center p-10 mx-auto w-full bg-zinc-300 text-zinc-800 max-md:px-5 max-md:mt-10 hover:bg-zinc-800 hover:text-white">
                                <div className="flex flex-col">
                                    <div className="text-5xl max-md:text-4xl">Graphic Design</div>
                                    <div className="mt-5 text-lg">
                                        User interface design, user experience design, user
                                        research.
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between mt-16 text-lg font-semibold max-md:mt-10">
                                    <div>Read more</div>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-center p-10 mx-auto w-full bg-zinc-300 text-zinc-800 max-md:px-5 max-md:mt-10 hover:bg-zinc-800 hover:text-white">
                                <div className="flex flex-col">
                                    <div className="text-5xl max-md:text-4xl">
                                        Web<br className="md:mx-auto" />Develop<wbr />ment
                                    </div>
                                    <div className="mt-5 text-lg">
                                        User interface design, user experience design, user
                                        research.
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between mt-16 text-lg font-semibold max-md:mt-10">
                                    <div>Read more</div>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIdo