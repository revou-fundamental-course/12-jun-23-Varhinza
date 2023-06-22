// Deklarasi global variabel
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const formula = document.getElementById("formula");
const explain = document.getElementById("explain");
let layout = false;

// Fungsi switch konversi suhu 
function reverse() {
    const order = document.getElementById("order");
    order.appendChild(order.firstElementChild); //mengubah urutan input suhu
    layout ? layout = false : layout = true; //mengubah nilai varibale layout untuk menampilkan formula
    reset();
}

// Menampilkan formula
function showFormula(result) {
    // kondisi untuk menampilkan formula konversi suhu celsius ke fahrenheti atau sebaliknya 
    if (!layout) {
        formula.innerHTML = `<b>Formula :</b> ( ${celsius.value} <sup>o</sup>C x 9/5 ) + 32 = ${result} <sup>o</sup>F`;
        explain.innerHTML = `<h3>Konversi <i>S</i><sub>(<sup>o</sup>C)</sub> ke <i>S</i><sub>(<sup>o</sup>F)</sub></h3> 
                            suhu <i>S</i> dalam derajat fahrenheit (<sup>o</sup>F) sama dengan 
                            suhu <i>S</i> dalam derajat celsius (<sup>o</sup>C) dikali 9/5 ditambah 32.<br><br>
                            <i>S</i><sub>(<sup>o</sup>F)</sub> = (<i>S</i><sub>(<sup>o</sup>C)</sub> x 9/5) + 32`;
    } else {
        formula.innerHTML = `<b>Formula :</b> ( ${fahrenheit.value} <sup>o</sup>F - 32 ) x 5/9 = ${result} <sup>o</sup>C`;
        explain.innerHTML = `<h3>Konversi <i>S</i><sub>(<sup>o</sup>F)</sub> ke <i>S</i><sub>(<sup>o</sup>C)</sub></h3>
                            suhu <i>S</i> dalam derajat celsius (<sup>o</sup>C) sama dengan 
                            suhu <i>S</i> dalam derajat fahrenheit (<sup>o</sup>F) dikurangi 32 dikali 5/9.<br><br>
                            <i>S</i><sub>(<sup>o</sup>C)</sub> = (<i>S</i><sub>(<sup>o</sup>F)</sub> - 32) x 5/9`
    }
}

// Fungsi konversi suhu celsius ke fahrenheit
function changeE() {
    let result = 9 / 5 * celsius.value + 32; // Formula konversi suhu celsius ke fahrenheit
    if (isNaN(result)) {// validasi input
        alert("Masukkan angka");
        reset();
        return;
    }
    /** 
     * membuat kondisi untuk menampilkan konversi suhu celsius ke fahrenheit secara langsung
     * 1. Ketika isi input celsius dihapus
     * 2. Ketika nilai input fahrenheit berubah karena user dan masih ada nilai di input celsius
     * 3. Ketika user pertama kali input suhu 
     */
    if (!celsius.value && fahrenheit.value) {
        // hapus isi input fahrenheit, formula & cara konversi
        fahrenheit.removeAttribute("value");
        fahrenheit.value = '';
        formula.innerHTML = '';
        explain.innerHTML = '';
    } else if (result !== fahrenheit.value) {
        // ubah nilai fahrenheit dengan hasil konversi & tampilkan formula
        fahrenheit.value = result;
        showFormula(result);
    } else if (celsius.value) {
        // tambahkan atribut nilai ke input fahrenheit & tampilkan formula
        fahrenheit.setAttribute("value", result);
        showFormula(result);
    }
}

// Fungsi konversi suhu fahrenheit ke celsius
function changeF() {
    let result = (fahrenheit.value - 32) * 5 / 9; // Formula konversi suhu fahrenheit ke celsius
    if (isNaN(result)) { // validasi input
        alert("Masukkan angka");
        reset();
        return;
    }
    /** 
     * membuat kondisi untuk menampilkan konversi suhu celsius ke fahrenheit secara langsung
     * 1. Ketika isi input fahrenheit dihapus
     * 2. Ketika nilai input celsius berubah karena user dan masih ada nilai di input fahrenheit
     * 3. Ketika user pertama kali input suhu 
     */
    if (!fahrenheit.value && celsius.value) {
        // hapus isi input fahrenheit, formula & cara konversi
        celsius.removeAttribute("value");
        celsius.value = '';
        formula.innerHTML = '';
        explain.innerHTML = '';
    } else if (result !== celsius.value) {
        // ubah nilai fahrenheit dengan hasil konversi & tampilkan formula
        celsius.value = result;
        showFormula(result);
    } else if (fahrenheit.value) {
        // tambahkan atribut nilai ke input fahrenheit & tampilkan formula
        celsius.setAttribute("value", result)
        showFormula(result);
    }
}

/**
 * Membuat input dapat memanggil fungsi ketika event tertriger
 */
celsius.addEventListener('keyup', changeE);
fahrenheit.addEventListener('keyup', changeF);

// menghapus semua nilai input
function reset() {
    celsius.value = '';
    fahrenheit.value = '';
    formula.innerHTML = '';
    explain.innerHTML = '';
}