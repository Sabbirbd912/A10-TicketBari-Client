"use client";

import React from "react";
import Swal from "sweetalert2";

const UpdateTicketModal = ({ isOpen, onClose, ticket, onSuccess }) => {
  // মডাল যদি খোলা না থাকে (isOpen == false), তবে কিছুই রেন্ডার হবে না
  if (!isOpen) return null;

  // ব্যাকএন্ডে আপডেট পাঠানোর হ্যান্ডলার
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedData = {
      ticket_title: formData.get("ticket_title"),
      from_location: formData.get("from_location"),
      to_location: formData.get("to_location"),
      transport_type: formData.get("transport_type"),
      price: Number(formData.get("price")),
      ticket_quantity: Number(formData.get("ticket_quantity")),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/updateticket/${ticket._id}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0 || data.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Ticket Updated Successfully!",
          timer: 1200,
          showConfirmButton: false,
        });
        onClose(); // মডালটি বন্ধ হবে
        if (onSuccess) onSuccess(); // UI রিফ্রেশ করার জন্য প্যারেন্টকে জানাবে
      }
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-lg p-6 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-fade-in-up">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
            Update Ticket Details
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold text-sm cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
              Ticket Title
            </label>
            <input
              type="text"
              name="ticket_title"
              defaultValue={ticket?.ticket_title}
              required
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 focus:outline-emerald-500"
            />
          </div>

          {/* From & To */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                From Location
              </label>
              <input
                type="text"
                name="from_location"
                defaultValue={ticket?.from_location}
                required
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                To Location
              </label>
              <input
                type="text"
                name="to_location"
                defaultValue={ticket?.to_location}
                required
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100"
              />
            </div>
          </div>

          {/* Transport, Price, Quantity */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                Transport
              </label>
              <select
                name="transport_type"
                defaultValue={ticket?.transport_type}
                className="w-full px-2 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100"
              >
                <option value="Bus">Bus</option>
                <option value="Train">Train</option>
                <option value="Flight">Flight</option>
                <option value="Ferry">Ferry</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                Price ($)
              </label>
              <input
                type="number"
                name="price"
                defaultValue={ticket?.price}
                required
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                Quantity
              </label>
              <input
                type="number"
                name="ticket_quantity"
                defaultValue={ticket?.ticket_quantity}
                required
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTicketModal;