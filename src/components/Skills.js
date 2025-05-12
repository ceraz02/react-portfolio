import React, { Component } from "react";

class Skills extends Component {
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var categories = this.props.sharedSkills.categories.map(function (category, i) {
        var skills = category.icons.map(function (skill, j) {
          return (
            <li className="list-inline-item mx-3" key={j}>
              <span>
                <div className="text-center skills-tile">
                  {/* <i className={skill.class} style={{ fontSize: "220%" }}></i> */}
                  <p
                    className="text-center"
                    style={{ fontSize: "90%", marginTop: "4px" }}
                  >
                    {skill.name}
                  </p>
                </div>
              </span>
            </li>
          );
        });

        return (
          <div key={i} className="category-section">
            <h3 className="category-title text-white">{category.category}</h3>
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">{categories}</div>
        </div>
      </section>
    );
  }
}

export default Skills;
