module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "clouds-img":
          "url('https://www.macmillandictionaryblog.com/wp-content/uploads/2018/04/cloud--810x528.jpg')",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["last"],
    },
  },
  plugins: [],
};
