import { ValidatedMethod } from 'meteor/mdg:validated-method'
import SimpleSchema from 'simpl-schema'
import Customer from './customers'

export const insertCustomer = new ValidatedMethod({
  name: 'insertCustomer',
  mixins: [],
  validate: Customer.schema.validator(),

  run(doc) {
    if (!Meteor.isServer) return false

    try {
      console.log('doc',doc);
      // return Customer.insert(doc)
    } catch (error) {
      console.log('error',error);
      throw new Meteor.Error('Insert customer error', error)
    }
  },
})

Meteor.methods({
  insertCustomer1(doc){
    // validate metehod
    // Customer.schema.validate(doc)
    new SimpleSchema({
    name: String,
    telephone: {
      type: String,
      optional: true,
    },
    address: {
      type: String,
      optional: true,
    },
    status: String,
  }).validate(doc)

    if (!Meteor.isServer) return false

    try {
      console.log('doc',doc);
      return Customer.insert(doc)
    } catch (error) {
      console.log('error',error);
      throw new Meteor.Error('Insert customer error', error)
    }
  }
})