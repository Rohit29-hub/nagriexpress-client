import { Router } from "express";
const router = Router();
import { searchAlgo as searchController } from "../controllers/search.controller";

router.get('/search',searchController);

export default router;
