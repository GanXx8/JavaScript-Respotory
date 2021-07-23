
let usersMin = '1'

for (usersMin ; usersMin <= 100; usersMin++){
    console.log('users ke ' + usersMin)
}




for(nilaiAwal = 0; nilaiAwal <= 18; nilaiAwal = nilaiAwal + 2){
    console.log(nilaiAwal)
}



for(let angka = 1; angka < 20; angka++ ){
    if ( angka % 2){
        console.log('genap')
    } else{
        console.log('ganjil')
    }
}



var popup = confirm('Apakah Anda Mau Mengulang')

while (popup) {
    console.log(' click on confirm');
    popup = confirm('Apakah Anda Mau Mengulang');
}



var a = prompt('Sebutkan kepanjangan dari nama IB?')
   i = 'Impact Byte'

   while (a) {
    if (a === i) {
        alert('selamat');
    } else{
        prompt('Sebutkan kepanjangan dari nama IB?')
    }
   }
      
      
