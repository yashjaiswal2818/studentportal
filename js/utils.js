// ================================================================
// UTILITY FUNCTIONS - Core JavaScript
// ================================================================

// ============= THEME MANAGEMENT =============
const Theme = {
    init() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.set(savedTheme);
        this.setupToggle();
    },

    set(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateIcon(theme);
    },

    toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        this.set(next);
    },

    updateIcon(theme) {
        const sunIcon = document.querySelector('.theme-icon-sun');
        const moonIcon = document.querySelector('.theme-icon-moon');

        if (sunIcon && moonIcon) {
            if (theme === 'dark') {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        }
    },

    setupToggle() {
        const toggleBtn = document.querySelector('.theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    }
};

// ============= SIDEBAR MANAGEMENT =============
const Sidebar = {
    init() {
        this.setupToggle();
        this.setupMobileMenu();
        this.setActiveLink();
    },

    toggle() {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');

        if (sidebar && mainContent) {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('sidebar-collapsed');
            localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
        }
    },

    setupToggle() {
        const toggleBtn = document.querySelector('.sidebar-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }

        // Restore saved state
        const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
        if (isCollapsed) {
            this.toggle();
        }
    },

    setupMobileMenu() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');

        if (menuBtn && sidebar && overlay) {
            menuBtn.addEventListener('click', () => {
                sidebar.classList.toggle('mobile-open');
                overlay.classList.toggle('active');
            });

            overlay.addEventListener('click', () => {
                sidebar.classList.remove('mobile-open');
                overlay.classList.remove('active');
            });
        }
    },

    setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'dashboard.html';
        const navLinks = document.querySelectorAll('.nav-item');

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
};

// ============= ANIMATIONS =============
const Animations = {
    init() {
        this.animateOnScroll();
        this.animateNumbers();
    },

    animateOnScroll() {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-slideUp');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.card, .bento-item').forEach(el => {
            observer.observe(el);
        });
    },

    animateNumbers() {
        const animateNumber = (element, target, duration = 1000) => {
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target.toFixed(2);
                    clearInterval(timer);
                } else {
                    element.textContent = current.toFixed(2);
                }
            }, 16);
        };

        // Animate CGPA and percentage values
        document.querySelectorAll('[data-animate-number]').forEach(el => {
            const target = parseFloat(el.getAttribute('data-animate-number'));
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    animateNumber(el, target);
                    observer.disconnect();
                }
            });
            observer.observe(el);
        });
    }
};

// ============= PROGRESS RING =============
const ProgressRing = {
    init() {
        document.querySelectorAll('.progress-ring').forEach(ring => {
            this.updateRing(ring);
        });
    },

    updateRing(ringElement) {
        const percentage = parseFloat(ringElement.getAttribute('data-percentage')) || 0;
        const fill = ringElement.querySelector('.progress-ring-fill');

        if (fill) {
            const radius = 70;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percentage / 100) * circumference;

            // Set the stroke-dashoffset
            setTimeout(() => {
                fill.style.strokeDashoffset = offset;
            }, 100);
        }
    }
};

// ============= CAROUSEL =============
const Carousel = {
    init(carouselElement) {
        if (!carouselElement) return;

        let currentIndex = 0;
        const track = carouselElement.querySelector('.carousel-track');
        const items = carouselElement.querySelectorAll('.announcement-card');
        const dots = carouselElement.querySelectorAll('.carousel-dot');

        const updateCarousel = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentIndex = index;
        };

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => updateCarousel(index));
        });

        // Auto-advance every 5 seconds
        setInterval(() => {
            const nextIndex = (currentIndex + 1) % items.length;
            updateCarousel(nextIndex);
        }, 5000);
    }
};

