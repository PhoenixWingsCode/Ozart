import ReactPlayer from 'react-player'

const AboutMe = () => {
    return (
        <div className="flex justify-center items-center px-16 py-5 max-md:px-5">
            <div className="flex flex-col mt-16 max-w-full w-[1262px] max-md:mt-10">
                <div className="self-center text-4xl text-zinc-800 max-md:max-w-full font-rubik">
                    Learn all about me in 60 seconds.
                </div>
                <div className="flex overflow-hidden relative flex-col justify-center items-center px-5 py-2 mt-16 w-full max-md:px-3 max-md:mt-2 max-md:max-w-full">            
                    <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
                    playing={true}
                    loop={true}
                    width='100%'
                    height='300px'/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe