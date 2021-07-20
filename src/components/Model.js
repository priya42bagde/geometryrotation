import React, { useRef } from 'react'
import { Canvas, extend, useThree, useFrame } from 'react-three-fiber'
import { PolyhedronBufferGeometry } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })
function Model() {
    
    const Controls = () => {
        const controls = useRef()
        const { camera, gl } = useThree()
        useFrame(() => {
            controls.current.update()
        })
        return (
            <orbitControls ref={controls} autoRotate args={[camera, gl.domElement]}></orbitControls>
        )
    }
    return (
        <div>
            <Canvas style={{ width: "700px", height: "700px"}}>
                <mesh>
                  <sphereBufferGeometry attach="geometry" color="red" />
                  <meshStandardMaterial wireframe attach="material" color="red" />
                  <Controls />
                </mesh>
            </Canvas>
            <Canvas style={{ width: "700px", height: "700px"}}>
                <mesh>
                  <boxBufferGeometry attach="geometry" color="red" />
                  <meshStandardMaterial wireframe attach="material" color="red" />
                  <Controls />
                </mesh>
            </Canvas>
            <Canvas style={{ width: "700px", height: "700px"}}>
                <mesh>
                  <cylinderBufferGeometry attach="geometry" color="red" />
                  <meshStandardMaterial wireframe attach="material" color="red" />
                  <Controls />
                </mesh>
            </Canvas>
            <Canvas style={{ width: "700px", height: "700px"}}>
                <mesh>
                  <circleBufferGeometry attach="geometry" color="red" />
                  <meshStandardMaterial wireframe attach="material" color="red" />
                  <Controls />
                </mesh>
            </Canvas>
            <Canvas style={{ width: "700px", height: "700px"}}>
                <mesh>
                  <coneBufferGeometry attach="geometry" color="red" />
                  <meshStandardMaterial wireframe attach="material" color="red" />
                  <Controls />
                </mesh>
            </Canvas>
            <Canvas style={{ width: "700px", height: "700px"}}>
                <mesh>
                  <ringBufferGeometry attach="geometry" color="red" />
                  <meshStandardMaterial wireframe attach="material" color="red" />
                  <Controls />
                </mesh>
            </Canvas>
           
        
           
            
        </div>
    )
}
export default Model