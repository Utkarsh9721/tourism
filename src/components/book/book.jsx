import React, { useState, useEffect } from "react";
import axios from "axios";
import "./book.css";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    vehicle: "",
    guide: "none",
    accommodation: "",
    date: "",
    travelers: 1,
    duration: 1,
    phone: "",
    specialRequests: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [bookingId, setBookingId] = useState("");
  const [error, setError] = useState("");

  // For Vite - get API URL from environment or use default
  const API_URL = import.meta.env?.VITE_API_URL || "http://localhost:5000/api";

  // Basic form submission without API call for testing
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Generate booking ID
    const newBookingId = `IND${Date.now().toString().slice(-6)}`;
    setBookingId(newBookingId);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowConfirmation(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      city: "",
      vehicle: "",
      guide: "none",
      accommodation: "",
      date: "",
      travelers: 1,
      duration: 1,
      phone: "",
      specialRequests: ""
    });
    setShowConfirmation(false);
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  if (showConfirmation) {
    return (
      <div className="book-container">
        <div className="book-card">
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <h1 style={{ color: 'green' }}>✅ Booking Submitted!</h1>
            <p>Booking ID: <strong>{bookingId}</strong></p>
            <p>We'll contact you within 24 hours.</p>
            <button 
              onClick={resetForm}
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                marginTop: '20px',
                cursor: 'pointer'
              }}
            >
              Book Another Trip
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="book-container">
      <div className="book-card">
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Book Your Adventure
        </h1>
        
        {/* Simple Step Indicator */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginBottom: '30px'
        }}>
          {[1, 2, 3, 4].map(step => (
            <div key={step} style={{ textAlign: 'center' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: currentStep >= step ? '#007bff' : '#ddd',
                color: currentStep >= step ? 'white' : '#666',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 10px',
                fontWeight: 'bold'
              }}>
                {step}
              </div>
              <div style={{ fontSize: '12px' }}>
                {step === 1 && 'Personal'}
                {step === 2 && 'Trip'}
                {step === 3 && 'Add-ons'}
                {step === 4 && 'Review'}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1 */}
          {currentStep === 1 && (
            <div>
              <h2>Personal Information</h2>
              <div style={{ marginBottom: '15px' }}>
                <label>Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginTop: '5px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label>Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginTop: '5px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                  required
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label>Phone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginTop: '5px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <div>
              <h2>Trip Details</h2>
              <div style={{ marginBottom: '15px' }}>
                <label>Destination City *</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginTop: '5px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                  required
                >
                  <option value="">Select city</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Goa">Goa</option>
                </select>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label>Travel Date *</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginTop: '5px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                  required
                />
              </div>
            </div>
          )}

          {/* Step 3 */}
          {currentStep === 3 && (
            <div>
              <h2>Add-ons</h2>
              <div style={{ marginBottom: '15px' }}>
                <label>Vehicle Type</label>
                <select
                  value={formData.vehicle}
                  onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginTop: '5px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                >
                  <option value="">Select vehicle</option>
                  <option value="car">Car</option>
                  <option value="suv">SUV</option>
                  <option value="bus">Bus</option>
                </select>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label>Special Requests (Optional)</label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginTop: '5px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    minHeight: '100px'
                  }}
                />
              </div>
            </div>
          )}

          {/* Step 4 */}
          {currentStep === 4 && (
            <div>
              <h2>Review & Submit</h2>
              <div style={{
                backgroundColor: '#f5f5f5',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
              }}>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Destination:</strong> {formData.city}</p>
                <p><strong>Date:</strong> {formData.date}</p>
                {formData.specialRequests && (
                  <p><strong>Special Requests:</strong> {formData.specialRequests}</p>
                )}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '30px'
          }}>
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              style={{
                padding: '10px 20px',
                backgroundColor: currentStep === 1 ? '#ddd' : '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: currentStep === 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Previous
            </button>
            
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: '10px 20px',
                  backgroundColor: isSubmitting ? '#6c757d' : '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;