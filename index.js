const express = require("express"); // express 모듈 가져오기
const app = express(); // 새로운 express 앱생성
const port = 5000; // 포트번호지정

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://admin:1234@react-node.bgg018w.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongoDB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World! 노드 실행");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
