import { Mongo }  from "meteor/mongo";
import SimpleSchema from "simpl-schema";

const Customers = new Mongo.Collection('customers')

Customers.schema = new SimpleSchema({
  name:String,
  telephone:{
    type:String,
    optional:true,
  },
  address:{
    type:String,
    optional:true,
  },
  status:String
})

Customers.attachSchema(Customers.schema)

export default Customers