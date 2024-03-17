var fruits = ["リンゴ", "バナナ", "イチゴ"];
console.log(fruits[0]);
console.log(fruits[2]);

/* 2.key、value、プロパティーについて説明してください。
key:オブジェクトにおいて、プロパティにアクセスするための識別子。キーは文字列型または記号（Symbol型）で表される。キーはオブジェクト内で一意である必要がある。
value:オブジェクトにおいて、プロパティの実際の値。キーに対応する値がプロパティとして保存される。
プロパティ:オブジェクト内のキーと値の組み合わせ。オブジェクトは、プロパティを保持するデータ構造。 */

var teacher = {
  name: "山田",
  age: 30,
  subject: "国語",
};

var teachers = [
  {
    name: "山田",
    age: 30,
    subject: "国語",
  },
  {
    name: "田中",
    age: 25,
    subject: "数学",
  },
  {
    name: "小林",
    age: 28,
    subject: "社会",
  },
];
console.log(teachers[0].name);
console.log(teachers[2].name);
