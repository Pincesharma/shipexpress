import Card from "./card";

function Hero2() {
  return (
    <>
      <div id="box" className="w-full h-full absolute flex justify-center p-5 mt-5">
        <div className="w-[42vw] h-[25vh] flex-col items-center">
          <h1 className=" text-6xl tracking-tighter capitalize">
            We help you stay connected
          </h1>
          <p className="text-center p-5 ">
            It is very easy and quick to sign up for your future shipments. In
            addition, it is easy to access the Shipxpress dashboard for
            processing all your shipments. You can use the dashboard with a few
            clicks and swipes.
          </p>
        </div>
        <div className="flex absolute top-50 gap-10 p-9 px-6">
          <Card /> 
        </div>
        
        
      </div>
    </>
  );
}

export default Hero2;
