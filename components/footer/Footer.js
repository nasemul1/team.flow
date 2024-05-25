import Image from "next/image";
import "@/components/footer/footer.css";
import Collapsible from 'react-collapsible';
import playstore from "@/public/playstore.png";
import appstore from "@/public/appstore.png";
import instagram from "@/public/icon/instagram.svg";
import dribbble from "@/public/icon/dribbble.svg";
import twiter from "@/public/icon/twitter.svg";
import youtube from "@/public/icon/youtube.svg";

const Footer = () => {
    return (
        <>
            <div id="section-1">
                <div id="first-div">
                    <div>
                        <h5>Company</h5>
                        <a href="">About Us</a>
                        <a href="">Blog</a>
                        <a href="">Careers</a>
                        <a href="">Contact Us</a>
                    </div>
                    <div>
                        <h5>Support</h5>
                        <a href="">Help Center</a>
                        <a href="">Safety Center</a>
                        <a href="">Community</a>
                    </div>
                    <div>
                        <h5>Legal</h5>
                        <a href="">Cookies Policy</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of service</a>
                    </div>
                </div>
                <div id="collapsible-div">
                    <Collapsible trigger="Company">
                        <a href="">About Us</a>
                        <a href="">Blog</a>
                        <a href="">Careers</a>
                        <a href="">Contact Us</a>
                    </Collapsible>
                    <Collapsible trigger="Support">
                        <a href="">Help Center</a>
                        <a href="">Safety Center</a>
                        <a href="">Community</a>
                    </Collapsible>
                    <Collapsible trigger="Legal">
                        <a href="">Help Center</a>
                        <a href="">Safety Center</a>
                        <a href="">Community</a>
                    </Collapsible>
                </div>
                <div id="second-div">
                    <h5>Install App</h5>
                    <Image src={playstore}></Image>
                    <Image src={appstore}></Image>
                </div>
            </div>
            <div id="section-2">
                <p>© 2020 - All rights reserved</p>
                <div>
                    <Image src={instagram}></Image>
                    <Image src={dribbble}></Image>
                    <Image src={twiter}></Image>
                    <Image src={youtube}></Image>
                </div>
            </div>
        </>
    );
}
 
export default Footer;