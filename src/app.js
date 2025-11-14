import express from "express";

/*asignamos a app toda funcionalidad para un server web*/
const app = express(); 

/*setear*/
app.set("port",5000)

/*hacemos disponible app para todxa la aplicacion*/

export default app;