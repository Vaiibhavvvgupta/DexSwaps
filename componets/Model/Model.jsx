import React from "react";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";

// internal
import Style from "./Model.module.css";
import image from "../../assets"


const Model = ( {setOpenModel, connectWallet }) => {
    const Walletmanu = [" Metamask "," Coinbase "," Wallet "," Walletcoin "];
    return (
        <div className={Style.Model}>
            <div className={Style.Model_box}>
                <div className={Style.Model_box_heading}>
                    <p>Connect a Wallet</p>
                    <div className={Style.Model_box_heading_img}>
                        <Image src={image.setting} alt="Logo" width={50} height={50} onClick={() => setOpenModel(false)}/>
                    </div>
                </div>
                <div className={Style.Model_box_wallet}>
                    {Walletmanu.map((el, i) =>
                   <p key={i +1} onClick={() => connectWallet()}>{el}</p>)}
                
                </div>
                <p className={Style.Model_box_para}>
                    By connecting a wallet, you agree to Uniswap Lab' <br/> Terms and 
                    Service and consent to its Privacy Policy 
                </p>
            </div>
        </div>
    )
};
export default Model;