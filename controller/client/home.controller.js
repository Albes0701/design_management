//[GET] /
module.exports.index = (req, res) => {
  res.render("client/home/index.pug", {
    pageTitle: "Trang chủ",
  });
};
