const port = 5000;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRouter = require('./routes/productRouter');
const formRouter = require('./routes/FormRouter');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://ajitpnaik94:Ajit9492@cluster0.i7bmgec.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/product', productRouter);
app.use('/api/form', formRouter);

app.get("/", (req, res) => {
  res.send("Express is connected");
});

app.listen(port, () => console.log(`Successfully connected PORT on ${port}`));
