import { Router } from "express";
const router = Router();
import {
  validateIdParam,
  validateInput,
} from "../middlewares/validationMiddleware.js";

import { checkIsTestUser } from "../middlewares/authMiddleware.js";

//import controllers
import {
  getJobs,
  createJob,
  getJobById,
  deleteJob,
  editJob,
  showStats,
} from "../controllers/jobController.js";

router.route("/").get(getJobs).post(validateInput, createJob);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(validateIdParam, getJobById)
  .patch(checkIsTestUser, validateIdParam, validateInput, editJob)
  .delete(checkIsTestUser, validateIdParam, deleteJob);

export default router;
