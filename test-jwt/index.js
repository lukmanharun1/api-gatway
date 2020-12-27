const jwt = require('jsonwebtoken');

const JWT_SECRET = 'bwamicro123';

// create basic token dengan proses syncronous
const token = jwt.sign({
  data: {
    kelas: 'bwamicro'
  } 
}, JWT_SECRET, {
  expiresIn: '5m'
});
console.log(token);

// asyncronous ~ create token
jwt.sign({ data: { kelas: 'bwamicro' } }, JWT_SECRET, { expiresIn: '1m' }, (err, token) => {
  console.log(token);
});
// cara 1
const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoiYndhbWljcm8ifSwiaWF0IjoxNjA4NzM2NTY3LCJleHAiOjE2MDg3MzY4Njd9.3PLjA-3O7J9Pi366Q-aAHOiisYVcPfe57Cw6CHj63Eg';
// jwt.verify(token1, '123213', (err, decoded) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log(decoded);
// });
// cara 2
try {
  const decoded = jwt.verify(token1, JWT_SECRET);
  console.log(decoded);
} catch (error) {
  console.log(error.message);
}

// console.log('aaaaa');
