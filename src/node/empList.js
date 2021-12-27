const express = require('express')
const app = express()
const port = 3001


app.get('/empList.do', (req, res) => {
    const mysql = require('mysql');  // mysql 모듈 로드
    const conn = {  // mysql 접속 설정
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'mysql',
        database: 'scott'
    };
     
    
    var connection = mysql.createConnection(conn); // DB 커넥션 생성
    connection.connect();   // DB 접속
    
    let testQuery = "SELECT * FROM EMP";
     
    connection.query(testQuery, function (err, results, fields) { // testQuery 실행
        if (err) {
            console.log(err);
        }
        res.header("Access-Control-Allow-Origin","*")

    //    res.set("Content-Type","application/json");
    //    res.send(results);
        res.json(results)
        //console.log(results);
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

//res.send(body), res.send(status, body) : 클라이언트에 응답을 보냄. 상태 코드는 옵션. 기본 콘텐츠 타입은 text/html이므로 text/plain을 보내려면 res.set(‘Content-Type’, ‘text/plain’)을 먼저 호출 해야한다. JSON을 보낼거면 res.json을 쓰자.
//res.json(json), res.json(status, json) : 클라이언트로 JSON 값을 보냄.


//  sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
//ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'mysql';
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql'