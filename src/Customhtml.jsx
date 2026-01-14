import { Html } from "@react-three/drei";
import Typewriter from "typewriter-effect";

// <a href="https://anti-network.com" target="_blank">anti-network</a>

export default function Customhtml()
{


    return <>
        <Html fullscreen transform scale={0.43}>
            <h2>i'm kingston and i'm a</h2>
            
            <br/>
        
            <Typewriter
            options={{
                strings: ['human', '<s>builder</s>', '<s>writer</s>', '<s>creator</s>', '<s>coder</s>', '<s>tinkerer</s>', '<s>art collector</s>', '<s>self-proclaimed artist</s>'],
                autoStart: true,
                loop: true,
            }}
            />
            
            <br/>
            <br/>

            <h2>building</h2>
            
            <p> <a href="https://cli-mate.help" target="_blank">cli-mate.help</a>, <a href="https://newclear.website">nuclear electricity</a>, <a href="https://balance-medic.com" target="_blank">balance medic</a> & some magic that i'm thinking of recently</p>
            
            <br/>
            <br/>

            <h2>writing</h2>
            <p> <a href="https://kingstonkoh.com" target="_blank">personal</a>, <a href="https://thelongbuild.substack.com" target="_blank">the long build</a>, and <a href="https://groovydose.substack.com" target="_blank">groovy dose</a> </p>      
            
            <br/>
            <br/>
            <h3>contact</h3>
            <p><a href="https://www.instagram.com/kingskohdk/" target="_blank">instagram</a> and <a href="mailto:kingstonkohdk@gmail.com">email</a></p>            
            <br/>
            <br/>
            <br/>

            <i>this site is 3d</i> 
            <br/>
            <i>click or pinch the (bottom) corners on your screen to rotate & zoom around</i> 
        </Html>
        


    </>
}