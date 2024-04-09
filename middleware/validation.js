export const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.query);
    if (error) throw { status: 400, message: error.message };
    return next();
}