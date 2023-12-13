
/* redux altında ProductSlice daki urunlerin durumlarını kontol ediyor   */

export const STATUS = object.freeze({
    IDLE: "IDLE",   /*baslangıc durumu  */
    LOADING: "LOADING",    /*tuklenmekte */
    SUCCSESS: "SUCCSESS",   /*yıklendi */
    FAIL: "FAIL"    /*basarısız */
})