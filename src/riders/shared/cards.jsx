import React from 'react'

const Cards = ({image,children, className}) => {
  return (
        <div className={`bg-white border-black border-4 rounded-[20px] w-[24rem] h-[30rem] overflow-hidden flex flex-col ${className}`}>
            {children}
            <div className="border-black border-[0.5px] w-[24rem] h-[10rem] mt-5">
                <img src={image} alt="" className='h-[14rem]'/>  
            </div>
        </div>
       

   
  )
}

export default Cards


    










// // import React from 'react'

// // const Cards = () => {
// //   return (
// //     <div>
// //       <section className="px-24  mt-20 py-5 mb-5 bg-[#0c513f]">
// //         <Hero />
// //       </section>
// //       <section className="flex justify-center mb-12">
// //         <Select/>
// //       </section>
// //       <section className="px-24 md:px-2 sm:px-2 xs:px-1">
// //         <div className="grid grid-cols-3 gap-y-5 ">
// //           {cardRendering.map((card, index) => (
// //             <OtherCards
// //               key={index}
// //               image={card.image}
// //               morelink={card.morelink}
// //               heading={card.heading}
// //               content={card.content}
// //             />
// //           ))}
// //         </div>
// //       </section>
// //       <section className="px-24 md:px-2 sm:px-2 xs:px-1 py-20">
// //         <h4 className="text-6xl pb-4 font-black border-b border-gray-800">
// //           Press
// //         </h4>
// //         {/* {pressDetails.map((pressDetail, index) => (
// //           <Press
// //             key={index}
// //             content={pressDetail.content}
// //             image={pressDetail.image}
// //             link={pressDetail.link}
// //           />
// //         ))} */}
// //       </section>
      
// //       
// //     </div>
// //   )
// // }

// // export default Cards
