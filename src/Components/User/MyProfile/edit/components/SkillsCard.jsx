import React, { useState } from "react";
import "./SkillsCard.css";

const SkillsCard = ({ skills, setSkills }) => {
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
    <div className="skills-card">
      <div className="skills-header">
        <i className="uil uil-award"></i>
        <h4>Skills</h4>
      </div>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            <span>{skill}</span>
            <button
              type="button"
              className="skill-remove-btn"
              onClick={() => removeSkill(index)}
              aria-label="Remove skill"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="skill-input-group">
        <input
          type="text"
          className="skill-input"
          placeholder="Add a skill..."
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          type="button"
          className="skill-add-btn"
          onClick={addSkill}
          disabled={!skillInput.trim()}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SkillsCard;
