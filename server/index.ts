import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import { RoutesConfig } from './api/common/routes.config';
import { CharactersRoutes } from './api/characters/characters.routes';
import { config } from './config';


const app = express();
    
const routes: RoutesConfig[] = [];
    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({origin: /localhost(:[0-9]+)?$/}))

routes.push(new CharactersRoutes(app));

app.get('/', (_: express.Request, res: express.Response) => {
    res.status(200).send(`Server running at http://localhost:${config.port}`)
});

app.listen(config.port, () => console.log(`Server running at http://localhost:${config.port}`));