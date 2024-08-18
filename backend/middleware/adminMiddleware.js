const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
  try {
    const cek = req.headers.authorization;
    if (!cek) {
      return res.status(401).json({
        success: false,
        message: "Token required",
      });
    }

    const token = req.headers.authorization.split(" ")[1];

    const decoded = jwt.verify(token, config.TOKEN_SECRET);
    if (decoded.data.level === "admin") {
      req.auth = decoded;
    } else {
      return res.status(401).json({
        success: false,
        message: "Auth failed",
      });
    }
  } catch (error) {
    return res.status(401).json({
      status: "error",
      message: "Auth failed3",
    });
  }

  // try {
  //   const decoded = jwt.verify(token, config.TOKEN_KEY);
  //   console.log(decoded);
  //   if (decoded.level === 'admin') {
  //     req.auth = decoded;
  //   } else {
  //     return res.status(401).json({
  //       status: "error",
  //       message: "Auth failed2",
  //     });
  //   }
  // } catch (err) {
  //   return res.status(401).json({
  //     status: "error",
  //     message: "Auth failed3",
  //   });
  // }
  return next();
};

module.exports = verifyToken;
