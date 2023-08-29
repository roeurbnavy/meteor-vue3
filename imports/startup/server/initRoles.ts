import { Mongo } from "meteor/mongo"

import Role from '../../api/roles/roles'

export const initRoles = async () => {
  const roles = [
    {
      name: 'insertBranch',
      group: 'Admin',
      order: 5
    },
    {
      name: 'updateBranch',
      group: 'Admin',
      order: 5
    },
    {
      name: 'removeBranch',
      group: 'Admin',
      order: 5
    },
    {
      name: 'insertRoleGroup',
      group: 'Admin',
      order: 5
    },
    {
      name: 'updateRoleGroup',
      group: 'Admin',
      order: 5
    },
    {
      name: 'removeRoleGroup',
      group: 'Admin',
      order: 5
    },
  ]

  // Loop check exist role
  for (let i = 0; i < roles.length; i++) {
    const it: any = roles[i]

    const exist = Role.findOne({ name: it.name })
    if (!exist) {
      const _id = new Mongo.ObjectID().toHexString()
      it._id = _id
      // insert role group
      Role.insert(it)
    }

  }


}
