import { asyncHandler } from "../utils/asyncHandler.js";

const RegisterUser = asyncHandler( async(req,res)=>{
//  get user detail from front end
const {username,fullName,email,password} = req?.body;
console.log("email:",email);
// validation for user detail
// check if user already exist:username,email
// check for file : images,check for avatar
// upload file to cloudinary,get url
// create user object
// save user detail to database
// remove password and refresh token field from response
// check for user creation 
// send response to front end




});

export {RegisterUser}