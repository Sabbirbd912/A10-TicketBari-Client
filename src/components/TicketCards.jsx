import React from "react";
import { Button, Card, CloseButton } from "@heroui/react";

const TicketCards = ({ ticket }) => {
  console.log(ticket);
  return (
    <Card className="w-95 rounded-3xl overflow-hidden flex flex-col gap-4">
      <div className="w-full h-56 rounded-2xl relative overflow-hidden">
        <img
          alt="Cherries"
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src={ticket.image_url}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 text-xl font-bold">{ticket.ticket_title}</Card.Title>
          <Card.Description>
            Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam
            dolor sed amet faucibus etiam.
          </Card.Description>
          <CloseButton
            aria-label="Close banner"
            className="absolute top-3 right-3"
          />
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Button className="w-full sm:w-auto">Details</Button>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default TicketCards;
