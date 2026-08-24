import React, { useState } from "react";
import "./Verify.css";

const certificates = {
  "DS-2024-001": {
    name: "Ayesha Khan",
    course: "Graphic Designing",
    issueDate: "March 12, 2024",
  },
  "DS-2024-002": {
    name: "Bilal Ahmed",
    course: "Full Stack Web Development (Laravel)",
    issueDate: "April 3, 2024",
  },
  "DS-2024-003": {
    name: "Sara Malik",
    course: "UI/UX Design",
    issueDate: "May 18, 2024",
  },
};

export default function Verify() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("idle");

  const handleVerify = () => {
    const query = inputValue.trim().toUpperCase();

    if (!query) {
      setStatus("empty");
      setResult(null);
      return;
    }

    const match = certificates[query];

    if (match) {
      setResult({ id: query, ...match });
      setStatus("valid");
    } else {
      setResult(null);
      setStatus("invalid");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleVerify();
    }
  };

  return (
    <div className="verify-wrapper">
      <h2 className="verify-heading">Verify Certificate</h2>
      <p className="verify-subtext">
        Protecting the integrity of DeepSkills credentials. Enter the
        certificate number below to verify its authenticity.
      </p>

      <div className="verify-searchbar">
        <input
          type="text"
          className="verify-input"
          placeholder="Enter Certificate No (e.g. DS-2024-001)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="verify-btn" onClick={handleVerify}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ffffff" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          Verify
        </button>
      </div>

      {status === "empty" && (
        <div className="verify-result verify-result-warning">
          Please enter a certificate number to verify.
        </div>
      )}

      {status === "invalid" && (
        <div className="verify-result verify-result-invalid">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#e05a5a" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M15 9l-6 6M9 9l6 6" />
          </svg>
          <span>
            No certificate found for <strong>{inputValue.trim().toUpperCase()}</strong>.
            Please check the number and try again.
          </span>
        </div>
      )}

      {status === "valid" && result && (
        <div className="verify-result verify-result-valid">
          <div className="verify-result-header">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#4ade80" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <span>Certificate Verified</span>
          </div>
          <div className="verify-result-details">
            <div className="verify-result-row">
              <span className="verify-result-label">Certificate No</span>
              <span className="verify-result-value">{result.id}</span>
            </div>
            <div className="verify-result-row">
              <span className="verify-result-label">Name</span>
              <span className="verify-result-value">{result.name}</span>
            </div>
            <div className="verify-result-row">
              <span className="verify-result-label">Course</span>
              <span className="verify-result-value">{result.course}</span>
            </div>
            <div className="verify-result-row">
              <span className="verify-result-label">Issue Date</span>
              <span className="verify-result-value">{result.issueDate}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}