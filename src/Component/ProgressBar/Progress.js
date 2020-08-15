import React , { useState, useEffect, useRef } from 'react'
import "./ProgressBar.css";
import Fade from 'react-reveal/Fade';



const progressData =[
    {title:"Launching Beta Exchange", date: "November 29, 2020"},
    {title:"Launching Praedio", date: "December 15, 2020"},
    {title:"Launching Beta Exchange", date: "January 1, 2021"},
]
export default function Progress() {
    const [now,setNow]  = useState(1); 
    const [index,setIndex] = useState(0); 
    const [animate, setAnimate] = useState(true);
    const progressBar = useRef(null);
    useInterval(() => {
        if(now >= 100){
            setNow(0);
            setAnimate(false);
            
            
            if(index+1 >= progressData.length){
                setIndex(0);
                
            }else{
                setIndex( index +1);

            }
            progressBar.current.style.width = 0+"%";
            

           
           
       }
       else{
           
            setNow(now+0.1 );
                progressBar.current.style.width = now+"%";
            setAnimate(true);
       }
      }, 10);

    return (
        <div>
            <Fade when={animate}>
                <div className="progress-title">
                    {progressData[index].title}
                    <img src="/assets/images/arrow.svg" alt="arrow" className="arrow-ml"></img>
                </div>
                <div className="progress-subtitle">{progressData[index].date}</div>
            </Fade>
            <div id="myProgress">
                    <div ref={progressBar} id="myBar"></div>
            </div>
            
        </div>
    )
}


function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
        savedCallback.current();
        }
        if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
        }
    }, [delay]);
}
  
