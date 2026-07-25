
import BookedCard from "@/components/Dashboard/BookedCard";

const MyAddedTickets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/alltickets`);
  // const res = await fetch("http://localhost:5000/alltickets");
  const data = await res.json();
  const addedtickets = data;
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl text-center font-bold mb-8">My Added Tickets Here </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {addedtickets.map((ticket) => (
          <BookedCard key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default MyAddedTickets;
