import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/styles/EventForm.css";

const EventForm = () => {
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    imageUrl: "",
  });
  const API_URL = process.env.Create_Event || "http://localhost:3800/api/events";
  //mongodb+srv://manishkumarverma091:manish12345@cluster0.s7mmn.mongodb.net/authtentication
  console.log(API_URL);
  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!eventData.name || !eventData.description || !eventData.date || !eventData.time || !eventData.imageUrl) {
      toast.error("All fields are required!", { position: "top-right" });
      return;
    }

    try {
      const response = await fetch(API_URL, {
      
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const result = await response.json();
      console.log("Event Created:", result);
      toast.success("Event created successfully!", { position: "top-right" });

      // Reset form
      setEventData({
        eventName: "",
        eventDescription: "",
        eventDate: "",
        eventTime: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("Error creating event:", error);
      toast.error("Failed to create event!", { position: "top-right" });
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="event-form" onSubmit={handleSubmit}>
        <h2>Create Event</h2>

        <label htmlFor="eventName">Event Name</label>
        <input
          type="text"
          id="eventName"
          name="name"
          value={eventData.name}
          onChange={handleChange}
          placeholder="Enter event name"
          required
        />

        <label htmlFor="eventDescription">Event Description</label>
        <textarea
          id="eventDescription"
          name="description"
          value={eventData.description}
          onChange={handleChange}
          rows="3"
          placeholder="Enter event description"
          required
        ></textarea>

        <label htmlFor="eventDate">Event Date</label>
        <input
          type="date"
          id="eventDate"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          required
        />

        <label htmlFor="eventTime">Event Time</label>
        <input
          type="time"
          id="eventTime"
          name="time"
          value={eventData.time}
          onChange={handleChange}
          required
        />

        <label htmlFor="eventImage">Event Image URL</label>
        <input
          type="url"
          id="eventImage"
          name="imageUrl"
          value={eventData.imageUrl}
          onChange={handleChange}
          placeholder="Enter image URL"
          required
        />

        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default EventForm;
