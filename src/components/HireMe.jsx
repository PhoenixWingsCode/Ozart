const HireMe = () => {
    return (
        <div className="flex justify-center items-center px-16 py-20 max-md:px-5">
            <div className="flex flex-col mt-16 max-w-full w-[1262px] max-md:mt-10 font-rubik">
                <div className="self-center text-6xl font-medium text-zinc-800 max-md:text-4xl">
                    Hire Me For<wbr /> Your Next <wbr />Amazing<wbr /> Project
                </div>
                <div className="justify-center mt-16 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-between self-stretch px-5 pt-16 font-light text-zinc-800 max-md:mt-10 max-md:max-w-full">
                                <div className="text-4xl leading-[52px] max-md:max-w-full">
                                    Let’s make somthing new, different and more meaningful or make
                                    thing more visual or conceptual? Just say hello!
                                </div>
                                <div className="flex flex-col mt-36 max-w-full text-xl w-[308px] max-md:mt-10">
                                    <div className="flex gap-5">
                                        <div className="shrink-0 my-auto h-px border border-solid bg-zinc-800 border-zinc-800 w-[22px]" />
                                        <div>+123 569 789</div>
                                    </div>
                                    <div className="flex gap-5 mt-4 whitespace-nowrap">
                                        <div className="shrink-0 my-auto h-px border border-solid bg-zinc-800 border-zinc-800 w-[22px]" />
                                        <div>youremail@gmail.com</div>
                                    </div>
                                    <div className="flex gap-5 mt-4">
                                        <div className="shrink-0 my-auto h-px border border-solid bg-zinc-800 border-zinc-800 w-[22px]" />
                                        <div>
                                            28 Green Tower, Street name,
                                            <br />
                                            New York City, USA
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-center px-16 py-20 w-full text-sm bg-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-col">
                                    <div className="flex flex-col text-white">
                                        <div className="pb-2 border-b border-white border-solid">
                                            Your name
                                        </div>
                                        <div className="pb-2 mt-16 border-b border-white border-solid max-md:mt-10">
                                            Your email Address
                                        </div>
                                        <div className="pb-2 mt-16 border-b border-white border-solid max-md:mt-10">
                                            Your budget (Optional)
                                        </div>
                                        <div className="pb-10 mt-16 border-b border-white border-solid max-md:mt-10">
                                            Your project description
                                        </div>
                                    </div>
                                    <div className="justify-center self-end px-10 py-4 mt-5 font-light uppercase whitespace-nowrap bg-white text-zinc-800 max-md:px-5">
                                        Send
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireMe