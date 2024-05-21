import Navbar from '@/components/navbar/navbar';
import "./page.css";
import graphPic from "../public/graph.png";
import airbnb from "../public/logo/airbnb.png";
import facebook from "../public/logo/facebook.png";
import google from "../public/logo/google.png";
import hubspot from "../public/logo/hubspot.png";
import slack from "../public/logo/slack.png";
import screenShot1 from "../public/chat.png";
import Image from 'next/image';

const page = () => {
    return (
        <>
            <Navbar />
            <div id="bg-circle"></div>
            <div id="page1">
                <div id="discount">
                    <button id="btn1">Save 90%</button>
                    <button id="btn2">Get account of $59</button>
                </div>
                <h1>Manage the team<br /> everyone wants to be on</h1>
                <p>Simple platform that lets you master what great managers do best,<br />as develop trust, collaborate, and drive team performance.</p>
                <div id="tryfree">
                    <input type="text" placeholder='name@yourcompany.com'/>
                    <button>Try it free!</button>
                </div>
                <Image src={graphPic} alt='App screeshot'></Image>
                <div id="partners">
                    <p>TRUSTED BY OVER <strong>10,000+ WORLD'S</strong> BEST TEAMS</p>
                    <div id="partnerLogo">
                        <Image src={google} alt='google logo'></Image>
                        <Image src={airbnb} alt='airbnb'></Image>
                        <Image src={facebook} alt='facebook logo'></Image>
                        <Image src={hubspot} alt='hubspot'></Image>
                        <Image src={slack} alt='slack logo'></Image>
                    </div>
                </div>
            </div>
            <div id="page2">
                <Image src={screenShot1} alt="App screenshot"></Image>
                <div id="features">
                    <div className="feature">
                        <h3>Survey your team</h3>
                        <p>Powerful questions that get to the heart of how team members really feel.</p>
                    </div>
                    <div className="feature">
                        <h3>Resolve issues quickly</h3>
                        <p>Anonymous messaging that connects managers and employees.</p>
                    </div>
                    <div className="feature">
                        <h3>Plan your 1-on-1s</h3>
                        <p>Plan meetings together and give a stake employees and teams.</p>
                    </div>
                    <div className="feature">
                        <h3>Track your progress</h3>
                        <p>Easy-to-read reports and sharable results help managers and teams.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default page;