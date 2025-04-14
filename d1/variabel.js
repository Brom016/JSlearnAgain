let name = 'bromo' //string
let age = 18 // integer
let height = 164.5 //double / float
let weight //undefined
let gf = 2 //nothing

weight = 55

if(gf == null) {
    gf = 'aduh le belum ada'
} else {
    gf = 'sudah ada'
}

let saldoAwal = 50000
let saldoAdd = 30000
const hutang = 30000
const saldoAkhir = saldoAwal + saldoAdd - hutang

// Perkalian
const x1 = 5
const y1 = 9
const z1 = x1 * y1
alert(`Perkalian dari ${x1} * ${y1} maka hasilnya adalah ${z1}`)

// Pembagian
const x2 = 100
const y2 = 25
const z2 = x2 / y2
alert(`Pembagian dari ${x2} / ${y2} maka hasilnya adalah ${z2}`)

// switch(gf) {
//     case 1:
//         gf = "satu ajah"
//     break
//     case 2:
//         gf = "dua ajah"
//     break
//     default:
//         gf = "belum ada"
//     break
// }

alert(
    `nama saya ${name} usia saya itu ${age} tinggi badan saya adalah ${height}cm 
    berat badan saya ${weight}kg dan gf saya ${gf}`,
)
alert(
    `saldo awal saya sebesar Rp${saldoAwal} dan saldo tambahan saya sebesar Rp${saldoAdd} serta terdapat hutang sebesar Rp${hutang} jadi total saldo saya sebsar Rp${saldoAkhir}`,
)