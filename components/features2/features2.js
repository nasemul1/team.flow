import Image from "next/image";
import '../features2/features2.css';
import graphP from "@/public/icon/square.svg";
import contact from "@/public/icon/contact.svg";
import computer from "@/public/icon/computer.svg";
import message from "@/public/icon/message.svg";
import people from "@/public/icon/people.svg";
import screwdriver from "@/public/icon/screwdriver.svg";


const Features = () => {
    return (
        <>
            <div id="features-2">
                    <div className="feature2">
                        <div className="f-icon" id="graphP">
                            <Image src={graphP} alt="graph icon"></Image>
                        </div>
                        <h4>Team Surveys & Reports</h4>
                        <p>Short, anonymous surveys track your team's needs weekly so you can focus.</p>
                    </div>
                    <div className="feature2">
                        <div className="f-icon" id="contact">
                            <Image src={contact} alt="contact icon"></Image>
                        </div>
                        <h4>Collaborative 1:1 </h4>
                        <p>Build relationships by planning 1-on-1s and start meetings.</p>
                    </div>
                    <div className="feature2">
                        <div className="f-icon"  id="computer">
                            <Image src={computer} alt="computer icon"></Image>
                        </div>
                        <h4>Learning Center</h4>
                        <p>Quickly get solutions tailored to your personal challenges from the manager.</p>
                    </div>
                    <div className="feature2">
                        <div className="f-icon"  id="message">
                            <Image src={message} alt="message icon"></Image>
                        </div>
                        <h4>Anonymous Messaging</h4>
                        <p>Develop trust in a safe channel for important conversations.</p>
                    </div>
                    <div className="feature2">
                        <div className="f-icon" id="people">
                            <Image src={people} alt="people icon"></Image>
                        </div>
                        <h4>Conversation Engine</h4>
                        <p>Communicate confidently with recommended talking points.</p>
                    </div>
                    <div className="feature2">
                        <div className="f-icon" id="screwdriver">
                            <Image src={screwdriver} alt="screwdriver icon"></Image>
                        </div>
                        <h4>Exclusives Manager</h4>
                        <p>Access manager tips, activities and best practices from our team of experts.</p>
                    </div>
                </div>
        </>
    );
}
 
export default Features;