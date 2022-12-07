import express from "express";

const app = express();
const port = 8014;

app.post( "/webhook", ( req, res ) => {
  console.log(req.body);
} );

app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );