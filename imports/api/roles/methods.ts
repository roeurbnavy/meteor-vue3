import { Meteor } from 'meteor/meteor'
import RoleGroup from "./roleGroup";

Meteor.methods({
  getRoleGroupById(_id) {
    return RoleGroup.findOne({ _id })
  },
  getRoelGroups({ selector }) {
    return RoleGroup.find(selector).fetch()
  },
  insertRoleGroup(doc) {
    return RoleGroup.insert(doc)
  },
  updateRoleGroup({ _id, doc }) {
    try {
      const exist = RoleGroup.findOne({ _id })
      if (!exist) throw `This recored deleted!`

      return RoleGroup.update({ _id, }, { $set: doc })
    } catch (error: any) {
      throw new Error('update role group error', error)
    }
  },
  removeRoleGroupById(_id) {
    try {
      const exist = RoleGroup.findOne({ _id })
      if (!exist) throw `This recored deleted!`

      return RoleGroup.remove({ _id })
    } catch (error: any) {
      throw new Error('update role group error', error)
    }
  }
})