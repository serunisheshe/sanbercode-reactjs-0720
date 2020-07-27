//Soal 1
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]
var objectDaftarPeserta = {
    nama: "Asep",
    jenisKelamin: "laki-laki",
    hobi: "baca buku",
    tahunLahir: 1992
}

console.log(arrayDaftarPeserta[0])
console.log(objectDaftarPeserta.nama)

//Soal 2
var arrayBuah = [{
    nama: "strawberry",
    warna: "merah",
    adaBiji: "ada",
    harga: 9000
}, {
    nama: "jeruk",
    warna: "oranye",
    adaBiji: "ada",
    harga: 8000
}, {
    nama: "Semangka",
    warna: "Hijau & Merah",
    adaBiji: "ada",
    harga: 10000
}, {
    nama: "Pisang",
    warna: "Kuning",
    adaBiji: "tidak",
    harga: 5000
}]

console.log(arrayBuah[0]);

//Soal 3
var dataFilm = []

function addDataFilm(nama, durasi, genre, tahun) {
    var film = {}
    film.nama = nama
    film.durasi = durasi
    film.genre = genre
    film.tahun = tahun

    dataFilm.push(film);
    return dataFilm[0]
}

console.log(addDataFilm("Happyku", 100, "komedi", 1994));

//Soal 4 Release 0
class Animal {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//Soal 4 Release 1
class Ape extends Animal {
    constructor(name, legs, cold_blooded) {
        super(name, cold_blooded);
        this.legs = 2;
    }
    yell() {
        return "Auooo";
    }
}

var sungokong = new Ape("kera sakti")
console.log(sungokong.yell());

class Kodok extends Animal {
    constructor(name, legs, cold_blooded) {
        super(name, cold_blooded);
        this.legs = 2;
    }
    jump() {
        return "hop hop";
    }
}

var kodok = new Kodok("buduk")
console.log(kodok.jump());

//Soal 5
class Clock {
    constructor(template) {
        this.date = new Date();
        this.hours = this.date.getHours();
        if (this.hours < 10) this.hours = '0' + this.hours;

        this.mins = this.date.getMinutes();
        if (this.mins < 10) this.mins = '0' + this.mins;

        this.secs = this.date.getSeconds();
        if (this.secs < 10) this.secs = '0' + this.secs;

        this.output = this.hours + ":" + this.mins + ":" + this.secs;

        console.log(this.output);
        setInterval(this, 1000);
    }

    stop() {
        this.clearInterval(timer);
    }
}

var clock = new Clock({
    template: 'h:m:s'
});
clock.start();
