
import Button1 from "./navbarcom/btn";
function Navbar() {
  return (
    <div className="z-3 w-full flex justify-between py-5 px-20 font-medium fixed bg-amber-50 opacity-98">
      <div className="image w-[13vw]">
        <img src="https://www.shipxpress.in/img/shipxpress-logo.png" alt="" />
      </div>
      <div className="uppercase flex gap-30">
        <a href="">home</a>
        <a href="">pricing</a>
        <a href="">service</a>
        <a href="">contact us</a>
        <a href="track shipment"></a>
      </div>
      <div className="flex gap-9 ">
        
        <Button1/>
        <Button1/>

      </div>
    </div>
  );
}

export default Navbar;
