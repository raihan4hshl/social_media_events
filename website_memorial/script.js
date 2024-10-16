document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('testimonyForm');
    const timeline = document.getElementById('timeline');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        // Get form values
        const testimonyText = document.getElementById('testimony').value;
        const date = document.getElementById('date').value;
        const source = document.getElementById('source').value;

        // Create new timeline entry
        const timelineEntry = document.createElement('div');
        timelineEntry.classList.add('timeline-entry');

        const timelineDate = document.createElement('div');
        timelineDate.classList.add('timeline-date');
        timelineDate.textContent = formatDate(date);

        const timelineContent = document.createElement('div');
        timelineContent.classList.add('timeline-content');
        timelineContent.innerHTML = `
            <p>"${testimonyText}"</p>
            <p><strong>Source:</strong> ${source}</p>
        `;

        // Append date and content to the timeline entry
        timelineEntry.appendChild(timelineDate);
        timelineEntry.appendChild(timelineContent);

        // Append the new timeline entry to the timeline
        timeline.appendChild(timelineEntry);

        // Clear form fields
        form.reset();
    });

    // Helper function to format date
    function formatDate(dateStr) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateStr).toLocaleDateString(undefined, options);
    }
});
