/*
1. Prompt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
2. menemtukan hari dari tanggal yang ada saat ini di pc
*/

//1.
let saldo1 = 100000
let saldo = alert(`Saldo anda adalah ${saldo1}`)
let saldoTambah = Number (prompt('berapakah saldo yang ingin anda tambahkan'))
let saldoAkhir = saldo1 + saldoTambah
alert(`Jadi Total saldo anda sekarang adalah ${saldoAkhir}`)

//2.
const day = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
const getDay = new Date().getDay()
const dayName = day[getDay]

alert(`Sekarang adalah hari ${dayName}`)