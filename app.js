// import express and cors
const express = require( 'express' );
const cors = require( 'cors' );

// import contac.route
const contactRouter = require( './app/routes/contact.route' );

// import api error
const apiError = require( "./app/api-error" );


const app = express();

app.use( cors() );
app.use( express.json() );

// create rules 
app.use( "/api/contacts", contactRouter );

// handle 404 responses
app.use( ( req, res, next ) =>
{ 
    // code ở đây sẽ không chạy khi không có route được đinh nghĩa nào khớp với yêu cầu.
    // Gọi đến hàm next() để chuyển sang middleware xữ lý lỗi
    return next( new apiError( 404, "Resource not found." ) );
} )

// define error handling middleware last, after other app.use() and routes calls
app.use( ( err, req, res, next ) =>
{
    // Middleware xữ lý lỗi tập trung
    // trong các đoạn code xữ lý ở route, gọi next(error)
    // sẽ chuyễn sang middleware xữ lý lỗi này
    return res.status( err.statusCode || 500 ).json( {
        message: err.message || "Internal Server Error",
    } );
} );

app.get( "/", ( req, res ) =>
{
    res.json( { message: "Welcome to contact book application." } );
} )



module.exports = app;