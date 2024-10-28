"use client"
import React, { useState, useRef } from 'react';
import { Calendar } from 'lucide-react';

const AddPatientForm = () => {
  const [formData, setFormData] = useState({
    recordNumber: '',
    firstname: '',
    surname: '',
    dateOfBirth: '',
    sex: '',
    diagnosis: '',
    notes: '',
    phoneNumber: ''
  });

  // Ref for the date input element
  const dateInputRef = useRef(null);

  const handleDateClick = () => {
    // Trigger focus on the date input
    dateInputRef.current.showPicker();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <p className="text-gray-500 font-semibold">Patient register &gt; Add patient</p>
      <br />
      {/* Title Section with Buttons */}
      <div className="flex flex-col md:flex-row justify-between align-middle items-center mb-6 mx-4 md:mx-8 bg-white p-2 rounded shadow-md">
        <div>
          <h2 className="text-xl font-bold ml-2">Add New Patient</h2> {/* Added ml-2 for margin-left */}
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <button className="px-4 py-2 border border-[#26208b] rounded text-[#26208b] hover:bg-gray-200">
            Cancel
          </button>
          <button className="px-4 py-2 bg-[#26208b] text-white rounded hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex justify-center">
        <div className="w-full max-w-3xl bg-white p-4 md:p-8 rounded shadow-md" style={{ maxHeight: '600px', overflowY: 'auto' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Record Number Field */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <label className="text-gray-600">Record number</label>
              <div className="md:col-span-2">
                <p className="text-gray-600 mb-2">
                  Record number will be assigned automatically when you save.
                </p>
                <button type="button" className="px-3 py-1 border border-gray-300 rounded text-gray-900 text-bold">
                  Assign manually
                </button>
              </div>
            </div>

            {/* Firstname Field */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <label className="text-gray-600">Forename</label>
              <input
                type="text"
                name="firstname"
                className="w-full p-2 border border-gray-300 rounded md:col-span-2"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>

            {/* Surname Field */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <label className="text-gray-600">Surname</label>
              <input
                type="text"
                name="surname"
                className="w-full p-2 border border-gray-300 rounded md:col-span-2"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>

            {/* Date of Birth Field with Calendar Icon */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <label className="text-gray-600">Date of birth</label>
              <div className="flex items-center space-x-2 md:col-span-2">
                <button
                  type="button"
                  className="p-2 bg-gray-200 rounded"
                  onClick={handleDateClick}
                >
                  <Calendar className="h-5 w-5 text-gray-500" />
                </button>
                <input
                  type="date"
                  ref={dateInputRef} // Attach ref here
                  name="dateOfBirth"
                  className="w-full p-2 border border-gray-300 rounded custom-date-input"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Sex Field */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <label className="text-gray-600">Sex</label>
              <div className="flex space-x-4 md:col-span-2">
                <button
                  type="button"
                  className={`px-4 py-2 border rounded ${formData.sex === 'Male' ? 'bg-[#26208b] text-white' : 'bg-gray-300 text-gray-800'}`}
                  onClick={() => setFormData({ ...formData, sex: 'Male' })}
                >
                  Male
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 border rounded ${formData.sex === 'Female' ? 'bg-[#26208b] text-white' : 'bg-gray-300 text-gray-800'}`}
                  onClick={() => setFormData({ ...formData, sex: 'Female' })}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Diagnosis Field */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <label className="text-gray-600">Diagnosis</label>
              <input
                type="text"
                name="diagnosis"
                className="w-full p-2 border border-gray-300 rounded md:col-span-2"
                value={formData.diagnosis}
                onChange={handleChange}
              />
            </div>

            {/* Notes Field */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <label className="text-gray-600">Notes</label>
              <textarea
                name="notes"
                className="w-full p-2 border border-gray-300 rounded md:col-span-2"
                rows="4"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Phone Number Field */}
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
              <label className="text-gray-600">Phone number</label>
              <input
                type="text"
                name="phoneNumber"
                className="w-full p-2 border border-gray-300 rounded md:col-span-2"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPatientForm;
