require("dotenv").config();
const express = require("express");
const cors = require("cors");
const MongoDBConnection = require("./db");
const crudRoutes = require("./routes/motorcycleRoutes");

const app = express();

// Conexión a la base de datos
MongoDBConnection();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de CORS
const corsOptions = {
  origin: 'http://shoppr-web-alb-1637775532.us-east-1.elb.amazonaws.com',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true,
};

app.use(cors(corsOptions));

// Agregar encabezados CORS a todas las respuestas
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://shoppr-web-alb-1637775532.us-east-1.elb.amazonaws.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Rutas
app.use("/api/motorcycles", crudRoutes);

// Puerto
const port = 4000;
app.listen(port, () => console.log(`Server iniciado en el puerto: ${port}...`));
