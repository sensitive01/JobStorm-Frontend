import React from "react";
import "./AddressSection.css";

const AddressSection = ({ formState, handleInputChange }) => {
  return (
    <div className="section-card">
      <div className="section-header">
        <i className="uil uil-map-marker"></i>
        <h3>Address Details</h3>
      </div>

      <div className="section-content">
        <div className="form-grid">
          {/* Address Line 1 */}
          <div className="form-group form-group-full">
            <label htmlFor="addressLine1" className="form-label">
              Address Line 1
            </label>
            <input
              type="text"
              id="addressLine1"
              className="form-input"
              value={formState.addressLine1}
              onChange={handleInputChange}
              placeholder="Street address, P.O. box"
            />
          </div>

          {/* Address Line 2 */}
          <div className="form-group form-group-full">
            <label htmlFor="addressLine2" className="form-label">
              Address Line 2
            </label>
            <input
              type="text"
              id="addressLine2"
              className="form-input"
              value={formState.addressLine2}
              onChange={handleInputChange}
              placeholder="Apartment, suite, unit, building, floor"
            />
          </div>

          {/* City */}
          <div className="form-group">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              id="city"
              className="form-input"
              value={formState.city}
              onChange={handleInputChange}
              placeholder="City name"
            />
          </div>

          {/* State */}
          <div className="form-group">
            <label htmlFor="state" className="form-label">
              State / Province
            </label>
            <input
              type="text"
              id="state"
              className="form-input"
              value={formState.state}
              onChange={handleInputChange}
              placeholder="State or province"
            />
          </div>

          {/* Pincode */}
          <div className="form-group">
            <label htmlFor="pincode" className="form-label">
              Pincode / ZIP
            </label>
            <input
              type="text"
              id="pincode"
              className="form-input"
              value={formState.pincode}
              onChange={handleInputChange}
              placeholder="Postal code"
            />
          </div>

          {/* Current City */}
          <div className="form-group">
            <label htmlFor="currentCity" className="form-label">
              Current City
            </label>
            <input
              type="text"
              id="currentCity"
              className="form-input"
              value={formState.currentCity}
              onChange={handleInputChange}
              placeholder="e.g., Bangalore, Mumbai"
            />
          </div>

          {/* Preferred Location */}
          <div className="form-group form-group-full">
            <label htmlFor="preferredLocation" className="form-label">
              Preferred Work Location
            </label>
            <input
              type="text"
              id="preferredLocation"
              className="form-input"
              value={formState.preferredLocation}
              onChange={handleInputChange}
              placeholder="e.g., Bangalore, Remote, Willing to Relocate"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
