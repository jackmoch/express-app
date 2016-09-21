'use strict';

module.exports.destroy =  (req, res) => {
	req.session.destroy((err) => {
		if(err) throw err
		res.redirect('/login')
	})
}

module.exports.edit = (req, res) => 
	res.render('logout', {page: 'Logout'})