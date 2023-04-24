import React, { useState } from 'react'
import Image from 'next/image'

import arrowUp from 'public/icons/arrowUp.svg'

const FilterCheckBox = (props) => {
    const [tag, setTag] = useState('');
    return (
        <>
            <div className='pb-[10px] pt-8 bg-white border-b-[1px] border-divider-main last:border-none'>
                <div className='flex justify-between mb-[27px]'>
                    <h3 className='medium-heading text-[18px]'>{props?.data?.filterTitle}</h3>
                    <Image src={arrowUp} width={12} height={7} alt="Icon" className=''></Image>
                </div>
                {props?.data && props?.data?.filterOption.map((item, index) => {
                    return (
                        <div key={index} className='flex justify-between mb-[15px] relative'>
                            <p className='main-info'>{item}</p>
                                <input type='checkbox' className='checkbx' onClick={()=>{ setTag() }}/>
                                <span className='checkmark'></span>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default FilterCheckBox