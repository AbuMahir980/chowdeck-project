import React from 'react'
import cardImage1 from  '../../assets/far assets1/cardImage1.png'
import cardImage2 from '../../assets/far assets1/cardImage2.png'
import cardImage3 from '../../assets/far assets1/cardImage3.png'
import icon1 from '../../assets/far assets1/icon11.svg'
import icon2 from '../../assets/far assets1/icon2.svg'
import icon3 from '../../assets/far assets1/icon3.svg'


const cardDatas = 
[
    {
        id:1,
        heading:"Order in 3 steps",
        text:"Hungry ? Too tired to cook ? Having friends over or you just wan chop life ? Get started and allow us deliver happiness to your door step",
        link:"see more",
        image: cardImage1,
        icon: icon1
        
    },
    {
        id:1,
        heading:"Start selling",
        text:"Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.",
        link:"see more",
        image: cardImage2,
        icon: icon2
    },
    {
        id:1,
        heading:"Behind the scenes",
        text:"If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.",
        link:"see more",
        image: cardImage3,
        icon: icon3
    },
    // {
    //     id:1,
    //     heading:"Order in 3 steps",
    //     text:"Hungry ? Too tired to cook ? Having friends over or you just wan chop life ? Get started and allow us deliver happiness to your door step",
    //     link:"see more",
    //     image: cardImage3
    // },
]

const Cards = () => {
  return (
    <div className=' '>
      <div className="grid grid-cols-3 mx-7" >
        {
            cardDatas.map((cardData)=>
        <div className="bg-white border-black border-4  rounded-[20px] w-[24rem] h-[29rem] overflow-hidden"key={cardData.id}>
            <div className="mb-20 px-6
             py-6">
            <img src={cardData.icon} className='w-9 h-9 mx-20px' alt="" />
            <h1 className="font-extrabold text-[30px]]">{cardData.heading}</h1>
            <p className="">{cardData.text}</p>
            <p className="">{cardData.link}</p>
            </div>
            <div className="border-black border-2  rounded-[] w-[24rem] h-[11rem] overflow-hidden  mb ">
                <img src={cardData.image} alt="" />  
            </div>
        </div>
        )
        }

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
