async function getAllPoems () {
  const res = await fetch('/api/get_all_poems')
}

module.exports = router

let Sentiment = require('sentiment');
let sentiment = new Sentiment();
let result = sentiment.analyze('Cats are stupid.');
console.dir(result);    // Score: -2, Comparative: -0.666


let heatmap = h337.create({
  container: domElement
});

heatmap.setData({
  max: 5,
  data: [{ x: 10, y: 15, value: 5}]
});