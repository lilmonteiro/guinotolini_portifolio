import { OrbitControls } from "@react-three/drei"
import { Scene } from "./Scene"

export const Experience = ()=>{
return(
    <>
    <ambientLight intensity={2} />
    <OrbitControls enableZoom={false} />
    <Scene />
    </>
)

}