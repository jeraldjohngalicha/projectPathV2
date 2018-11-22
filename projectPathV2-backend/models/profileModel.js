import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const profileModel = new Schema({

    profileName: {
        type: String
    },

    aboutMe: {
        type: String
    }

}, { collection:'profileModel' });

export default mongoose.model('profileModel', profileModel);