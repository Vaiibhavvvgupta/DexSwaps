import React from "react";
import Style from "./Toggle.module.css";
import Image from "next/image";
import image from "../../assets"



const Toggle = ({label}) => {
    return(
        <div className={Style.Toggle}>
            <div className={Style.Toggle_switch_box}>
                <input type="checkbox" className={Style.Toggle_checkbox}
                name={label}
                id={label}/>
                <label className={Style.Toggle_label} htmlfor={label}>
                    <span className={Style.Toggle_inner} />
                    <span className={Style.Toggle_switch} />
                    </label>
            </div>
        </div>
    )
}
export default Toggle