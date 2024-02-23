import Home_banner1 from '../images/home_banner1.jpg'
import Home_banner2 from '../images/home_banner2.jpg'
import Home_banner3 from '../images/home_banner3.webp'

import Home_banner_mob1 from '../images/home_banner_mob1.jpg'
import Home_banner_mob2 from '../images/home_banner_mob2.jpg'
import Home_banner_mob3 from '../images/home_banner_mob3.webp'


function Home() {
  return (
    <>
      <div id="demo" className="carousel slide desktop" data-bs-ride="carousel">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Home_banner1} alt="Los Angeles" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={Home_banner2} alt="Chicago" className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src={Home_banner3} alt="New York" className="d-block w-100" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
                
                {/* -----------------for mobile------------------- */}
<div id="demo" className="carousel slide mobile" data-bs-ride="carousel">
<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={Home_banner_mob1} alt="mob_ban1" className="d-block w-100" />
  </div>
  <div className="carousel-item">
    <img src={Home_banner_mob2} alt="mobile_ban2" className="d-block w-100" />
  </div>
  <div className="carousel-item">
    <img src={Home_banner_mob3} alt="mobile_ban3" className="d-block w-100" />
  </div>
</div>

<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>
<div className='text-container'>
    <div className='side-box'>Original Wedding Style Biryani</div>
    <div className='middle-box'>100% Fresh & Healthy</div>
    <div className='side-box'>10 Years of Experience</div>
</div>
{/* ------  greeting box-------- */}
<div className='explore-container'>
    <div className='exp-one'>
        <h1 className='heading-txt'>
        Enjoy the experience of dining at your Bhai Friend's Wedding
        </h1>
        <div>Do you remember the last time you went to a wedding and had the best biriyani of your life? Do you still remember how it tasted? How the meat fell apart on the bone? How the rice was soft and flaky at the same time? Have you sat daydreaming, regretting not eating more at that wedding?</div>
       
        <div>Have you ever ordered biriyani from restaurant after restaurant, searching for the same experience and feeling disappointed?</div>
        
        <div>We at The Wedding Biriyani have worked day and night with a single mission in mind - to serve you a true wedding feast! On-demand!!</div>
     <button> Read our story</button>
    </div>
    <div className='explore-img'></div>
</div>
<div className='home-container'>
    <h1>Treating your loved ones never felt so good!</h1>
    <div>
    To ensure you have a world-class biryani experience, We adhere to stringent protocols in the procurement, production, packaging, and serving processes.
    </div>
<div className='svg-img'>
    <img alt='svg_i' src='https://theweddingbiryani.com/wp-content/uploads/2022/04/feature-outline-3-april.svg'/>
    
</div>
<div>
    <button className='button1'>Order Now</button>
    <button className='button2'>Book Table</button>
</div>
</div>
<div className='image-container'>
    <img src="https://theweddingbiryani.com/wp-content/uploads/2023/11/2-scaled.jpg" alt='variety1'/>
    <img src="https://theweddingbiryani.com/wp-content/uploads/2023/12/fish-fingers-scaled.jpg" alt='variety2'/>
    <img src= "https://theweddingbiryani.com/wp-content/uploads/2022/11/twb-post-30-july-copy.jpg" alt='variety3'/>
</div>
<div className='menu-box'>
<h1>TWB Menu Highlights</h1>
<div className='menu-one'>
    <h2>Most Popular Starters</h2>
    <li> Spl.Mutton Kola Urundai</li>
    <li> Chicken Lollipop</li>
    <li> Mutton Nalli Chops</li>
    <li> Mutton Nenju Kari Chops</li>
    <li> Vanjaram Fry </li>
    <br/>
    <h2>Gravies</h2>
    <li>Ramnadu Chicken Masala</li>
    <li>Mutton Vella Kuruma </li>
    <li>Madras Mutton Masala</li>
    <li>Mutton Varutha Curry</li>
    <br/>
    <h2>Sea Food Starters</h2>
    <li>Pomfret Pozhichadhu</li>
    <li>Vanjiram Meen Varuthadhu</li>
    <li>Prawn Tikka 
</li>
</div>
<div className='menu-one'>
    <h2>TWB SPL. BEVARAGES</h2>
    <li>  Pulpy Grape</li>
    <li> Milk shake</li>
    
    <br/>
    <h2>Special. Desserts</h2>
    <li>Twb’s spl mini falooda</li>
    <li>Choice of Ice Cream </li>
    <li>Badam Kulfi Sticka</li>
    <li>Twb’s Signature Bread Halwa</li>
    <br/>
    <h2>TWB SPL.Chinese Menu</h2>
    <li> Chilli Garlic Fried rice</li>
    <li>Twb spl. Fried rice</li>
    <li>Golden fried Prawns</li>
</div>
</div>
<div className='container-food'>
  <div>
    <h3>Dine-in</h3>
    <span> Enjoy, Kalyana Pandhi Virundhu Experience! 1st Time In Chennai.</span>
  </div>
  <div>
    <h3>Biryani By Degh</h3>
    <span> Having a party? Call us! Introducing “Biryani by Degh” “Minimum Order” – 8 Kg (Serves 50 people) </span>
  </div>
</div>
<div className='food-container'>
  <div> <img src='https://theweddingbiryani.com/wp-content/uploads/2023/12/cb-website.png' alt='types 0f food1' /> Chicken Biryani Virundhu</div>
  <div> <img src='https://theweddingbiryani.com/wp-content/uploads/2023/12/cb-website.png' alt='types 0f food2' /> Mutton Biryani Virundhu</div>
  <div> <img src='https://theweddingbiryani.com/wp-content/uploads/2023/12/cp.png' alt='types 0f food3' /> Premium Chicken Biryani</div>
  <div> <img src='https://theweddingbiryani.com/wp-content/uploads/2023/12/cp.png' alt='types 0f food4' /> Premium Mutton Biryani</div>
  <div> <img src='https://theweddingbiryani.com/wp-content/uploads/2022/03/7-2.png' alt='types 0f food5' /> Mutton Kola Urundai</div>
  <div> <img src='https://theweddingbiryani.com/wp-content/uploads/2022/03/8-1.png' alt='types 0f food6' /> Chicken 65</div>
  <div> <img src='https://theweddingbiryani.com/wp-content/uploads/2022/03/9.png' alt='types 0f food7' /> Mutton Milagu varuval</div>
  <div> <img src='https://theweddingbiryani.com/wp-content/uploads/2022/03/10.png' alt='types 0f food8' /> Mutton Chukka</div>
</div>
<div className='button-food'>
    <button className='button1'>Order Now</button>
    <button className='button2'>Book Table</button>
</div>
<div className='event-box'>
    <div className='event-one'>
        <h1>Wedding Catering With You In Mind</h1>
        <p>This is your Day! Let’s make it memorable with food & services your guests will keep raving about for years to come.</p>
        <p>We undertake all types of catering orders across Chennai</p>
        <button>Enquire Availability</button>
    </div>
</div>
{/* -----------location container------------- */}
<div className='location-container'>
  <div> 
    <h1>Location & Schedule</h1>
    <p>Visit us at our restaurant and enjoy the best taste of biryani, served hot and fresh. From our kitchen, straight to your table. You can visit us at the provided location, anytime between 11 AM To 11 PM.</p>
<button className='button1'>Order Now</button> <br/>
<button className='button2'>Book a table</button>
  </div>
  <div className='map-container'>
    <span>T.Nagar</span> <span>Velachery</span> <span>Anna Nagar</span>
  <div>
  <iframe title="Google Maps - Location in T. Nagar, Chennai, Tamil Nadu" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.563685599658!2d80.22833264408555!3d13.042614549868787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a5da2371%3A0x4954f49743f04af0!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1708699969797!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
  </div>
  </div>
</div>
    </>
  )
}

export default Home;
