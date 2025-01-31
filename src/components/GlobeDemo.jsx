import { div } from "motion/react-client";
import {cn} from "../lib/utils"
import { World } from "./UI/Globe";


function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
		<div className=" w-full h-[100vh]  flex justify-center items-center ">
        <div className="absolute justify-center    w-[70rem] bottom-20 h-72 opacity-35 md:h-full z-10 flex">
          <World data={[]} globeConfig={globeConfig} />
        </div>
		</div>
  );
}

export default GlobeDemo;
