import express from "express";
import apiNasaRouter  from "./api-nasa-routes.js";


const router = express.Router();

router
    .use(apiNasaRouter);

export default router;