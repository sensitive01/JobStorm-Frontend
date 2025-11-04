import React, { useState } from "react";
import { bookDemoShedule } from "../../../api/service/axiosService";
import { toast } from "react-toastify";

const BookDemoModal = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({
    schoolName: "",
    location: "",
    contactPerson: "",
    contactNumber: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const response = await bookDemoShedule(formData);
    if (response.status === 201) {
      toast.success(response.data.message);
      setFormData({
        schoolName: "",
        location: "",
        contactPerson: "",
        contactNumber: "",
        email: "",
      });
      setShowModal(false);
    } else {
      toast.error(response.response.data.message);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1040 }}
        onClick={handleClose}
      ></div>

      {/* Side Panel */}
      <div
        className="position-fixed top-0 end-0 bg-white shadow-lg"
        style={{
          width: "400px",
          height: "100vh",
          zIndex: 1050,
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div className="bg-primary text-white p-4 d-flex justify-content-between align-items-center">
          <h4 className="mb-0">Book a Demo</h4>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={handleClose}
            aria-label="Close"
          ></button>
        </div>

        {/* Body */}
        <div className="p-4">
          <p className="text-muted mb-4">
            Fill in your details and we'll get back to you shortly to schedule a
            personalized demo.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="schoolName" className="form-label">
                Company Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="schoolName"
                name="schoolName"
                placeholder="Enter Company Name"
                value={formData.schoolName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                placeholder="Enter location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contactPerson" className="form-label">
                Contact Person <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="contactPerson"
                name="contactPerson"
                placeholder="Enter contact person name"
                value={formData.contactPerson}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contactNumber" className="form-label">
                Contact Number <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                className="form-control"
                id="contactNumber"
                name="contactNumber"
                placeholder="Enter 10-digit mobile number"
                value={formData.contactNumber}
                onChange={handleInputChange}
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email ID <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookDemoModal;
