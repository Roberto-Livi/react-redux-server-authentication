exports.signup = function(req, res, next) {
    console.log(req.body)
    // See if a user with the given email exists

    // if a user with email does exist, return an error

    // if a suer with email does NOT exist, create and save user record

    // Respond to request indicating the user was created
    res.send({ success: true });
}