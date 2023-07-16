const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
let filePath=''



const qrcode = require('qrcode');

//const textToEncode = 'Hello, World!';


app.get('/',function(req,res){
    res.render('index',{imageUrl:filePath})
})


app.post('/',function(req,res){

    const textToEncode = req.body.qr
    console.log(textToEncode )
    filePath = "./qrcode.png";


qrcode.toFile(filePath, textToEncode, function (err) {
  if (err) {
    console.error(err);
    return;
  }

//   const image = document.createElement('img');
// image.src = "C:/Users/mithil pranav/Desktop/qrcode.png"
// const parent = document.getElementById('massgeth')
// parent.appendChild(image)

res.redirect('/')
});
app.use(express.static('public'));


})

app.use(express.static(__dirname));

app.listen(process.env.Port,function(){
    console.log('server has successfully ')
})