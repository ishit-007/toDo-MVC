const express = require('express');
const app = express();
const PORT = 8080;
const taskRoutes = require('./Routes/taskRoutes.js');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));    //body parser deprecated
app.use('/', taskRoutes);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
