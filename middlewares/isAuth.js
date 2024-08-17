import jwt from "jsonwebtoken";

export function isAuth(req, res, next) {
  try {
    const token = req.header("x-auth-token");
    if (!token)
      return res.status(403).json({
        success: false,
        data: null,
        message: "Access denied",
      });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    res.status(403).json({
      success: false,
      data: null,
      message: "Invalid Token",
    });
  }
}
