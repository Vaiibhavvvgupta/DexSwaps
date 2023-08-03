import React from "react";
import Style from "./TokenList.module.css";
import image from "../../assets"
import Image from "next/image";

const TokenList = ({ tokenDate, setOpenTokenBox }) => {
    const data = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div className={Style.TokenList}>
            <p className={Style.TokenList_close}
                onClick={() => setOpenTokenBox(false)}>
                <Image src={image.setting} alt="close" width={50} height={50} ></Image>
            </p>
            <div className={Style.TokenList_title}>
                <h2>Your Token List</h2>
            </div>

            {data.map((el, i)=>(
                <div className={Style.TokenList_box}>
                    <div className={Style.TokenList_box_info}>
                        <p className={Style.TokenList_box_info_symbol}>
                            Hey
                        </p>
                        <p>
                            <span>34</span> GOLD COIN
                        </p>
                        </div> </div>
            ))}

        </div>
        )
};
export default TokenList;
