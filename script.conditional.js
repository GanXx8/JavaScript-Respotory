let startup = 'hr'

if ( startup == 'ceo'){
 console.log('Menjadi CEO perusahaan')
}else if( startup == 'cto'){
    console.log('Mengadvance Teknologi Terbaru')
}else if(startup == 'hr'){
    console.log('melakukan rekrutmen untuk calon pegawai baru')
}else{
    console.log('menjadi ahli Program')
}



let  a = 10
b = 10

if (a <= b && a >= b) {
console.log('nilai b lebih besar')
}else if(a == b){
console.log('nilainya sama')
}else{
console.log('nilai a lebih besar ')
}



let day = '1'

switch (day) {
    case '1':
        console.log('Hari Minggu')
        break;
    case' 2':
        console.log('Hari Senin')
        break;   
    case '3':
        console.log('hari Selasa')
        break;
    case '4':
        console.log('Hari Rabu')
        break;
    case '5':
        console.log('Hari Kamis')
        break;
    case '6':
        console.log('Hari Jumat')
        break;
    case '7':
            console.log('Hari Sabtu')
        break;
}



let geser = up;

switch (geser) {
    case 'up':
        console.log('Geser ke Atas')
        break;
    case 'right':
        console.log('Geser ke Kanan')
    case 'left':
        console.log('Geser ke Kiri')
    case 'bottom':
        console.log('Geser ke Bawah')
        default:
        console.log('Geser ke Segala Arah')
}