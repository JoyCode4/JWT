// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  // Write your code here
  try {
    const token = req.cookies.jwtToken;
    if (!token) {
      return res
        .status(401)
        .send({ status: false, msg: "jwt must be provided" });
    }
    const payload = jwt.verify(token, "eCommerce");
  } catch (e) {
    return res.status(401).send({ status: false, msg: "jwt must be provided" });
  }
  next();
};

export default jwtAuth;
