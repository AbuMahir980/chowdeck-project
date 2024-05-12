import { useState } from "react"
import Questions from "../../shared/faq/Questions"
import Ans from "../../shared/Ans"
import Fotter from "../fotter/Fotter"
import Checkout from "../checkout/Checkout"


const Faq = () => {
    const [card, setCard] = useState(1)

    const handleCardNext = (card) => {
        setCard(card)
    }
    return (
        <>
        <div className="mx-16 rounded-[9px] border-4 border-black p-6 flex gap-8 h-[43rem] ">

            <div className="overflow-y-auto w-[50%]">
                <h1 className="text-[#0d5240] text-[64px] font-bold">FAQs.</h1>
                <div className="flex flex-col gap-y-4">
                    <Questions onClick={() => handleCardNext(1)} text="What is chowdeck? " className={card === 1 ? "bg-black text-white" : "bg-white text-black"} />
                    <Questions onClick={() => handleCardNext(2)} text="What is chowdeck wallet ? " className={card === 2 ? "bg-black text-white" : "bg-white text-black"} />
                    <Questions onClick={() => handleCardNext(3)} text="What is chowscore ? " className={card === 3 ? "bg-black text-white" : "bg-white text-black"} />
                    <Questions onClick={() => handleCardNext(4)} text="What is service fee? " className={card === 4 ? "bg-black text-white" : "bg-white text-black"} />
                    <Questions onClick={() => handleCardNext(5)} text="Why d0 we charge service fee ? " className={card === 5 ? "bg-black text-white" : "bg-white text-black"} />
                    <Questions onClick={() => handleCardNext(6)} text="What is surge fee ? " className={card === 6 ? "bg-black text-white" : "bg-white text-black"} />
                    <Questions onClick={() => handleCardNext(7)} text="Why do we charge surge fee ? " className={card === 7 ? "bg-black text-white" : "bg-white text-black"} />
                    <Questions onClick={() => handleCardNext(8)} text="how do i create an account on chowdeck ? " className={card === 8 ? "bg-black text-white" : "bg-white text-black"} />
                    <Questions onClick={() => handleCardNext(9)} text="how do i update my profile ? " className={card === 9 ? "bg-black text-white" : "bg-white text-black"} />
                    <Questions onClick={() => handleCardNext(10)} text="how do i delete a saved card ? " className={card === 10 ? "bg-black text-white" : "bg-white text-black"} />
                    <Questions onClick={() => handleCardNext(11)} text="how do i fund/ top up my chowdeck wallet ? " className={card === 11 ? "bg-black text-white" : "bg-white text-black"} />
                    <Questions onClick={() => handleCardNext(12)} text="what locations do we currently deliver to ? " className={card === 12 ? "bg-black text-white" : "bg-white text-black"} />
                </div>
            </div>
            <div className="w-[50%]">
                <h1 className="text-[#0d5240] text-[64px] font-bold">Ans.</h1>
                {
                    card === 1 && <Ans ans="Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city." />

                }

                {
                    card === 2 && <Ans ans="Chowdeck wallet is a safe feature on the app where you can put in money for later use. The money in the Chowdeck wallet can be used to make payments for orders placed on the app. When an order gets rejected due to various reasons, the payment made initially when the order was placed automatically goes into your Chowdeck wallet which is accessible to make payments for future orders." />

                }
                {
                    card === 3 && <Ans ans="Chowscore indicates how active you are on Chowdeck as a customer. This works by combining all your overall activities on the app from the day you signed up till date and rewarding you points for it. You get points for ordering meals, rating and reviewing restaurants, rating riders and referring the app to friends. Rack up more points to move tiers and enjoy exclusive discounts and free delivery on orders." />

                }
                {
                    card === 4 && <Ans ans="The service fee is a consumer fee that appears on the price breakdown at checkout on the Chowdeck app. Unlike other consumer fees, the service fee depends on your order’s subtotal, that is, a percentage of your bill excluding the delivery fee. We understand the service fee increases as the order amount increases, so we’ve capped it to prevent it from getting too excessive. It also does not apply to all restaurants on our platform." />

                }
                {
                    card === 5  && <Ans ans="Having food delivered to you anytime, anywhere is so convenient, but it can be extremely costly to operate a delivery service. We need to cover technology costs, transaction processing fees and support to do this effectively. The various fees on our checkout ensure we stay ahead of these costs and continue serving you, our deserving customer. We sincerely appreciate your patronage and look forward to surpassing delivery standards as we establish ourselves as a household name for meal delivery across Africa. " />

                }
                {
                    card === 6 && <Ans ans="A surge fee is a dynamic flat fee applicable when order demand exceeds available driver supply and is added to your subtotal during checkout on the Chowdeck app. The surge fee is calculated by considering how many people want to order on Chowdeck and how many delivery drivers are on the road in a particular area to fulfil orders.  " />

                }
                {
                    card === 7 && <Ans ans="The surge fee was established to inspire and reward Chowdeck Champions for delivering meals in less than ideal conditions such as heavy rain or traffic gridlocks. This also ensures we consistently deliver, regardless of the prevailing situations, which may naturally hinder effective delivery. We sincerely appreciate your patronage and look forward to surpassing delivery standards as we establish ourselves as a household name for meal delivery across Africa." />

                }
                {
                    card === 8 && <Ans ans="Go to Playstore or App Store on your phone, search for Chowdeck and download the app. Create an account in seconds by entering your details and verifying your phone number and email address. " />

                }
                {
                    card === 9 && <Ans ans="On the app, you can update your account details, delivery address and profile picture with avatars. Go to Profile on the homepage and make necessary edits." />

                }
                {
                    card === 10 && <Ans ans="On the app, you can delete your saved card details. Go to Profile on the homepage and click on Wallet. Click the Bin icon at the right of the saved card to delete the card." />

                }
                {
                    card === 11 && <Ans ans="From the home page, click on Profile at the bottom right. Select Wallet, at the top right click on Add Money and you'll be able to fund your wallet with either your saved card or via a payment gateway. The added amount will reflect in your wallet balance after transaction as been completed." />

                }
                {
                    card === 12 && <Ans ans="We currently pick up and also deliver food to places in Lagos, Abuja, Ibadan, Port-Harcourt, Ilorin, Benin City, Abeokuta and Asaba. This means you can find your favourite restaurants and food vendors who are in these locations and order your meals from them. There are ongoing plans to expand to other areas of Nigeria soon." />

                }
                
            </div>

        </div>
       

        </>
    )
}
export default Faq