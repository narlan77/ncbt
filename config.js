// CONFIGURASI UTAMA API

const CONFIG = {
  // Spreadsheet ID Utama
  SPREADSHEET_ID: "1Ag9tk9nr3mILR6dGvSAZH6gYUPOBQ923VdTfLYNuBGc",
  
  API_URL: "https://script.google.com/macros/s/AKfycbwu0S1GxlBwpW9Fb9hQ_4NC84hcxZtAR03oQ44YwmxzSIJHG4B0-43CAlzuByzitjUQ/exec",
  // Daftar Sheet Resmi
  SHEET_NAME: {
    PENGGUNA: "Pengguna",
    PENGATURAN: "Pengaturan",
    BANK_SOAL: "BankSoal",
    HASIL_UJIAN: "HasilUjian"
  },
  
  // Daftar Kode Kelas Standar (Array dari string)
  DAFTAR_KELAS: [
    "VI-A", "VI-B", "V-A", "V-B", "IV-A", "IV-B"
  ]
};

// Variabel global agar terbaca langsung di file HTML/JS lain
const API_URL = CONFIG.API_URL;
const DAFTAR_KELAS = CONFIG.DAFTAR_KELAS;
