import OneTicket from "../components/OneTicket";
import Panda from "../assets/panda-cin.png";
import panda from "../assets/kung.png";
import pila from "../assets/pila.png";
import useStore from "../zustand/index";
import PropTypes from 'prop-types';

function Render_bilets({ openFunc }) {
  const { tickets } = useStore();

  console.log(tickets); 
  return (
    <div className="flex flex-col gap-4">
      <OneTicket
        open={openFunc}
        title="Кунг Фу Панда 4"
        img={Panda}
        buy={true}
        history={false}
      />
      <OneTicket
        open={openFunc}
        title="Кунг Фу Панда 4"
        img={panda}
        buy={true}
        history={false}
      />
      <OneTicket
        open={openFunc}
        title="Пила / Джокер новый...."
        img={pila}
        buy={false}
        history={false}
      />
      {tickets.map((ticket) => (
        ticket ? ( 
          <OneTicket
            key={ticket.id}
            open={openFunc}
            title={ticket.title}
            img={ticket.img}
            buy={false}
            history={false}
          />
        ) : null 
      ))}
    </div>
  );
}

Render_bilets.propTypes = {
  openFunc: PropTypes.func.isRequired, 
};

export default Render_bilets;




