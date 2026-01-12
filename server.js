require("dotenv").config();
const app = require("./src/app");
const { connectPostgres } = require("./src/db/postgres/pool");
const { connectMongo } = require("./src/db/mongo/connection");

async function startServer() {
  try {
    await connectPostgres();
    await connectMongo();
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

startServer();