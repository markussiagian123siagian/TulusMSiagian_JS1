function hitungHarga() {
            
    var merkMobil = document.getElementById("merk").value;
    var tahunMobil = parseInt(document.getElementById("tahun").value);
    var hargaMobil = parseInt(document.getElementById("harga").value);
    var diskon = parseFloat(document.getElementById("diskon").value);

    
    var hargaSetelahDiskon = hargaMobil - (hargaMobil * (diskon / 100));

    
    var jenisDiskon = "";
    if (tahunMobil >= 2023) {
        jenisDiskon = "Diskon tahun ini!";
    } else {
        jenisDiskon = "Diskon tahun lama.";
    }

    
    var hasil = "Merk Mobil: " + merkMobil + "\nTahun Produksi: " + tahunMobil + "\nHarga Mobil: Rp " + hargaMobil + "\n" + jenisDiskon + "\nHarga Setelah Diskon: Rp " + hargaSetelahDiskon.toFixed(2);
    alert(hasil);
}