import React , {useState,useEffect} from "react";
import lottie from "lottie-web";
import animation from "../../assets/animation/loader.json";



const Loader = () =>  {
    
     let animationContainer = React.createRef()
     
     React.useEffect( () =>  {
     const anim = lottie.loadAnimation({
        
          container: animationContainer.current ,
          animationData: animation
          
        })
      // anim.setSpeed(2)
    
    } , [] )

    return(
        <div className="loader" ref={animationContainer} />
        
    )

}

export default Loader ;