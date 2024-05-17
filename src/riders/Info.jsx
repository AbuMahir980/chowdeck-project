import bikeCard from '../assets/farAssets1/unlocknewlevelsofgrowth.png'
import metricesLogo from '../assets/farAssets1/metrices.png'
import unlockLogo from '../assets/farAssets1/unlocknewlevelsofgrowth.png'
// import metrisLogo from '../assets/far assets1/metrices.png'
import InfoCard from './infoCard'

const images = [
  {
    image: unlockLogo,
    text: "Unlock new levels of growth.",
    innertext:"Own your hours, be your own boss, ride your vehicle, take loans, call shots, grow and learn with your team."
  },
  {
    image: metricesLogo,
    text: "Track your metrics & bonuses earned.",
    innertext:"Monitor your growth and earn huge bonuses as you go."
  },
  {
    image: metricesLogo,
    text: "Withdraw straight to your account.",
    // innertext:"<p className="text-[20px] w-[350px]">Monitor your growth and earn huge bonuses as you go.</p>"
    innertext:"Monitor your growth and earn huge bonuses as you go."
  },
]

const Info = () => {



  return (
    <div className='mx-7 bg-white border-black border-4 rounded-[30px] p-7 z-10 relative top-[-100px] '>
    
    
      <InfoCard images={images} interval={3000} />

    </div>
  )
}

export default Info
