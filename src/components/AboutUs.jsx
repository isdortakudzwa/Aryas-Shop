import left from './Images/right.jpg'
import right from './Images/left.jpg'
import './Fonts/About.css'

function AboutUs() {
  return (
    <section id="AboutUs">
    <div className='about-us'>
      <div className="image1">
        <img src={left} alt="imgs" className='pics-about' loading='lazy' />
      </div>

      <div className="about-text">
        <h2>Modern Fashions</h2>
        <p>Aryas Cart offers stylish, comfortable, and affordable Fashion clothing, crafted with care to celebrate your child’s unique style.</p>
        <button>View All</button>
      </div>

      <div className="image2">
        <img src={right} alt="imgs" className='pics-about' loading='lazy'/>
      </div>
    </div>
    </section>
  )
}

export default AboutUs