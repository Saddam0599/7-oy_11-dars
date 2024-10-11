import OneTicket from "./OneTicket";
import Panda from "../assets/panda-cin.png";
import panda from "../assets/kung.png";

function HistoryTickets() {
  return (
    <div className="flex flex-col gap-4">
      <OneTicket
        title="Кунг Фу Панда 4"
        img={Panda}
        buy={true}
        history={true}
      />
      <OneTicket
        title="Кунг Фу Панда 4"
        img={panda}
        buy={true}
        history={true}
      />
    </div>
  );
}

export default HistoryTickets;
