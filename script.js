const techIconMap = {
    // Programming Languages
    'python': 'devicon-python-plain colored',
    'Python': 'devicon-python-plain colored',
    
    // ML/DL Frameworks
    'torch': 'devicon-pytorch-original colored',
    'PyTorch': 'devicon-pytorch-original colored',
    'tensorflow': 'devicon-tensorflow-original colored',
    'numpy': 'devicon-numpy-original colored',
    'NumPy': 'devicon-numpy-original colored',
    'pandas': 'devicon-pandas-original colored',
    'Pandas': 'devicon-pandas-original colored',
    'scikit-learn': 'devicon-scikitlearn-plain colored',
    'Scikit-learn': 'devicon-scikilearn-plain colored',
    'mlflow': 'fas fa-chart-line', // Using a chart icon for MLflow
    'transformers': 'devicon-huggingface-plain colored',


    // Cloud/Deployment
    'aws': 'devicon-amazonwebservices-original colored',
    'AWS': 'devicon-amazonwebservices-original colored',
    'docker': 'devicon-docker-plain colored',
    'Docker': 'devicon-docker-plain colored',
    'flask': 'devicon-flask-original colored',
    'Flask': 'devicon-flask-original colored',

    'docker-compose': 'devicon-docker-plain colored',
    'grafana': 'devicon-grafana-original colored',
    'prometheus': 'fas fa-tachometer-alt', // Using a dashboard icon for Prometheus
    'prefect': 'fas fa-tasks', // Using a tasks icon for Prefect
    
    // Testing
    'unittest': 'fas fa-vial', // Using a test tube icon for unittest
    

    // Others
    'matplotlib': 'devicon-matplotlib-plain colored',
    'Matplotlib': 'devicon-matplotlib-plain colored',
    'gunicorn': 'fas fa-server',
    'Gunicorn': 'fas fa-server',
    'seaborn': 'fas fa-chart-line',
    'Seaborn': 'fas fa-chart-line',
    'gym': 'fas fa-robot',
    'Gym': 'fas fa-robot'
};

