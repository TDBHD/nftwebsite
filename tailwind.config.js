const { default: main } = require("./src/main");

module.exports = {
    mode:"jit",
    darkMode:"true",
    content: [
      "./index.html",
      "./src/main.jsx",
    ],
    
    theme: {
      extend: {
        

    variants: {
      extend: {},
    },
    plugins: [],
  },
},
};