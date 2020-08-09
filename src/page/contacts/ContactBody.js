import React, {Component} from "react";
import axios from 'axios';
import {BASE_URL} from '../../constants';

const Warning = () => (
  <span role="alert" className="wpcf7-not-valid-tip">Please fill in the required field.</span>
);

class ContactBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processing: false,
      done: false,
      name: '',
      nameWarning: false,
      email: '',
      emailWarning: false,
      subject: '',
      subjectWarning: false,
      message: '',
      messageWarning: false,
    }
  }

  onChangeName = (event) => {
    this.setState({name: event.target.value});
  };

  onChangeEmail = (event) => {
    this.setState({email: event.target.value});
  };

  onChangeSubject = (event) => {
    this.setState({subject: event.target.value});
  };

  onChangeMessage = (event) => {
    this.setState({message: event.target.value});
  };

  validateData = () => {
    let nameWarning, emailWarning, subjectWarning, messageWarning = false;
    const {name, email, subject, message} = this.state;
    name ? nameWarning = false : nameWarning = true;
    email ? emailWarning = false : emailWarning = true;
    subject ? subjectWarning = false : subjectWarning = true;
    message ? messageWarning = false : messageWarning = true;
    this.setState({nameWarning, emailWarning, subjectWarning, messageWarning});
    return !nameWarning && !emailWarning && !subjectWarning && !messageWarning;
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const validator = this.validateData();
    if (validator) {
      const {name, email, subject, message} = this.state;
      this.setState({processing: true});
      axios.post(`${BASE_URL}contact/`, {name, email, subject, message}).then(() => {
          this.setState({name: '', email: '', subject: '', message: '', processing: false, done: true});
          setTimeout(() => {
            this.setState({done: false});
          }, 2000);
        }
      ).catch(()=> {
        this.setState({processing: false});
      })
    }
  };


  render() {
    const {
      processing, done, name, nameWarning, email, emailWarning, subject, subjectWarning, message, messageWarning
    } = this.state;
    return (
      <div className="col s12 m12 l8 ">
        <main className="qw-content qw-relative z-depth-1" id="qwSingleContainer">
          <div className="paper qw-padded ">
            <div className="qw-thecontent">
              <h1 className="qw-content-title grey-text">Contacts</h1>
              <hr className="qw-separator triangle right small"/>
              <div role="form" className="wpcf7" dir="ltr" lang="en-US">
                <div className="screen-reader-response"/>
                <form onSubmit={this.onSubmitForm}>
                  <p>Your Name (required)<br/>
                    <span className="wpcf7-form-control-wrap your-name">
                    <input type="text" size="40" aria-required="true" aria-invalid="false" value={name}
                           onChange={this.onChangeName}/>
                      {nameWarning ? <Warning/> : <></>}
                    </span>
                  </p>
                  <p>Your Email (required)<br/>
                    <span className="wpcf7-form-control-wrap your-email">
                    <input type="email" name="your-email" size="40" aria-required="true" aria-invalid="false"
                           value={email} onChange={this.onChangeEmail}/>
                      {emailWarning ? <Warning/> : <></>}
                  </span>
                  </p>
                  <p>Subject (required)<br/>
                    <span className="wpcf7-form-control-wrap your-subject">
                    <input type="text" name="your-subject" size="40" aria-required="true" aria-invalid="false"
                           value={subject} onChange={this.onChangeSubject}/>
                      {subjectWarning ? <Warning/> : <></>}
                    </span>
                  </p>
                  <p>Your Message (required)<br/>
                    <span className="wpcf7-form-control-wrap your-message">
                      <textarea name="your-message" cols="40" rows="10" aria-required="true" aria-invalid="false"
                                value={message} onChange={this.onChangeMessage}/>
                      {messageWarning ? <Warning/> : <></>}
                    </span>
                  </p>
                  <p>
                    <button type='submit'>Send</button>
                    {processing ?
                      <img className="ajax-loader" src={require('../../resources/contactform/ajax-loader.gif')}
                           alt="sending.."/> : <></>
                    }
                    {done ? <span style={{color: '#ff5252', marginLeft: '10px'}}>Done!</span> : <></>}
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="canc"/>
        </main>
      </div>
    )
  }
}

export default ContactBody;
