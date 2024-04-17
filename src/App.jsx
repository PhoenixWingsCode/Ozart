import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import WhatIdo from "./components/WhatIdo"
import Portfolio from "./components/Portfolio"
import Testimonial from "./components/Testimonial"
import GetInTouch from "./components/GetInTouch"
import MyBlog from "./components/MyBlog"
import HireMe from "./components/HireMe"

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <WhatIdo />
      <Portfolio />
      <Testimonial />
      <GetInTouch/>
      <MyBlog/>
      <HireMe/>
    </div>
  )
}