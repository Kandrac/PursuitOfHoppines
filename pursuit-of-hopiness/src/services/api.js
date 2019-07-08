import axios from 'axios';

// sends user's token with each request so server can check login status
export function setTokenHeader(token) {
	// if token supplied, attach token to all future requests
	if(token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	} else {
		// but if function invoked with no token (i.e. logout), remove the token from requests
		delete axios.defaults.headers.common['Authorization'];
	}
}

/**
 * A wrapper around axios API call that formats errors, etc
 * @param {*} method HTTP verb to use
 * @param {*} path route path/endpoint
 * @param {*} data (optional) data in JSON format for POST requests
 */
export function apiCall(method, path, data=false) {
	return new Promise((resolve, reject) => {
		// [method] is a computed value, so can't use dot syntax
		// axios[method] returns a function, to which we pass path and data
		// (e.g. axios.get() or axios.post())
		// (we set the method toLowerCase so it matches the axios property!)
		return axios[method.toLowerCase()](path, data)
			.then(res => {
				// whenever we get results from axios, it comes back in a certain format:
				// an object 'response' with a sub-object 'data'
				console.log('hello');
				return resolve(res.data);
			}).catch(err => {
				// inside of response.data is a sub-object 'error'
				console.log(err);
				return reject(err.response.data.error);
			});
	});
}