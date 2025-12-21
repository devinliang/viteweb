// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// 1. 引入 AOS 的 JS 和 CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

// 2. 初始化 AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000, // 動畫持續時間 (毫秒)
        easing: 'ease-in-out', // 動畫曲線
        once: true, // true = 動畫只執行一次 (向下滑經過時觸發，向上滑不重複)
        offset: 100, // 觸發動畫的偏移量 (距離底部多少 px 時觸發)
    });
});