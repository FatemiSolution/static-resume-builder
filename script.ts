// Toggle Skills Section
const toggleSkillsButton = document.getElementById('toggleSkillsButton');
const skillsSection = document.getElementById('skillsSection');

toggleSkillsButton?.addEventListener('click', () => {
    if (skillsSection?.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection!.style.display = 'none';
    }
});

// Download Resume Functionality
const downloadResumeButton = document.getElementById('downloadResumeButton');

downloadResumeButton?.addEventListener('click', () => {
    const element = document.createElement('a');
    const file = new Blob([document.body.innerHTML], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = 'resume.html';
    document.body.appendChild(element); // Required for Firefox
    element.click();
});
