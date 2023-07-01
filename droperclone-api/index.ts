import express, { Application, Request, Response } from "express";
import favoritos from "./favoritos.json";
import cors from "cors";

const app: Application = express();
const port = 3001;

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the allowed origin(s)
  optionsSuccessStatus: 200,
  credentials: true // Habilitar o uso de credenciais
};

// Body parsing Middleware
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",
  async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
      message: "Hello World!",
    });
  }
);

app.get("/favoritos",
  async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json(favoritos);
  }
);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (err: any) {
  console.error(`Error occured: ${err.message}`);
}
