// import logo from "./logo.svg";
import "./App.css";
import uniqid from "uniqid";
import { Component } from "react";
import { FormDisplay } from "./components/Components";
class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      dob: "",
      address: "",
      id: "",
      links: [],
      link: {
        value: "",
        id: "",
      },

      works: [],
      work: {},
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      bullets: [],
      bullet: {
        value: "",
        id: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.addWork = this.addWork.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleListChange(event) {
    this.setState({
      [event.target.name]: {
        value: event.target.value,
        id: uniqid(),
      },
    });
  }

  addItem(event) {
    event.preventDefault();
    const item = event.target.name;
    const list = event.target.name + "s";
    if (this.state[list].length > 4 || !this.state[item].value) return;
    this.setState({
      [list]: [...this.state[list], this.state[item]],
    });
    this.setState({
      [item]: {
        value: "",
        id: "",
      },
    });
  }

  async addWork(event) {
    event.preventDefault();
    if (!this.state.title) return;
    await this.setState({
      work: {
        title: this.state.title,
        company: this.state.company,
        location: this.state.location,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        bullets: this.state.bullets,
        id: uniqid(),
      },
    });
    this.setState({
      works: [...this.state.works, this.state.work],
    });
    this.setState({
      work: {},
      title: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      bullets: [],
      id: "",
    });
    console.log(this.state.works);
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
                type="text"
                id="link"
                placeholder="any relevant link goes here"
                name="link"
                value={this.state.link.value}
                onChange={this.handleListChange}
              />

              <button name="link" onClick={this.addItem}>
                add link
              </button>
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
                value={this.state.bullet.value}
                onChange={this.handleListChange}
              ></textarea>

              <button name="bullet" onClick={this.addItem}>
                add bullet
              </button>

              <button onClick={this.addWork}>add work title</button>
            </div>

            <div className="forms_skills">
              <legend>Miscellaneous Skills</legend>

              <label htmlFor="category">category</label>
              <input
                type="text"
                id="category"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              />

              <label htmlFor="skills">skills</label>
              <textarea
                id="skills"
                placeholder="add one at a time. Or, many, using, commas."
                name="skill"
                value={this.state.skill}
                onChange={this.handleChange}
              ></textarea>

              <button>add skill</button>

              <button>add category</button>
            </div>
          </form>
        </div>
        <section className="form-display">
          <FormDisplay
            first={this.state.firstName || "first"}
            last={this.state.lastName || "last"}
            dob={this.state.dob || "dd/mm/yyyy"}
            id={this.state.id || "123456789"}
            email={this.state.email || "firstlast@email.com"}
            links={
              this.state.link.value.length === 0 &&
              this.state.links.length === 0
                ? [{ value: "www.example.com", id: "-1" }]
                : this.state.links
            }
            link={this.state.link.value}
            address={this.state.address || "123 Place blvd"}
            phoneNumber={this.state.phoneNumber || "054 1234567"}
            works={
              this.state.works.length === 0 || this.state.title
                ? [
                    ...this.state.works,
                    {
                      title: this.state.title || "title",
                      company: this.state.company || "company",
                      location: this.state.location || "location",
                      startDate: this.state.startDate || "start date",
                      endDate: this.state.endDate || "end date",
                      bullets:
                        this.state.bullets.length === 0
                          ? [
                              {
                                value: this.state.bullet.value
                                  ? this.state.bullet.value
                                  : "example",
                                id: "-1",
                              },
                            ]
                          : [
                              ...this.state.bullets,
                              { value: this.state.bullet.value, id: "-1" },
                            ],
                      id: "-1",
                    },
                  ]
                : this.state.works
            }
            category={this.state.category || "Languages"}
            skill={this.state.skill || "english"}
          />
        </section>
      </div>
    );
  }
}

export default App;
