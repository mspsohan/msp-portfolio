import AboutMe from "../../components/AboutMe/AboutMe";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import Footer from "../../components/Footer/Footer";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

const Home = () => {
   return (
      <div>
         <Banner />
         <AboutMe />
         <Skills />
         <Experience />
         <Projects />
         <Education />
         <Contact />
         <Footer />
      </div>
   );
};

export default Home;