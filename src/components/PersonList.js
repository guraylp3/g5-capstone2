import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://${process.env.REACT_APP_API_ID}.execute-api.us-west-2.amazonaws.com/tf_prod/get-person`)
      .then(res => {
        const persons = res.data.body;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <>
        {
          this.state.persons
            .map(person =>
              (<div key={person.id} className="card">
                <img className="image" alt="profile image" src={person.profile_picture} />
                <div className="name">{person.name}</div>
                <div className="initials">{person.initials}</div>
              </div>)
            )
        }
      </>
    )
  }
}