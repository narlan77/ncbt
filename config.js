// CONFIGURASI UTAMA API
const CONFIG = {
  SPREADSHEET_ID: "1MZFq_b_ypIrR19Rbv5T-IsYX-DQxen7-JNlOxsdfTQ8",
  API_URL: "https://script.google.com/macros/s/AKfycbyPPmW8lIOKLP9B4oOVGukdaZtFlqrSR8zpZMXHuNZI_vsovqIf93_rnQmzH7t08_h5/exec",
  SHEET_NAME: {
    PENGGUNA: "Pengguna",
    PENGATURAN: "Pengaturan",
    BANK_SOAL: "BankSoal",
    HASIL_UJIAN: "HasilUjian"
  },
  DAFTAR_KELAS: [
    "VII-A", "VII-B", "VIII-A", "VIII-B", "IX-A", "IX-B"
  ]
};

// Variabel global agar terbaca langsung di file HTML/JS lain
const API_URL = CONFIG.API_URL;
const DAFTAR_KELAS = CONFIG.DAFTAR_KELAS;

// =========================================================
// HELPER GLOBAL FETCH / API POST (UNTUK HANDLE CORS & REDIRECT)
// =========================================================
async function apiPost(payload) {
  try {
    const response = await fetch(CONFIG.API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      redirect: "follow",
      body: JSON.stringify(payload)
    });

    const text = await response.text();

    if (text.trim().startsWith("<")) {
      console.error("Respons Server berbentuk HTML (Bukan JSON):", text);
      throw new Error("Server mengembalikan halaman HTML. Pastikan akses Web App Google Apps Script diset ke 'Anyone'.");
    }

    return JSON.parse(text);

  } catch (err) {
    console.error("Gagal terhubung ke API:", err);
    throw err;
  }
}
