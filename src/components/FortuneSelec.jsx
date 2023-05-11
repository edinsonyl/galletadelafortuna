import PropTypes from 'prop-types'

const FortuneSelec = ({ data }) => {

  return (
    
    <div className='fortune-selec'>
        <div> <h1>GALLETAS DE LA FORTUNA</h1></div>
       <div className='fortune'>
        <h3>{data.phrase}</h3>
        <h3>{data.author}</h3>
      </div>
    </div>
  );
};

FortuneSelec.propTypes = {
  data: PropTypes.object
};

export default FortuneSelec;
