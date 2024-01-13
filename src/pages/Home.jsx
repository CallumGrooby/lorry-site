import { NavigationBar } from "../components/NavigationBar"
import { HeroSection } from "../components/HeroSection"
import lorryHeroImage from '../assets/lorry-hero01.png'
import packingAboutUsImage from '../assets/packing-aboutus.png'
import flowersHeroImage from '../assets/flower-hero.png'
import lorryJoinUsImage from '../assets/lorry-joinus.png'
import warehouseGroupsImage from '../assets/warehouse-groups.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoogleMap } from "../components/GoogleMap"



export const Home = () => {
  return (
    <section>
        <NavigationBar />
        <HeroSection 
            altStyle={false}
            title={"Elevate Your Supply Chain with FreshLinc"}
            text={"Welcome to FreshLinc, your premier partner in temperature-controlled supply chain management. As a leading service provider across the UK and Europe, we specialize in the seamless handling of fresh, chilled, and horticultural products. Our state-of-the-art facilities and a modern fleet are geared towards delivering a cost-effective and highly efficient service, tailored to meet the unique needs of our customers. At FreshLinc, we don't just manage supply chains; we elevate them."}
            img={lorryHeroImage}
            hasButton={true}
            buttonText={"Request A Quote"}
        />    

      <IconedSection />
      <AboutUsSection></AboutUsSection>

      <HeroSection
        altStyle={true}
        title={"Our Journey: Established, Expanded, and Excelling."}
        text={""}
        img={flowersHeroImage}
        hasButton={true}
        buttonText={"Request A Quote"}
      ></HeroSection>

      <JoinOurTeamSection></JoinOurTeamSection>
      <GroupsSections></GroupsSections>
    </section>
  )
}


const IconedSection = () =>{

  const iconedInformation = [
    {
      name : "Warehousing", 
      icon : "warehouse",
      text : "Offering over 500,000 square foot of state of the art, modern facilities for chilled, ambient and frozen storage",
      color: "1F723A"
    }, {
      name : "Transportation Solutions", 
      icon : "truck",
      text : "Optimize supply chains with our advanced fleet for temperature-controlled transport. Trust us for safe delivery of fresh and frozen products across the UK and Europe.",
      color: "CC232A"
    },{
      name : "International Logistics", 
      icon : "earth-europe",
      text : "Seamlessly expand your reach with our European Operation. We provide reliable and timely logistical solutions, facilitating smooth international trade across the UK & Europe.",
      color: "E3CD44"
    }
    ,{
      name : "Specialized 3PL Services", 
      icon : "snowflake",
      text : "Tailored solutions for just-in-time supply chains. From chill and ambient to horticulture, explore our multi-divisional services designed to meet unique 3PL requirements.",
      color: "42391F"
    }

  ]

  return(
    <div className="container">
      <section className="services-section" >
        <div className="iconed-info-grid">
          {iconedInformation.map((section, index)=>{
            return(
            <article  key={index}>
                <FontAwesomeIcon 
                className="icon" 
                icon={section.icon} 
                style={{color : `#${section.color}`}}
                />
                <h2>{section.name}</h2>
                <p>{section.text}</p>
            </article>
            );
          })}
        </div>

        <header className="content">
          <h3>Our Services</h3>
          <h1>Your Trusted Partner for Complete Freight and Warehousing Assistance</h1>
          <p>Embark on a journey of optimized supply chains with our diverse services. From cutting-edge storage facilities to advanced temperature-controlled transport, we ensure secure deliveries across the UK and Europe. Explore our European Operation for reliable international trade facilitation. Tailored for just-in-time supply chains, our multi-divisional services cover unique 3PL requirements. Click below for a detailed overview of our offerings.</p>
          <button className='action-button'>Our Services</button>
        </header>

      </section>
    </div>
    
  )
}


const AboutUsSection = ()=>{
  return(
    <>
      <div className="container">
        <section className="about-us-section" >
          <h1>FreshLinc: Your Supply Chain Partner, Moving Goods with Confidence</h1>

        <article className="content">
          <span className="line">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </span>
          

        <div className="information">
          <div className="text-container">
            <h1>Reliable Logistics Solutions</h1>
            <p>Experience streamlined supply chain management with our tailored services and expertise.</p>
          </div>
          <div className="text-container">
            <h1>Unrivaled Network Coverage</h1>
            <p>Reach markets across UK and Europe with our expansive network of warehouses and transport fleet.</p>
          </div>
          <div className="text-container">
            <h1>Dedicated to Customer Success</h1>
            <p>Your goals are our priority. We are committed to ensuring your business thrives with efficient logistics.</p>
          </div>
        </div>
      </article>

        <img  src={packingAboutUsImage} alt="warehouse image"></img>

        </section>
      </div>
    </>
  )
}


const JoinOurTeamSection = () =>{
  return(
    <section className="container">
      <section className="join-us-section">
        <div className="content">
          <h3>Our Team</h3>
          <h1>Join Our Team</h1>
          <p>At FreshLinc, our team is the driving force behind our success, providing market-leading logistical solutions with unwavering commitment to service. We prioritize the growth and development of our colleagues, offering diverse opportunities for skill enhancement through formal and vocational training. From Apprenticeships to Fast Track LGV training, we invest in your success.</p>
          <button className='action-button'>Find out more</button>
        </div>

        <div className="image-container">
          <img src={lorryJoinUsImage}></img>
        </div>
      </section>
    </section>
  );
}

const GroupsSections = ()=>{
  return(
      <section className="group-section">

      <div className="image-container">
        <img src={warehouseGroupsImage}></img>
      </div>

      <article className="groups-divisions">
        <section className="offices-section">
          <h3>Our Divisions</h3>
          <h1>Fresh Lincs Groups</h1>
          <p>The FreshLinc Group delivers a spectrum of logistics solutions and expertise tailored to industry demands. Explore our divisions for precision in storage, proficiency in transportation, and innovative supply chain management.</p>
          <button className='action-button'>Group Divisions</button>
        </section>

        <section className="map-section">
          <div className="information-holder">
            <h1>Our Head Office</h1>
            <p> 
                FreshLinc Head Office <br/>
                Wardentree Park<br/>
                Pinchbeck<br/>
                Spalding<br/>
                Lincolnshire<br/>
                PE11 3ZN
            </p>

            <p>Tel: +44 (0)1775 710900</p>
            <p style={{color: '#f8b9bc'}}>information@freshlinc.com</p>
          </div>
          <div className="map-container-old">
            
          </div>
          </section>

      </article>

      {/* <GoogleMap></GoogleMap> */}

      </section>
  )
}

