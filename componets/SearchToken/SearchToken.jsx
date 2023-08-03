import React ,{useState} from "react";
import Image from "next/image";
import image from "../../assets";
import Style from "./SearchToken.module.css";



const SearchToken = ({openToken , tokens , tokenData}) => {
    const [active, setActive] = useState(1);
    const coins =[
        {
            img: image.ETH,
            name: "ETH"
        },
        {
            img: image.ETH,
            name: "DOG"
        },
        {
            img: image.ETH,
            name: "FUN"
        },
        {
            img: image.ETH,
            name: "WAI"
        },
        {
            img: image.ETH,
            name: "LOG"
        },
        {
            img: image.ETH,
            name: "OOO"
        },
        {
            img: image.ETH,
            name: "BNB"
        },
        {
            img: image.ETH,
            name: "SOL"
        },
    ];
    return (
        <div className={Style.SearchToken}>
            <div className={Style.SearchToken_box}>
                <div className={Style.SearchToken_box_heading}>
                    <h4>Select a token</h4>
                    <Image src={image.setting} alt="close"
                    width={50}
                    height={50}
                    onClick={()=> openToken(false)}
                    ></Image>
                </div>
                   <div className={Style.SearchToken_box_search}>
                    <div className={Style.SearchToken_box_search_img}>
                        <Image src={image.search}
                        alt="img"
                        width={20}
                        height={20}
                        ></Image>
                    </div>
                    <input type="text" placeholder="Search name and paste address" />
                        </div>
                   <div className={Style.SearchToken_box_tokens}>
                    {coins.map((el, i)=> (
                        <span key={i +1} className={active == i + 1 ? `${Style.active}` : ""}
                        onClick={() => (setActive(i +1),tokens({name: el.name , image: el.img}))}
                        
                        >
                                <Image src={el.img || image.ETH} alt="image" width={30}
                                height={30} />{el.name}

                             </span>

))}
                   </div>
            </div>
        </div>
    )
}
export default SearchToken