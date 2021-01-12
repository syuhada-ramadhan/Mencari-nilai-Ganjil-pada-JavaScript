// array nomor
const nomor = [1, 4, 5, 8, 10, 30, 50, 100];

// cari nomor ganjil menggunakan method filter
const ganjil = nomor.filter(function (no) {
  return no % 2 === 1;
});

// cetak variabel ganjil
console.log(ganjil);
