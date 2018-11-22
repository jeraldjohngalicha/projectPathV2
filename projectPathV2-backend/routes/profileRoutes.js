import express from 'express';

import profileModel from '../models/profileModel';

const profileRouter = express.Router();

profileRouter.route('/getAllProfiles').get((req, res) => {

    profileModel.find({}, (err, profiles) => {
        res.json(profiles);
    });

});

profileRouter.route('/getProfile/:profileId').get((req, res) => {

    profileModel.findById(req.params.profileId, (err, profile) => {
        res.json(profile);
    });

});


export default profileRouter;