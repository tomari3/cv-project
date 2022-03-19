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
            {/* <p>{this.props.zipCode}</p> */}
            <p>{this.props.phoneNumber}</p>
          </div>
        </div>
        <div className="form-display_row">
          <div className="form-display_row_header">
            <h2>work experience</h2>
          </div>
          <div className="form-display_row_work-details">
            <div className="form-display_row_work-details_titles">
              <span>{this.props.title}</span>
              <span>{this.props.company}</span>
              <span>{this.props.location}</span>
            </div>
            <div className="form-display_row_work-details_dates">
              <span>{this.props.startDate}</span>
              <span>-</span>
              <span>{this.props.endDate}</span>
            </div>
          </div>
          <div>
            <ul>
              <li>{this.props.bullet}</li>
            </ul>
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
