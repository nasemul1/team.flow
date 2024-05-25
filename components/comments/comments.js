import Image from "next/image";
import "@/components/comments/comments.css";
import profile1 from "@/public/profile/profile-1.png";
import profile2 from "@/public/profile/profile-2.png";
import profile3 from "@/public/profile/profile-3.png";
import { useState } from "react";

const Comments = () => {
    const [toggleState2, setToggleState2] = useState(1);

    function toggleTap2(index){
        setToggleState2(index);
    }
    return (
        <>
            <div id="comments">
                <h2>Why customers love working with us</h2>
                <div id="contents">
                    <p 
                    className={toggleState2 === 1 ? "content active":"content"}
                    >“It's amazing what has helped me learn about my team. I don't worry about blindspots anymore, and 1-on-1s have never been more productive. The team loves it.”</p>
                    <p 
                    className={toggleState2 === 2 ? "content active":"content"}
                    >“Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quia ducimus quos at odit tenetur, recusandae quis! Iusto, maxime repellat.”</p>
                    <p 
                    className={toggleState2 === 3 ? "content active":"content"}
                    >“Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, fuga vitae ut pariatur iure voluptatum dolore veniam dolor ex.”</p>
                </div>
                <div className="tabs">
                    <div 
                    className={toggleState2 === 1 ? "tab active":"tab"}
                    onClick={() => toggleTap2(1)}
                    >
                        <Image src={profile1}></Image>
                        <div>
                            <h4>Jorge Robertson</h4>
                            <p>CS at Google</p>
                        </div>
                    </div>
                    <div 
                    className={toggleState2 === 2 ? "tab active":"tab"}
                    onClick={() => toggleTap2(2)}
                    >
                        <Image src={profile3}></Image>
                        <div>
                            <h4>Francisco Bell</h4>
                            <p>Designer at Microsoft</p>
                        </div>
                    </div>
                    <div 
                    className={toggleState2 === 3 ? "tab active":"tab"}
                    onClick={() => toggleTap2(3)}
                    >
                        <Image src={profile2}></Image>
                        <div>
                            <h4>Beth Fox</h4>
                            <p>Developer at Airbnb</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Comments;