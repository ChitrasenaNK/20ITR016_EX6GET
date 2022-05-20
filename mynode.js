var http=require('http');
var url=require('url');

function onRequest(req,res)
{
    var a=url.parse(req.url,true);
    var q=a.query;
    var n=q.name;
    var u=q.uname;
    var e=q.email;
    var g=q.gender;
    var c=q.city;
    var aa=q.addr;
    var p=q.phno;
    var eve="";
    var c1=q.check1;
    var c2=q.check2;
    var c3=q.check3;
    if(c1=="drama")
           {
               eve=c1+" "
           }
           if(c2=="singing")
           {
               eve=eve+c2+" "
           }
           if(c3=="dancing")
           {
               eve=eve+c3
           }
    res.write("<html> <body><table border='2'>");
    res.write("<tr><td>NAME:</td> <td>"+n+"</td></tr>");
    res.write("<tr><td>MAIL-ID:</td> <td>"+e+"</td></tr>");
    res.write("<tr><td>USERNAME:</td> <td>"+u+"</td></tr>");
    res.write("<tr><td>GENDER:</td> <td>"+g+"</td></tr>");
    res.write("<tr><td>CITY:</td> <td>"+c+"</td></tr>");
    res.write("<tr><td>ADDRESS:</td> <td>"+aa+"</td></tr>");
    res.write("<tr><td>PH-NO:</td> <td>"+p+"</td></tr>");
    res.write("<tr><td>EVENT:</td> <td>"+eve+"</td></tr>");
    
    res.write("</table> </body> </html>");
    res.end();
}
http.createServer(onRequest).listen(8080);
console.log("server started");

