import { FileText, PencilToSquare, TrashBin } from "@gravity-ui/icons";
import { Button, Table } from "@heroui/react";
import Link from "next/link";

const ManageTicketPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/alltickets`);
  // const res = await fetch("http://localhost:5000/alltickets");
  const data = await res.json();
  const alltickets = data;

  console.log(alltickets)

  return (
    <div>
      <h1 className="mb-5 font-semibold tracking-wide">Available Tickets</h1>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-150">

            <Table.Header>
              <Table.Column isRowHeader>#</Table.Column>
              <Table.Column>Photo</Table.Column>
              <Table.Column>Name</Table.Column>
              <Table.Column>From</Table.Column>
              <Table.Column>To</Table.Column>
              <Table.Column>Transport Type</Table.Column>
              <Table.Column>Price</Table.Column>
              <Table.Column>Quantity</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>

            <Table.Body>

              {
                alltickets.map((ticket,i) => <Table.Row key={i}>
                <Table.Cell> {i+1} </Table.Cell>
                <Table.Cell> <div className='w-12 h-12 bg-cover rounded-sm p-1' style={{ backgroundImage: `url(${ticket.image_url})` }}></div> </Table.Cell>
                <Table.Cell> {ticket.ticket_title} </Table.Cell>
                <Table.Cell> {ticket.from_location} </Table.Cell>
                <Table.Cell> {ticket.to_location} </Table.Cell>
                <Table.Cell> {ticket.transport_type} </Table.Cell>
                <Table.Cell> {ticket.price} </Table.Cell>
                <Table.Cell> {ticket.ticket_quantity} </Table.Cell>
                <Table.Cell>
                  <div className="flex gap-3">
                    <Button isIconOnly variant="secondary">
                      <PencilToSquare />
                    </Button>
                    <Button isIconOnly variant="secondary">
                      <FileText />
                    </Button>
                    <Button isIconOnly variant="danger">
                      <TrashBin />
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row> )
              }
              

            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default ManageTicketPage;
