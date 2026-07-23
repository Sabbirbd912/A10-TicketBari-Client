"use client";
import { Plus, Xmark } from "@gravity-ui/icons";
import { Card, Form, Button, Label, Checkbox, CheckboxGroup } from "@heroui/react";
import { useState } from "react";

const inputClassName =
  "w-full rounded-xl border border-slate-300 bg-white/80 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-zinc-900/70 dark:text-slate-100";

const AllTicketPage = () => {
  const [selectedAmenities, setSelectedAmenities] = useState(["ac", "food"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    departure: "",
    destination: "",
    transport: "",
    date: "",
    time: "",
    price: "",
    quantity: "",
    amenities: ["ac", "food"],
    creatorName: "",
    creatorEmail: "",
    image: null,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAmenitiesChange = (values) => {
    setSelectedAmenities(values);
    handleInputChange("amenities", values);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    handleInputChange("image", file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.departure || !formData.destination) {
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Form data:", formData);
      // Add your API call here
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      departure: "",
      destination: "",
      transport: "",
      date: "",
      time: "",
      price: "",
      quantity: "",
      amenities: [],
      creatorName: "",
      creatorEmail: "",
      image: null,
    });
    setSelectedAmenities([]);
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Add New Ticket
            </h1>
            <p className="text-sm text-default-500 mt-1">
              Create a new ticket listing for your transportation service
            </p>
          </div>
          <Button
            variant="flat"
            color="danger"
            startContent={<Xmark size={16} />}
            onPress={handleReset}
            className="w-full sm:w-auto"
          >
            Reset Form
          </Button>
        </div>

        <Card className="p-4 md:p-6 shadow-lg border border-default-100 dark:border-default-100 bg-content1 dark:bg-content1">
          <Form onSubmit={handleSubmit} className="space-y-6">
            {/* Ticket Name */}
            <div>
              <Label className="text-sm font-medium text-foreground block mb-1.5">
                Ticket Name <span className="text-danger">*</span>
              </Label>
              <input
                aria-label="Ticket Name"
                placeholder="Enter the ticket name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className={inputClassName}
              />
            </div>

            {/* Departure & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-foreground block mb-1.5">
                  Departure <span className="text-danger">*</span>
                </Label>
                <input
                  aria-label="Departure"
                  placeholder="Departure location"
                  value={formData.departure}
                  onChange={(e) => handleInputChange("departure", e.target.value)}
                  required
                  className={inputClassName}
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground block mb-1.5">
                  Destination <span className="text-danger">*</span>
                </Label>
                <input
                  aria-label="Destination"
                  placeholder="Destination location"
                  value={formData.destination}
                  onChange={(e) => handleInputChange("destination", e.target.value)}
                  required
                  className={inputClassName}
                />
              </div>
            </div>

            {/* Transport, Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <Label className="text-sm font-medium text-foreground block mb-1.5">
                  Transport <span className="text-danger">*</span>
                </Label>
                <select
                  aria-label="Transport"
                  value={formData.transport}
                  onChange={(e) => handleInputChange("transport", e.target.value)}
                  required
                  className={inputClassName}
                >
                  <option value="">Choose your transport</option>
                  <option value="bus">🚌 Bus</option>
                  <option value="train">🚆 Train</option>
                  <option value="airplane">✈️ Airplane</option>
                  <option value="launch">⛴️ Launch</option>
                </select>
              </div>

              <div>
                <Label className="text-sm font-medium text-foreground block mb-1.5">
                  Date <span className="text-danger">*</span>
                </Label>
                <input
                  aria-label="Date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  required
                  className={inputClassName}
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-foreground block mb-1.5">
                  Time <span className="text-danger">*</span>
                </Label>
                <input
                  aria-label="Time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  required
                  className={inputClassName}
                />
              </div>
            </div>

            {/* Price & Quantity */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-foreground block mb-1.5">
                  Price ($) <span className="text-danger">*</span>
                </Label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                    $
                  </span>
                  <input
                    aria-label="Price"
                    type="number"
                    placeholder="Enter ticket price"
                    value={formData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    required
                    className={`${inputClassName} pl-8`}
                  />
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground block mb-1.5">
                  Quantity <span className="text-danger">*</span>
                </Label>
                <input
                  aria-label="Quantity"
                  type="number"
                  placeholder="Available quantity"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange("quantity", e.target.value)}
                  required
                  className={inputClassName}
                />
              </div>
            </div>

            {/* Amenities */}
            <div>
              <Label className="text-sm font-medium text-foreground block mb-1.5">
                Amenities
              </Label>
              <CheckboxGroup
                value={selectedAmenities}
                onChange={handleAmenitiesChange}
                orientation="horizontal"
                className="flex flex-wrap gap-4"
              >
                <Checkbox value="ac">
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <span className="text-sm">❄️ AC</span>
                  </Checkbox.Content>
                </Checkbox>
                <Checkbox value="food">
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <span className="text-sm">🍽️ Food</span>
                  </Checkbox.Content>
                </Checkbox>
                <Checkbox value="wifi">
                  <Checkbox.Content>
                    <Checkbox.Control>
                      <Checkbox.Indicator />
                    </Checkbox.Control>
                    <span className="text-sm">📶 WiFi</span>
                  </Checkbox.Content>
                </Checkbox>
              </CheckboxGroup>
              {selectedAmenities.length > 0 && (
                <p className="text-xs text-default-500 mt-2">
                  Selected: {selectedAmenities.join(", ")}
                </p>
              )}
            </div>

            {/* Image Upload */}
            <div>
              <Label className="text-sm font-medium text-foreground block mb-1.5">
                Image <span className="text-danger">*</span>
              </Label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
                className={`${inputClassName} file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 dark:file:bg-primary/20 dark:file:text-primary-300 cursor-pointer`}
              />
              {formData.image && (
                <p className="text-xs text-success mt-1">
                  ✓ {formData.image.name} selected
                </p>
              )}
              <p className="text-xs text-default-400 mt-1">
                Upload an image file (PNG, JPG, WebP up to 5MB)
              </p>
            </div>

            {/* Creator Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium text-foreground block mb-1.5">
                  Creator Name <span className="text-danger">*</span>
                </Label>
                <input
                  aria-label="Creator Name"
                  placeholder="Enter creator name"
                  value={formData.creatorName}
                  onChange={(e) => handleInputChange("creatorName", e.target.value)}
                  required
                  className={inputClassName}
                />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground block mb-1.5">
                  Creator Email <span className="text-danger">*</span>
                </Label>
                <input
                  aria-label="Creator Email"
                  type="email"
                  placeholder="Enter creator email"
                  value={formData.creatorEmail}
                  onChange={(e) => handleInputChange("creatorEmail", e.target.value)}
                  required
                  className={inputClassName}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-default-200 dark:border-default-100">
              <Button
                type="submit"
                color="primary"
                className="flex-1"
                isLoading={isSubmitting}
                startContent={!isSubmitting && <Plus size={18} />}
              >
                {isSubmitting ? "Creating Ticket..." : "Create Ticket"}
              </Button>
              <Button
                type="button"
                variant="flat"
                className="flex-1"
                onPress={handleReset}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default AllTicketPage;