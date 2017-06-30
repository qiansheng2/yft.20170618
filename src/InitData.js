
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/yft';

var insertData = function(db, callback) {
  /* 连接到表 site */
  var collection = db.collection('销售情况');
  // 插入数据
  var data = [
    {
      '签约日': '2012/03/01',
      '社保编码': '0000',
      '区域': '金牛区',
      '名称': '成都圣洁药房',
      '连锁规模': '5',
      '负责人': '彭总',
      '负责人电话': '18982785085',
      '联系人': '',
      '联系人电话': '',
      '销售经理': '郑智慧'
    }
  ];
  collection.insert(data, function(err, result) {
    if(err){
      console.log('Error:' + err);
      return;
    }
    callback(result);
  });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
  console.log('连接字符串：' + DB_CONN_STR);
  if(err){
    console.log('Error:' + err);
    return;
  }else{
    console.log('连接成功！');
    insertData(db, function(result) {
      console.log(result);
      db.close();
    })
  };
});

