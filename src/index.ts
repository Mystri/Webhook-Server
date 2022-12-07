import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8014;

app.use(bodyParser.json())

app.post( "/webhook", ( req, res ) => {
  console.log(req.body.text);
  
} );

app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );