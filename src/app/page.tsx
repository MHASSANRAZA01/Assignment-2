import Link from "next/image";
import  Image  from "next/image"; 
import photo from "../app/image/Photo.png"

export default function Home() {
  return (
    
  <div className="homeContainer">
<div className="childContainer">
  Hey,
  <br />
  My Name is <span className="redColor">Hassan Raza</span>
  <br />I am Next JS Developer
</div>
<div className="myphoto">
<Image src={photo}
alt="Photo"
 width={400}
  height={500} />


</div>
</div>
 
    
  );
}