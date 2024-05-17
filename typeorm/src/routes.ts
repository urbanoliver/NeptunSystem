import express from 'express';

import { OktatoController } from './controllers/Oktato.controller';
import { HallgatoController } from './controllers/Hallgato.controller';
import { KurzusController } from './controllers/Kurzus.controller';
import { TantargyController } from './controllers/Tantargy.controller';
import { ErdemjegyController } from './controllers/Erdemjegy.controller';


export function getRouter(){

    const router = express.Router();

    const oktatoController = new OktatoController();

    router.get('/oktato', oktatoController.getAll)
    router.get('/oktato/:id', oktatoController.getOne)
    router.post('/oktato', oktatoController.create)
    router.put('/oktato', oktatoController.update)
    router.delete('/oktato/:id', oktatoController.delete)

    const hallgatoController = new HallgatoController();

    router.get('/hallgato', hallgatoController.getAll)
    router.get('/hallgato/:id', hallgatoController.getOne)
    router.post('/hallgato', hallgatoController.create)
    router.put('/hallgato', hallgatoController.update)
    router.delete('/hallgato/:id', hallgatoController.delete)


    const tantargyController = new TantargyController();

    router.get('/tantargy', tantargyController.getAll)
    router.get('/tantargy/:id', tantargyController.getOne)
    router.post('/tantargy', tantargyController.create)
    router.put('/tantargy', tantargyController.update)
    router.delete('/tantargy/:id', tantargyController.delete)

    const kurzusController = new KurzusController();

    router.get('/kurzus', kurzusController.getAll)
    router.get('/kurzus/:id', kurzusController.getOne)
    router.post('/kurzus', kurzusController.create)
    router.put('/kurzus', kurzusController.update)
    router.delete('/kurzus/:id', kurzusController.delete)


    const erdemjegyController = new ErdemjegyController();

    router.get('/erdemjegyek', erdemjegyController.getAll)
    router.get('/erdemjegyek/:id', erdemjegyController.getOne)
    router.post('/erdemjegyek', erdemjegyController.create)
    router.put('/erdemjegyek', erdemjegyController.update)
    router.delete('/erdemjegyek/:id', erdemjegyController.delete)
    router.get('/erdemjegyek/hallgatoId', erdemjegyController.getAllFieldsData)


    return router;
}