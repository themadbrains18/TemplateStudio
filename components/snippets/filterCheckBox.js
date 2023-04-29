import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import arrowUp from 'public/icons/arrowUp.svg'

const FilterCheckBox = (props) => {
    const [tag, setTag] = useState('');
    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        let accordinnCon = document.querySelectorAll(".acc_ontent")
        accordinnCon.forEach((item) => {
        let  accHeight = item.scrollHeight;
            item.style.height = `${accHeight}px`;
        })

    }, [])

    function setHeight(e) {
        setRotate(!rotate)

        let nextElem = e.currentTarget.nextSibling;
        nextElem.style.height = "0px";
        let ElemHeight = nextElem.scrollHeight;

        if (rotate === true) {
            nextElem.style.height = `${ElemHeight}px`;
        }
        else {
            nextElem.style.height = "0px";
        }
        // if (nextElem.getAttribute("style")) {
        //     nextElem.removeAttribute("style");
        // }
        // else {
        //     nextElem.setAttribute("style", `height:${ElemHeight}px`);
        // }
    }

    return (
        <>
            {/* <button className={`medium-info px-5 pt-[6px] pb-[10px] bg-primary-800 ${tabContent === 1 ? "border-b-[2px] border-primary" : ""}`} onClick={() => updateTabs(1)}>Description</button> */}

            <div className='pb-[10px] pt-8 bg-white border-b-[1px] border-divider-main last:border-none'>
                <div className='flex justify-between pb-[27px] cursor-pointer' onClick={setHeight}>
                    <h3 className='medium-heading text-[18px]'>{props?.data?.filterTitle}</h3>
                    <Image src={arrowUp} width={12} height={7} alt="Icon" className={`arrowIcon transition-300  ${rotate && "rotate-180"}`}></Image>
                </div>
                <div className={`overflow-hidden transition-300 acc_ontent`}>
                    {props?.data && props?.data?.filterOption.map((item, index) => {
                        return (
                            <div key={index} className='flex justify-between mb-[15px] relative'>
                                <p className='main-info'>{item}</p>
                                <input type='checkbox' className='checkbx' onClick={() => { setTag() }} />
                                <span className='checkmark'></span>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default FilterCheckBox