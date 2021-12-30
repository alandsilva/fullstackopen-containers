/* eslint-disable no-undef */
db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('persons');

db.persons.insert({ name: 'Alan Da Silva', number: '012345678' });
db.persons.insert({ name: 'Jane Doe', number: '876543210' });
