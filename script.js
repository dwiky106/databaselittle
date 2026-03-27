// DATA GAMBAR (Edit/Tambah di sini)
const imageData = [
    {
        id: "01DFPAPC0326",
        title: "WIRO FS",
        keywords: "bear, beruang, wirofs",
        url: "wirofs.png", // Ganti dengan path gambar Anda
        filename: "wirofs.png"
    },
    {
        id: "02DFPAPC0326",
        title: "Roblox Sket",
        keywords: "roblox,sketbot, robloxmerah,merahroblox",
        url: "robloxsket.png",
        filename: "robloxsket.png"
    },
    {
        id: "03DFPAPC0326",
        title: "Kungfu Panda",
        keywords: "kungfupanda, gambarpanda, kungfupandagambar, gambarkungfupanda",
        url: "kungfupanda.png",
        filename: "kungfupanda.png"
    },
     {
        id: "(urutan)DFPAPC(bulan_tahun)",
        title: "Progres",
        keywords: "tags, tags, tags, tags",
        url: "maint.png",
        filename: "maint.png"
    },
    {
        id: "(urutan)DFPAPC(bulan_tahun)",
        title: "Progres",
        keywords: "tags, tags, tags, tags",
        url: "maint.png",
        filename: "maint.png"
    },
    {
        id: "(urutan)DFPAPC(bulan_tahun)",
        title: "Progres",
        keywords: "tags, tags, tags, tags",
        url: "maint.png",
        filename: "maint.png"
    }
    // Untuk menambah, cukup copy paste dari { sampai } lalu ubah isinya.
];

const imageGrid = document.getElementById('imageGrid');
const searchInput = document.getElementById('searchInput');
const noResult = document.getElementById('noResult');

// Fungsi untuk menampilkan gambar
function displayImages(filteredData) {
    imageGrid.innerHTML = "";
    
    if (filteredData.length === 0) {
        noResult.classList.remove('hidden');
    } else {
        noResult.classList.add('hidden');
        filteredData.forEach(img => {
            const card = `
                <div class="card">
                    <img src="${img.url}" alt="${img.title}" class="card-img">
                    <div class="card-info">
                        <h3>${img.title}</h3>
                        <p class="img-id">ID: ${img.id}</p>
                        <p class="keywords">Tags: ${img.keywords}</p>
                        <a href="${img.url}" download="${img.filename}" class="download-btn">
                            <i class="fas fa-download"></i> Download Gambar
                        </a>
                    </div>
                </div>
            `;
            imageGrid.innerHTML += card;
        });
    }
}

// Fitur Pencarian
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = imageData.filter(img => 
        img.id.toLowerCase().includes(term) || 
        img.title.toLowerCase().includes(term) || 
        img.keywords.toLowerCase().includes(term)
    );
    displayImages(filtered);
});

// Load pertama kali
displayImages(imageData);


