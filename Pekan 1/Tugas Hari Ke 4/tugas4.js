//Soal 1

console.log("LOOPING PERTAMA");
var angka = 0;
while (angka <= 18) {
    angka += 2;
    console.log(angka + " - I love coding");
}

console.log("LOOPING KEDUA");
var angka = 20;
var angkaPembanding = 0;
while (angkaPembanding < angka) {
    console.log(angka + " - I will become a frontend developer");
    angka -= 2;
}

//Soal 2
var angka = 20;
for (var pembanding = 1; pembanding <= angka; pembanding++) {
    if (pembanding % 2 == 0 && pembanding % 3 != 0) {
        console.log(pembanding + " - Berkualitas");
    } else if (pembanding % 2 == 1 && pembanding % 3 != 0) {
        console.log(pembanding + " - Santai");
    } else if (pembanding % 2 == 1 && pembanding % 3 == 0) {
        console.log(pembanding + " - I Love Coding");
    } else if (pembanding % 2 == 0 && pembanding % 3 == 0) {
        console.log(pembanding + " - Berkualitas");
    } else {
        console.log(pembanding);
    }
}

//Soal 3
for (var tinggi = 1; tinggi <= 7; tinggi++) {
    var cetak = "";
    for (var alas = 1; alas <= tinggi; alas++) {
        cetak += "#";
    }
    console.log(cetak);
}

//Soal 4
var kalimat = "saya sangat senang belajar javascript"
var kata = kalimat.split(" ")
console.log(kata);

//Soal5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
for (var i = 0; i < daftarBuah.length; i++) {
    console.log(daftarBuah[i]);
}
