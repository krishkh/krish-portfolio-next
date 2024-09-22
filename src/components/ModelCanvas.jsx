// components/Model.js
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";

const Model = ({ url }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, url);

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      onPointerMove={(e) => {
        ref.current.rotation.y += e.movementX * 0.01; // Rotate model
        ref.current.rotation.x -= e.movementY * 0.01; // Rotate model
      }}
    />
  );
};

const ModelCanvas = ({ url }) => (
  <Canvas>
    <ambientLight intensity={0.5} /> {/* Ambient light */}
    <pointLight position={[10, 10, 10]} intensity={1} /> {/* Point light */}
    <directionalLight position={[-5, 10, 5]} intensity={1} />{" "}
    {/* Directional light */}
    <Model url={url} />
  </Canvas>
);

export default ModelCanvas;
