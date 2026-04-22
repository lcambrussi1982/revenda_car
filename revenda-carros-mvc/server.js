const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const clientesRoutes = require(./src/routes/clienteRoutes);
const clientesRoutes = require(./src/routes/veiculoRoutes);
const clientesRoutes = require(./src/routes/vendaRoutes);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extend: true}));

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/clientes", clienteRoutes);
app.use("/api/veiculos", veiculoRoutes);
app.use("/api/vendas", vendaRoutes);