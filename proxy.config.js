const proxy = [
    {
        context: "/api",
        target: "http://localhost:8080",
        pathRewrite: { "^/api": "/v1" }
    }
];
module.exports = proxy;
