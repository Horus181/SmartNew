function toggleLanguage() {
    const elementsVi = document.querySelectorAll('[data-lang="vi"]');
    const elementsEn = document.querySelectorAll('[data-lang="en"]');

    elementsVi.forEach(el => {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
    });

    elementsEn.forEach(el => {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
    });
}

function toggleJobs(jobId) {
    var jobList = document.getElementById(jobId);
    if (jobList.style.display === "none" || jobList.style.display === "") {
        jobList.style.display = "block";
    } else {
        jobList.style.display = "none";
    }
}
document.getElementById('apply-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    
    fetch('php/process-application.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('message').style.display = 'block';
        document.getElementById('message').innerText = data;
    })
    .catch(error => {
        document.getElementById('message').style.display = 'block';
        document.getElementById('message').innerText = 'Có lỗi xảy ra. Vui lòng thử lại.';
    });
});
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let cv = document.getElementById('cv').value;

    if (name && validateEmail(email) && validatePhone(phone) && cv) {
        window.location.href = 'success.html';
    } else {
        alert('Vui lòng điền đầy đủ và đúng định dạng các thông tin yêu cầu.');
    }
}

function validateEmail(email) {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    let re = /^\d{10,11}$/;  // Kiểm tra số điện thoại Việt Nam (10-11 chữ số)
    return re.test(phone);
}
