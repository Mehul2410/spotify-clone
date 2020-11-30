export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "0b5342eaf26645db89f07f70db648a50";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
