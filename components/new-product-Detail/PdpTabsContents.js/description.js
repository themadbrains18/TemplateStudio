import React from 'react'

const Description = ({ tabContent, product }) => {
    return (
        <>
            <div className={`${tabContent === 1 ? "block  mx-0 pt-[20px] md:pt-[40px] xl:pt-[80px] xl:mx-44 " : "hidden "}`}>
                <h3 className='small-heading mb-[15px] md:mb-5 '>Overview</h3>

                <p className='main-info mb-8'>{product?.description!==undefined && product?.description!==null && product?.description}</p>
                {/* <p className='main-info mb-8'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>

                <p className='main-info mb-8'>looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.</p>

                <p className='main-info mb-8'>10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
            */}
            </div>

        </>
    )
}

export default Description