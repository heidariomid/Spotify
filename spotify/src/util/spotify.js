// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = '25ee89b8a70a4fdda172b01ddad41f55';
const redirectUri = 'http://localhost:3000/';
const scopes = ['user-read-currently-playing', 'user-read-recently-played', 'user-read-playback-state', 'user-top-read', 'user-modify-playback-state'];

// NOTE //
// window.location.hash
// #access_token=BQD&token_type=Bearer&expires_in=3600
//substring(1)
//access_token=BQD&token_type=Bearer&expires_in=3600
//split('&')
//["access_token=BQD", "token_type=Bearer", "expires_in=3600"]
//initial
//{access_token: "BQD",expires_in: "3600",token_type: "Bearer}
//item
//access_token=BQD         //token_type=Bearer         //expires_in=3600
//parts
//["access_token", "BQD"] //["token_type", "Bearer"] //["expires_in", "3600"]
//decodeURIComponent(parts[1])
//BQD Bearer 3600
//return
//{access_token: "BQD", token_type: "Bearer", expires_in: "3600"}
// NOTE //

export const getTokenFromResponse = () => {
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			var parts = item.split('=');
			initial[parts[0]] = decodeURIComponent(parts[1]);
			return initial;
		}, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
