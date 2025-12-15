// main.js

// 1. 引入客製化 SCSS (Vite 會自動處理編譯成 CSS)
// 確保路徑指向您的 custom.scss
import './assets/scss/custom.scss'; 

// 2. 引入 Bootstrap 的 JavaScript 模組
// 這是讓 Navbar 漢堡選單、Carousel 輪播圖等互動功能運作的關鍵
import * as bootstrap from 'bootstrap'; 

// 3. 專案啟動時的初始化程式碼 (可選)
// 通常在單頁應用程式中會用來渲染內容，但在我們這種靜態 HTML 結構中，
// 這裡可以保持精簡，但我們保留它以確保專案結構完整。
document.addEventListener('DOMContentLoaded', () => {
    console.log('文藻小咖啡網站已成功載入！');

    // 範例：手動啟動輪播圖 (雖然 data-bs-ride="carousel" 已經自動啟動)
    const carouselElement = document.getElementById('heroCarousel');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 5000 // 確保自動播放間隔是 5 秒
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // ... 原本的輪播圖程式碼 ...

    // ⭐️ 新增：處理表單送出事件
    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (event) => {
            event.preventDefault(); // 阻止瀏覽器預設的重新整理行為
            
            // 這裡未來可以串接後端 API
            // 現在我們先用 alert 顯示成功訊息
            alert('感謝您的回饋！我們已經收到您的意見，將會盡快處理。☕');
            
            // 清空表單
            feedbackForm.reset();
        });
    }
});