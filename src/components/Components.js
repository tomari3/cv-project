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
            <p>{this.props.email}</p>
            <div>
              {this.props.links.map((link) => (
                <p key={link.id}>{link.value}</p>
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
                    <span>{work.startDate}</span>
                    <span>-</span>
                    <span>{work.endDate}</span>
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
          <div className="form-display_row_skill-category">
            <h3>{this.props.category}</h3>
            <ul>
              <li>{this.props.skill}</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export { FormDisplay };
