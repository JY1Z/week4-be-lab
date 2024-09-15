const connectDB = require("./config/db");
const express = require("express");
const blogRouter = require("./routes/blogRouter");
const userRouter = require("./routes/userRouter");

const { requestLogger, unknownEndpoint, errorHandler } = require("./middleware/customMiddleware");

// express app
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(requestLogger);

app.get("/", (req, res) => res.send("API Running!"));

// Routes
app.use("/api/blogs", blogRouter);

// Use the userRouter for all /users routes
app.use("/api/users", userRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
