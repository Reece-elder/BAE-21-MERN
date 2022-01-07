// Nested Middleware
const nested = (req, res, next) => {
    console.log("Nested middleware :o");
    next();
};

// Exporting my nested middleware as a function called nestedExp
module.exports = nested;