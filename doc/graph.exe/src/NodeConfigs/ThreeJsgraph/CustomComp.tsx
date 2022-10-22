import { ExtraProps } from "graph.exe-react";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { BoxGeometry, BufferGeometry, CircleGeometry, DodecahedronGeometry, LineSegments, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, SphereGeometry, TorusGeometry, WebGLRenderer, WireframeGeometry } from "three";

export interface geometryData {
    geometry: BufferGeometry | null;
}

const enum Geometries {
    BOX = "box",
    SPHERE = "sphere",
    CIRCLE = "circle",
    DODECAHEDRON = "dodecahedron",
    TORUS = "torus"
}

const inputStyle: CSSProperties = {
    width: "50px"
}

interface BoxProperties {
    width: number,
    height: number,
    depth: number
}

interface SphereProperties {
    radius: number
}

interface CircleProperties {
    radius: number,
    segments: number
}

interface DodecahedronProperties {
    radius: number,
    details: number
}

interface TorusProperties {
    radius: number,
    tube: number,
    radialSegments: number,
    tubularSegments: number,
    arc: number
}

export const geometrySelector = (props: ExtraProps<geometryData, BufferGeometry | null>) => {

    const [selectedGeometry, setSelectedGeometry] = useState<Geometries>(Geometries.BOX);
    const [boxProperties, setBoxProperties] = useState<BoxProperties>({ width: 1, height: 1, depth: 1 });
    const [sphereProperties, setSphereProperties] = useState<SphereProperties>({ radius: 1 });
    const [circleProperties, setCircleProperties] = useState<CircleProperties>({ radius: 1, segments: 32 });
    const [dodecahedronProperties, setDodecahedronProperties] = useState<DodecahedronProperties>({ radius: 1, details: 0 });
    const [torusProperties, setTorusProperties] = useState<TorusProperties>({ radius: 1, tube: 0.4, radialSegments: 8, tubularSegments: 6, arc: Math.PI * 2 });

    const setSelectedGeometryWrapper = (value: string) => {
        switch (value) {
            case "box": setSelectedGeometry(Geometries.BOX); break;
            case "sphere": setSelectedGeometry(Geometries.SPHERE); break;
            case "circle": setSelectedGeometry(Geometries.CIRCLE); break;
            case "dodecahedron": setSelectedGeometry(Geometries.DODECAHEDRON); break;
            case "torus": setSelectedGeometry(Geometries.TORUS); break;
        }
    }

    const setBoxPropertiesWidth = (value: number) => { setBoxProperties({ ...boxProperties, width: value }); updateData(); }
    const setBoxPropertiesHeight = (value: number) => { setBoxProperties({ ...boxProperties, height: value }); updateData(); }
    const setBoxPropertiesDepth = (value: number) => { setBoxProperties({ ...boxProperties, depth: value }); updateData(); }

    const setSpherePropertiesRadius = (value: number) => { setSphereProperties({ ...sphereProperties, radius: value }); updateData(); }

    const setCirclePropertiesRadius = (value: number) => { setCircleProperties({ ...circleProperties, radius: value }); updateData(); }
    const setCirclePropertiesSegments = (value: number) => { setCircleProperties({ ...circleProperties, segments: value }); updateData(); }

    const setDodecahedronPropertiesRadius = (value: number) => { setDodecahedronProperties({ ...dodecahedronProperties, radius: value }); updateData(); }
    const setDodecahedronPropertiesDetails = (value: number) => { setDodecahedronProperties({ ...dodecahedronProperties, details: value }); updateData(); }

    const setTorusPropertiesRadius = (value: number) => { setTorusProperties({ ...torusProperties, radius: value }); updateData(); }
    const setTorusPropertiesTube = (value: number) => { setTorusProperties({ ...torusProperties, tube: value }); updateData(); }
    const setTorusPropertiesRadialSegments = (value: number) => { setTorusProperties({ ...torusProperties, radialSegments: value }); updateData(); }
    const setTorusPropertiesTubularSegments = (value: number) => { setTorusProperties({ ...torusProperties, tubularSegments: value }); updateData(); }
    const setTorusPropertiesArc = (value: number) => { setTorusProperties({ ...torusProperties, arc: value }); updateData(); }

    const updateData = () => {
        switch (selectedGeometry) {
            case Geometries.BOX: props.setData({ geometry: new BoxGeometry(boxProperties.width, boxProperties.height, boxProperties.depth) }); break;
            case Geometries.SPHERE: props.setData({ geometry: new SphereGeometry(sphereProperties.radius) }); break;
            case Geometries.CIRCLE: props.setData({ geometry: new CircleGeometry(circleProperties.radius, circleProperties.segments) }); break;
            case Geometries.DODECAHEDRON: props.setData({ geometry: new DodecahedronGeometry(dodecahedronProperties.radius, dodecahedronProperties.details) }); break;
            case Geometries.TORUS: props.setData({ geometry: new TorusGeometry(torusProperties.radius, torusProperties.tube, torusProperties.radialSegments, torusProperties.tubularSegments, torusProperties.arc) }); break;
        }
    }

    useEffect(() => {
        updateData();
    }, [selectedGeometry, boxProperties, sphereProperties, circleProperties, dodecahedronProperties, torusProperties])

    return (
        <div>
            <select onChange={e => setSelectedGeometryWrapper(e.target.value)}>
                <option value={Geometries.BOX}>Box</option>
                <option value={Geometries.SPHERE}>Sphere</option>
                <option value={Geometries.CIRCLE}>Circle</option>
                <option value={Geometries.DODECAHEDRON}>Dodecahedron</option>
                <option value={Geometries.TORUS}>Torus</option>
            </select>
            {selectedGeometry === Geometries.BOX ?
                <div>
                    <label>width: </label>
                    <input style={inputStyle} type="number" defaultValue={boxProperties.width} min={1} onChange={e => setBoxPropertiesWidth(parseFloat(e.target.value))} />
                    <br />
                    <label>height: </label>
                    <input style={inputStyle} type="number" defaultValue={boxProperties.height} min={1} onChange={e => setBoxPropertiesHeight(parseFloat(e.target.value))} />
                    <br />
                    <label>depth: </label>
                    <input style={inputStyle} type="number" defaultValue={boxProperties.depth} min={1} onChange={e => setBoxPropertiesDepth(parseFloat(e.target.value))} />
                </div>
                : null}
            {selectedGeometry === Geometries.SPHERE ?
                <div>
                    <label>radius: </label>
                    <input style={inputStyle} type="number" defaultValue={sphereProperties.radius} min={1} onChange={e => setSpherePropertiesRadius(parseFloat(e.target.value))} />
                </div>
                : null}
            {selectedGeometry === Geometries.CIRCLE ?
                <div>
                    <label>radius: </label>
                    <input style={inputStyle} type="number" defaultValue={circleProperties.radius} min={1} onChange={e => setCirclePropertiesRadius(parseFloat(e.target.value))} />
                    <br />
                    <label>segments: </label>
                    <input style={inputStyle} type="number" defaultValue={circleProperties.segments} min={1} onChange={e => setCirclePropertiesSegments(parseFloat(e.target.value))} />
                </div>
                : null}
            {selectedGeometry === Geometries.DODECAHEDRON ?
                <div>
                    <label>radius: </label>
                    <input style={inputStyle} type="number" defaultValue={dodecahedronProperties.radius} min={1} onChange={e => setDodecahedronPropertiesRadius(parseFloat(e.target.value))} />
                    <br />
                    <label>details: </label>
                    <input style={inputStyle} type="number" defaultValue={dodecahedronProperties.details} min={0} max={32} onChange={e => setDodecahedronPropertiesDetails(parseFloat(e.target.value))} />
                </div>
                : null}
            {selectedGeometry === Geometries.TORUS ?
                <div>
                    <label>radius: </label>
                    <input style={inputStyle} type="number" defaultValue={torusProperties.radius} min={1} onChange={e => setTorusPropertiesRadius(parseFloat(e.target.value))} />
                    <br />
                    <label>tube: </label>
                    <input style={inputStyle} type="number" defaultValue={torusProperties.tube} min={0.1} step={0.05} onChange={e => setTorusPropertiesTube(parseFloat(e.target.value))} />
                    <br />
                    <label>radialSegments: </label>
                    <input style={inputStyle} type="number" defaultValue={torusProperties.radialSegments} min={1} onChange={e => setTorusPropertiesRadialSegments(parseFloat(e.target.value))} />
                    <br />
                    <label>tubularSegments: </label>
                    <input style={inputStyle} type="number" defaultValue={torusProperties.tubularSegments} min={1} onChange={e => setTorusPropertiesTubularSegments(parseFloat(e.target.value))} />
                    <br />
                    <label>arc: </label>
                    <input style={inputStyle} type="number" defaultValue={torusProperties.arc} min={0.1} step={0.05} max={Math.PI * 2} onChange={e => setTorusPropertiesArc(parseFloat(e.target.value))} />
                </div>
                : null}
        </div>
    )
}

