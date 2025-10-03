import Footer from "../components/Fotter";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

import ImageSlider from "../components/ui/ImageSlider";


const images: string[] = [
  "/assets/rbd.png",
  "/assets/rbd2.png",
  "/assets/rbd3.png",
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-black to-red text-white">
      <Header />

      <main className="flex-grow py-16 px-6 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">


          <div id="slides" className="order-1">
            <ImageSlider images={images} />
          </div>

          <HeroSection />

        </div>
      </main>

      <Footer />
    </div>
  );
}
