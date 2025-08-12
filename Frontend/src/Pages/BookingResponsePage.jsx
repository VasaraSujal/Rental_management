// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';

import React, { useState } from "react";
import axios from "axios";

function BookingResponse() {
  const [bookingId, setBookingId] = useState("");
  const [action, setAction] = useState("confirm");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axios.post("http://localhost:5500/api/response", {
        bookingId,
        action,
      });

      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };
  console.log('Booking response:', { bookingId, action, response, error });

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Respond to Booking</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>
            Booking ID:
            <input
              type="text"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              required
              style={{ width: "100%", padding: 8, marginTop: 4 }}
              placeholder="Enter booking ID"
            />
          </label>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>
            Action:
            <select
              value={action}
              onChange={(e) => setAction(e.target.value)}
              style={{ width: "100%", padding: 8, marginTop: 4 }}
            >
              <option value="confirm">Confirm</option>
              <option value="reject">Reject</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>

      {response && (
        <div
          style={{
            marginTop: 20,
            padding: 15,
            backgroundColor: "#e0ffe0",
            borderRadius: 4,
          }}
        >
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div
          style={{
            marginTop: 20,
            padding: 15,
            backgroundColor: "#ffe0e0",
            borderRadius: 4,
            color: "#900",
          }}
        >
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
}

export default BookingResponse;
