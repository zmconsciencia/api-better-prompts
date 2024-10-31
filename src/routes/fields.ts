import { Router } from 'express';
import { createField, getFields } from '../controllers/fieldsController';

const fieldsRoute = Router();

fieldsRoute.get('/', getFields);
fieldsRoute.post('/', createField);

export default fieldsRoute;
