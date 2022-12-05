exports.displayPage = (req, res) => {
    res.json("great success")
}

exports.displayName = (req, res) => {
    const name = req.params.name
    res.json(`Hello ${name}!`)
}