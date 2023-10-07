function munculhargamobil(){ 
    var mobil = (document.form.input_mobil.value);  
    if (mobil == "Avanza Veloz"){
        hargamobil = 500000;
    } 
     else if(mobil == "Innova Reborn"){
        hargamobil = 1500000;
    }
    else if(mobil == "Rubicon"){
        hargamobil = 2500000;
    }
    document.form.output_mobil.value=eval(hargamobil); 
     }
     function munculhargatipemobil(){
        var tipemobil = (document.form.input_tipemobil.value); 
        if (tipemobil == "Sedan"){
            tambahanbiaya = 0.10;
        }
        else if (tipemobil == "Sport"){
            tambahanbiaya = 0.50;
        }
        else if (tipemobil == "Dakar"){
            tambahanbiaya = 0.5;
        }
        document.form.output_tambahanbiaya.value=eval(tambahanbiaya)*eval(document.form.output_hargamobil.value); 
    }
    function apakahmember(){
        if (document.form.memberbukan.checked == true){
            diskon = 0.10;
        }
        else{
            diskon=0;
        }
        document.form.output_diskon.value=eval(diskon)*(eval(document.form.output_tambahanbiaya.value) + eval(document.form.output_hargamobil.value));
    } function totalharga(){
        var jumlahmobil = (document.form.input_jumlahmobil.value);
        document.form.output_totalharga.value=eval(jumlahmobil)*(eval(document.form.output_tambahanbiaya.value)+eval(document.form.output_hargamobil.value))-eval(document.form.output_diskon.value) 
    }