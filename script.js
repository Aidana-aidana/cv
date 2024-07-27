document.addEventListener('DOMContentLoaded', function () {
    // Function to show the selected section
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.remove('hidden');
        }
    }

    // Add event listeners to the filter buttons
    document.querySelectorAll('.filter-buttons button').forEach(button => {
        button.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Initially show the 'main' section
    showSection('main');
});