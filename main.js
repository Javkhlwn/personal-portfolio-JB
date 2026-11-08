// Main Application Logic for Javkhlan Battulga's Portfolio

document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme Toggle Functionality
    const themeToggleBtn = document.querySelector("#theme-toggle");
    const currentTheme = localStorage.getItem("theme");
    
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
    const navMenu = document.querySelector("#nav-menu");

    mobileMenuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking a link
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // 3. Render Technical Skills
    const skillsContainer = document.querySelector("#skills-container");
    if (skillsContainer) {
        const categories = [
            { title: "Frontend Foundation", items: portfolioData.skills.frontend },
            { title: "Programming & Logic", items: portfolioData.skills.programming },
            { title: "Tools & Environment", items: portfolioData.skills.tools },
            { title: "Currently Learning", items: portfolioData.skills.learning }
        ];

        skillsContainer.innerHTML = categories.map(cat => `
            <div class="skill-category-card">
                <h3>${cat.title}</h3>
                <ul>
                    ${cat.items.map(skill => `
                        <li>
                            <span>${skill.name}</span>
                            <span class="skill-tag">${skill.level}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    // 4. Render Projects & Filtering / Searching
    const projectsGrid = document.querySelector("#projects-grid");
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectSearch = document.querySelector("#project-search");

    function renderProjects(projectsToRender) {
        if (!projectsGrid) return;
        
        if (projectsToRender.length === 0) {
            projectsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No projects found matching your criteria.</p>`;
            return;
        }

        projectsGrid.innerHTML = projectsToRender.map(project => `
            <div class="project-card" data-id="${project.id}">
                <div>
                    <span class="project-tag">${project.category.toUpperCase()}</span>
                    <h3>${project.title}</h3>
                    <p>${project.summary}</p>
                    <div class="tech-stack">
                        ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                </div>
                <div class="project-links">
                    <span style="color: var(--accent); font-weight: 600;">View Details &rarr;</span>
                </div>
            </div>
        `).join('');

        // Attach click event to open modal
        document.querySelectorAll(".project-card").forEach(card => {
            card.addEventListener("click", () => {
                const projectId = card.getAttribute("data-id");
                const project = portfolioData.projects.find(p => p.id === projectId);
                openProjectModal(project);
            });
        });
    }

    // Initial render
    renderProjects(portfolioData.projects);

    // Filter event listeners
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const filter = btn.getAttribute("data-filter");
            const searchTerm = projectSearch.value.toLowerCase();

            let filtered = portfolioData.projects;
            if (filter !== "all") {
                filtered = filtered.filter(p => p.category === filter);
            }
            if (searchTerm) {
                filtered = filtered.filter(p => p.title.toLowerCase().includes(searchTerm) || p.summary.toLowerCase().includes(searchTerm));
            }

            renderProjects(filtered);
        });
    });

    // Search event listener
    if (projectSearch) {
        projectSearch.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const activeFilter = document.querySelector(".filter-btn.active").getAttribute("data-filter");

            let filtered = portfolioData.projects;
            if (activeFilter !== "all") {
                filtered = filtered.filter(p => p.category === activeFilter);
            }
            filtered = filtered.filter(p => p.title.toLowerCase().includes(searchTerm) || p.summary.toLowerCase().includes(searchTerm));

            renderProjects(filtered);
        });
    }

    // 5. Project Detail Modal
    const modal = document.querySelector("#project-modal");
    const modalBody = document.querySelector("#modal-body");
    const modalClose = document.querySelector("#modal-close");

    function openProjectModal(project) {
        modalBody.innerHTML = `
            <span class="project-tag">${project.category.toUpperCase()}</span>
            <h2 style="font-size: 1.75rem; margin: 0.5rem 0 1rem 0;">${project.title}</h2>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem;">${project.description}</p>
            
            <div style="margin-bottom: 1.5rem;">
                <h4 style="margin-bottom: 0.5rem; color: var(--text);">Development Challenge:</h4>
                <p style="color: var(--text-muted); font-size: 0.95rem;">${project.challenge}</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <h4 style="margin-bottom: 0.5rem; color: var(--text);">Solution & Approach:</h4>
                <p style="color: var(--text-muted); font-size: 0.95rem;">${project.solution}</p>
            </div>

            <div class="tech-stack" style="margin-bottom: 2rem;">
                ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
            </div>

            <div style="display: flex; gap: 1rem;">
                <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-primary" style="font-size: 0.9rem; padding: 0.5rem 1rem;">GitHub Repository</a>
                <a href="${project.demo}" target="_blank" rel="noopener" class="btn btn-secondary" style="font-size: 0.9rem; padding: 0.5rem 1rem;">Live Demo</a>
            </div>
        `;
        modal.classList.add("active");
    }

    if (modalClose) {
        modalClose.addEventListener("click", () => modal.classList.remove("active"));
    }
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
    });

    // 6. Render Journey & Certificates
    const timelineContainer = document.querySelector("#timeline-container");
    if (timelineContainer) {
        timelineContainer.innerHTML = portfolioData.journey.map(item => `
            <div class="timeline-item">
                <div class="timeline-date">${item.period}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }

    const certsGrid = document.querySelector("#certificates-grid");
    if (certsGrid) {
        certsGrid.innerHTML = portfolioData.certificates.map(cert => `
            <div class="cert-card">
                <h4>${cert.title}</h4>
                <div class="cert-issuer">${cert.issuer} • ${cert.date}</div>
                <p>${cert.description}</p>
            </div>
        `).join('');
    }

    // 7. Render Blog / Notes
    const blogGrid = document.querySelector("#blog-grid");
    if (blogGrid) {
        blogGrid.innerHTML = portfolioData.blogPosts.map(post => `
            <div class="blog-card">
                <div>
                    <div class="blog-meta">
                        <span>${post.date}</span>
                        <span>•</span>
                        <span>${post.readTime}</span>
                        <span>•</span>
                        <span>${post.category}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.snippet}</p>
                </div>
                <button class="read-more-btn" onclick="alert('${post.content.replace(/'/g, "\\'")}')">Read Article &rarr;</button>
            </div>
        `).join('');
    }

    // 8. Contact Form Handling
    const contactForm = document.querySelector("#contact-form");
    const formFeedback = document.querySelector("#form-feedback");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.querySelector("#name").value;
            
            formFeedback.style.color = "#10b981";
            formFeedback.textContent = `Thank you, ${name}! Your message has been received. (Note: To enable live email delivery, you can connect a service like EmailJS or Formspree).`;
            contactForm.reset();
        });
    }

    // 9. Back to Top Button
    const backToTopBtn = document.querySelector("#back-to-top");
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}); 