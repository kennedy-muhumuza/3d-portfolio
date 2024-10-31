import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = ({
  position,
  size,
  color,
}: {
  position: [x: number, y: number, z: number];
  size: [x: number, y: number, z: number];
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
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const TrialThree = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <ambientLight />
      <group position={[0, -2, 0]}>
        <Cube position={[1, 0, 0]} size={[1, 1, 1]} color="green" />
        <Cube position={[-1, 2, 0]} size={[1, 1, 1]} color="pink" />
        <Cube position={[1, 2, 0]} size={[1, 1, 1]} color="blue" />
        <Cube position={[-1, 0, 0]} size={[1, 1, 1]} color="orange" />
      </group>
    </Canvas>
  );
};

export default TrialThree;
