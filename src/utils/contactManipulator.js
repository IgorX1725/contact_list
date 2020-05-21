module.exports = {

    filterContacts(contacts, filterText){
        if(filterText){
          return contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filterText))
        }
        else{
          return contacts
        }
      },
    
      orderContacts(contacts,orderBy){
        if(orderBy){
          return contacts.sort((contact1, contact2) =>
            contact1[orderBy].localeCompare(contact2[orderBy]))
        }
        else{
            return contacts
        }
      }

}