
//! redux altında ProductSlice daki urunlerin durumlarını kontol ediyoRUZ  YUKENİYOR, YUKLENDİ, HATA VERDİ   */

export const STATUS = Object.freeze({
    IDLE: "IDLE",   // Başlangıç durumu
    LOADING: "LOADING",    // Yüklenmekte
    SUCCESS: "SUCCESS",   // Yüklendi
    FAIL: "FAIL"    // Başarısız
});