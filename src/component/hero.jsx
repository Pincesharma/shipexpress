import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./button";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  let mm = gsap.matchMedia();

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "20% 10%",
        end: "100% 30%",
        markers: true,
        scrub: 1,
        ease: "sine.out",
      },
    });

    tl.to("#ship", {
      left: "173%",
      top: "60%",
    });
  });

  mm.add("max-width: 768px", () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "main",
        start: "20% 10%",
        markers: true,
        scrub: 1,
        ease: "power4.out",
      },
    });

    tl.to("ship", { left: "10%", top: "50%" });
  });

  return (
    <div
      id="main"
      className="z-1 w-full h-screen bg-[url(https://images.unsplash.com/photo-1468581264429-2548ef9eb732?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center"
    >
      <div className=" z-2 absolute mt-50 p-40">
        <div className="">
          <h1 className=" text-[2.5vw] tracking-tighter capitalize">
            sending courier now shmplified
          </h1>
          <h1 className="text-3xl font-medium">Logistics Redefined</h1>
        </div>
        <img
          id="ship"
          className="w-[10vw] -z-1 absolute top-8 left-0"
          src="https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-free-cruise-clipart-large-cruise-ship-and-plane-cartoon-vector-png-image_6865038.png"
          alt=""
        />
      </div>
      <Button/> 
    </div>
  );
}

export default Hero;
