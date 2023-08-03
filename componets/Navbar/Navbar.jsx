import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "./Navbar.module.css";

import images, { uniswap } from "../../assets";
import Model from "../Model/Model";
import TokenList from "../TokenList/TokenList";



const Navbar = () => {
    const menuitem = [
        {
            name: "Swap",
            link: "/"
        },
        {
            name: "Tokens",
            link: "/"
        },
        {
            name: "Pools",
            link: "/"
        },

    ];
    // useSate
    const [openModel, setOpenModel] = useState(false);
    const [openTokenBox, setOpenTokenBox] = useState(false);
    const [account, setAccount] = useState(false);
    return (
        <div className={Style.Navbar}>
            <div className={Style.Navbar_box}>
                <div className={Style.Navbar_box_left}>
                    <div className={Style.Navbar_box_left_img}>
                            </div>
                        <Image src={images.uniswap} alt="logo" height={50} width={50} />
                        {/* menu items */}
                        <div className={Style.Navbar_box_left_menu}>
                            {menuitem.map((el, i) => (
                                <Link key={i + 1}
                                href={{ pathname: `${el.name}`, query: `${el.Link}`}}>
                                    <p className={Style.Navbar_box_left_menu_items}>{el.name}</p>
                                </Link>
                            ))
                        };
                        </div>
                        </div>

                    {/* middle section  */}
                <div className={Style.Navbar_box_middle}>
                    <div className={Style.Navbar_box_middle_search}>
                        <div className={Style.Navbar_box_middle_search_img}>
                            <Image src={images.search} alt="search" width={20} height={20}></Image>

                        </div>
                        {/* input section */}
                        <input type="text" placeholder="search token" />
                    </div>
                </div>


                {/* right side */}
                <div className={Style.Navbar_box_right}>
                    <div className={Style.Navbar_box_right_box}>
                        <div className={Style.Navbar_box_right_box_img}>
                            <Image src={images.ETH} alt="netwok" height={30} width={30} />
                        </div>
                        <p>Network Name</p>
                    </div>
                    {
                        account ? (
                            <button onClick={() => setOpenModel(true)} >Connect </button>
                            )     : 
                            <button onClick={() => setOpenTokenBox(true)}>0xdgf43656878....</button>
                }


                    {openModel && (
                        <Model setOpenModel={setOpenModel} connectWallet="connect" />
                        )}
                </div>


            </div>
            {/* tokenlist component */}
            {openTokenBox && (
                <TokenList tokenDate="hey" setOpenTokenBox={setOpenTokenBox} />
            )}

        </div>
      
    );
};
export default Navbar;