document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.navbar ul li a');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            const targetId = button.getAttribute('href');
            const targetPane = document.querySelector(targetId);

            // Remove active classes from all panes
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Scroll to the target pane
            targetPane.scrollIntoView({ behavior: 'smooth' });

            // Add active class to the target pane
            targetPane.classList.add('active');
        });
    });
});
