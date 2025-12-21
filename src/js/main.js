// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// 1. 引入 AOS 的 JS 和 CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

// 2. 初始化 AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

