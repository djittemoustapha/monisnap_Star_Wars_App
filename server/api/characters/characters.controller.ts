import express from 'express';
import { HTTP_CODE } from '../../model';
import charactersService from './characters.service';

class CharactersController {

    async list(_: express.Request, res: express.Response) {

        const characters = charactersService.list();
        res.status(HTTP_CODE.SUCCESS_OK).send(characters);
    }
    async getTopCharacters(_: express.Request, res: express.Response) {
        const characters = charactersService.list(true);
        res.status(HTTP_CODE.SUCCESS_OK).send(characters);
    }
    
    async getCouples(_: express.Request, res: express.Response) {
        const users = charactersService.couples();
        res.status(HTTP_CODE.SUCCESS_OK).send(users);
    }

    async vote(req: express.Request, res: express.Response) {
       const character= charactersService.vote(parseInt(req.params.id));
    res.status(HTTP_CODE.SUCCESS_OK).json(character);
    }
}

export default new CharactersController();