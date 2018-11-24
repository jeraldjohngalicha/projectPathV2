export class ProfileModel {
    userId : number;
    profileName: string;
    description: string;
    joinedDate : string;
    profileActivity : UserActivityProfile;

    constructor(){
        this.userId = 0;
        this.profileName = "";
        this.description = "";
        this.joinedDate = "";
        this.profileActivity = new UserActivityProfile();
    }
}

export class UserActivityProfile{
    followers : number;
    reputation : number;
    posts : number;
    constructor(){
        this.followers = 0;
        this.reputation = 0;
        this.posts = 0;
    }
}