// Rencananya mau pakai mapbox-gl terus dideploy ke Netlify, jadi harus pakai fix ini:
module.exports = {
  babel: {
    loaderOptions: {
      ignore: ["./node_modules/mapbox-gl/dist/mapbox-gl.js"],
    },
  },
};
