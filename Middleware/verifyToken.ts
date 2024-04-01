// import jwt from "jsonwebtoken";

// export const verifyToken = (req: any, res: any, next: any): void => {
//   const token: string | undefined = req.headers["authorization"];
//   console.log(token);
//   if (!token || !token.startsWith("Bearer ")) {
//     return res
//       .status(401)
//       .json({ success: false, message: "Unauthorized access" });
//   }
//   const token1 = token.split(" ")[1];
//   jwt.verify(token1, "sudhohsgoes", (err: any, decoded: any) => {
//     if (err) {
//       return res
//         .status(401)
//         .json({ success: false, message: "Failed to authenticate token" });
//     }
//     req.decoded = decoded;
//     next();
//   });
// };
