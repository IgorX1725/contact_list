import React from 'react';

import Topbar from './components/Topbar'
import Filters from './components/Filters'
import Contacts from './components/Contacts'
import Contact from './components/Contact'

import {filterContacts, orderContacts} from './utils/contactManipulator'

import featchAPI from './utils/featchAPI'

import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: null,
      orderBy: null,
      filterText: null
    }
    this.handdleChange = this.handdleChange.bind(this);
    this.handdleClick = this.handdleClick.bind(this);
  }

  componentDidMount() {
    featchAPI
    .then(data => this.setState({contacts: data}))
  }  

  handdleChange(event){
    this.setState({filterText : event.target.value})
  }

  handdleClick(event){
    this.setState({orderBy: event.target.name})
    }  

  runContacts(){
    if(this.state.contacts){
      const resultFilter = filterContacts(this.state.contacts,this.state.filterText)
      const resultOrder = orderContacts(resultFilter, this.state.orderBy)
      
      return resultOrder.map(contact => <Contact key={contact.id} data={contact}> </Contact>)
    }
  }
  
  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar></Topbar>
        <Filters
         searchChange={this.handdleChange}
         searchClick={this.handdleClick}
         orderBy = {this.state.orderBy}>
         </Filters>
        <Contacts>
          {
          this.runContacts()
          }
        </Contacts>
      </div>
    )
  }
}
export default App;