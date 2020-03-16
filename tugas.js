var sambit = document.querySelector("button"); 


document.getElementById('opsiPerhitungan').addEventListener('change', function () {
    document.getElementById('judul_hitung').innerHTML = this.value 
    document.getElementById('hasil_perhitungan').innerHTML = 0   
    var radius = document.getElementsByName('jari')[0].value = 0;
    var tinggi = document.getElementsByName('tinggi')[0].value = 0;
});

sambit.addEventListener('click', function () {
    var radius = document.getElementsByName('jari')[0].value;
    var height = document.getElementsByName('tinggi')[0].value;
    var title = document.getElementById('judul_hitung').innerHTML;
    
    if (title == 'Luas Bola') {											// RUMUS LUAS BOLA
        let result = 4 * Math.PI * Math.pow(radius, 2)
        document.getElementById('hasil_perhitungan').innerHTML = result
    }

    if (title == 'Volume Bola') {										// RUMUS VOLUME BOLA
        let result = (4/3) * Math.PI * Math.pow(radius, 3)
        document.getElementById('hasil_perhitungan').innerHTML = result
    }

    if (title == 'Luas Tabung') {										// RUMUS LUAS TABUNG
        let result = 2 * Math.PI * radius * (height + radius)
        document.getElementById('hasil_perhitungan').innerHTML = result
    }

    if (title == 'Volume Tabung') {										// RUMUS VOLUME TABUNG
        let result = Math.PI * Math.pow(radius, 2) * height
        document.getElementById('hasil_perhitungan').innerHTML = result
    }
})