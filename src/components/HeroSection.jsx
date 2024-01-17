import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export const HeroSection = ({ altStyle ,title, text, img, hasButton, buttonText }) => {
  return (
    <section className= 'hero-section' 
      style={{backgroundImage : `url(${img})`,
      objectFit: 'contain',
      backgroundRepeat:'no-repeat',
      backgroundSize: 'cover',
      alignItems: `${altStyle ? 'flex-end' : 'flex-start'}`
    }}>

    {altStyle && (<IconedSection></IconedSection>)}

    <div className='content'>
      <h1>{title}</h1>
      <p>{text}</p>
      {hasButton ?  <button className='action-button'>{buttonText}</button>:<></>}
    </div>
       


    </section>
  );
};

HeroSection.propTypes = {
  altStyle : PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  hasButton: PropTypes.bool,
  buttonText:PropTypes.string,
};

const IconedSection = ()=>{
  return (
    <div className='iconed-area'>
          <span className='background'>

          <div className='icons'>
            <div className='iconed-stat'>
              <FontAwesomeIcon className='icon' icon ="snowflake" />
              <h1>Founded In 1969</h1>
            </div>

            <div className='iconed-stat'>
              <FontAwesomeIcon className='icon' icon ="snowflake" />
              <h1>Founded In 1969</h1>
            </div>

            <div className='iconed-stat'>
              <FontAwesomeIcon className='icon' icon ="snowflake" />
              <h1>Founded In 1969</h1>
            </div>
            
          </div>
          

          </span>
      </div>
  )
}