// Function to format date
function formatDate(dateString) {
    if (dateString === 'Present') return dateString;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

// Function to load and display experiences
async function loadExperiences() {
    try {
        console.log('Loading experiences...');
        const response = await fetch('info/experience.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Experience data:', data);
        
        const container = document.getElementById('experience-container');
        if (!container) {
            throw new Error('Experience container not found!');
        }
        
        container.innerHTML = data.experiences.map(exp => `
            <div class="experience-item">
                <div class="experience-content">
                    <div class="experience-header">
                        <div>
                            <div class="experience-title">${exp.role}</div>
                            <div class="experience-location">${exp.location}</div>
                        </div>
                        <div class="experience-date">
                            ${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}
                        </div>
                    </div>
                    <ul class="experience-tasks">
                        ${exp.tasks.map(task => `<li>${task}</li>`).join('')}
                    </ul>
                </div>
                <img src="images/${exp.image}" alt="${exp.role}" class="experience-image">
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading experiences:', error);
        const container = document.getElementById('experience-container');
        if (container) {
            container.innerHTML = `<p>Error loading experiences: ${error.message}</p>`;
        }
    }
}

// Function to load and display projects
async function loadProjects() {
    try {
        console.log('Loading projects...');
        const response = await fetch('info/projects.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Projects data:', data);
        
        const container = document.getElementById('projects-container');
        if (!container) {
            throw new Error('Projects container not found!');
        }
        
        container.innerHTML = data.projects.map(project => `
            <div class="project-item">
                <div class="project-content">
                    <h3><a href="${project.github}" target="_blank">${project.name}</a></h3>
                    <p>${project.description}</p>
                    <div class="tech-stack">
                        ${project.technologies.map(tech => {
                            const iconClass = techIconMap[tech] || 'fas fa-code';
                            return `
                                <div class="tech-icon">
                                    <i class="${iconClass}"></i>
                                    <span>${tech}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                <img src="images/${project.image}" alt="${project.name}" class="experience-image">
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading projects:', error);
        const container = document.getElementById('projects-container');
        if (container) {
            container.innerHTML = `<p>Error loading projects: ${error.message}</p>`;
        }
    }
}

// Function to load and display publications
async function loadPublications() {
    try {
        console.log('Loading publications...');
        const response = await fetch('info/publications.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Publications data:', data);
        
        const container = document.getElementById('publications-container');
        if (!container) {
            throw new Error('Publications container not found!');
        }
        
        container.innerHTML = data.publications.map(pub => `
            <div class="publication-item">
                <h3>${pub.title}</h3>
                <p class="publication-authors">${pub.authors.join(', ')}</p>
                <p class="publication-journal">${pub.journal} (${pub.year})</p>
                <p>DOI: <a href="https://doi.org/${pub.doi}" target="_blank">${pub.doi}</a></p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading publications:', error);
        const container = document.getElementById('publications-container');
        if (container) {
            container.innerHTML = `<p>Error loading publications: ${error.message}</p>`;
        }
    }
}

// Function to load and display education
async function loadEducation() {
    try {
        console.log('Loading education...');
        const response = await fetch('info/education.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Education data:', data);
        
        const container = document.getElementById('education-container');
        if (!container) {
            throw new Error('Education container not found!');
        }
        
        container.innerHTML = data.education.map(edu => `
            <a href="${edu.link}" target="_blank" class="education-link">
            <div class="education-item thin-container">
                <div class="education-content">
                    <div class="education-header">
                        <div>
                            <div class="education-title">${edu.degree}</div>
                            <div class="education-location">${edu.location}</div>
                        </div>
                        <div class="education-date">${edu.year}</div>
                    </div>
                </div>
                <img src="images/${edu.image}" alt="${edu.degree}" class="education-image small-image">
            </div>
            </a>
        `).join('');
    } catch (error) {
        console.error('Error loading education:', error);
        const container = document.getElementById('education-container');
        if (container) {
            container.innerHTML = `<p>Error loading education: ${error.message}</p>`;
        }
    }
}

// Function to load and display courses
async function loadCourses() {
    try {
        console.log('Loading courses...');
        const response = await fetch('info/courses.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Courses data:', data);
        
        const container = document.getElementById('courses-container');
        if (!container) {
            throw new Error('Courses container not found!');
        }
        
        container.innerHTML = data.courses.map(course => `
            <div class="course-item">
                <div>
                    <h3>${course.name}</h3>
                    <p>${course.provider} (${course.year})</p>
                </div>
                <a href="${course.certificate}" target="_blank" class="btn">View Course</a>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading courses:', error);
        const container = document.getElementById('courses-container');
        if (container) {
            container.innerHTML = `<p>Error loading courses: ${error.message}</p>`;
        }
    }
}

// Function to show section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
        
        // Load content based on section
        switch(sectionId) {
            case 'experience':
                loadExperiences();
                break;
            case 'education':
                loadEducation();
                break;
            case 'projects':
                loadProjects();
                break;
            case 'publications':
                loadPublications();
                break;
            case 'courses':
                loadCourses();
                break;
            case 'other':    // Add this case
                loadOther();
                break;
            case 'miscelanea':    // Add this case
                loadMiscelanea();
                break;
        }
    }
}

// Initialize navigation
document.addEventListener('DOMContentLoaded', function() {
    // Show home section by default
    showSection('home');

    // Add click handlers to navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            document.querySelectorAll('.nav-link').forEach(l => {
                l.classList.remove('active');
            });
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show the selected section
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });
});

// Add this function with your other loading functions
async function loadOther() {
    try {
        console.log('Loading other...');
        const response = await fetch('info/other.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Other data:', data);
        
        const container = document.getElementById('other-container');
        if (!container) {
            throw new Error('Other container not found!');
        }
        
        container.innerHTML = data.other.map(item => `
            <div class="experience-item full-width">
                <div class="experience-content full-width-content">
                    <div class="experience-header">
                        <div class="full-width-header">
                            <div class="experience-title">${item.title}</div>
                            <div class="experience-date">${item.year}</div>
                        </div>
                    </div>
                    <p class="description full-width-description">${item.description}</p>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error loading other:', error);
        const container = document.getElementById('other-container');
        if (container) {
            container.innerHTML = `<p>Error loading other: ${error.message}</p>`;
        }
    }
}
async function loadMiscelanea() {
    try {
        console.log('Loading miscelanea...');
        const response = await fetch('info/miscelanea.txt');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        console.log('Miscelanea content:', content);
        
        const container = document.getElementById('miscelanea-container');
        if (!container) {
            throw new Error('Miscelanea container not found!');
        }
        
        container.innerHTML = `
            <div class="experience-item full-width">
                <div class="experience-content full-width-content">
                    ${content.split('\n').map(line => {
                        if (line.startsWith('##')) {
                            // Headers with emojis
                            return `<h3 class="section-title">${line.replace('##', '').trim()}</h3>`;
                        } else if (line.startsWith('-')) {
                            // List items
                            return `<div class="list-item">${line.substring(1).trim()}</div>`;
                        } else if (line.trim() === '') {
                            // Empty lines
                            return '<div class="spacer"></div>';
                        } else {
                            // Regular text (including links and formatting)
                            return `<p>${line}</p>`;
                        }
                    }).join('')}
                </div>
            </div>
        `;
    } catch (error) {
        console.error('Error loading miscelanea:', error);
        const container = document.getElementById('miscelanea-container');
        if (container) {
            container.innerHTML = `<p>Error loading miscelanea: ${error.message}</p>`;
        }
    }
}
