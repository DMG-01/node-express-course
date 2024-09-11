const express = require("express")

const {getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob} = require("../controllers/jobs")

const jobRouter = express.Router()

router.route('/').post(createJob).get(getAllJobs)

router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = jobRouter
