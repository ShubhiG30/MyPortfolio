import React, {useEffect} from 'react'
import TagCloud from "TagCloud";
import "./style.css"
const TextShpere = () => {
    useEffect(() => {
      
          const container = ".tagcloud";
          const texts = [
            "HTML",
            "CSS",
            "SASS",
            "JavaScript",
            "React",
            "Vite",
            "python",
            "NodeJS",
            "Bootstrap",
            "Numpy",
            "Pandas",
            "GIT",
            "GITHUB",
            "MongoDB",
            "MatplotLib"
          ];
    
          const options = {
            radius: 200,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: true,
          };
    
          TagCloud(container, texts, options);
      
      }, []);
    
      return (
        <>
          <div className="text-shpere">
            {/* span tag className must be "tagcloud"  */}
            <span className="tagcloud"></span>
          </div>
        </>
      );
    };

export default TextShpere