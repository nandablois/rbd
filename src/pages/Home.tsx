import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ImageSlider from "../components/ui/ImageSlider";

const images = [
  "/assets/rbd.png",
  "/assets/rbd2.png",
  "/assets/rbd3.png",
];

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-black to-red text-gray">
 
      <main className="flex flex-1 items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center max-w-6xl w-full">
          <div id="slides">
            <ImageSlider images={images} />
          </div>
          <HeroSection />
        </div>
      </main>
       <Footer/>
    </div>
  );
}
