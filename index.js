import express from "express";
import compression from "compression";

import { eventRouter } from "./routes/events.js";
import { participantRouter } from "./routes/participants.js";
import { classCodeRouter } from "./routes/classCode.js";
import { departmentRouter } from "./routes/departments.js";
import { memberRouter } from "./routes/members.js";
import { markRouter } from "./routes/mark.js";
import { authRouter } from "./controllers/auth.js";
import { userRouter } from "./routes/users.js";
import { statisticsRouter } from "./routes/statistics.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(compression());

app.use("/v1/events", eventRouter);
app.use("/v1/participants", participantRouter);
app.use("/v1/classcodes", classCodeRouter);
app.use("/v1/departments", departmentRouter);
app.use("/v1/members", memberRouter);
app.use("/v1/mark", markRouter);
app.use("/v1/users", userRouter);
app.use("/v1/auth", authRouter);
app.use("/v1/statistics", statisticsRouter);
app.use("/", (req, res) => {
  res.status(200).json({ success: true });
});

export default app;

app.listen(port, (err, res) => {
  if (err) {
    console.log(err);
    return res.status(500).send(err.message);
  } else {
    console.log("[INFO] Server Running on port:", port);
  }
});
