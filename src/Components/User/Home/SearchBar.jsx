import React, { useState } from "react";

const SearchBar = () => {
  const [locationSearch, setLocationSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const locations = [
    "Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia, Plurinational State of",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, the Democratic Republic of the",
    "Cook Islands",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia, the former Yugoslav Republic of",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territory, Occupied",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Réunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan, Province of China",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela, Bolivarian Republic of",
    "Viet Nam",
    "Virgin Islands, British",
    "Virgin Islands, U.S.",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const categories = ["Accounting", "IT & Software", "Marketing", "Banking"];

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(locationSearch.toLowerCase())
  );

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(categorySearch.toLowerCase())
  );

  return (
    <div>
      <form action="#">
        <div className="registration-form">
          <div className="row g-0">
            <div className="col-lg-3">
              <div className="filter-search-form filter-border mt-3 mt-lg-0">
                <i className="uil uil-briefcase-alt" />
                <input
                  type="search"
                  id="job-title"
                  className="form-control filter-input-box"
                  placeholder="Job, Company name..."
                />
              </div>
            </div>

            <div className="col-lg-3">
              <div
                className="filter-search-form filter-border mt-3 mt-lg-0"
                style={{ position: "relative" }}
              >
                <i className="uil uil-map-marker" />
                <div
                  className="form-control filter-input-box"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                >
                  <span
                    style={{ color: selectedLocation ? "#495057" : "#6c757d" }}
                  >
                    {selectedLocation || "Location"}
                  </span>
                  <i
                    className="uil uil-angle-down"
                    style={{ fontSize: "18px" }}
                  />
                </div>

                {showLocationDropdown && (
                  <>
                    <div
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 998,
                      }}
                      onClick={() => setShowLocationDropdown(false)}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 10px)",
                        left: 0,
                        right: 0,
                        backgroundColor: "#fff",
                        border: "1px solid #e0e0e0",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        maxHeight: "300px",
                        overflowY: "auto",
                        zIndex: 999,
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Search location..."
                        style={{
                          width: "100%",
                          padding: "12px 15px",
                          border: "none",
                          borderBottom: "1px solid #e0e0e0",
                          outline: "none",
                          fontSize: "14px",
                          color: "#495057",
                        }}
                        value={locationSearch}
                        onChange={(e) => setLocationSearch(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      {filteredLocations.map((location, index) => (
                        <div
                          key={index}
                          style={{
                            padding: "12px 15px",
                            cursor: "pointer",
                            fontSize: "14px",
                            color: "#495057",
                            transition: "background-color 0.2s",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#f8f9fa")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "transparent")
                          }
                          onClick={() => {
                            setSelectedLocation(location);
                            setShowLocationDropdown(false);
                            setLocationSearch("");
                          }}
                        >
                          {location}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-3">
              <div
                className="filter-search-form filter-border mt-3 mt-lg-0"
                style={{ position: "relative" }}
              >
                <i className="uil uil-clipboard-notes" />
                <div
                  className="form-control filter-input-box"
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                >
                  <span
                    style={{ color: selectedCategory ? "#495057" : "#6c757d" }}
                  >
                    {selectedCategory || "Categories"}
                  </span>
                  <i
                    className="uil uil-angle-down"
                    style={{ fontSize: "18px" }}
                  />
                </div>

                {showCategoryDropdown && (
                  <>
                    <div
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 998,
                      }}
                      onClick={() => setShowCategoryDropdown(false)}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 10px)",
                        left: 0,
                        right: 0,
                        backgroundColor: "#fff",
                        border: "1px solid #e0e0e0",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        maxHeight: "300px",
                        overflowY: "auto",
                        zIndex: 999,
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Search category..."
                        style={{
                          width: "100%",
                          padding: "12px 15px",
                          border: "none",
                          borderBottom: "1px solid #e0e0e0",
                          outline: "none",
                          fontSize: "14px",
                          color: "#495057",
                        }}
                        value={categorySearch}
                        onChange={(e) => setCategorySearch(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      {filteredCategories.map((category, index) => (
                        <div
                          key={index}
                          style={{
                            padding: "12px 15px",
                            cursor: "pointer",
                            fontSize: "14px",
                            color: "#495057",
                            transition: "background-color 0.2s",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#f8f9fa")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "transparent")
                          }
                          onClick={() => {
                            setSelectedCategory(category);
                            setShowCategoryDropdown(false);
                            setCategorySearch("");
                          }}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-3">
              <div className="mt-3 mt-lg-0 h-100">
                <button
                  className="btn btn-primary submit-btn w-100 h-100"
                  type="submit"
                >
                  <i className="uil uil-search me-1" /> Find Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
