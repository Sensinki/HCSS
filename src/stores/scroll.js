import { writable } from "svelte/store";

export const isScrollingDown = writable(false); // Aşağı kaydırırken
export const isScrollingUp = writable(false); // Yukarı kaydırırken
export const isScrolling = writable(false); // Kaydırma işlemi devam ediyor mu?

let lastScrollTop = 0;
let timeoutId = null;

// Scroll durumunu izleme
if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
        const currentScrollTop = window.scrollY;

        // Kaydırma işlemi devam ediyor
        isScrolling.set(true);

        // Kullanıcı yukarı mı kaydırıyor?
        if (currentScrollTop < lastScrollTop) {
            isScrollingUp.set(true); // Yukarı kaydırırken
            isScrollingDown.set(false); // Aşağı kaydırırken
        } else {
            isScrollingUp.set(false); // Yukarı kaydırırken
            isScrollingDown.set(true); // Aşağı kaydırırken
        }

        // Son kaydırma pozisyonunu güncelle
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

        // Kaydırma işlemi bittikten sonra belirli bir süre sonra görünür yap
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            isScrolling.set(false); // Kaydırma durdu
        }, 200); // 200ms bekle, sonra kaydırma bitmiş sayılacak
    });
}
