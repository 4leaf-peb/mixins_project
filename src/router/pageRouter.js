import express from "express";
import pageController from "../controller/pageController";

const pageRouter = express.Router();

pageRouter.get("/page1", pageController.page1Controller);
pageRouter.get("/page2", pageController.page2Controller);
pageRouter.get("/page3", pageController.page3Controller);

export default pageRouter;
