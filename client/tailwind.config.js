module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "clouds-img": "url('https://wallpapercave.com/wp/wp2742875.jpg')",
        "universe-img":
          "url('https://png.pngtree.com/background/20210715/original/pngtree-hand-drawn-cartoon-universe-outer-space-outer-space-background-picture-image_1303773.jpg')",
        "banner-img":
          "url('https://wpimg.pixelied.com/blog/wp-content/uploads/2021/08/03132930/branded-banner-reddit-banner-size.jpg')",
        "profile-pic":
          "url('https://ipravda.sk/res/2018/12/18/thumbs/stalin_01-clanokW.jpg')",
      },
    },
  },

  plugins: [require("@themesberg/flowbite/plugin")],
};
