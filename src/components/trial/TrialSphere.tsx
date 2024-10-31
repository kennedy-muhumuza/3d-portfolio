import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const Sphere = ({
  position,
  size,
  color,
}: {
  position: [x: number, y: number, z: number];
  size: [x: number, y: number, z: number];
  color: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef();
  useFrame((state, delta) => {
    // ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime) * 2;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial
        color={isHovered ? "yellow" : "lightblue"}
        wireframe
      />
    </mesh>
  );
};

const Torus = ({
  position,
  size,
  color,
}: {
  position: [x: number, y: number, z: number];
  size: [x: number, y: number, z: number, k: number];
  color: string;
}) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime) * 2;
  });

  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const TorusKnot = ({
  position,
  size,
  color,
}: {
  position: [x: number, y: number, z: number];
  size: [x: number, y: number, z: number, k: number];
  color: string;
}) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime) * 2;
  });

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial factor={5} speed={2} />
    </mesh>
  );
};

const TrialSphere = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <ambientLight />
      <OrbitControls />
      {/* <group position={[0, -2, 0]}></group> */}
      <Sphere position={[0, 0, 0]} size={[1, 30, 30]} color="yellow" />
      <Torus position={[2, 0, 0]} size={[1, 0.1, 30, 30]} color="purple" />
      <TorusKnot
        position={[-2, 1, 0]}
        size={[0.5, 0.1, 1000, 50]}
        color="purple"
      />

      {/* <Sphere
        position={[0, 0, 0]}
        size={[1, 1, 1]}
        color="green"
        args={[1, 30, 30]}
      />
      <Sphere position={[-1, 2, 0]} size={[1, 1, 1]} color="pink" />
      <Sphere position={[1, 2, 0]} size={[1, 1, 1]} color="blue" />
      <Sphere position={[-1, 0, 0]} size={[1, 1, 1]} color="orange" /> */}
    </Canvas>
  );
};

export default TrialSphere;
