import { Router } from "express";
import { validateUpdateUserInput } from "../middlewares/validationMiddleware.js";
import {
  authenticateAdmin,
  checkIsTestUser,
} from "../middlewares/authMiddleware.js";
//import controllers
import {
  getCurrentUser,
  getApplicationStats,
  updateCurrentUser,
} from "../controllers/userController.js";

import upload from "../middlewares/multerMiddleware.js";

const router = Router();

router.route("/current-user").get(getCurrentUser);
router
  .route("/update-user")
  .patch(
    checkIsTestUser,
    upload.single("avatar"),
    validateUpdateUserInput,
    updateCurrentUser
  );
router.route("/admin/app-stats").get(authenticateAdmin, getApplicationStats);

export default router;
