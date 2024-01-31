import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();

export function createPlanete(scene: THREE.Scene, size: number, texture: string, position: number, ring?: {innerRadius: number, outerRadius: number, texture: string}, orbitalRingSize = 0.5) {
    const geo = new THREE.SphereGeometry(size, 100, 100);
    const mat = new THREE.MeshStandardMaterial({
        map: textureLoader.load(texture),
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = Math.PI / 2;
    const orbitGeo = new THREE.RingGeometry(
        position,
        position + orbitalRingSize,
        50
    );
    const orbitMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
    });
    const orbitMesh = new THREE.Mesh(orbitGeo, orbitMat);

    scene.add(orbitMesh);
    orbitMesh.rotation.x = -0.5 * Math.PI;
    orbitMesh.add(mesh);

    if (ring) {
        const ringGeo = new THREE.RingGeometry(
            ring.innerRadius,
            ring.outerRadius,
            500
        );
        const ringMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load(ring.texture),
            side: THREE.DoubleSide,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.position.x = position;
        orbitMesh.add(ringMesh);
    }

    mesh.position.x = position;
    return { mesh, orbitMesh };
}