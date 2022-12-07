import express from "express";

const app = express();
const port = 8014;

app.use(express.bodyParser());

app.post( "/webhook", ( req, res ) => {
  console.dir(req);
  console.log(req.body);
} );

app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );