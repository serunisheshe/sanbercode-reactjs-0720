//Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var firstCharKataKedua = kataKedua.charAt(0).toUpperCase()
var charKataKedua = kataKedua.substr(1)
var newKataKedua = firstCharKataKedua.concat(charKataKedua);
console.log(kataPertama.concat(" ").concat(newKataKedua).concat(" ").concat(kataKetiga).concat(" ").concat(kataKeempat.toUpperCase()));

//Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var kataPertama = Number(kataPertama);
var kataKedua = Number(kataKedua);
var kataKetiga = Number(kataKetiga);
var kataKeempat = Number(kataKeempat);

console.log(kataPertama + kataKedua + kataKetiga + kataKeempat);

//Soal 3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24)
var kataKelima = kalimat.substring(25);

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

//Soal 4
var nilai;
nilai = 78;
if (nilai >= 80) {
    console.log("A")
} else if (nilai >= 70 && nilai < 80) {
    console.log("B")
} else if (nilai >= 60 && nilai < 70) {
    console.log("C")
} else if (nilai >= 50 && nilai < 60) {
    console.log("D")
} else {
    console.log("E")
}

//Soal 5
var tanggal = 10;
var bulan = 7;
var tahun = 1994;

switch (bulan) {
    case 1: {
        bulan = "Januari";
        console.log(tanggal + (" ") + bulan + (" ") + tahun);
        break;
    }
    case 2: {
        bulan = "Februari";
        console.log(tanggal + (" ") + bulan + (" ") + tahun);
        break;
    }
    case 3: {
        bulan = "Maret";
        console.log(tanggal + (" ") + bulan + (" ") + tahun);
        break;
    }
    case 4: {
        bulan = "April";
        console.log(tanggal + (" ") + bulan + (" ") + tahun);
        break;
    }
    case 5: {
        bulan = "Mei";
        console.log(tanggal + (" ") + bulan + (" ") + tahun);
        break;
    }
    case 6: {
        bulan = "Juni";
        console.log(tanggal + (" ") + bulan + (" ") + tahun);
        break;
    }
    case 7: {
        bulan = "Juli";
        console.log(tanggal + (" ") + bulan + (" ") + tahun);
        break;
    }
    case 8: {
        bulan = "Agustus";
        console.log(tanggal + (" ") + bulan + (" ") + tahun);
        break;
    }
    case 9: {
        bulan = "September";
        console.log(tanggal + (" ") + bulan + (" ") + tahun);
        break;
    }
    case 10: {
        bulan = "Oktober";
        console.log(tanggal + (" ") + bulan + (" ") + tahun);
        break;
    }
    case 11: {
        bulan = "November";
        console.log(tanggal + (" ") + bulan + (" ") + tahun);
        break;
    }
    case 12: {
        bulan = "Desember";
        console.log(tanggal + (" ") + bulan + (" ") + tahun);
        break;
    }
    default: {
        console.log('Bulan lahir anda Salah.');
    }
}
