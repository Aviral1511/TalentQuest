// import jwt from "jsonwebtoken";

// export const isAuthenticated = async (req, res, next) => {
//     try {
//         const token = req.cookies.token;

//         if(!token){
//             res.status(401).json({
//                 message : "Unauthorized user",
//                 success : false
//             });
//         }

//         const decode = jwt.verify(token, process.env.SECRET_KEY);
//         if(!decode){
//             res.status(401).json({
//                 message : "Invalid token",
//                 success : false
//             });
//         }
//         req.id = decode.userId;
//         next();

//     } catch (error) {
//         console.log(error);
//     }
// };
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized user",
                success: false
            });
        }

        try {
            const decode = jwt.verify(token, process.env.SECRET_KEY);
            req.id = decode.userId;
            next();
        } catch (err) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            });
        }

    } catch (error) {
        console.log("Authentication Error:", error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};
