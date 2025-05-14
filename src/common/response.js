exports.success = (res, message, data) => {
    res.status(200).json({ message, data });
}

exports.failed = (res, message, data) => {
    res.status(400).json({ message, data });
}