// ============= CHARTS =============
const Charts = {
    cgpaChart: null,
    attendanceChart: null,

    initCGPAChart(canvasId, data) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const semesters = data.map(d => `Sem ${d.semester}`);
        const sgpas = data.map(d => d.sgpa || 0);

        this.cgpaChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: semesters,
                datasets: [{
                    label: 'SGPA',
                    data: sgpas,
                    backgroundColor: 'rgba(220, 38, 38, 0.8)',
                    borderColor: '#DC2626',
                    borderWidth: 2,
                    borderRadius: 8,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#171717',
                        titleColor: '#FAFAFA',
                        bodyColor: '#A1A1AA',
                        borderColor: '#262626',
                        borderWidth: 1,
                        padding: 12,
                        displayColors: false,
                        callbacks: {
                            label: (context) => `SGPA: ${context.parsed.y.toFixed(2)}`
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 10,
                        grid: { color: '#262626' },
                        ticks: { color: '#A1A1AA' }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#A1A1AA' }
                    }
                }
            }
        });
    },

    initAttendanceChart(canvasId, subjects) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        const labels = subjects.map(s => s.name);
        const attendance = subjects.map(s => s.attendance);
        const colors = attendance.map(a => {
            if (a >= 75) return 'rgba(34, 197, 94, 0.8)';
            if (a >= 65) return 'rgba(234, 179, 8, 0.8)';
            return 'rgba(239, 68, 68, 0.8)';
        });

        this.attendanceChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: attendance,
                    backgroundColor: colors,
                    borderWidth: 0,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: '#A1A1AA',
                            padding: 15,
                            font: { size: 12 }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#171717',
                        titleColor: '#FAFAFA',
                        bodyColor: '#A1A1AA',
                        borderColor: '#262626',
                        borderWidth: 1,
                        padding: 12,
                        callbacks: {
                            label: (context) => `${context.label}: ${context.parsed}%`
                        }
                    }
                }
            }
        });
    }
};

// ============= SEARCH FUNCTIONALITY =============
const Search = {
    init() {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));

            // Keyboard shortcut (Cmd/Ctrl + K)
            document.addEventListener('keydown', (e) => {
                if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                    e.preventDefault();
                    searchInput.focus();
                }
            });
        }
    },

    handleSearch(query) {
        // Implement search logic here
        console.log('Searching for:', query);
    }
};

// ============= NOTIFICATIONS =============
const Notifications = {
    show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;

        const container = document.querySelector('.toast-container') || this.createContainer();
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },

    createContainer() {
        const container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
        return container;
    }
};

// ============= MODAL =============
const Modal = {
    open(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    },

    close(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    init() {
        document.querySelectorAll('[data-modal-close]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                if (modal) this.close(modal.id);
            });
        });

        // Close on overlay click
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    const modal = overlay.closest('.modal');
                    if (modal) this.close(modal.id);
                }
            });
        });
    }
};

// ============= UTILITY FUNCTIONS =============
const Utils = {
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    },

    formatTime(dateString) {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        });
    },

    getRelativeTime(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = Math.abs(now - date);
        const diffMins = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffMins < 60) return `${diffMins} mins ago`;
        if (diffHours < 24) return `${diffHours} hours ago`;
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        return this.formatDate(dateString);
    },

    getAttendanceStatus(percentage) {
        if (percentage >= 75) return { status: 'Good', color: 'success' };
        if (percentage >= 65) return { status: 'Warning', color: 'warning' };
        return { status: 'Critical', color: 'danger' };
    },

    calculateRequiredClasses(current, total, target = 75) {
        const required = Math.ceil((target * (total + 1) - current) / (target - 100));
        return Math.max(0, required);
    },

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// ============= INITIALIZE ON PAGE LOAD =============
document.addEventListener('DOMContentLoaded', () => {
    Theme.init();
    Sidebar.init();
    Animations.init();
    ProgressRing.init();
    Search.init();
    Modal.init();

    // Initialize carousel if exists
    const carousel = document.querySelector('.announcements-carousel');
    if (carousel) Carousel.init(carousel);

    // Update last updated timestamps
    document.querySelectorAll('.last-updated').forEach(el => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
        });
        el.querySelector('.last-updated-time').textContent = timeString;
    });
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Theme, Sidebar, Animations, ProgressRing, Carousel, Charts, Utils, Notifications, Modal };
}
