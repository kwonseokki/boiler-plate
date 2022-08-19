const express = require("express"); // express 모듈 가져오기
const app = express(); // 새로운 express 앱생성
const port = 5000; // 포트번호지정
const { User } = require("./models/User");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//application/x-www.form.urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());
const config = require("./config/key");
mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log("mongoDB connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World! 노드 실행d");
});

app.post("/register", (req, res) => {
  // 회원가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어줌

  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
