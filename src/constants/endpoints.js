export const BASE_BACKEND_URL = process.env.REACT_APP_BACKEND_URL
export const AUTHENTICATION = `${BASE_BACKEND_URL}/authentication`
export const LOGIN = `${AUTHENTICATION}/login`
export const REGISTRATION_PLAYER = `${AUTHENTICATION}/register-player`
export const REGISTRATION_OWNER = `${AUTHENTICATION}/register-owner`
export const LOGOUT = `${AUTHENTICATION}/logout`
export const FORGOT_PASSWORD = `${AUTHENTICATION}/forgot-password`
export const CHANGE_PASSWORD = `${AUTHENTICATION}/change-password/`
export const GET_SPORT_HALLS = `${BASE_BACKEND_URL}/sport-hall`
export const CONTACT_US = `${BASE_BACKEND_URL}/contact-us`

export const CHANGE_INFO = `${BASE_BACKEND_URL}/player/update`
export const CHANGE_PHOTO = `${BASE_BACKEND_URL}/player/change-profile-photo`
export const CHANGE_OWNER_INFO = `${BASE_BACKEND_URL}/owner/update`
export const GET_MY_SPORT_HALLS = `${BASE_BACKEND_URL}/get-my-sport-halls`
export const ADD_SPORT_HALL = `${BASE_BACKEND_URL}/add-new-sport-hall`
export const DELETE_MY_SPORT_HALL = `${BASE_BACKEND_URL}/delete-my-sport-hall`
export const UPDATE_MY_SPORT_HALL = `${BASE_BACKEND_URL}/update-my-sport-hall`

export const GET_SPORT_HALL_USER = `${BASE_BACKEND_URL}/get-sport-hall-user`
export const GET_SPORT_HALL_RESERVATIONS = `${BASE_BACKEND_URL}/get-sport-hall-reservations`
export const GET_FRIENDS = `${BASE_BACKEND_URL}/get-friends`
export const RESERVATION = `${BASE_BACKEND_URL}/reservation`
export const GET_PERMANENT_TEAMS = `${BASE_BACKEND_URL}/get-permanent-teams`
export const GET_USERS = `${BASE_BACKEND_URL}/get-users`
export const INVITE_TEMPORARY_TEAM = `${BASE_BACKEND_URL}/invite-temporary-team`
export const REMOVE_INVITE_TEMPORARY_TEAM = `${BASE_BACKEND_URL}/remove-invite-temporary-team`
export const GET_INVITED_USERS = `${BASE_BACKEND_URL}/get-invited-users`
export const CREATE_TEAM = `${BASE_BACKEND_URL}/team`
export const GET_TEAMS = `${BASE_BACKEND_URL}/team/all`
export const DELETE_TEAM = `${BASE_BACKEND_URL}/team/delete`
export const INVITE_TEAM_MEMBER = `${BASE_BACKEND_URL}/team/invite-member`
export const DELETE_TEAM_MEMBER = `${BASE_BACKEND_URL}/team/delete-member`
export const ADD_TEAM_MEMBER = `${BASE_BACKEND_URL}/team/add-member`

export const GET_PLAYER = `${BASE_BACKEND_URL}/player/all`
export const DELETE_PLAYER_FRIEND = `${BASE_BACKEND_URL}/player/delete-friend`
export const GET_PLAYER_INVITATION = `${BASE_BACKEND_URL}/player/invitation`
export const GET_PLAYER_FRIENDS = `${BASE_BACKEND_URL}/player/friends`
export const GET_PLAYER_GAMES = `${BASE_BACKEND_URL}/player/games`
export const UPDATE_INVITATION_STATUS = `${BASE_BACKEND_URL}/player/update-invitation-status`

export const CONFIRM_EMAIL = `${BASE_BACKEND_URL}/authentication/confirm-email/?token=`
export const RESEND_CONFIRMATION_TOKEN = `${BASE_BACKEND_URL}/authentication/resend-confirmation-email`

