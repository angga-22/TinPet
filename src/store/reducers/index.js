import { combineReducers } from 'redux';
import auth from './authentication';
import createPost from './createPost';
import post from './post';
import profile from './profile';
import getSinglePets from './getSinglePets';
import searchPet from './searchPet';
import like from './like';
import notif from './notif';
import messageTampung from './messages';
import mesCount from './mesCount';
import comment from './comment'
import reqMeeting from './reqmeeting';

export default combineReducers({
    auth, createPost, post, profile, getSinglePets, searchPet, like, notif, messageTampung, mesCount, comment, reqMeeting

});