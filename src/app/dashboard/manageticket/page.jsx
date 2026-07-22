import { Table } from "@heroui/react";

const ManageTicketPage = () => {
  return (
    <div>
      <h1>Available Tickets</h1>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>#</Table.Column>
              <Table.Column>Photo</Table.Column>
              <Table.Column>Name</Table.Column>
              <Table.Column>From</Table.Column>
              <Table.Column>To</Table.Column>
              <Table.Column>Transport-Type</Table.Column>
              <Table.Column>Price</Table.Column>
              <Table.Column>Quantity</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1</Table.Cell>
                <Table.Cell>Bus</Table.Cell>
                <Table.Cell>Comfort Bus</Table.Cell>
                <Table.Cell>Rajshahi</Table.Cell>
                <Table.Cell>Dhaka</Table.Cell>
                <Table.Cell>Bus</Table.Cell>
                <Table.Cell>2100</Table.Cell>
                <Table.Cell>3</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>train</Table.Cell>
                <Table.Cell>Smooth Journey</Table.Cell>
                <Table.Cell>Syllet</Table.Cell>
                <Table.Cell>Mymenshingh</Table.Cell>
                <Table.Cell>Train</Table.Cell>
                <Table.Cell>950</Table.Cell>
                <Table.Cell>1</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default ManageTicketPage;
