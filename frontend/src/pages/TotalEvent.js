import React, { useState } from 'react';
import '../assets/styles/TotleEvent.css';

const eventsData = [
    { id: 1, name: 'Tech Conference', discussion: 'Discussing the latest advancements in technology.', date: '2024-03-15', time: '9:00 AM' },
    { id: 2, name: 'Music Festival', discussion: 'A weekend of live music and fun.', date: '2024-06-20', time: '6:00 PM' },
    { id: 3, name: 'Art Exhibition', discussion: 'Showcasing contemporary art pieces.', date: '2024-09-10', time: '10:00 AM' },
    { id: 4, name: 'Business Summit', discussion: 'Networking with top business leaders.', date: '2024-11-05', time: '8:30 AM' },
    { id: 5, name: 'Coding Bootcamp', discussion: 'Hands-on coding experience with experts.', date: '2025-01-15', time: '10:00 AM' },
    { id: 6, name: 'Startup Pitch', discussion: 'Pitch your startup to investors.', date: '2025-02-10', time: '11:00 AM' },
    { id: 7, name: 'AI Workshop', discussion: 'Learn about AI and ML.', date: '2025-03-05', time: '1:00 PM' },
    { id: 8, name: 'Gaming Expo', discussion: 'Explore the latest games.', date: '2025-04-20', time: '4:00 PM' },
    { id: 9, name: 'Healthcare Summit', discussion: 'Innovations in healthcare.', date: '2025-05-15', time: '9:30 AM' },
    { id: 10, name: 'Cybersecurity Conference', discussion: 'Protecting digital assets.', date: '2025-06-25', time: '2:00 PM' },
];

const ITEMS_PER_PAGE = 6;

const EventPage = () => {
    const [events, setEvents] = useState(eventsData);
    const [editEvent, setEditEvent] = useState(null);
    const [formData, setFormData] = useState({ id: '', name: '', discussion: '', date: '', time: '' });
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination logic
    const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const displayedEvents = events.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    // Handle Delete Event
    const handleDelete = (id) => {
        setEvents(events.filter((event) => event.id !== id));
    };

    // Handle Open Edit Modal
    const handleEdit = (event) => {
        setEditEvent(event);
        setFormData(event);
    };

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Save Edit
    const handleSave = () => {
        setEvents(events.map(event => (event.id === formData.id ? formData : event)));
        setEditEvent(null);
    };

    return (
        <div className="event-page-container">
            <h1 style={{ textAlign: 'center' }}>Total Events</h1>
            
            <table className="event-table">
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Discussion</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedEvents.map((event) => (
                        <tr key={event.id}>
                            <td>{event.name}</td>
                            <td>{event.discussion}</td>
                            <td>{event.date}</td>
                            <td>{event.time}</td>
                            <td>
                                <button className="edit-btn" onClick={() => handleEdit(event)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(event.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <span> Page {currentPage} of {totalPages} </span>
                <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
            </div>

            {/* Edit Event Modal */}
            {editEvent && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Edit Event</h2>
                        <label>Event Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />

                        <label>Discussion</label>
                        <textarea name="discussion" value={formData.discussion} onChange={handleChange}></textarea>

                        <label>Event Date</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} />

                        <label>Event Time</label>
                        <input type="time" name="time" value={formData.time} onChange={handleChange} />

                        <div className="modal-buttons">
                            <button className="save-btn" onClick={handleSave}>Save</button>
                            <button className="close-btn" onClick={() => setEditEvent(null)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventPage;
