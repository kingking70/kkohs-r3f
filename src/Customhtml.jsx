import { Html } from "@react-three/drei";
import Typewriter from "typewriter-effect";

// <a href="https://anti-network.com" target="_blank">anti-network</a>

export default function Customhtml()
{


    return <>
        <Html fullscreen transform scale={0.43}>
            <h2>i'm kingston and i'm a/an</h2>
            
            <br/>
        
            <Typewriter
            options={{
                strings: ['human being', '<s>builder</s>', '<s>writer</s>', '<s>creator</s>', '<s>coder</s>', '<s>tinkerer</s>', '<s>art collector</s>', '<s>artist</s>'],
                autoStart: true,
                loop: true,
            }}
            />
            
            <br/>
            <br/>

            <h2>building</h2>
            
            <p> <a href="https://cli-mate.help" target="_blank">cli-mate.help</a></p>
            
            <br/>
            <br/>

            <h2>writing</h2>
            <p> <a href="https://kingstonkoh.com" target="_blank">personal</a></p>      
            
            <br/>
            <br/>
            <h3><a href="mailto:kingstonkohdk@gmail.com">contact</a></h3>     
            <br/>
            <br/>
            <br/>

            <i>this site is 3d</i> 
            <br/>
            <i>click or pinch the (bottom) corners on your screen to rotate & zoom around</i> 
        </Html>
        


    </>
}