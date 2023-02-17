import { ValidatedMethod } from 'meteor/mdg:validated-method'
import SimpleSchema from 'simpl-schema'
import Customer from './customers'

export const insertCustomer1 = new ValidatedMethod({
  name: 'insertCustomer1',
  mixins: [],
  validate:
  // Customer.schema.validator(),
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
  }).validator(),
  run(doc) {
    if (!Meteor.isServer) return false

    try {

      // return Customer.insert(doc)
    } catch (error) {
      console.log('error', error)
      throw new Meteor.Error('Insert customer error', error)
    }
  },
})

Meteor.methods({
  findCustomers(selector) {
    if (!Meteor.isServer) return false
    selector = selector || {}

    return Customer.find(selector).fetch()
  },
  insertCustomer(doc) {
    // validate method
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
      console.log('doc', doc)
      // Comsert1.insert(doc)
      return Customer.insert(doc)
    } catch (error) {
      console.log('error', error)
      throw new Meteor.Error('Insert customer error', error)
    }
  },
  updateCustomer(doc) {
    // validate method
    // Customer.schema.validate(doc)
    new SimpleSchema({
      _id: String,
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
      console.log('doc', doc)
      return Customer.update({ _id: doc._id }, { $set: doc })
    } catch (error) {
      console.log('error', error)
      throw new Meteor.Error('Update customer error', error)
    }
  },
  removeCustomer(id) {
    // validate method
    // Customer.schema.validate(doc)
    // new SimpleSchema({
    //   id: String,
    // }).validate(id)

    if (!Meteor.isServer) return false

    try {
      return Customer.remove({ _id: id })
    } catch (error) {
      console.log('error', error)
      throw new Meteor.Error('Remove customer error', error)
    }
  },
})
