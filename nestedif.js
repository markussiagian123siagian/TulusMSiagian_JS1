var harga = 500000000;
var jml_terjual = Math.floor(Math.random() * 10 + 1);
var total_penjualan = harga * jml_terjual;
document.write("Jumlah terjual : " + jml_terjual) ;
document.write("<br>");
document.write("Total Penjualan: Rp." + total_penjualan+"");
if (jml_terjual > 3){
    document.write (" Terlalu banyak yang dibeli!");
}else{
    document.write (" Bisa diambil!")
}