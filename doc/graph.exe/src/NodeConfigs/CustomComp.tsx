import { ExtraProps } from "graph.exe-react/dist/cjs/ProtoTypes/ProtoIO";
import React from "react";

export interface inputData {
    val: number
}

export const inputForm = (props: ExtraProps<inputData, number>) => {
    const update = (val: number) => {
        props.setData({ val: val });
    }
    return (
        <div>
            <label>value: </label>
            < input
                type="number"
                style={{ width: "50px" }}
                defaultValue={props.data.val}
                step={1}
                onChange={e => update(parseFloat(e.target.value))}
            />
        </div>
    )
}