const multer = require("multer");
const path = require("path");

const upload = async(req, res, dest, fileName, alias) => {

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, dest));
    },
    filename: function (req, file, cb) {
      cb(null, fileName);
    },
  });

  const upload = multer({ storage: storage }).single(alias);

  upload(req, res, async function (err) {
    if (err) {
      return err
    }
  });

  const status = {
    success: true,
    fileName: fileName,
  }

  return status;
}

module.exports = upload;