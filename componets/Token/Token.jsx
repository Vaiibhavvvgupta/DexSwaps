import React, { useState, useContext } from "react";
import Style from "./Token.module.css";
import image from "../../assets";
import  Toggle  from "../Toggle/Toggle";
import Image from "next/image";


const Token = ({setOpenSetting}) => {
//   let chh
//   if(setOpenSetting){
//     chh = <div>hellooo</div>
//   }

//   return (
//     <>
//     {chh}
//     </>
    
//   ) 

    
    return(
        <div className={Style.Token}>
            <div className={Style.Token_box}>
                <div className={Style.Token_box_heading}>
                    <h4>Setting</h4>
                    <Image src={image.setting} alt="close"
                        width={50}
                        height={50}
                        onClick={() => setOpenSetting(false)} />
                </div>
                <p className={Style.Token_box_para}>
                    Slippage tolerance{""}
                    <Image src={image.Wallet} alt="img" width={20} height={20} />
                </p>
                <div className={Style.Token_box_input}>
                    <button>Auto</button>
                    <input type="text" placeholder="0.10%" />
                </div>
                <p className={Style.Token_box_para}>
                    Slippage tolerance{""}
                    <Image src={image.Wallet} alt="img" width={20} height={20}></Image>
                </p>
                <div className={Style.Token_box_input}>
                    <input type="text" placeholder="0.10%" />
                    <button>minutes</button>
                </div>
                <h2>Interface Setting</h2>
                <div className={Style.Token_box_toggle}>
                    <p className={Style.Token_box_para}> Transaction deadline</p>
                    <Toggle label="No" />
                </div>
                </div>
                </div>
 )};
export default Token;
