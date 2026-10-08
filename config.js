// CONFIGURASI UTAMA API

const CONFIG = {
  // Spreadsheet ID Utama
  SPREADSHEET_ID: "1MZFq_b_ypIrR19Rbv5T-IsYX-DQxen7-JNlOxsdfTQ8",
  
  // URL Web App Deployment Apps Script
  //API_URL: "https://script.google.com/macros/s/AKfycbzldhWj66AHCA7b4VUPj2xnMQhmq0-qLX4B8Qnmal7Jy3iKbkO40NaKV5Scq7D_IZ3rlA/exec",
  //API_URL: "https://script.google.com/macros/s/AKfycbyPPmW8lIOKLP9B4oOVGukdaZtFlqrSR8zpZMXHuNZI_vsovqIf93_rnQmzH7t08_h5/exec",
  
  //API_URL: "https://script.google.com/macros/s/AKfycbxI0ZI7XP1W8h9LNXB0p5DYVEWakSBfGKetLgyhgXHZL4AkAcyFkJTkbHd3_Q6obohq/exec",
  API_URL: "https://script.google.com/macros/s/AKfycbyPPmW8lIOKLP9B4oOVGukdaZtFlqrSR8zpZMXHuNZI_vsovqIf93_rnQmzH7t08_h5/exec",
  // Daftar Sheet Resmi
  SHEET_NAME: {
    PENGGUNA: "Pengguna",
    PENGATURAN: "Pengaturan",
    BANK_SOAL: "BankSoal",
    HASIL_UJIAN: "HasilUjian"
  },
  
  // Daftar Kode Kelas Standar (Array dari string)
  DAFTAR_KELAS: [
    "VII-A", "VII-B", "VIII-A", "VIII-B", "IX-A", "IX-B"
  ]
};

// Variabel global agar terbaca langsung di file HTML/JS lain
const API_URL = CONFIG.API_URL;
const DAFTAR_KELAS = CONFIG.DAFTAR_KELAS;
