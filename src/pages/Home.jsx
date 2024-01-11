import { NavigationBar } from "../components/NavigationBar"
import { HeroSection } from "../components/HeroSection"
import image from '../assets/lorry-hero01.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const Home = () => {
  return (
    <section>
        <NavigationBar />
        <HeroSection 
            title={"Your Premier Partner in Temperature-Controlled Supply Chain Management Across the UK and Europe"}
            text={""}
            img={image}
            hasButton={true}
            buttonText={"Request A Quote"}
        />    

      <IconedSection />
      <AboutUsSection></AboutUsSection>

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



        </section>
      </div>
    </>
  )
}