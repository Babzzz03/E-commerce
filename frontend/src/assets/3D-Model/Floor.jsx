export default function Floor() {
    return (
      <mesh rotation-x={-Math.PI / 2} receiveShadow  position={[1.77, -0.8, 1.99]} >
        <circleGeometry args={[10]} />
        <meshStandardMaterial />
      </mesh>
    )
  }