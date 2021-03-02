import express from "express";
import helmet from "helmet";
// helmet  외부의 공격에 보호
import pageRouter from "./router/pageRouter";
import path from "path";

const app = express();

const PORT = 3000;

app.use(helmet());
app.set("view engine", "pug");

// static = 어떤 파일에서도 접근이 가능한 변수
app.use(express.static(path.join(__dirname, "/assets")));

app.use("/", pageRouter);

app.listen(PORT, () => {
  console.log(`🍀 ${PORT} SERVER START!`);
});
