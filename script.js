document.addEventListener('DOMContentLoaded', function() {
    // Toggle job details on click for each job title
    const jobTitles = document.querySelectorAll('.job-title');
    jobTitles.forEach(title => {
        title.addEventListener('click', function() {
            const details = title.parentElement.querySelectorAll('.job-details');
            details.forEach(detail => {
                if (detail.style.display === 'block') {
                    detail.style.opacity = 0;
                    setTimeout(() => {
                        detail.style.display = 'none';
                    }, 300); // Match this duration with CSS transition
                } else {
                    detail.style.display = 'block';
                    setTimeout(() => {
                        detail.style.opacity = 1;
                    }, 10); // Small delay to trigger transition
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Toggle job details on click for each job title
    const jobTitles = document.querySelectorAll('.project-title');
    jobTitles.forEach(title => {
        title.addEventListener('click', function() {
            const details = title.parentElement.querySelectorAll('.project-details');
            details.forEach(detail => {
                if (detail.style.display === 'block') {
                    detail.style.opacity = 0;
                    setTimeout(() => {
                        detail.style.display = 'none';
                    }, 300); // Match this duration with CSS transition
                } else {
                    detail.style.display = 'block';
                    setTimeout(() => {
                        detail.style.opacity = 1;
                    }, 10); // Small delay to trigger transition
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Toggle job details on click for each job title
    const jobTitles = document.querySelectorAll('.section-title');
    jobTitles.forEach(title => {
        title.addEventListener('click', function() {
            const details = title.parentElement.querySelectorAll('.section-content');
            details.forEach(detail => {
                if (detail.style.display === 'block') {
                    detail.style.opacity = 0;
                    setTimeout(() => {
                        detail.style.display = 'none';
                    }, 300); // Match this duration with CSS transition
                } else {
                    detail.style.display = 'block';
                    setTimeout(() => {
                        detail.style.opacity = 1;
                    }, 10); // Small delay to trigger transition
                }
            });
        });
    });
});



    // Visitor counter functionality
    const counter = document.querySelector(".counter-number");
    async function updateCounter() {
        let response = await fetch("https://nnrqifw6sbzmtw74noap5uoexu0njlkj.lambda-url.us-east-1.on.aws/");
        let data = await response.json();
        counter.innerHTML = ` ${data.views}`;
    }

    updateCounter();
