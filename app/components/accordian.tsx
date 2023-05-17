import { useState } from "react";

export default function Accordion(state) {


    return (
        <section onClick={() => setIsActive(!isActive)} className="">
            <div className="" >
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </section>
    );
};
