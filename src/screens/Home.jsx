// import React from "react"

// const Home = () => {
//   return (
//     <>
//       <section className='hero'>
//         <h1>Welcome To Home Page</h1>
//       </section>
//     </>
//   )
// }
// export default Home

import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { useGlobalContext } from "../screens/Context";
import Services from "../screens/Services";
import Contact from "../screens/Contact";

code .

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      {/* <HeroSection />
      <Services />
      <Contact /> */}
    </>
  );
};

export default Home;