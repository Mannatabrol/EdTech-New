const dns = require("dns");
// Set custom DNS servers (Google Public DNS)
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = () => {
    mongoose
        .connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("DB CONNECTED SUCESSFULLY"))
        .catch((err) => {
            console.log("DB CONNECTION FAILED");
            console.error(err);
            process.exit(1);
        });
};