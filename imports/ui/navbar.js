export default [
  {
    title: 'Dashboard',
    route: { name: 'Dashboard' },
    icon: 'fa-solid fa-gauge',
  },
  {
    title: 'Report',
    route: { name: 'Report' },
    icon: 'fa-solid fa-file-contract',
    // roles: ['viewReport',],
  },
  {
    title: 'Admin Setting',
    icon: 'fa-solid fa-user-cog',
    group: 'admin',
    route: { name: 'AdminSetting', params: { activeCom: 'profile' } },
    children: [
      {
        title: 'Profile',
        route: { name: 'AdminSetting', params: { activeCom: 'profile' } },
        icon: 'fa-solid fa-user-circle',
        group: 'admin',
        
      },
      {
        title: 'Branch',
        route: { name: 'AdminSetting', params: { activeCom: 'branch' } },
        group: 'admin',
        icon: 'fa-solid fa-code-branch',
        roles: ['insertBranch','updateBranch','removeBranch'],
      },
      {
        title: 'Employee',
        route: { name: 'AdminSetting', params: { activeCom: 'employee' } },
        group: 'admin',
        icon: 'fa-solid fa-users',
        roles: ['insertEmployee','updateEmployee','removeEmployee'],
      },
      {
        title: 'User',
        route: { name: 'AdminSetting', params: { activeCom: 'user' } },
        group: 'admin',
        icon: 'fa-solid fa-users',
        roles: ['insertUser','updateUser','removeUser'],
      },
      {
        title: 'Group',
        route: { name: 'AdminSetting', params: { activeCom: 'group' } },
        group: 'admin',
        icon: 'fa-solid fa-users',
        roles: ['insertRoleGroup','updateRoleGroup','removeRoleGroup'],
      },
    ],
  },
]
