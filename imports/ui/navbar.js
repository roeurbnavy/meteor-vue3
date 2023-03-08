export default [
  {
    title: 'Dashboard',
    route:{name: 'Dashboard'},
    icon: 'fa-solid fa-gauge',
  },
  {
    title: 'Customer',
    route:{name: 'Customer'},
    icon: 'fa-solid fa-people-group',
  },
  {
    title: 'Sale',
    route:{name: ''},
    icon: 'fa-solid fa-house',
  },
  {
    title: 'Receipt',
    route:{name: ''},
    icon: 'fa-solid fa-users',
  },
  {
    title: 'Vendor',
    route:{name: ''},
    icon: 'fa-solid fa-truck',
  },
  {
    title: 'Purchase',
    route:{name: ''},
    icon: 'fa-solid fa-house',
  },
  {
    title: 'Payment',
    route:{name: ''},
    icon: 'fa-solid fa-users',
  },
  // {
  //   title: 'Setting',
  //   route:{name: ''},
  //   icon: 'fa-solid fa-gears',
  //   children:[
  //     {
  //       title: 'Employee',
  //       route:{name: ''},
  //       icon: 'fa-solid fa-users',
  //     },
  //   ]
  // },
  {
    title: 'Report',
    route:{name: 'Report'},
    icon: 'fa-solid fa-file-contract',
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
        title: 'Employee',
        route: { name: 'AdminSetting', params: { activeCom: 'employee' } },
        group: 'admin',
        icon: 'fa-solid fa-users',
        // roles: ['admin'],
      },
      {
        title: 'User',
        route: { name: 'AdminSetting', params: { activeCom: 'user' } },
        group: 'admin',
        icon: 'fa-solid fa-users',
        // roles: ['admin'],
      },
    ],
  },
]