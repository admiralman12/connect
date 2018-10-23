const Properties =   [
  {
    name: 'Benson Downs',
    mgmt: 'Simpson Property Group',
    owner: 'Simpson Property Group',
    mgr: 'James Jacobs',
    mgremail: 'jsmith@test.com',
    occ: 97.2,
    leased: 98.5,
    sqft: 326411,
    psqft: 2.36,
    units: 302,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg'
  },
  {
    name: 'Carriage Place',
    mgmt: 'Simpson Property Group',
    owner: 'Simpson Property Group',
    mgr: 'Jennifer Smith',
    mgremail: 'jsmith@test.com',
    occ: 97.2,
    leased: 98.4,
    sqft: 236140,
    psqft: 2.36,
    units: 231,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg'
  },
  {
    name: 'Tyson\'s Corner',
    mgmt: 'Simpson Property Group',
    owner: 'Simpson Property Group',
    mgr: 'Emilia Faruk',
    mgremail: 'jsmith@test.com',
    occ: 97.2,
    leased: 98.1,
    sqft: 251002,
    psqft: 2.36,
    units: 298,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg'
  },
  {
    name: 'Turtle Creek',
    mgmt: 'Greystar',
    owner: 'Simpson Property Group',
    mgr: 'Anna Ho',
    occ: 97.2,
    leased: 97.9,
    sqft: 186554,
    psqft: 2.36,
    units: 115,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg'
  },
  {
    name: 'Jacob\'s Junction',
    mgmt: 'Simpson Property Group',
    owner: 'Simpson Property Group',
    mgr: 'Blake Lively',
    mgremail: 'jsmith@test.com',
    occ: 97.2,
    leased: 98.2,
    sqft: 342259,
    psqft: 2.36,
    units: 320,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg'
  },
  {
    name: 'Zoso Flats',
    mgmt: 'Simpson Property Group',
    owner: 'Simpson Property Group',
    mgr: 'Bob Smithereen',
    mgremail: 'jsmith@test.com',
    occ: 97.2,
    leased: 97.4,
    sqft: 385447,
    psqft: 2.36,
    units: 345,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg'
  }

];

const getProperties = (limit) => {
  return (limit) ? Properties.slice(0, limit) : Properties;
};


export {
  Properties,
  getProperties
};