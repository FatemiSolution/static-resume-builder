// Toggle Skills Section
var toggleSkillsButton = document.getElementById('toggleSkillsButton');
var skillsSection = document.getElementById('skillsSection');
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
// Download Resume Functionality
var downloadResumeButton = document.getElementById('downloadResumeButton');
downloadResumeButton === null || downloadResumeButton === void 0 ? void 0 : downloadResumeButton.addEventListener('click', function () {
    var element = document.createElement('a');
    var file = new Blob([document.body.innerHTML], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = 'resume.html';
    document.body.appendChild(element); // Required for Firefox
    element.click();
});
