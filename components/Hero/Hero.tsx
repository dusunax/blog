"use client";
import { useEffect, useState } from "react";
import { Group, Object3DEventMap } from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Hero() {
  const [model, setModel] = useState<Group<Object3DEventMap> | null>(null);
  const file = "/models/blog.gltf";

  useEffect(() => {
    async function initModel() {
      const loader = new GLTFLoader();
      loader.load(
        file,
        function (gltf: GLTF) {
          setModel(gltf.scene);
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
    }

    if (!model) initModel();
    return () => {
      if (model) {
        model.traverse((object: any) => {
          if (object.isMesh) {
            object.geometry.dispose();
            object.material.dispose();
          }
        });
      }
    };
  }, [model]);

  return (
    <div className="h-full grid grid-cols-2 gap-6">
      <div className="w-full h-full top-0 left-0 shadow-md rounded-md bg-[rgba(255,255,255,0.95)]">
        <Canvas camera={{ position: [0, 10, 0] }}>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          {model && <primitive object={model} />}
          <OrbitControls />
        </Canvas>
      </div>

      <div className="w-full h-full top-0 right-0 shadow-md rounded-md bg-black">
        <Canvas camera={{ position: [2, 5, 5] }}>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          {model && <primitive object={model} />}
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
