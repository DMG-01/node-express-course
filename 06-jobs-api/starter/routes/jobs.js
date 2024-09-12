const express = require("express")

const {getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob} = require("../controllers/jobs")

const jobRouter = express.Router()

jobRouter.route('/').post(createJob).get(getAllJobs)

jobRouter.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = jobRouter
