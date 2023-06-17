import NavigationBar from "../navgation/navigation-bar";
import aboutUs from '../../images/AboutUs.png'

function AboutUs(){
    return(
        <>
        <NavigationBar/>
        <div style={{height:'100vh',width:'100vh'}}>
        <img  src={aboutUs} alt="This is about Us"></img>
        </div>
        
        </>
    )
}

export default AboutUs;