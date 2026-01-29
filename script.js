// Logika utama pembacaan CSV
document.getElementById('fileInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const text = event.target.result;
        processData(text); // Fungsi untuk mengubah teks CSV menjadi array
    };

    reader.readAsText(file);
});

function processData(csvText) {
    const lines = csvText.split('\n');
    const printArea = document.getElementById('printArea');
    printArea.innerHTML = ''; // Reset area cetak

    lines.forEach((line, index) => {
        if (index === 0 || line.trim() === "") return; // Skip header
        const columns = line.split(',');

        // Template formulir per baris data
        const template = `
            <div class="page-break p-8 border mb-4">
                <h2 class="text-center font-bold underline">FORMULIR VERIFIKASI PENDIK</h2>
                <table class="w-full mt-4 border-collapse border border-black">
                    <tr><td class="border p-2">NAMA KPM</td><td class="border p-2">${columns[1]}</td></tr>
                    <tr><td class="border p-2">NAMA ANAK</td><td class="border p-2">${columns[2]}</td></tr>
                    </table>
            </div>
        `;
        printArea.innerHTML += template;
    });
}

document.getElementById('printBtn').addEventListener('click', () => {
    window.print();
});
