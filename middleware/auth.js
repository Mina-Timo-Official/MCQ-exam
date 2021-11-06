const Auth = (student) => (req, res, next) =>{
    console.log("here")
    if (!student.name) {
        return res.redirect('/');
    }
    return next();
}

module.exports = Auth

