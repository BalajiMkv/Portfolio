import React from "react";
import "./Qualifications.css";

const Qualifications = () => {
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Personal Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button qualification_active button--flex">
            <i className="uil uil-graduation-cap qualification_icon">
              Education
            </i>
          </div>

          <div className="qualification_button button--flex">
            <i className="uil uil-graduation-cap qualification_icon">
              Experience
            </i>
          </div>
        </div>

        <div className="qualification_sections">
          <div className="qualification_content">
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Designer</h3>
                <span className="qualification_subtitle"></span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt">2021 - present</i>
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Spain -Institute</h3>
                <span className="qualification_subtitle"></span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt">2021 - present</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
