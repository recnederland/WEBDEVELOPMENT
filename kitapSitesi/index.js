const express = require("express");
const app     = express();
app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/dosyalar"));
var ucTaneKitap = [
  {kitapismi : "Sefiller" , fiyat: 20 , index : 0},
  {kitapismi : "Suç ve Ceza" , fiyat: 50, index : 1},
  {kitapismi : "Tehlikeli Oyunlar" , fiyat: 30, index: 2}
];
// odev: resim linki, yayinevi linki, aciklama verisi linki ekleyelim
app.get("/" , function(req , res){
    res.render("anasayfa" , { kitaplar : ucTaneKitap } );
});
app.get("/kitap/:isim/:index", function(req, res){
    var indexDegeri = req.params.index;
    var kitapIsmi = ucTaneKitap[indexDegeri].kitapismi;
    var kitapFiyati = ucTaneKitap[indexDegeri].fiyat;
    res.render("kitap" , { isim : kitapIsmi , fiyat : kitapFiyati }  );
});


// app.get("/kitap/:isim/:index",function(req, res){
//     var kitapIsmi = req.params.isim;
//     var indexDegeri = req.params.index;
//     res.send("kitap ismi : " + kitapIsmi + indexDegeri);
// });


// buna urun-:isim vb ornek yapalim
// app.get("/urun-:baslik", function(req, res){
//     res.send("ürün sayfası");
// });
// ya da diger function yazimi ile
//app.get("/urun-:isim",(req,res)=>{
  //  res.send("deneme");
//})
// amazon ornegi oldu alttaki
// app.get("/:isim/dp/:urunkodu/:referans", function(req, res){
//     res.send("merhaba amazon ornegi");
// });


app.listen(8000);
