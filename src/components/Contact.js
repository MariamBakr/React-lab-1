import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGlobe2 } from "react-icons/bs";
import { BsHouseDoorFill } from "react-icons/bs";

function Contact(){
    return(
        <div className="Contact mt-5 col-4 ms-5" >
            <div >
            <h2 className="bg text-center text-light">Contact</h2>
            <h2><BsHouseDoorFill /></h2>
            <h5>777, Seventh avenue, NewYork</h5>
            <h2><BsFillTelephoneFill/></h2>
            <h5>01234567891</h5>
            <h5>01234567891</h5>
            <h2><BsGlobe2/></h2>
            <h5>Sheikhelarab@gmail.com</h5>
            <h5>Sheikhelarab@gmail.com</h5>
            </div>
        </div>
    )
}

export default Contact