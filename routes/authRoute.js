import { login, logout, register } from "../controllers/authController.js";
import { Router } from "express";
const router = Router();

//validation Middleware
import { validateRegisterInput } from "../middlewares/validationMiddleware.js";

router.route("/register").post(validateRegisterInput, register);
router.route("/login").post(login);
router.route("/logout").get(logout);

export default router;
