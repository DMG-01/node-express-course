const express = require("express")

const {getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob} = require("../controllers/jobs")

const jobRouter = express.Router()

jobRouter.get("/getAllJobs",getAllJobs)
jobRouter.post("/createJob",createJob)
jobRouter.get("/getJob",getJob)
jobRouter.patch("/updateJob",updateJob)
jobRouter.delete("deleteJob",deleteJob)


module.exports = jobRouter
