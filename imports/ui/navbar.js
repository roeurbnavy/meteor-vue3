export default [
  {
    title: 'Dashboard',
    route:{name: 'dashboard'},
    icon: 'fa-solid fa-gauge',
  },
  {
    title: 'Customer',
    route:{name: 'customer'},
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
  {
    title: 'Setting',
    route:{name: ''},
    icon: 'fa-solid fa-gears',
    children:[
      {
        title: 'Employee',
        route:{name: ''},
        icon: 'fa-solid fa-users',
      },
    ]
  },
]