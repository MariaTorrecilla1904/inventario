import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";


/*asignamos a app toda funcionalidad para un server web*/
const app = express(); 

/*setear*/
app.set("port",5000)


/*routes*/
app.use("/api/categorias",categoriaRoutes)

/*hacemos disponible app para todxa la aplicacion*/

export default app;