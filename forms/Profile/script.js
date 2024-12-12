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






const waitForButtons = setInterval(() => {
    const editBtn = document.getElementById('edit-btn');
    const saveBtn = document.getElementById('save-btn');

    if (editBtn && saveBtn) {
        clearInterval(waitForButtons);
        console.log('Buttons found.');

        const profileInputs = document.querySelectorAll('#profile-form input, #profile-form textarea');

        editBtn.addEventListener('click', () => {
            console.log('Edit button clicked');
            profileInputs.forEach(input => input.disabled = false);
            editBtn.style.display = 'none';
            saveBtn.style.display = 'inline-block';
        });

        saveBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Save button clicked');
            profileInputs.forEach(input => input.disabled = true);
            editBtn.style.display = 'inline-block';
            saveBtn.style.display = 'none';
            alert('Profile saved!');
        });
    }
}, 500); // Check every 500ms

  

  
