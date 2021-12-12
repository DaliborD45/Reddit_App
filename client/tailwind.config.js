module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "clouds-img":
          "url('https://www.macmillandictionaryblog.com/wp-content/uploads/2018/04/cloud--810x528.jpg')",
        "universe-img":
          "url('https://png.pngtree.com/background/20210715/original/pngtree-hand-drawn-cartoon-universe-outer-space-outer-space-background-picture-image_1303773.jpg')",
      },
    },
  },

  plugins: [require("@themesberg/flowbite/plugin")],
};
