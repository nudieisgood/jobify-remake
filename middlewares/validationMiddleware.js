import { body, param, validationResult } from "express-validator";
import mongoose from "mongoose";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customError.js";
import Job from "../models/JobModel.js";
import User from "../models/userModel.js";

const withValidationError = (validateValue) => {
  return [
    validateValue,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessage = errors.array().map((error) => error.msg);
        if (errorMessage[0].startsWith("no job")) {
          throw new NotFoundError(errorMessage);
        }
        if (errorMessage[0].startsWith("unauthorized")) {
          throw new UnauthorizedError(errorMessage);
        }
        throw new BadRequestError(errorMessage);
      }
      next();
    },
  ];
};

export const validateInput = withValidationError([
  body("company").notEmpty().withMessage("company is required."),
  body("position").notEmpty().withMessage("position is required."),
]);

export const validateIdParam = withValidationError([
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) {
      throw new BadRequestError("invalid MongoDB id.");
    }

    const job = await Job.findById(value);
    if (!job) {
      throw new NotFoundError(`no job with id: ${value}.`);
    }

    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === job.createdBy.toString();

    if (!isAdmin && !isOwner)
      throw new Error("unauthorized to access this route");
  }),
]);

export const validateRegisterInput = withValidationError([
  body("name").notEmpty().withMessage("name is required."),
  body("email")
    .notEmpty()
    .withMessage("email is required.")
    .isEmail()
    .withMessage("invalid email format.")
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new BadRequestError("email already exists.");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required.")
    .isLength({ min: 8 })
    .withMessage("password should longer than 8 characters."),
  body("location").notEmpty().withMessage("location is required."),
]);

export const validateUpdateUserInput = withValidationError([
  body("name").notEmpty().withMessage("name is required."),
  body("lastName").notEmpty().withMessage("last name is required."),
  body("location").notEmpty().withMessage("location is required."),
]);
