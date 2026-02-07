const mongoose = require('mongoose');
const User = require('./models/User'); // провери точния път според твоя проект
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');

  const users = [
    {
      name: 'Директор',
      email: 'director@school.com',
      password: 'director123',
      role: 'admin'
    },
    {
      name: 'Учител Математика',
      email: 'teacher1@school.com',
      password: 'teacher123',
      role: 'teacher'
    },
    {
      name: 'Ученик',
      email: 'student1@school.com',
      password: 'student123',
      role: 'student'
    }
  ];

  User.insertMany(users)
    .then(() => {
      console.log('Seed данни успешно добавени');
      mongoose.connection.close();
    })
    .catch(err => console.log(err));

}).catch(err => console.log(err));
