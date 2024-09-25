import { Canvas } from "@react-three/fiber";

const Cube = ({
  position,
  size,
  color,
}: {
  position: [x: number, y: number, z: number];
  size: [x: number, y: number, z: number];
  color: string;
}) => {
  return (
    <mesh position={position}>
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
      <Cube position={[1, 0, 0]} size={[1, 1, 1]} color="green" />
      <Cube position={[-1, 2, 0]} size={[1, 1, 1]} color="pink" />
      <Cube position={[1, 2, 0]} size={[1, 1, 1]} color="blue" />
      <Cube position={[-1, 0, 0]} size={[1, 1, 1]} color="orange" />
    </Canvas>
  );
};

export default TrialThree;
