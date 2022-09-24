const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const characters = [
  {
    name: "콘",
    content: "https://kakaofriendsmbti.netlify.app/images/ENFJ.png",
    mbti: "ENFJ",
  },
  {
    name: "빠냐",
    content: "https://kakaofriendsmbti.netlify.app/images/ESTJ.png",
    mbti: "ESTJ",
  },
  {
    name: "앙몬드",
    content: "https://kakaofriendsmbti.netlify.app/images/INFP.png",
    mbti: "INFP",
  },
  {
    name: "어피치",
    content: "https://kakaofriendsmbti.netlify.app/images/ENTP.png",
    mbti: "ENTP",
  },
  {
    name: "죠르디",
    content: "https://kakaofriendsmbti.netlify.app/images/ISFJ.png",
    mbti: "ISFJ",
  },
];

app.get("/", function (req, res) {
  res.send("Hello Node.js");
});

app.get("/hello", function (req, res) {
  res.send("안녕하세요");
});

app.post("/mbti", function (req, res) {
  const mbti = req.query.mbti;
  const mbti2 = mbti.map((item) => {
    return JSON.parse(item);
  });

  let mbtiStr = "";

  mbti2.forEach((item) => {
    const keys = Object.keys(item);
    const values = Object.values(item);
    const maxStr = values[0] >= values[1] ? keys[0] : keys[1];
    mbtiStr += maxStr;
  });

  let countArray = [];

  characters.forEach((item, key) => {
    let count = 0;
    let index = 0;

    // for of (문자열 반복문)
    for (let x of item.mbti) {
      if (mbtiStr[index] === x) {
        count++;
      }
      index++;
    }
    countArray.push({
      key: key,
      count: count,
    });
  });
  let maxValue = 0;
  let maxKey = null;

  countArray.forEach((item) => {
    if (item.count > maxValue) {
      maxValue = item.count;
      maxKey = item.key;
    }
  });
  let 추천캐릭터 = characters[maxKey];
  res.send(추천캐릭터);
});

app.listen(5000, function () {
  console.log("Start Node Server!");
});
