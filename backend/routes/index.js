import express from "express";

import {
    getMhs,
    getMhsById,
    createMhs,
    updateMhs,
    deleteMhs
} from "../controller/Mahasiswa.js";

const router = express.Router();

router.get('/',getMhs);
router.get('/:id',getMhsById);
router.post('/',createMhs);
router.patch('/:id',updateMhs);
router.delete('/:id',deleteMhs);

export default router;