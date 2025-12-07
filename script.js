const mockApiData = {
            python: [
                { title: "Giới thiệu về Python", description: "Tìm hiểu về cú pháp và các khái niệm cơ bản", duration: "2 giờ", level: "Cơ bản" },
                { title: "Cấu trúc dữ liệu trong Python", description: "List, Tuple, Dictionary, Set và ứng dụng", duration: "3 giờ", level: "Cơ bản" },
                { title: "Hàm và Module", description: "Cách tạo và sử dụng hàm, import module", duration: "2.5 giờ", level: "Cơ bản" },
                { title: "Lập trình hướng đối tượng", description: "Class, Object, Inheritance, Polymorphism", duration: "4 giờ", level: "Trung cấp" },
                { title: "Xử lý file và ngoại lệ", description: "Đọc/ghi file, xử lý lỗi và ngoại lệ", duration: "2 giờ", level: "Trung cấp" }
            ],
            javascript: [
                { title: "JavaScript cơ bản", description: "Biến, kiểu dữ liệu, toán tử và câu lệnh điều kiện", duration: "2.5 giờ", level: "Cơ bản" },
                { title: "DOM Manipulation", description: "Tương tác với Document Object Model", duration: "3 giờ", level: "Cơ bản" },
                { title: "ES6+ Features", description: "Arrow functions, destructuring, template literals", duration: "2 giờ", level: "Trung cấp" },
                { title: "Asynchronous JavaScript", description: "Callbacks, Promises, Async/Await", duration: "3.5 giờ", level: "Trung cấp" },
                { title: "JavaScript Frameworks", description: "Giới thiệu React, Vue và Angular", duration: "4 giờ", level: "Nâng cao" }
            ],
            java: [
                { title: "Java cơ bản", description: "Cú pháp, biến, kiểu dữ liệu và cấu trúc điều khiển", duration: "3 giờ", level: "Cơ bản" },
                { title: "OOP trong Java", description: "Class, Object, Inheritance, Interface", duration: "4 giờ", level: "Cơ bản" },
                { title: "Collections Framework", description: "List, Set, Map và các cấu trúc dữ liệu", duration: "3 giờ", level: "Trung cấp" },
                { title: "Xử lý ngoại lệ", description: "Try-catch, custom exceptions", duration: "2 giờ", level: "Trung cấp" },
                { title: "Java Multithreading", description: "Thread, synchronization, concurrent programming", duration: "4 giờ", level: "Nâng cao" }
            ],
            cpp: [
                { title: "C++ cơ bản", description: "Cú pháp, biến, kiểu dữ liệu và hàm", duration: "3 giờ", level: "Cơ bản" },
                { title: "Con trỏ và tham chiếu", description: "Hiểu và sử dụng con trỏ trong C++", duration: "3.5 giờ", level: "Cơ bản" },
                { title: "OOP trong C++", description: "Class, Object, Inheritance, Polymorphism", duration: "4 giờ", level: "Trung cấp" },
                { title: "STL (Standard Template Library)", description: "Vector, List, Map và algorithms", duration: "3.5 giờ", level: "Trung cấp" },
                { title: "Memory Management", description: "Dynamic memory allocation và smart pointers", duration: "3 giờ", level: "Nâng cao" }
            ],
            csharp: [
                { title: "C# cơ bản", description: "Cú pháp, kiểu dữ liệu và cấu trúc điều khiển", duration: "2.5 giờ", level: "Cơ bản" },
                { title: "OOP trong C#", description: "Class, Object, Inheritance, Interface", duration: "3.5 giờ", level: "Cơ bản" },
                { title: "LINQ (Language Integrated Query)", description: "Truy vấn dữ liệu với LINQ", duration: "3 giờ", level: "Trung cấp" },
                { title: "ASP.NET Core", description: "Xây dựng ứng dụng web với ASP.NET Core", duration: "5 giờ", level: "Trung cấp" },
                { title: "Entity Framework", description: "ORM và làm việc với database", duration: "4 giờ", level: "Nâng cao" }
            ],
            html: [
                { title: "HTML cơ bản", description: "Thẻ, thuộc tính và cấu trúc trang web", duration: "2 giờ", level: "Cơ bản" },
                { title: "HTML5 Semantic Elements", description: "Header, Footer, Section, Article, Nav", duration: "1.5 giờ", level: "Cơ bản" },
                { title: "CSS cơ bản", description: "Selector, properties, box model", duration: "3 giờ", level: "Cơ bản" },
                { title: "CSS Layout", description: "Flexbox, Grid và responsive design", duration: "4 giờ", level: "Trung cấp" },
                { title: "CSS Preprocessors", description: "SASS/SCSS và variables, mixins", duration: "2.5 giờ", level: "Trung cấp" }
            ]
        };

        document.querySelectorAll('.language-card').forEach(card => {
            card.addEventListener('click', function() {
                const language = this.getAttribute('data-language');
                
                // Xóa active class từ tất cả các card
                document.querySelectorAll('.language-card').forEach(c => {
                    c.classList.remove('active');
                });
                
                // Thêm active class cho card được chọn
                this.classList.add('active');
                
                // Hiển thị loading
                document.getElementById('placeholder').style.display = 'none';
                document.getElementById('loading').classList.add('active');
                document.getElementById('curriculum-list').classList.remove('active');
                
                setTimeout(() => {
                    loadCurriculum(language);
                }, 1000);
            });
        });

        function loadCurriculum(language) {
            // Ẩn loading
            document.getElementById('loading').classList.remove('active');
            
            // Lấy dữ liệu từ API (ở đây dùng dữ liệu giả lập)
            const curriculumData = mockApiData[language] || [];
            
            // Hiển thị giáo trình
            const curriculumList = document.getElementById('curriculum-list');
            curriculumList.innerHTML = '';
            
            if (curriculumData.length === 0) {
                curriculumList.innerHTML = '<p>Không có dữ liệu giáo trình cho ngôn ngữ này.</p>';
            } else {
                curriculumData.forEach(lesson => {
                    const lessonElement = document.createElement('div');
                    lessonElement.className = 'lesson';
                    lessonElement.innerHTML = `
                        <div class="lesson-title">${lesson.title}</div>
                        <div class="lesson-desc">${lesson.description}</div>
                        <div class="lesson-meta">
                            <span><i class="far fa-clock"></i> ${lesson.duration}</span>
                            <span><i class="fas fa-signal"></i> ${lesson.level}</span>
                        </div>
                    `;
                    curriculumList.appendChild(lessonElement);
                });
            }
            
            curriculumList.classList.add('active');
        }

        async function fetchCurriculum(language) {
    try {
        const response = await fetch(`https://your-api.com/curriculum?language=${language}`);
        if (!response.ok) {
            throw new Error('Không thể tải dữ liệu');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Lỗi khi tải giáo trình:', error);
        return [];
    }
}


        // Auth system
document.addEventListener('DOMContentLoaded', function() {
    const authModal = document.getElementById('auth-modal');
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');
    const logoutButton = document.getElementById('logout-button');
    const closeModal = document.querySelector('.close');
    const tabButtons = document.querySelectorAll('.tab-button');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const authButtons = document.getElementById('auth-buttons');
    const userMenu = document.getElementById('user-menu');
    const usernameDisplay = document.getElementById('username-display');

    // Check if user is already logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        showUserMenu(currentUser.username);
    }

    // Open modal when clicking login or signup buttons
    loginButton.addEventListener('click', () => openModal('login'));
    signupButton.addEventListener('click', () => openModal('signup'));

    // Close modal
    closeModal.addEventListener('click', () => {
        authModal.classList.add('hidden');
    });

    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');
            switchTab(tab);
        });
    });

    // Login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            showUserMenu(user.username);
            authModal.classList.add('hidden');
            loginForm.reset();
        } else {
            alert('Invalid username or password');
        }
    });

    // Signup form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(u => u.username === username)) {
            alert('Username already exists');
            return;
        }

        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Auto login after signup
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        showUserMenu(newUser.username);
        authModal.classList.add('hidden');
        signupForm.reset();
    });

    // Logout
    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        userMenu.classList.add('hidden');
        authButtons.classList.remove('hidden');
    });

    function openModal(tab) {
        authModal.classList.remove('hidden');
        switchTab(tab);
    }

    function switchTab(tab) {
        // Update tabs
        tabButtons.forEach(button => {
            if (button.getAttribute('data-tab') === tab) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Update tab content
        document.querySelectorAll('.tab-pane').forEach(pane => {
            if (pane.id === `${tab}-tab`) {
                pane.classList.add('active');
            } else {
                pane.classList.remove('active');
            }
        });
    }

    function showUserMenu(username) {
        usernameDisplay.textContent = username;
        authButtons.classList.add('hidden');
        userMenu.classList.remove('hidden');
    }
});