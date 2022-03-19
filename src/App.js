// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { FormDisplay } from "./components/Components";
class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      dob: "",
      id: "",
      email: "",
      link1: "",
      link2: "",
      link3: "",
      address: "",
      zipCode: "",
      phoneNumber: "",
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      bullet: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="App_forms">
          <form>
            <div className="forms_general">
              <legend>General</legend>
              <label htmlFor="firstName">first Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />

              <label htmlFor="lastName">last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />

              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />

              <label htmlFor="phoneNumber">Phone number</label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />

              <label htmlFor="DOB">date of birth</label>
              <input
                type="date"
                id="DOB"
                name="dob"
                value={this.state.dob}
                onChange={this.handleChange}
              />

              <label htmlFor="address">address</label>
              <input
                type="address"
                id="address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />

              <label htmlFor="id">id</label>
              <input
                type="number"
                id="id"
                name="id"
                value={this.state.id}
                onChange={this.handleChange}
              />

              <label htmlFor="link">link</label>
              <input
                type="url"
                id="link"
                placeholder="any relevant link goes here"
                name="link1"
                value={this.state.link1}
                onChange={this.handleChange}
              />

              <button>add link</button>
            </div>

            <div className="forms_work">
              <legend>Work Experience</legend>

              <label htmlFor="title">title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />

              <label htmlFor="company">company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={this.state.company}
                onChange={this.handleChange}
              />

              <label htmlFor="location">location</label>
              <input
                type="address"
                id="location"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              />

              <label htmlFor="startDate">start date</label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={this.state.startDate}
                onChange={this.handleChange}
              />

              <label htmlFor="endDate">end date</label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={this.state.endDate}
                onChange={this.handleChange}
              />

              <label htmlFor="description">description</label>
              <textarea
                id="description"
                placeholder="describe an aspect of your work in a bullet point"
                name="bullet"
                value={this.state.bullet}
                onChange={this.handleChange}
              ></textarea>

              <button>add bullet</button>

              <button>add work title</button>
            </div>

            <div className="forms_skills">
              <legend>Miscellaneous Skills</legend>

              <label htmlFor="category">category</label>
              <input type="text" id="category" />

              <label htmlFor="skills">skills</label>
              <textarea
                id="skills"
                placeholder="add one at a time. Or, many, using, commas."
              ></textarea>

              <button>add skill</button>

              <button>add category</button>
            </div>
          </form>
        </div>
        <section className="form-display">
          <FormDisplay
            first={this.state.firstName}
            last={this.state.lastName}
            dob={this.state.dob}
            id={this.state.id}
            email={this.state.email}
            link1={this.state.link1}
            link2={this.state.link2}
            link3={this.state.link3}
            address={this.state.address}
            zipCode={this.state.zipCode}
            phoneNumber={this.state.phoneNumber}
            title={this.state.title}
            company={this.state.company}
            location={this.state.location}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            bullet={this.state.bullet}
          />
        </section>
      </div>
    );
  }
}

export default App;
