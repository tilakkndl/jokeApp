module.exports = (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500
    err.status = err.status || "error"
    return res.status(err.statusCode).json({
        statusCode: err.statusCode,
        status: err.status,
message: err.message,
success: false,
stack: err.stack
    })
}