import express from "express";

const app = express();
const port = 8014;


app.post( "/webhook", ( req, res ) => {
  console.log(req);
  console.log(req.params);
  console.log(req.body);
  
} );

app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );