import express from "express";
import cors from "cors";
import winston from "winston";


import clientsRouter from "./routes/client.route.js";
import productRouter from "./routes/product.route.js";
import salesRouter from "./routes/sale.route.js";
import supplierRouter from "./routes/supplier.route.js";



const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "my-bank-api.log" }),
  ],
  format: combine(label({ label: "my-bank-api" }), timestamp(), myFormat),
});



const app = express();
app.use(express.json());
app.use(cors());

app.use("/client", clientsRouter);
app.use("/product", productRouter);
app.use("/sale", salesRouter);
app.use("/supplier", supplierRouter);

app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

/*
(async () => {
    try {
        await Test2.sync();
        logger.info("Conectado ao banco de dados");
    } catch (error) {
        logger.error("Erro ao conectar ao banco de dados");
    }
}
)();
*/




app.listen(3000, () => {
  console.log("Server started on port 3000");
});
