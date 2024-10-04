import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if(!token){
            res.status(401).json({
                message : "Unauthorized user",
                success : false
            });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            res.status(401).json({
                message : "Invalid token",
                success : false
            });
        }
        req.id = decode.userId;
        next();

    } catch (error) {
        console.log(error);
    }
};
