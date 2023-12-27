const permissions = [
  {
    role: 'farmer',
    permissions: [
      {
        add_users: false,
        view_users: false,
      },
      {
        add_vendor: false,
        view_vendor: true,
      },
      {
        add_wholesaler: false,
        view_wholesaler: true,
      },
      {
        add_farmer: false,
        view_farmer: true,
      },
      {
        add_machinery: false,
        view_machinery: true,
      },
      {
        add_seeds: false,
        view_seeds: true,
      },
      {
        add_raw_material: false,
        view_raw_material: true,
      },
      {
        add_land_broker: false,
        view_land_broker: true,
      },
      {
        add_transport: false,
        view_transport: true,
      },
      {
        add_accounts: false,
        view_accounts: false,
      },
      {
        agriculture: true,
      },
      {
        logistics: true,
      },
    ],
  },
  {
    role: 'admin',
    permissions: [
      {
        add_users: true,
        view_users: true,
      },
      {
        add_vendor: true,
        view_vendor: true,
      },
      {
        add_wholesaler: true,
        view_wholesaler: true,
      },
      {
        add_farmer: true,
        view_farmer: true,
      },
      {
        add_machinery: true,
        view_machinery: true,
      },
      {
        add_seeds: true,
        view_seeds: true,
      },
      {
        add_raw_material: true,
        view_raw_material: true,
      },
      {
        add_land_broker: true,
        view_land_broker: true,
      },
      {
        add_transport: true,
        view_transport: true,
      },
      {
        add_accounts: true,
        view_accounts: true,
      },
      {
        agriculture: true,
      },
      {
        logistics: true,
      },
    ],
  },
  {
    role: 'vendor',
    permissions: [
      {
        add_users: false,
        view_users: false,
      },
      {
        add_vendor: false,
        view_vendor: true,
      },
      {
        add_wholesaler: false,
        view_wholesaler: true,
      },
      {
        add_farmer: false,
        view_farmer: true,
      },
      {
        add_machinery: false,
        view_machinery: false,
      },
      {
        add_seeds: false,
        view_seeds: false,
      },
      {
        add_raw_material: false,
        view_raw_material: false,
      },
      {
        add_land_broker: false,
        view_land_broker: false,
      },
      {
        add_transport: false,
        view_transport: false,
      },
      {
        add_accounts: false,
        view_accounts: false,
      },
      {
        agriculture: false,
      },
      {
        logistics: false,
      },
    ], 
  },
  {
    role: 'golden_member',
    permissions: [
      {
        add_users: false,
        view_users: false,
      },
      {
        add_vendor: false,
        view_vendor: true,
      },
      {
        add_wholesaler: false,
        view_wholesaler: true,
      },
      {
        add_farmer: false,
        view_farmer: true,
      },
      {
        add_machinery: false,
        view_machinery: true,
      },
      {
        add_seeds: false,
        view_seeds: true,
      },
      {
        add_raw_material: false,
        view_raw_material: true,
      },
      {
        add_land_broker: false,
        view_land_broker: true,
      },
      {
        add_transport: false,
        view_transport: true,
      },
      {
        add_accounts: false,
        view_accounts: true,
      },
      {
        agriculture: true,
      },
      {
        logistics: true,
      },
    ],
  },
  {
    role: 'wholesaler',
    permissions: [
      {
        add_users: false,
        view_users: false,
      },
      {
        add_vendor: false,
        view_vendor: true,
      },
      {
        add_wholesaler: false,
        view_wholesaler: true,
      },
      {
        add_farmer: false,
        view_farmer: true,
      },
      {
        add_machinery: false,
        view_machinery: false,
      },
      {
        add_seeds: false,
        view_seeds: false,
      },
      {
        add_raw_material: false,
        view_raw_material: false,
      },
      {
        add_land_broker: false,
        view_land_broker: false,
      },
      {
        add_transport: false,
        view_transport: false,
      },
      {
        add_accounts: false,
        view_accounts: false,
      },
      {
        agriculture: false,
      },
      {
        logistics: false,
      },
    ],
  },
  {
    role: 'agriculture',
    permissions: [
      {
        add_users: false,
        view_users: false,
      },
      {
        add_vendor: false,
        view_vendor: false,
      },
      {
        add_wholesaler: false,
        view_wholesaler: false,
      },
      {
        add_farmer: false,
        view_farmer: true,
      },
      {
        add_machinery: false,
        view_machinery: false,
      },
      {
        add_seeds: false,
        view_seeds: false,
      },
      {
        add_raw_material: false,
        view_raw_material: false,
      },
      {
        add_land_broker: false,
        view_land_broker: false,
      },
      {
        add_transport: false,
        view_transport: true,
      },
      {
        add_accounts: false,
        view_accounts: false,
      },
      {
        agriculture: false,
      },
      {
        logistics: true,
      },
    ],
  },
  {
    role: 'logistics',
    permissions: [
      {
        add_users: false,
        view_users: false,
      },
      {
        add_vendor: false,
        view_vendor: false,
      },
      {
        add_wholesaler: false,
        view_wholesaler: true,
      },
      {
        add_farmer: false,
        view_farmer: true,
      },
      {
        add_machinery: false,
        view_machinery: false,
      },
      {
        add_seeds: false,
        view_seeds: false,
      },
      {
        add_raw_material: false,
        view_raw_material: false,
      },
      {
        add_land_broker: false,
        view_land_broker: false,
      },
      {
        add_transport: false,
        view_transport: true,
      },
      {
        add_accounts: false,
        view_accounts: true,
      },
      {
        agriculture: false,
      },
      {
        logistics: true,
      },
    ],
  },
]
export default permissions
