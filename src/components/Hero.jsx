import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
function Hero () {
  const images = ["/meuble2.jpg", "/chine.jpg", "/tapis.webp",  "/cavalier.jpg", "/meuble5.webp"];
  const [index, setIndex] = useState(0);
  const suivante = () => {
  setIndex((index + 1) % images.length);
  };
  const precedente = () => {
  setIndex((index - 1 + images.length) % images.length);
};
  return (
    <>
    <section className="relative flex min-h-screen items-center justify-center">
      <img src={images[index]}
          alt="Image jpg"
          className="relative w-screen h-screen object-containts border-2 border-amber-200" />

          <button onClick={precedente}
           className="absolute left-4 top-1/2 text-white w-auto h-auto hover:scale-620 transition duration-900"
           aria-label="Image précédente">
             <ChevronLeft className=" left-4 top-1/2 z-10 -translate-y-1/2 text-red w-8 h-8 " />
          </button>

          <button onClick={suivante}
             className="absolute right-4 top-1/2 text-white w-auto h-auto hover:scale-220 transition duration-600"
             aria-label="Image suivante">
           <ChevronRight className="right-4 top-1/2 z-10 -translate-y-1/2 text-shadow-white w-8 h-8" />
           </button>
          
            </section>
    </>

  );
}
export default Hero;