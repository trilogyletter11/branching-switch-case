var jawab = prompt(
  "Kamu beruntung! Silahkan pilih hadiahmu dengan memasukan angka 1 sampai 5"
);
var hadiah = "";

switch (jawab) {
  case "1":
    hadiah = "Tisu";
    break;
  case "2":
    hadiah = "1 Kotak Kopi";
    break;
  case "3":
    hadiah = "Sticker";
    break;
  case "4":
    hadiah = "Minyak Goreng";
    break;
  case "5":
    hadiah = "Uang Rp 50.000";
    break;
  default:
    document.write("<p>Opps! anda salah pilih</p>");
}

if (hadiah === "") {
  document.write("<p>Kamu gagal mendapat hadiah</p>");
} else {
  document.write("<h2>Selamat kamu mendapatkan " + hadiah + "</h2>");
}
