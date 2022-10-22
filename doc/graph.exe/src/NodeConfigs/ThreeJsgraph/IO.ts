import { CON_MAPPING } from "graph.exe-core/dist/cjs/core/IO/IOMapping";
import { ProtoIO } from "graph.exe-react";
import { BufferGeometry, Mesh } from "three";
import { colorData, colorPicker, geometryData, geometrySelector, meshPreview } from "./CustomComp";


export const colorIn: ProtoIO<null, string> = {
    type: "color",
    mapping: CON_MAPPING.SINGLE,
    label: "Color",
    data: null,
    extra: null,
    value: "#ffffff",
    style: {
        color: "lightblue"
    }
}

export const colorOut: ProtoIO<colorData, string> = {
    type: "color",
    mapping: CON_MAPPING.MULTI,
    label: "Color",
    data: { color: "#ffffff" },
    extra: colorPicker,
    value: "#ffffff",
    style: {
        color: "lightblue"
    }
}

export const geometryIn: ProtoIO<null, BufferGeometry | null> = {
    type: "geometry",
    mapping: CON_MAPPING.SINGLE,
    label: "Geometry",
    data: null,
    extra: null,
    value: null,
    style: {
        color: "orange"
    }
}

export const geometryOut: ProtoIO<geometryData, BufferGeometry | null> = {
    type: "geometry",
    mapping: CON_MAPPING.MULTI,
    label: "Geometry",
    data: { geometry: null },
    extra: geometrySelector,
    value: null,
    style: {
        color: "orange"
    }
}

export const meshIn: ProtoIO<null, Mesh | null> = {
    type: "mesh",
    mapping: CON_MAPPING.SINGLE,
    label: "mesh",
    data: null,
    extra: null,
    value: null,
    style: {
        color: "lightgreen"
    }
}

export const meshOut: ProtoIO<null, Mesh | null> = {
    type: "mesh",
    mapping: CON_MAPPING.MULTI,
    label: "mesh",
    data: null,
    extra: null,
    value: null,
    style: {
        color: "lightgreen"
    }
}

export const meshInWithPreview: ProtoIO<null, Mesh | null> = {
    type: "mesh",
    mapping: CON_MAPPING.SINGLE,
    label: "mesh",
    data: null,
    extra: meshPreview,
    value: null,
    style: {
        color: "lightgreen"
    }
}