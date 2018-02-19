module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'vendor.js': /^(?!app)/,
                'app.js': /^app/
            }
        },
        stylesheets: {
            joinTo: {
                'vendor.css': /^(?!app)/,
                'app.css': /^app/
            }
        },
        templates: {
            joinTo: {
                'templates.js': /^app/
            }
        }
    },
    plugins: {
        babel: {
            "presets": ["env"],
            //"plugins": [
            //    "transform-decorators-legacy"
            //]
        },
        digest: {
            alwaysRun: false,
            environments: ['production']
        },
        copycat: {
            //add file to root of wwwroot
           // "fonts": ["node_modules/bootstrap/fonts", "node_modules/font-awesome/fonts"],
           // "/": ["node_modules/angular-ui-grid/ui-grid.eot", "node_modules/angular-ui-grid/ui-grid.svg", "node_modules/angular-ui-grid/ui-grid.ttf", "node_modules/angular-ui-grid/ui-grid.woff"],
            verbose: false, //shows each file that is copied to the destination directory 
            onlyChanged: true
        }
    },
    paths: {
        public: "wwwroot"
    },
    server: {
        port: 6832
      }

}