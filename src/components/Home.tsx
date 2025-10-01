import Footer from "./Fotter";
import Header from "./Header";
import Button from "./ui/Button";
import ImageSlider from "./ui/ImageSlider";


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

      
          <div id="historia" className="text-left order-2 flex flex-col gap-6 items-center">
            <img src="/assets/logo1.png" alt="RBD Logo" className="w-60 md:w-60 " />
            <p className="text-lg leading-relaxed font-mulish">
              O <strong>RBD</strong> nasceu em 2004 a partir da novela <strong>Rebelde </strong>
               e rapidamente se tornou um fenômeno mundial. Com turnês esgotadas, 
              músicas em espanhol, português e inglês, o grupo marcou gerações e 
              até hoje é lembrado com carinho pelos fãs.
            </p>
            <Button  >Ver Linha do Tempo</Button>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
