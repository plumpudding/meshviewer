module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-git-describe")
  grunt.loadNpmTasks("grunt-gh-pages")

  grunt.initConfig({
    "git-describe": {
      options: {},
      default: {}
    },
    "gh-pages": {
      options: {
        base: "build"
      },
      src: ["**"]
    }
  })

  grunt.registerTask("saveRevision", function() {
    grunt.event.once("git-describe", function (rev) {
      grunt.option("gitRevision", rev)
    })
    grunt.task.run("git-describe")
  })

  grunt.loadTasks("tasks")

  grunt.registerTask("default", ["bower-install-simple", "lint", "saveRevision", "copy", "sass", "requirejs"])
  grunt.registerTask("lint", ["eslint"])
  grunt.registerTask("dev", ["default", "connect:server", "watch"])
  grunt.registerTask("release", ["default", "gh-pages"])
}

