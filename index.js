import express from "express";
import morgan from "morgan";
import cors from 'cors';
import cookieParser from "cookie-parser";
import multer from "multer";
import sql from "mssql";

import userRouter from "./routes/users.js";
import productRouter from "./routes/products.js";
import cartRouter from "./routes/cart.js";
import addressRouter from "./routes/address.js";
import branchRouter from "./routes/branch.js";
import orderRouter from "./routes/order.js";
import db from "./db.js";

const app = express();

let corsOptions = {
    origin: "*", 
    credentials: true,
    exposedHeaders: ["set-cookie"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("short"));
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage });

app.post("/upload", upload.single('file'), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
})

sql.connect(db, (err) => {
    if (err) console.log(err);
    const port = 8800;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})

// DON'T REPLACE ALL ABOVE CODE
////////////////////////////////////////////////////////////////////////////////

// TODO BELOW
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);
app.use('/address', addressRouter);
app.use('/branch', branchRouter);
app.use('/order', orderRouter);