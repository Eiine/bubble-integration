const postData = (req, res) => {
  const { id, url, clicks } = req.body;
  console.log(id, url, clicks);
};
