
const Testimonial = () => {

    return (
        <div className="flex justify-center items-center px-16 py-20 max-md:px-5">
            <div className="flex flex-col mt-16 max-w-full w-[1262px] max-md:mt-10  font-rubik">
                <div className="self-center text-6xl font-medium text-zinc-800 max-md:text-4xl">
                    Client Testimonial
                </div>
                <div>
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 mt-28">
                        <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e5280f798609658ed354fae10e4ca7ca9d1aee71ff7ed52ca0d2625edbe8c51b?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5280f798609658ed354fae10e4ca7ca9d1aee71ff7ed52ca0d2625edbe8c51b?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5280f798609658ed354fae10e4ca7ca9d1aee71ff7ed52ca0d2625edbe8c51b?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5280f798609658ed354fae10e4ca7ca9d1aee71ff7ed52ca0d2625edbe8c51b?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5280f798609658ed354fae10e4ca7ca9d1aee71ff7ed52ca0d2625edbe8c51b?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5280f798609658ed354fae10e4ca7ca9d1aee71ff7ed52ca0d2625edbe8c51b?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5280f798609658ed354fae10e4ca7ca9d1aee71ff7ed52ca0d2625edbe8c51b?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5280f798609658ed354fae10e4ca7ca9d1aee71ff7ed52ca0d2625edbe8c51b?apiKey=a0a445c9bef54c46aae68891e3ca9f55&"
                                className="grow w-full aspect-[0.83] max-md:mt-10 max-md:max-w-full"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow justify-between self-stretch max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-col justify-center px-5 max-md:max-w-full">
                                    <div className="flex flex-col justify-center items-start py-1 max-md:pr-5 max-md:max-w-full">
                                        <div className="flex justify-center items-center px-px py-1.5 w-20">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb1ddcb54784875db1e210f1d449797620252bced1f9538a536f07bd8e0ced59?apiKey=a0a445c9bef54c46aae68891e3ca9f55&"
                                                className="w-full aspect-[1.15]"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-4xl text-zinc-800 max-md:max-w-full">
                                        But I must explain to you how all this mistaken idea of
                                        denouncing pleasure and praising pain was born and I will give
                                        you a complete
                                    </div>
                                    <div className="flex justify-center items-center self-end px-px py-1.5 w-20">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc7d0fd07928da65795ccbe48bbc6768ae7429bac050fc71562163a3aed535ad?apiKey=a0a445c9bef54c46aae68891e3ca9f55&"
                                            className="w-full aspect-[1.14]"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col px-5 mt-24 text-zinc-800 max-md:mt-10 max-md:max-w-full">
                                    <div className="text-3xl font-medium max-md:max-w-full">
                                        Jared Warner
                                    </div>
                                    <div className="mt-3 text-xl max-md:max-w-full">CEO Of Zeo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial