/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./box.glb --types
*/

import * as THREE from 'three';
import React, { useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { GLTF } from 'three-stdlib';
import { useGraph } from '@react-three/fiber';

function useSkinnedMeshClone(path: string) {
    const { scene, materials, animations } = useGLTF(path) as GLTFResult;
    const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes } = useGraph(clonedScene);

    return { scene: clonedScene, materials, animations, nodes };
}

type GLTFResult = GLTF & {
    nodes: {
        Mesh_box: THREE.Mesh;
        Mesh_box_1: THREE.Mesh;
    };
    materials: {
        wood: THREE.MeshStandardMaterial;
        rock: THREE.MeshStandardMaterial;
    };
};

export function Model(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useSkinnedMeshClone('/box.glb') as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Mesh_box.geometry} material={materials.wood}>
                <meshPhongMaterial color={'#7a8db0'} />
            </mesh>
            <mesh geometry={nodes.Mesh_box_1.geometry} material={materials.rock}>
                <meshPhongMaterial color={'#647591'} />
            </mesh>
        </group>
    );
}

useGLTF.preload('/box.glb');
