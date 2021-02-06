var hitungGaji = (golongan,jenisKelamin,statusKawin,jumlahAnak) => {
    const gol = golongan;
    const kelamin = jenisKelamin;
    const status = statusKawin;
    const anak = jumlahAnak;
    const pajak = 0.1;
    const potonganPensiun = 200000;
    const potonganBPJS = 150000;

    // Gaji Pokok per Golongan
    if (gol == "Golongan I"){
        gajiPokok = 1150000;
    } else if (gol == "Golongan II") { 
        gajiPokok = 2000000;
    } else if (gol == "Golongan III") {
        gajiPokok = 3000000;
    } else if (gol == "Golongan IV") {
        gajiPokok = 4000000;
    } else {
        console.log("Format penulisan salah.");
        }

    // Tunjangan Golongan
    if (gol == "Golongan I"){
        tunjangan = 200000;
    } else if (gol == "Golongan II") { 
        tunjangan = 400000;
    } else if (gol == "Golongan III") {
        tunjangan = 600000;
    } else if (gol == "Golongan IV") {
        tunjangan = 1000000;
    } else {
        console.log("Format penulisan salah.");
        }

    // Tunjangan Istri
    if (status == "Menikah") {
        if (kelamin == "Laki-laki") {
            tunjanganIstri = 200000;
        } else if (kelamin == "Perempuan") {
            tunjanganIstri = 0;
        }
    } else if (status == "Belum Menikah") {
            tunjanganIstri = 0;
    }

    // Tunjangan Anak
    if (status == "Menikah") {

        if (anak > 2) {
            tunjanganAnak = 100000 * 2;
        } else if (anak == 2) {
            tunjanganAnak = 100000 * anak;
        } else if (anak == 1) {
            tunjanganAnak = 100000 * anak;
        } else {
            tunjanganAnak = 0;
        }
    } else if (status == "Belum Menikah") {
        tunjanganAnak = 0;
    }
    
    // Perhitungan
    totalGaji = gajiPokok + tunjangan + tunjanganIstri + tunjanganAnak;
    potonganPajak = totalGaji * pajak;
    gajiSementara = totalGaji - potonganPajak;
    gajiBersih = gajiSementara - potonganPensiun - potonganBPJS;

    // Output
    console.log("HASIL PERHITUNGAN GAJI");

    console.log("==================================");
    console.log("INFO PEGAWAI");
    console.log("==================================");
    console.log("Pegawai yang bersangkutan");
    console.log("Golongan: ", gol);
    console.log("Jenis Kelamin: ", kelamin);
    console.log("Jumlah Anak: ", anak);

    console.log("==================================");
    console.log("GAJI DAN TUNJANGAN");
    console.log("==================================");
    console.log("Gaji Pokok: ", gajiPokok);
    console.log("Tunjangan: ", tunjangan);
    console.log("Tunjangan Istri: ", tunjanganIstri);
    console.log("Tunjangan Anak: ", tunjanganAnak);
    console.log("Total: ", totalGaji );
    console.log("Pajak 10%: ", potonganPajak);
    console.log("Gaji Sementara: ", gajiSementara);

    console.log("==================================");
    console.log("GAJI BERSIH");
    console.log("==================================");
    console.log("Potongan pensiun: ", potonganPensiun);
    console.log("Potongan BPJS: ", potonganBPJS);
    console.log("GAJI BERSIH:	", gajiBersih);
}

    hitungGaji("Golongan I", "Laki-laki", "Belum Menikah", "3")