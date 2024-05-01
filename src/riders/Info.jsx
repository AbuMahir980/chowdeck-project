import bikeCard from '../assets/far assets1/unlocknewlevelsofgrowth.png'
import metricesLogo from '../assets/far assets1/metrices.png'
import unlockLogo from '../assets/far assets1/unlocknewlevelsofgrowth.png'
// import metrisLogo from '../assets/far assets1/metrices.png'
import InfoCard from './infoCard'

const images = [
  {
    image: unlockLogo,
    text: "Unlock new levels of growth."
  },
  {
    image: metricesLogo,
    text: "Track your metrics & bonuses earned."
  },
  {
    image: metricesLogo,
    text: "Withdraw straight to your account."
  },
]

const Info = () => {



  return (
    <div className='mx-7 bg-white border-black border-4 rounded-[7px] p-7 z-10 relative top-[-50px]'>
    
    
      <InfoCard images={images} interval={3000} />

    </div>
  )
}

export default Info
