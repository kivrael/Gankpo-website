const images = {};
function importAll(r) {
  r.keys().forEach((key) => (images[key] = r(key)));
}
importAll(require.context("./", false, /\.(png|jpe?g|svg)$/));
export default images;