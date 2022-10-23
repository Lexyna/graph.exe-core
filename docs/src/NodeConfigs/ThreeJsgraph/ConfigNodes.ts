import { EngineIO } from "graph.exe-core";
import { ProtoNode } from "graph.exe-react";
import { BoxGeometry, BufferGeometry, Mesh, MeshBasicMaterial } from "three";
import { colorData, geometryData } from "./CustomComp";
import { colorIn, colorOut, geometryIn, geometryOut, meshInWithPreview, meshOut } from "./IO";

export const rootNode: ProtoNode = {
    id: "rootNode",
    name: "Preview",
    description: "",
    inputs: [meshInWithPreview],
    outputs: [],
    private: true,
    exe: function () { }
}

export const colorNode: ProtoNode = {
    id: "colorNode",
    name: "Color",
    description: "Outputs a color",
    inputs: [],
    outputs: [colorOut],
    exe: function (out: EngineIO<colorData, string>) {
        out.value = out.data.color;
    }
}

export const geometryNode: ProtoNode = {
    id: "geometryNode",
    name: "Geometry",
    description: "Creates a geometry",
    inputs: [],
    outputs: [geometryOut],
    exe: function (geometry: EngineIO<geometryData, BufferGeometry | null>) {
        geometry.value = geometry.data.geometry;
    }
}

export const meshNode: ProtoNode = {
    id: "MeshNode",
    name: "Mesh",
    description: "Creates a Mesh",
    inputs: [colorIn, geometryIn],
    outputs: [meshOut],
    exe: function (color: EngineIO<null, string>, geometry: EngineIO<null, BufferGeometry | null>, mesh: EngineIO<null, Mesh>) {

        const mat = new MeshBasicMaterial({ color: color.value });

        let geo: BufferGeometry;

        if (geometry.value !== null)
            geo = geometry.value;
        else
            geo = new BoxGeometry(1, 1, 1);

        mesh.value = new Mesh(geo, mat)
    }
}