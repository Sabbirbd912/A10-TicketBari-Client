import TicketCards from "./TicketCards";

const Advertisement =async () => {
    const res = await fetch("http://localhost:5000/alltickets");
    const data = await res.json();
    const popularTickets=data.slice(0,6);
    // console.log(data);



    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-3xl text-center font-bold mb-8">Popular Tickets</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {popularTickets.map(ticket=><TicketCards key={ticket._id} ticket={ticket} />)}
            </div>
            
        </div>
    );
};

export default Advertisement;