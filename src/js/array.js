var data = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(data[0]);

var data = ['JavaScript', ['JQery', 'prototype.js'], 'ASP.NET'];
// 結果：JQery　2番目の要素の中の1番目の要素を取得
console.log(data[1][0]);

var obj = { x: 1, y: 2, z: 3 };
console.log(obj.x);
console.log(obj['x']);