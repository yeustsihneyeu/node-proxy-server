export const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json(err.message);
};

export const notFound = (req, res) => {
    res.status(404).json('Resource Not Found');
};