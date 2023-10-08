//If else
let arah="kanan";

if (arah=="kanan") {
    console.log("Silahkan putar balik"); 
} else{
    console.log("Silahkan lurus terus");
}
//Nested if
let makanan="gula";

if (makanan=="garam") {
    console.log("Asin");   
} else if (makanan=="gula"){
    console.log("manis");
} else{
    console.log("pedas");
}

//switch case
let semester=7;
switch (semester) {
    case 1:
        console.log("Mahasiswa baru");
        break;
    case 4:
        console.log("Mahasiswa pertengahan");
        break;
    case 7:
        console.log("Mahasiswa akhir");
        break;
    default:
        console.log("Mahasiswa tua")
        break;
}

//for statement

for (let i = 1; i < 10; i+=2) {
    console.log("Angka ganjil "+i);
    
}

// while
let a=0;
while(a<15){
    a+=2;
    console.log("Perulangan do while genap "+a);
}

//do while
let b=3;
do{
    b+=3;
    console.log("Kelipatan 3 adalah "+b);
}while(b<20);

//function

function tambah(x,y) {
    tambah=x+y;
   console.log("Hasil dari penjumlahan adalah "+tambah);
}
tambah(2,6);


