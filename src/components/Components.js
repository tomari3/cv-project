import { Component } from "react";

class FormDisplay extends Component {
  constructor(props) {
    super(props);
  }

  renderList(props) {}

  render() {
    return (
      <>
        <div className="form-display_row">
          <div className="form-display_row_header">
            <h1>{this.props.first}</h1>
            <h1>{this.props.last}</h1>
          </div>
          <div>
            <p>DOB: {this.props.dob}</p>
            <p>ID: {this.props.id}</p>
          </div>
          <div>
            <a
              href={`https://${this.props.email}`}
              target="_blank"
              rel="noreferrer"
            >
              {this.props.email}
            </a>
            <div>
              {this.props.links.map((link) => (
                <a key={link.id} href={`https://${link.value}`}>
                  {link.value}
                </a>
              ))}
              <p>{this.props.link}</p>
            </div>
          </div>
          <div>
            <p>{this.props.address}</p>
            <p>{this.props.phoneNumber}</p>
          </div>
        </div>
        <div className="form-display_row">
          <div className="form-display_row_header">
            <h2>work experience</h2>
          </div>
          <div className="form-display_row_works">
            {this.props.works.map((work) => (
              <div key={work.id} className="form-display_row_work">
                <div className="form-display_row_work-details">
                  <div className="form-display_row_work-details_titles">
                    <span>{work.title}</span>
                    <span>{work.company}</span>
                    <span>{work.location}</span>
                  </div>
                  <div className="form-display_row_work-details_dates">
                    <span>({work.startDate})</span>
                    <span>-</span>
                    <span>({work.endDate})</span>
                  </div>
                </div>
                <div>
                  <ul>
                    {work.bullets.map((bullet) => (
                      <li key={bullet.id}>{bullet.value}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="form-display_row">
          <div className="form-display_row_header">
            <h2>Miscellaneous Skills</h2>
          </div>
          <div className="form-display_row_categories">
            {this.props.categories.map((category) => (
              <div key={category.id} className="form-display_row_category">
                <h3>{category.title}</h3>

                {category.skills.map((skill, i) =>
                  i === category.skills.length - 1 ? (
                    <span key={skill.id}>{skill.value}</span>
                  ) : (
                    <span key={skill.id}>{skill.value}, </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export { FormDisplay };
