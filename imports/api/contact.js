import { Meteor } from 'meteor/meteor'
// import { Mongo } from 'meteor/mongo'

export const ContactCollection = new Mongo.Collection('contact',{
  _preventAutopublish:true
})

if (Meteor.isServer) {
  Meteor.publish('contacts', function () {
    return ContactCollection.find({})
  })
}
