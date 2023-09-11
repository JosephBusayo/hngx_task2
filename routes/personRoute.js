import { Router } from 'express';
import Person from '../models/person.js';
const router = Router();
import {get_all_persons, update_person, delete_person, get_one, create_person} from '../controllers/personController.js'

// Routes
router.post('', create_person);

router.get('/:user_id', get_one)

router.get('', get_all_persons);

router.put('/:user_id', update_person);

router.delete('/:user_id', delete_person);


export default router;
