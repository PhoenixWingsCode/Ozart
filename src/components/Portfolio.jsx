const Portfolio = () => {
    return (
        <div className="flex justify-center items-center px-16 py-20 max-md:px-5">
            <div className="flex flex-col mt-16 max-w-full w-[1262px] max-md:mt-10  font-rubik">
                <div className="self-center text-6xl font-medium text-zinc-800 max-md:text-4xl">
                    Portfolio
                </div>
                <div className="flex gap-5 justify-center text-lg text-zinc-800 max-md:flex-wrap my-10">
                    <div className="shrink-0 my-auto hover:font-semibold">All</div>
                    <div className="shrink-0 my-auto w-2 h-px border border-solid bg-zinc-800 border-zinc-800" />
                    <div className="hover:font-semibold">UI & UX</div>
                    <div className="shrink-0 my-auto w-2 h-px border border-solid bg-zinc-800 border-zinc-800" />
                    <div className="hover:font-semibold">Graphic Design</div>
                    <div className="shrink-0 my-auto w-2 h-px border border-solid bg-zinc-800 border-zinc-800" />
                    <div className="hover:font-semibold">Web Development</div>
                </div>
                <div className="grid lg:grid-cols-3">
                    <div className="flex flex-col self-stretch max-sm-w-[320px] justify-center items-center max-sm:mx-6 
                max-sm:mt-8 md:mx-1 md:mt-8 lg:mx-3">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2a489b9928183ef854c542dbc28c65819bfd146bccc4d93ae9c60d78187c2ad3?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a489b9928183ef854c542dbc28c65819bfd146bccc4d93ae9c60d78187c2ad3?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a489b9928183ef854c542dbc28c65819bfd146bccc4d93ae9c60d78187c2ad3?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a489b9928183ef854c542dbc28c65819bfd146bccc4d93ae9c60d78187c2ad3?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a489b9928183ef854c542dbc28c65819bfd146bccc4d93ae9c60d78187c2ad3?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a489b9928183ef854c542dbc28c65819bfd146bccc4d93ae9c60d78187c2ad3?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a489b9928183ef854c542dbc28c65819bfd146bccc4d93ae9c60d78187c2ad3?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2a489b9928183ef854c542dbc28c65819bfd146bccc4d93ae9c60d78187c2ad3?apiKey=a0a445c9bef54c46aae68891e3ca9f55&"
                            className="w-full aspect-[1.41] lg:aspect-[1.06]"
                        />
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b8402af5dac03ab5c9d932afea2a4d60b0bb1fb5081ee701eca7894154785c54?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8402af5dac03ab5c9d932afea2a4d60b0bb1fb5081ee701eca7894154785c54?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8402af5dac03ab5c9d932afea2a4d60b0bb1fb5081ee701eca7894154785c54?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8402af5dac03ab5c9d932afea2a4d60b0bb1fb5081ee701eca7894154785c54?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8402af5dac03ab5c9d932afea2a4d60b0bb1fb5081ee701eca7894154785c54?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8402af5dac03ab5c9d932afea2a4d60b0bb1fb5081ee701eca7894154785c54?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8402af5dac03ab5c9d932afea2a4d60b0bb1fb5081ee701eca7894154785c54?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b8402af5dac03ab5c9d932afea2a4d60b0bb1fb5081ee701eca7894154785c54?apiKey=a0a445c9bef54c46aae68891e3ca9f55&"
                            className="mt-8 w-full aspect-[1.41] lg:aspect-[1.06]"
                        />
                    </div>
                    <div className="flex flex-col self-stretch max-sm-w-[320px] max-sm:justify-center max-sm:items-center max-sm:mx-6 
                max-sm:mt-8 md:mx-1 md:mt-8 lg:mx-3">
                        <div className="relative w-full aspect-[1.41] lg:aspect-[0.96] overflow-hidden">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ad1923297e8456bc42e1951deec28fd49f2e0d2bfce2fdd9f06f1767a0d12948?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad1923297e8456bc42e1951deec28fd49f2e0d2bfce2fdd9f06f1767a0d12948?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad1923297e8456bc42e1951deec28fd49f2e0d2bfce2fdd9f06f1767a0d12948?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad1923297e8456bc42e1951deec28fd49f2e0d2bfce2fdd9f06f1767a0d12948?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad1923297e8456bc42e1951deec28fd49f2e0d2bfce2fdd9f06f1767a0d12948?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad1923297e8456bc42e1951deec28fd49f2e0d2bfce2fdd9f06f1767a0d12948?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ad1923297e8456bc42e1951deec28fd49f2e0d2bfce2fdd9f06f1767a0d12948?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=100 100w"
                                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                            />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-6 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <div className="text-lg font-bold">Brochure Design</div>
                                <div className="absolute bottom-6 right-6">
                                    <div className="flex">
                                        <div className="text-sm m-1">Look Inside</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fd7cb0fa50ba88ff85092268070258c9105c29fbc695160e531a339fc6e71348?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd7cb0fa50ba88ff85092268070258c9105c29fbc695160e531a339fc6e71348?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd7cb0fa50ba88ff85092268070258c9105c29fbc695160e531a339fc6e71348?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd7cb0fa50ba88ff85092268070258c9105c29fbc695160e531a339fc6e71348?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd7cb0fa50ba88ff85092268070258c9105c29fbc695160e531a339fc6e71348?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd7cb0fa50ba88ff85092268070258c9105c29fbc695160e531a339fc6e71348?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd7cb0fa50ba88ff85092268070258c9105c29fbc695160e531a339fc6e71348?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd7cb0fa50ba88ff85092268070258c9105c29fbc695160e531a339fc6e71348?apiKey=a0a445c9bef54c46aae68891e3ca9f55&"
                            className="mt-8 w-full aspect-[1.41] lg:aspect-[1.18]"
                        />
                    </div>
                    <div className="flex flex-col self-stretch max-sm-w-[320px] max-sm:justify-center max-sm:items-center max-sm:mx-6 
                max-sm:mt-8 md:mx-1 md:mt-8 lg:mx-3">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/44c655ec981b198d16468a3e0b65b16c049e11c81c4b009047311c64807d4841?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/44c655ec981b198d16468a3e0b65b16c049e11c81c4b009047311c64807d4841?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44c655ec981b198d16468a3e0b65b16c049e11c81c4b009047311c64807d4841?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/44c655ec981b198d16468a3e0b65b16c049e11c81c4b009047311c64807d4841?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/44c655ec981b198d16468a3e0b65b16c049e11c81c4b009047311c64807d4841?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44c655ec981b198d16468a3e0b65b16c049e11c81c4b009047311c64807d4841?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/44c655ec981b198d16468a3e0b65b16c049e11c81c4b009047311c64807d4841?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/44c655ec981b198d16468a3e0b65b16c049e11c81c4b009047311c64807d4841?apiKey=a0a445c9bef54c46aae68891e3ca9f55&"
                            className="w-full aspect-[1.41] lg:aspect-[1.16]"
                        />
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1d1593005d88dc8cca72373a5fc6ab108c5b36e6987796cbc603ac65c83d7a86?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1593005d88dc8cca72373a5fc6ab108c5b36e6987796cbc603ac65c83d7a86?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1593005d88dc8cca72373a5fc6ab108c5b36e6987796cbc603ac65c83d7a86?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1593005d88dc8cca72373a5fc6ab108c5b36e6987796cbc603ac65c83d7a86?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1593005d88dc8cca72373a5fc6ab108c5b36e6987796cbc603ac65c83d7a86?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1593005d88dc8cca72373a5fc6ab108c5b36e6987796cbc603ac65c83d7a86?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1593005d88dc8cca72373a5fc6ab108c5b36e6987796cbc603ac65c83d7a86?apiKey=a0a445c9bef54c46aae68891e3ca9f55&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1593005d88dc8cca72373a5fc6ab108c5b36e6987796cbc603ac65c83d7a86?apiKey=a0a445c9bef54c46aae68891e3ca9f55&"
                            className="mt-8 w-full aspect-[1.41] lg:aspect-[0.98]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio