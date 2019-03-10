const Clarifai = require('clarifai');

const app = new Clarifai.App({
 /*apiKey: '2347731f43fe4ca38b9bf2daf3bf24d0'*/
	/*apiKey:'272b823953084132a78c0a6c009781b2'*/
  apiKey: process.env.API_CLARIFAI
});

const handleApiCall = (req, res) => {
	 app.models
	 .predict(Clarifai.DEMOGRAPHICS_MODEL, req.body.input)
	 .then(data => {
	 	res.json(data);
	 })
	 .catch(err => res.status(400).json('unable to work with API'))
}


const handleImage = (db) => (req,res) => {
	const {id} = req.body;
	 db('users').where('id', '=', id)
     .increment('entries',1)
     .returning('entries')
     .then(entries => {
     	res.json(entries[0]);
     })
     .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
	handleImage,
	handleApiCall
}