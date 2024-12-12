const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})




document.addEventListener("DOMContentLoaded", function () {
    const regenerateResumeBtn = document.getElementById("regenerateResumeBtn");
    if (!regenerateResumeBtn) {
        console.error("Button with ID 'regenerateResumeBtn' not found.");
        return;
    }

    regenerateResumeBtn.addEventListener("click", async function () {
        try {
            const resumeInput = document.getElementById("resumeInput");
            const jdInput = document.getElementById("jdInput");

            if (!resumeInput || !jdInput) {
                alert("File input elements are missing from the DOM.");
                return;
            }

            const resumeFile = resumeInput.files[0];
            const jdFile = jdInput.files[0];

            if (!resumeFile || !jdFile) {
                alert("Please upload both Resume and Job Description files.");
                return;
            }

            const formData = new FormData();
            formData.append("resume", resumeFile);
            formData.append("jd", jdFile);

            // Show spinner while fetching data
            document.getElementById("spinner").style.display = "block";

            const response = await fetch("https://resume-genie-uamm.onrender.com/analyze-resumes/", {
                method: "POST",
                body: formData,
            });

            // Hide the spinner once the request is completed
            document.getElementById("spinner").style.display = "none";

            if (!response.ok) {
                throw new Error("HTTP error! Status: ${response.status}");
            }

            const data = await response.json();
            console.log("API Response:", data);

            // Check if analysis data exists and display it
            if (data && data.analysis) {
                document.getElementById("resultsContainer").style.display = "block";
                document.getElementById("resultsOutput").textContent = data.analysis;
            } else {
                document.getElementById("resultsContainer").style.display = "none";
                alert("No analysis results found.");
            }

        } catch (error) {
            console.error("Error:", error);
            document.getElementById("spinner").style.display = "none";  // Hide spinner on error
            alert("An error occurred: ${error.message}");
        }
    });
});