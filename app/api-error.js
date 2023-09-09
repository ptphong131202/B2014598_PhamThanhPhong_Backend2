// create a class api error
class ApiError extends Error
{ 
    // constructor function
    constructor ( statusCode, message )
    {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ApiError;