// ClosedEventPage.js
import React from 'react';
import '../assets/styles/ClosedEventPage.css';

const ClosedEventPage = () => {
  const eventData = {
    basicInfo: {
      eventId: "evt-2025-001",
      title: "Tech Conference 2025",
      status: "closed",
      closingDate: "15-01-2025",
      endTime: "18:00",
      location: "Virtual Event",
      organizer: "Tech Events Inc.",
    },
    statistics: {
      totalRegistrations: 1500,
      actualAttendees: 1250,
      noShows: 250,
      satisfactionRate: 92,
      totalRevenue: 75000,
    },
    highlights: [
      { id: 1, title: "Keynote Speech", speaker: "Jane Smith", engagement: 95, duration: "60 mins", views: 1200 },
      { id: 2, title: "AI Workshop", speaker: "John Doe", engagement: 88, duration: "90 mins", views: 800 },
      { id: 3, title: "Panel Discussion", speaker: "Various Experts", engagement: 90, duration: "45 mins", views: 950 },
    ],
    feedback: [
      { id: 1, rating: 5, comment: "Excellent event! Very informative sessions.", attendee: "Mike Johnson", timestamp: "2025-01-15T17:30:00" },
      { id: 2, rating: 4, comment: "Great speakers, but technical issues were a bit distracting.", attendee: "Sarah Williams", timestamp: "2025-01-15T17:45:00" },
      { id: 3, rating: 5, comment: "Well organized and valuable content.", attendee: "David Chen", timestamp: "2025-01-15T18:00:00" },
    ],
  };

  const { basicInfo, statistics, highlights, feedback } = eventData;

  return (
    <div className="closed-event-container">
      <h1>Event Summary: {basicInfo.title}</h1>
      <section className="basic-info">
        <h2>Event Details</h2>
        <p>Date: {basicInfo.closingDate}</p>
        <p>Location: {basicInfo.location}</p>
        <p>Organizer: {basicInfo.organizer}</p>
      </section>
      <section className="statistics">
        <h2>Event Statistics</h2>
        <div className="stats-grid">
          <div className="stat-item"><h3>Total Registrations</h3><p>{statistics.totalRegistrations}</p></div>
          <div className="stat-item"><h3>Actual Attendees</h3><p>{statistics.actualAttendees}</p></div>
          <div className="stat-item"><h3>Satisfaction Rate</h3><p>{statistics.satisfactionRate}%</p></div>
        </div>
      </section>
      <section className="highlights">
        <h2>Event Highlights</h2>
        <div className="highlights-grid">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="highlight-card">
              <h3>{highlight.title}</h3>
              <p>Speaker: {highlight.speaker}</p>
              <p>Engagement: {highlight.engagement}%</p>
              <p>Views: {highlight.views}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="feedback">
        <h2>Attendee Feedback</h2>
        {feedback.map((item) => (
          <div key={item.id} className="feedback-card">
            <p>Rating: {"⭐".repeat(item.rating)}</p>
            <p>"{item.comment}"</p>
            <p>- {item.attendee}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ClosedEventPage;
