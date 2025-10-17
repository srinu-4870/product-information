const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const productRoutes = require('./routes/products');

const app = express();
const PORT = 4000;


app.use(cors());
app.use(express.json());


app.use('/products', productRoutes);


const server = http.createServer(app);

server.on('request', (req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);
});


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Platform: ${os.platform()}`);
  console.log(`CPU cores: ${os.cpus().length}`);
});
