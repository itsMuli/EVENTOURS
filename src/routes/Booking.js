import React, { useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [destination, setDestination] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Selected Date:', format(selectedDate, 'dd/MM/yyyy'));
    console.log('Number of People:', numberOfPeople);
    console.log('Destination:', destination);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div className="form-group">
        <label>Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          className="date-picker"
        />
      </div>
      <div className="form-group">
        <label>Number of People:</label>
        <input
          type="number"
          value={numberOfPeople}
          onChange={handlePeopleChange}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label>Destination:</label>
        <input
          type="text"
          value={destination}
          onChange={handleDestinationChange}
          className="input-field"
        />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default Booking;
