import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";
import cors from "cors"

/*asignamos a app toda funcionalidad para un server web*/
const app = express(); 

/*setear*/
app.set("port",5000)

app.use(cors())
/*routes*/
app.use("/api/categorias",categoriaRoutes)

/*hacemos disponible app para todxa la aplicacion*/

export default app;