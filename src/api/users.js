const Users =   [
  {
    name: 'John Brown',
    company: 'Simpson Property Group',
    phone: '303-283-4100',
    jobtitle: 'Manager',
    email: 'jb@simpsonhousing.com',
    defaultprop: 'Carriage Place',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg'
  },
  {
    name: 'Amanda Smith',
    company: 'Simpson Property Group',
    phone: '303-283-4100',
    jobtitle: 'Leasing Agent',
    email: 'asmith@simpsonhousing.com',
    defaultprop: 'Meadows at Meridian',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg'
  },
  {
    name: 'Erin Johnson',
    company: 'Simpson Property Group',
    phone: '303-283-4100',
    jobtitle: 'Manager',
    email: 'ej@simpsonhousing.com',
    defaultprop: 'The Battery on Blake Street',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg'
  },
  {
    name: 'Kim Sanchez',
    company: 'Simpson Property Group',
    phone: '303-283-4100',
    jobtitle: 'Manager',
    email: 'ks@simpsonhousing.com',
    defaultprop: 'Madison Park',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg'
  },
  {
    name: 'Bryan Munson',
    company: 'Simpson Property Group',
    phone: '303-283-4100',
    jobtitle: 'Assitant Manager',
    email: 'bm@simpsonhousing.com',
    defaultprop: 'Twenty One 01',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg'
  },
  {
    name: 'Farad Al Haj Malik',
    company: 'Simpson Property Group',
    phone: '303-283-4100',
    jobtitle: 'Manager',
    email: 'fam@simpsonhousing.com',
    defaultprop: 'Jefferson Square',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg'
  }

];

const getUsers = (limit) => {
  return (limit) ? Users.slice(0, limit) : Users;
};


export {
  Users,
  getUsers
};