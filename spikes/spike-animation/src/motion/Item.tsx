import React from "react";
import { motion } from "framer-motion";
import "./Item.css";

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
};

export const Item = ({
    color,
    isSelected,
    onClick,
}: {
    color: string;
    isSelected: boolean;
    onClick: () => void;
}) => {
    return (
        <li
            className="item"
            onClick={onClick}
            style={{ backgroundColor: color }}
        >
            {isSelected && (
                <motion.div
                    layoutId="outline"
                    className="outline"
                    initial={false}
                    animate={{ borderColor: color }}
                    transition={spring}
                />
            )}
        </li>
    );
};
