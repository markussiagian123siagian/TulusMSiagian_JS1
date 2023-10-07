var namaPelanggan = window.prompt("Masukkan nama pelanggan:");
var jenisMobil = window.prompt("Masukkan jenis mobil yang ingin dibeli:\n1. Truk\n2. Innova\n3. Toyota Supra\n4. Lamborghini\n5. Rolls Royce");
switch (jenisMobil) {
    case "1":
    case "Truk":
        window.alert("Selamat " + namaPelanggan + "! Anda telah membeli sebuah Truk.");
        break;
        
        case "2":
        case "Innova":
            window.alert("Selamat " + namaPelanggan + "! Anda telah membeli sebuah Innova.");
            break;
            
            case "3":
            case "Toyota Supra":
                window.alert("Selamat " + namaPelanggan + "! Anda telah membeli sebuah Toyota Supra.");
                break;
                
                case "4":
                case "Lamborghini":
                    window.alert("Selamat " + namaPelanggan + "! Anda telah membeli sebuah Lamborghini.");
                    break;

                    case "5":
                    case "Rolls Royce":
                        window.alert("Selamat " + namaPelanggan + "! Anda telah membeli sebuah Rolls Royce.");
                        break;
                        
                        default:
                            window.alert("Maaf, jenis mobil yang Anda pilih tidak tersedia.");
                            break;
                        }