import "babel-polyfill";
import { Router } from "express";
import RateApiController from "../controller/RateApiController";

//initialize route here
const route = Router();

route.get("/rates", RateApiController._makeRequest);
route.get("/home", function (req, res) {
  res.json({ msg: "hello" });
});

export default route;
