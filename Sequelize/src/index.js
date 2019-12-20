import app from "./app";
import "@babel/polyfill";

async function main() {
    await app.listen(3001);
    console.log("Server on Port 3001");
}

main();