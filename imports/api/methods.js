import { Meteor } from 'meteor/meteor'
import { ContactCollection } from './contact'

Meteor.methods({
  'contact.insert'({ name, email, imageUrl, called}) {
    console.log('called',called);
    if(called>1) return 0
    console.log(name, email, imageUrl)
    console.log('called', this.isSimulation)
    if (!name) {
      throw new Meteor.Error('Name is required')
    }
    Meteor.call('contact.update')
    return ContactCollection.insert({ name, email, imageUrl })
  },
  'contact.update'() {
    console.log('isSimulation', this.isSimulation)
    // ContactCollection.remove({_id:contactId})
  },
  'contact.remove'({ contactId }) {
    console.log(this.isSimulation)
    ContactCollection.remove({ _id: contactId })
  },
  a: function (x) {
    console.log('isSimulation a',this.isSimulation);
    // stub
    if (this.isSimulation) {
      console.log('isSimulation - A : ' + x)
      return 'Server A-stub : ' + x
      // Server side method
    } else {
      // When it is server, delay a while.
      for (let i = 0; i < 10000000; i++) {}
      return 'Server A : ' + x
    }
  },
  b: function (x) {
    console.log('isSimulation b',this.isSimulation);
    // stub
    if (this.isSimulation) {
      console.log('isSimulation - B : ' + x)
      return 'Server B-stub : ' + x
      // Server side method
    } else {
      // When it is server, delay a while.
      for (let i = 0; i < 10000000; i++) {}
      return 'Server B : ' + x
    }
  },
})
