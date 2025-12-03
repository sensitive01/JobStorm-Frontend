import React, { useState } from "react";
import "./SkillsSection.css";

const SkillsSection = ({ skills, setSkills }) => {
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="section-card">
      <div className="section-header">
        <i className="uil uil-award"></i>
        <h3>Skills</h3>
      </div>

      <div className="section-content">
        {/* Skills List */}
        {skills.length > 0 && (
          <div className="skills-display-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-display-tag">
                <span>{skill}</span>
                <button
                  type="button"
                  className="skill-display-remove-btn"
                  onClick={() => removeSkill(index)}
                  aria-label="Remove skill"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Add Skill Input */}
        <div className="skill-add-container">
          <input
            type="text"
            className="skill-add-input"
            placeholder="Add a skill (e.g., React, Node.js, Python)"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            type="button"
            className="skill-add-button"
            onClick={addSkill}
            disabled={!skillInput.trim()}
          >
            <i className="uil uil-plus"></i> Add Skill
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;