export const meshPreview = (props: ExtraProps<null, Mesh | null>) => {

    const mountRef = useRef<HTMLDivElement>(null);

    const [showWireframe, setShowWireframe] = useState<boolean>(true);

    useEffect(() => {

        const scene = new Scene();
        const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new WebGLRenderer();
        renderer.setClearColor(0xFFFFFF, 0);

        renderer.setSize(150, 150);

        if (mountRef.current)
            mountRef.current.appendChild(renderer.domElement);

        let mesh: Mesh;

        if (props.value)
            mesh = props.value;
        else
            mesh = new Mesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial({ color: 0xffffff }));

        scene.add(mesh);

        let line: LineSegments;

        if (showWireframe) {

            const wireframe = new WireframeGeometry(mesh.geometry);

            line = new LineSegments(wireframe);
            scene.add(line);
        }

        camera.position.z = 5;

        renderer.render(scene, camera);

        let rotX: number = mesh.rotation.x;
        let rotY: number = mesh.rotation.y;

        const animate = function () {
            requestAnimationFrame(animate);

            rotX += 0.01;
            rotY += 0.01;
            mesh.rotation.x = rotX;
            mesh.rotation.y = rotY;

            if (showWireframe) {
                line.rotation.x = rotX;
                line.rotation.y = rotY;
            }

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            if (mountRef.current)
                mountRef.current.removeChild(renderer.domElement);
        }
    }, [props.value, showWireframe])

    return (
        <div>
            <label>Mesh</label>
            <input defaultChecked={showWireframe} type="checkbox" onChange={e => setShowWireframe(!showWireframe)} />
            <label>Wireframe</label>
            <div
                ref={mountRef}
                style={{ width: "170px", height: "150px" }}
            >

            </div>
        </div>
    )

}

export interface colorData {
    color: string
}

export const colorPicker = (props: ExtraProps<colorData, string>) => {
    const [delayHandler, setDelayHandler] = useState<any>(null);

    const updateData = (value: string) => {
        clearTimeout(delayHandler);
        setDelayHandler(setTimeout(() => {
            props.setData({ color: value });
        }, 600));
    }

    return (<div>
        <input type="color" defaultValue={props.value} onChange={e => updateData(e.target.value)}></input>
    </div >)
}