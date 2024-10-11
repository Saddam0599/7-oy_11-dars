import useStore from './store';

function YourComponent() {
  const { tickets, addTicket } = useStore();

  const handleAddTicket = (ticket) => {
    addTicket(ticket);
  };

  return (
    <div>
      <h1>Your Tickets</h1>
      {tickets.map((ticket, index) => (
        <div key={index}>{ticket.title}</div>
      ))}
      <button onClick={() => handleAddTicket({ title: 'New Ticket' })}>
        Add Ticket
      </button>
    </div>
  );
}

export default YourComponent;