module.exports = {
  apps: [{
    name: "my-nextjs-app",
    script: "npm",
    args: "start -p 3001",
    watch: true,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
};


// new code 


// module.exports = {
//   apps: [{
//     name: "my-nextjs-app",
//     script: "./node_modules/next/dist/bin/next",
//     args: "start -p 3001", // Start the app on port 3001
//     cwd: "/home/ec2-user/labx", // Set the correct working directory
//     watch: false, // Disable file watching in production
//     env: {
//       NODE_ENV: "development",
//     },
//     env_production: {
//       NODE_ENV: "production",
//     }
//   }]
// };
