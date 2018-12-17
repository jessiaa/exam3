var gulp = require("gulp");
var server = require("gulp-webserver");
gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 9999,
            open: true,
            proxies: [{
                source: "/api/data",
                target: "http://localhost:3000/api/data",
            }]
        }))
})