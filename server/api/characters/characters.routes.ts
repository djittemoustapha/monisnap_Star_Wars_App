import { RoutesConfig } from '../common/routes.config';
import CharactersController from './characters.controller';
import express from 'express';

export class CharactersRoutes extends RoutesConfig {
    constructor(app: express.Application) {
        super(app, 'charactersRoutes');
    }

    configureRoutes() {
        this.app.route('/characters')
            .get(
                CharactersController.list
                )
        this.app.route('/characters/tops')
            .get(
               CharactersController.getTopCharacters
                    )
        this.app.route('/characters/couples')
            .get(
                CharactersController.getCouples
                )
        this.app.route('/characters/:id/vote')
            .put(
                CharactersController.vote
                )

        return this.app;
    }
}