document.addEventListener('DOMContentLoaded', () => {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 表单提交
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                alert('请填写所有必填项！');
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('请输入有效的邮箱地址！');
                return;
            }

            alert('表单提交成功！（实际项目中可连接后端）');
            contactForm.reset();
        });
    }

    // 返回顶部按钮
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '返回顶部';
    backToTopButton.className = 'back-to-top';
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 防抖函数
    const debounce = (fn, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), delay);
        };
    };

    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', debounce(() => {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    }, 100));

    // 初始化按钮样式
    Object.assign(backToTopButton.style, {
        display: 'block',
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        background: 'linear-gradient(135deg, #1e90ff, #00b4db)',
        color: 'white',
        padding: '0.75rem 1rem',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        opacity: '0',
        visibility: 'hidden',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
    });

    backToTopButton.addEventListener('mouseover', () => {
        backToTopButton.style.transform = 'translateY(-3px)';
    });
    backToTopButton.addEventListener('mouseout', () => {
        backToTopButton.style.transform = 'translateY(0)';
    });
});