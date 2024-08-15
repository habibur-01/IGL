const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
const sequelize = require("./config/database");
const itemRoutes = require("./routes/subMenuRoutes");
const sisterSubMenuRoutes = require("./routes/sisterSubMenuRoutes")
const addPhotoRoute = require("./routes/addPhotoRoutes")
const addAboutUsRoute = require("./routes/aboutUsContentRoutes")
const sisterConsernRoute = require("./routes/sisterConcerRoutes")
const teamMemberRoute = require("./routes/addTeamMemberRoute")
const addAboutUsSubRoute = require("./routes/aboutUsSubMenuRoute")
// middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

// Serve static files from the 'uploads' directory
app.use('/public', express.static('public'));


// Routes
app.use("/api", itemRoutes);
app.use('/api', sisterSubMenuRoutes);
app.use('/api', addPhotoRoute);
app.use('/api', addAboutUsRoute)
app.use('/api', sisterConsernRoute)
app.use('/api', teamMemberRoute)
app.use('/api', addAboutUsSubRoute)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
