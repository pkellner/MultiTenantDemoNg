install npm

go to directory and "npm init" (this creates packages.json where dependencies are tracked)

npm install gulp gulp-util vinyl-source-stream browserify --save

gulp because that is our build system essentially
gulp-util for common fuctionality like logging
vinyl-source-stream to take browserify stream and make it work with gulp plugins like gulp-util, uglify, etc.
browserify

add --save tells npm to include the package dependencies inside packages.json (--save-dev and --save-optional will let you save the dependencies under devDepenencies and optionalDependencies).

