const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
};

const CONVERT = {
  WEEK_TO_SECONDS: 604800,
};

const USER_ATTRIBUTES = [
  'token',
  'email',
  'emailVerified',
  'publicName',
  'username',
  'pictureUrl',
  'newUser',
];

const POST_AUTH_ENDPOINT = '/auth';
const POST_LOGOUT_ENDPOINT = '/logout';
const GET_WORKOUTS_ENDPOINT = '/workouts/get';
const MUTATE_WORKOUTS_ENDPOINT = '/workouts';
const SEARCH_PT_ENDPOINT = '/pt/search';
const GET_CLIENT_ENDPOINT = '/client/get';

const DAYS_OF_WEEK = [
  { label: 'Monday', value: 'MON' },
  { label: 'Tuesday', value: 'TUE' },
  { label: 'Wednesday', value: 'WED' },
  { label: 'Thursday', value: 'THU' },
  { label: 'Friday', value: 'FRI' },
  { label: 'Saturday', value: 'SAT' },
  { label: 'Sunday', value: 'SUN' },
];

export {
  STATUS_CODES,
  CONVERT,
  USER_ATTRIBUTES,
  POST_AUTH_ENDPOINT,
  POST_LOGOUT_ENDPOINT,
  GET_WORKOUTS_ENDPOINT,
  MUTATE_WORKOUTS_ENDPOINT,
  SEARCH_PT_ENDPOINT,
  GET_CLIENT_ENDPOINT,
  DAYS_OF_WEEK,
};
