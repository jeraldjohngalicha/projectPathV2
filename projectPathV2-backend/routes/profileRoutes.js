import express from 'express';

import profileModel from '../models/profileModel';

const profileRouter = express.Router();

profileRouter.route('/').get((req, res) => {

    profileModel.find({}, (err, profiles) => {
        res.json(profiles);
    });

});

profileRouter.route('/:profileId').get((req, res) => {

    profileModel.findById(req.params.profileId, (err, profile) => {
        res.json(profile);
    });

});


export default profileRouter;