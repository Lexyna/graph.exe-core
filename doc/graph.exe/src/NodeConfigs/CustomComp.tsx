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

export const enum TrigonometricFunctions {
    SIN = "sin",
    SINH = "sinh",
    ASIN = "asin",
    ASINH = "asinh",
    COS = "cos",
    COSH = "cosh",
    ACOS = "acos",
    ACOSH = "acosh",
    TAN = "tan",
    TANH = "tanh",
    ATAN = "atan",
    ATANH = "atanh"
}

export interface trigFuncSelect {
    type: TrigonometricFunctions
}

export const trigonometricSelector = (props: ExtraProps<trigFuncSelect, number>) => {
    const options: string[] = ["sin", "sinh", "asin", "asinh", "cos", "cosh", "acos", "acosh", "tan", "tanh", "atan", "atanh"];

    const updateType = (value: string) => {
        switch (value) {
            case "sin":
                props.setData({ type: TrigonometricFunctions.SIN }); break;
            case "sinh":
                props.setData({ type: TrigonometricFunctions.SINH }); break;
            case "asin":
                props.setData({ type: TrigonometricFunctions.ASIN }); break;
            case "asinh":
                props.setData({ type: TrigonometricFunctions.ASINH }); break;
            case "cos":
                props.setData({ type: TrigonometricFunctions.COS }); break;
            case "cosh":
                props.setData({ type: TrigonometricFunctions.COSH }); break;
            case "acos":
                props.setData({ type: TrigonometricFunctions.ACOS }); break;
            case "acosh":
                props.setData({ type: TrigonometricFunctions.ACOSH }); break;
            case "tan":
                props.setData({ type: TrigonometricFunctions.TAN }); break;
            case "tanh":
                props.setData({ type: TrigonometricFunctions.TANH }); break;
            case "atan":
                props.setData({ type: TrigonometricFunctions.ATAN }); break;
            case "atanh":
                props.setData({ type: TrigonometricFunctions.ATANH }); break;
            default:
                props.setData({ type: TrigonometricFunctions.SIN });
        }
    }

    let id = 0;
    return (
        <div>
            <select
                onChange={(e) => updateType(e.target.value)}
                defaultValue={props.data.type}
            >
                {options.map((o) => {
                    id++;
                    return (
                        <option
                            key={id}
                            value={o}
                        >{o}</option>
                    )
                })}
            </select>
        </div>
    )
}