import { AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import { ListOfAnimationLibrary } from "../ListOfAnimationLibrary/ListOfAnimationLibrary";
import { Item } from "./Item";
import './MotionPage.css'

const colors = ["#ff0055", "#0099ff", "#22cc88", "#ffaa00"];

export const MotionPage = () => {
    const [selected, setSelected] = useState(colors[0]);

    return (
        <AnimateSharedLayout>
            <ListOfAnimationLibrary/>
            <ul className={"content"}>
                {colors.map((color) => (
                    <Item
                        key={color}
                        color={color}
                        isSelected={selected === color}
                        onClick={() => setSelected(color)}
                    />
                ))}
            </ul>
        </AnimateSharedLayout>
    );
};
