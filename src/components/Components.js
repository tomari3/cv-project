import { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        dob: "",
        address: "",
        id: "",
        links: [],
      },
    };
  }

  render() {
    return (
      <div>
        <legend>General</legend>
        <label htmlFor="firstName">first Name</label>
        <input type="text" id="firstName" />

        <label htmlFor="lastName">last Name</label>
        <input type="text" id="lastName" />

        <label htmlFor="email">email</label>
        <input type="email" id="email" />

        <label htmlFor="phoneNumber">Phone number</label>
        <input type="number" id="phoneNumber" />

        <label htmlFor="DOB">date of birth</label>
        <input type="date" id="DOB" />

        <label htmlFor="address">address</label>
        <input type="address" id="address" />

        <label htmlFor="id">id</label>
        <input type="number" id="id" />

        <label htmlFor="link">link</label>
        <input type="url" id="link" placeholder="any relevant link goes here" />

        <button>add link</button>
      </div>
    );
  }
}

class WorkExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <legend>Work Experience</legend>

        <label htmlFor="title">title</label>
        <input type="text" id="title" />

        <label htmlFor="location">location</label>
        <input type="address" id="location" />

        <label htmlFor="startDate">start date</label>
        <input type="date" id="startDate" />

        <label htmlFor="endDate">end date</label>
        <input type="date" id="endDate" />

        <label htmlFor="description">description</label>
        <textarea
          id="description"
          placeholder="describe an aspect of your work in a bullet point"
        ></textarea>

        <button>add bullet</button>

        <button>add work title</button>
      </div>
    );
  }
}

class Skills extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <General></General>
        <WorkExperience></WorkExperience>
        <Skills></Skills>
      </form>
    );
  }
}

export { Form };
