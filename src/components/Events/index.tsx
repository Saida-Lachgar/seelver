import './index.scss';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Events = (): JSX.Element => {
  const [emblaRef] = useEmblaCarousel({}, [
    Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: false, stopOnFocusIn: false })
  ])

  return (
    <div className="Events" ref={emblaRef}>
      <div className="Events__container">
        <div className="Events__slide">Joyeux Noël et bonne année!</div>
        <div className="Events__slide">Bonne fête <strong>Téophane</strong></div>
        <div className="Events__slide">Joyeuses Pâques!</div>
      </div>
    </div>
  )
}

export default Events;



