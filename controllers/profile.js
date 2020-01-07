const handleProfileGet = (db) => (req,res) => {//function that return another function
	const {id} = req.params;
    db.select('*').from('users').where({id})
    .then(user => {
      if(user.length){
    	res.json(user[0])//response is array have one user object
    }else{
    	res.status(400).json('Not found')
    }//we must do if else because if it return empty array it will still ture and
     //it can't be catched
    })
    .catch(err => res.status(400).json('error getting user'))
}

module.exports = {
    handleProfileGet
}