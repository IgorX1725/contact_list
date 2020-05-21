import React from 'react';
import Moment from "moment";

class Contact extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      contactdata: props.data
    }
    Moment.locale('en');
  }

  render() {
    const {avatar,name,phone,country,admissionDate,company,department} = this.state.contactdata
    return (
      <article className="contact" data-testid="contact">
        <span className="contact__avatar">
          <img src={avatar} alt="avatar"/>
        </span>
        <span className="contact__data" data-testid="contact-name">{name}</span>
        <span className="contact__data" data-testid="contact-phone">{phone}</span>
        <span className="contact__data" data-testid="contact-country">{country}</span>
        <span className="contact__data" data-testid="contact-date">{Moment(admissionDate).format('DD/MM/Y')}</span>
        <span className="contact__data" data-testid="contact-company">{company}</span>
        <span className="contact__data" data-testid="contact-department">{department}</span>
      </article>);
  }
}

export default Contact;