const authPage = (permission) => {
    return (req, res, next) => {
        const userRole = req.body.role
        if (permission.includes(userRole)) {
            next()
        } else {
            return res.status(401).json("You don't have permission")
        }
    }
}

module.exports = authPage;