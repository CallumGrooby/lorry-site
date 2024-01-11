import PropTypes from 'prop-types';

export const HeroSection = ({ title, text, img, hasButton, buttonText }) => {
  return (
    <section className='hero-section' style={{backgroundImage : `url(${img})`}}>
       <div className='content'>
          <h1>{title}</h1>
          <p>{text}</p>
          {hasButton ?  <button className='action-button'>{buttonText}</button>:<></>}
       </div>
       
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  hasButton: PropTypes.bool,
  buttonText:PropTypes.string,
};