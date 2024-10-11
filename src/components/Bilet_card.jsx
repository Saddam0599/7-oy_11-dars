
import PropTypes from 'prop-types'; 

function Bilet_card({ date = "Чт", number = "28" }) {
  return (
    <div className="py-3 w-16 bg-[#111111] flex flex-col rounded-xl items-center">
      <p>{date}</p>
      <p>{number}</p>
    </div>
  );
}


Bilet_card.propTypes = {
  date: PropTypes.string,   
  number: PropTypes.string, 
};

export default Bilet_card;

