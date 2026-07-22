"use client";
import { Plus } from "@gravity-ui/icons";
import {
  Card,
  Form,
  Input,
  ListBox,
  Select,
  Button,
  Label,
  DateField,
  TimeField,
  Checkbox,
  CheckboxGroup,
} from "@heroui/react";
import { useState } from "react";

const AllticketPage = () => {
  const [selected, setSelected] = useState(["ac", "food"]);

  return (
    <div>
      <h2 className="text-2xl font-bold pb-4">Add New Ticket</h2>
      <Card className="py-4">
        <Form className="my-4 py-4 gap-4">
          <Input
            aria-label="Name"
            className="w-full mb-4"
            placeholder="Enter The Ticket Name"
          />
          <div className="flex  gap-4">
            <Input
              aria-label="Name"
              className="w-full"
              placeholder="Departure"
            />
            <Input
              aria-label="Name"
              className="w-full"
              placeholder="Destination"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <Select className="w-sm" placeholder="Choose Your Transport">
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="1" textValue="bus">
                    Bus
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="2" textValue="Train">
                    Train
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="3" textValue="Airplane">
                    Airplane
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="4" textValue="Launch">
                    Launch
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            <div className="flex gap-4">
              <DateField className="w-[256px]" name="date">
                <DateField.Group>
                  <DateField.Input>
                    {(segment) => <DateField.Segment segment={segment} />}
                  </DateField.Input>
                </DateField.Group>
              </DateField>

              <TimeField className="w-[256px]" name="time">
                <TimeField.Group>
                  <TimeField.Input>
                    {(segment) => <TimeField.Segment segment={segment} />}
                  </TimeField.Input>
                </TimeField.Group>
              </TimeField>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <Input aria-label="Name" className="w-full" placeholder="Price" />
            <Input
              aria-label="Name"
              className="w-full"
              placeholder="Quantity"
            />
          </div>

          <div className="mt-4">
            <CheckboxGroup
              className="min-w-[320px]"
              name="skills"
              value={selected}
              onChange={setSelected}
            >
              <Label>Your skills</Label>
              <Checkbox value="ac">
                <Checkbox.Content>
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  AC
                </Checkbox.Content>
              </Checkbox>
              <Checkbox value="food">
                <Checkbox.Content>
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  Food
                </Checkbox.Content>
              </Checkbox>
              <Checkbox value="wifi">
                <Checkbox.Content>
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  Wifi
                </Checkbox.Content>
              </Checkbox>
              <Label className="my-4 text-sm text-muted">
                Selected: {selected.join(", ") || "None"}
              </Label>
            </CheckboxGroup>
          </div>

          <div className="w-full">
            <label className="text-xs font-semibold text-default-600 block mb-1">
              Image <span className="text-danger">*</span>
            </label>
            <Input isrequired="true" name="photo" type="file" accept="image/*" variant="bordered" radius="md" className="w-full file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-default-100 file:text-default-700 hover:file:bg-default-200 cursor-pointer" />
            <p className="text-[10px] text-default-400 mt-1 leading-normal">
              Upload an image file (PNG, JPG, WebP up to 5MB).
            </p>
          </div>

          <div className="flex gap-4 my-4">
            <Input
              aria-label="Name"
              className="w-full"
              placeholder="Creator Name"
            />
            <Input
              aria-label="Name"
              className="w-full"
              placeholder="Creator Email"
            />
          </div>
          <Button fullWidth>
            <Plus />
            With Icon
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AllticketPage;
