import { NotFoundError } from "../errors/customError.js";
import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import day from "dayjs";

export const getJobs = async (req, res, next) => {
  const { search, sort, jobStatus, jobType } = req.query;

  const queryObj = { createdBy: req.user.userId };

  if (req.user.role === "admin") {
    delete queryObj.createdBy;
  }

  if (search) {
    queryObj.$or = [
      {
        position: { $regex: search, $options: "i" },
      },
    ];
  }

  if (jobStatus && jobStatus !== "all") {
    queryObj.jobStatus = jobStatus;
  }

  if (jobType && jobType !== "all") {
    queryObj.jobType = jobType;
  }

  const sortObj = {
    newest: "-createdAt",
    oldest: "createdAt",
    "a-z": "position",
    "z-a": "-position",
  };

  const sortKey = sortObj[sort] || sortObj.newest;

  //pagination logic
  const currentPage = +req.query.currentPage || 1;
  const limit = 10;
  const skip = (currentPage - 1) * 10;

  const jobs = await Job.find(queryObj).sort(sortKey).skip(skip).limit(limit);

  const totalJobs = await Job.countDocuments(queryObj);

  res.status(StatusCodes.OK).json({ totalJobs, jobs, currentPage });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  req.body.createdBy = req.user.userId;
  const newJob = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ newJob });
};

export const editJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, { new: true });

  if (!updatedJob) {
    throw new NotFoundError(`Can not find the job with ID:${id}`);
  }

  res.status(StatusCodes.OK).json({ updatedJob });
};

export const getJobById = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  if (!job) {
    throw new NotFoundError(`Can not find the job with ID:${id}`);
  }
  res.status(StatusCodes.OK).json({ job });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;

  const removeJob = await Job.findByIdAndDelete(id);

  if (!removeJob) {
    throw new NotFoundError(`Can not find the job with ID:${id}`);
  }

  res.status(StatusCodes.OK).json({ msg: "job has been deleted" });
};

export const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    {
      $match:
        req.user.role === "admin"
          ? {}
          : { createdBy: new mongoose.Types.ObjectId(req.user.userId) },
    },
    { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);

  monthlyApplications = monthlyApplications
    .map((app) => {
      const { count } = app;
      const { year, month } = app._id;

      const date = day()
        .month(month - 1)
        .year(year)
        .format("MMM YY");

      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
