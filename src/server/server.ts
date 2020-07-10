import * as express from "express";
import routes from "./routes";
import * as passport from "passport";
import "./middleware/bearerstrategy";
import "./middleware/localstrategy";


const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(passport.initialize())
app.use(routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
