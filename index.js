import express from "express";
import cors from "cors";
import routerGeneral from "./route/index.js";
const app = express();
const port = 3000;

// config
app.use(express.static("public"));
app.use(express.json());

//segurity
app.use(cors("*"));
//route
app.use(routerGeneral);
//listening

app.listen(port, () => {
  console.log(`Server on runing ${port}`);
});
