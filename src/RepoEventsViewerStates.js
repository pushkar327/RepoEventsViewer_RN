export const LOADING = { "loading": true, "loaded": false, "error": false, "eventTypeError": false, "repoNameError" :false, "repoOwnerError": false };
export const LOADED = { "loading": false, "loaded": true, "error": false, "eventTypeError": false, "repoNameError" :false, "repoOwnerError": false };
export const ERROR = { "error": true, "loading": false, "loaded": true, "eventTypeError": false, "repoNameError" :false, "repoOwnerError": false };
export const REPO_NAME_INVALID = { "repoNameError": true, "repoOwnerError" :false, "eventTypeError": false, "loading": false, "loaded": true};
export const REPO_OWNER_INVALID = { "repoOwnerError": true, "repoNameError" :false, "eventTypeError": false, "loading": false, "loaded": true };
export const EVENT_TYPE_INVALID = { "eventTypeError": true, "repoNameError" :false, "repoOwnerError": false, "loading": false, "loaded": true };
export const FIELDS_VALID = { "eventTypeError": false, "repoNameError" :false, "repoOwnerError": false, "loading": false, "loaded": true };

