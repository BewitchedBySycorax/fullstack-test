const app = require('express')();

// const server = app();

const PORT = process.env.PORT || 5555;

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`)
});
