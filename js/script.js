document.addEventListener("DOMContentLoaded",()=>{
    //burger menu (responsive menu)
    const burger = document.querySelector(".burger");
    const navMenu = document.querySelector(".nav-menu");

    burger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        burger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        burger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    //rename guest to username value input
    const rename = document.getElementById("rename-submit");
    rename.addEventListener('click',()=>{
        let name =document.getElementById('rename');
        document.getElementById('username').innerHTML= name.value;
        if (name.value == ''){
        document.getElementById('username').innerHTML= "Guest";
        }
        name.value = '';
    })

    // validate form and display the result
    const form = document.getElementById('message-form');
    const result = document.getElementById('message-value')
    form.addEventListener('submit', (event)=>{
        event.preventDefault()

        const name = document.getElementById('nama');
        const birth = document.getElementById('tanggal-lahir');
        const gender = document.querySelector('input[name="jenis-kelamin"]:checked');
        const message = document.getElementById('pesan');

        if(validateForm(name,birth,gender,message)){
            console.log("data");
            const currentDate = new Date()
            result.innerHTML = `
            <div class="value-form">
            <h3>Form Submission</h3>
            <p><strong>Current date:</strong> ${currentDate}</p><br>
            <p><strong>Nama:</strong> ${name.value}</p>
            <p><strong>Tanggal Lahir:</strong> ${birth.value}</p>
            <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
            <p><strong>Pesan:</strong> ${message.value}</p>
            </div>`;
            result.style.display = 'block';
            clearForm(name,birth,gender,message);
        }else{
            result.innerHTML = `<p class="value-form">Isi semua kolom dengan benar!</p>`;
            result.style.display = 'block';
        }
        //function to validate form
        function validateForm(name,birth,gender,message){
            let valid = true;

            // clear validation in form
            clearValidation(name);
            clearValidation(birth);
            clearValidation(document.querySelector('.gender-group'));
            clearValidation(message)

            // validate name
            if (name.value.trim() === ''){
                showValidationError(name, 'Isi nama Anda!')
                valid = false;
            }else{
                showValidationSuccess(name)
            }

            // validate date of birth
            if (birth.value.trim() === ''){
                showValidationError(birth, 'Isi tanggal lahir Anda!')
                valid = false;

            }else{
                showValidationSuccess(birth)
            }

            // validate gender
            if (!gender){
                showValidationError(document.querySelector('.gender-group', 'Isi jenis kelamin Anda!'))
                valid = false;

            }else{
                showValidationSuccess(document.querySelector('.gender-group'))
            }

            // validate message
            if (message.value.trim() === ''){
                showValidationError(message, 'Isi pesan Anda!')
                valid = false;

            }else{
                showValidationSuccess(message)
            }
            
            return valid;
        }

        // function to clear validation in form
        function clearValidation(element){
            element.classList.remove('success');
            document.querySelectorAll(".form-group .error").forEach(element => element.classList.remove("error"));
            document.querySelectorAll(".error-text").forEach(message => message.remove())
        }

        //function to show error
        function showValidationError(element,messages){
            element.classList.add('error');
            const errorElement = document.createElement("small");
            errorElement.classList.add("error-text");
            errorElement.innerText = messages;
            element.closest('.form-group').appendChild(errorElement)
        }

        // function to show success
        function showValidationSuccess(element){
            element.classList.add('success');
        }

        //function to clear form
        function clearForm(...elements){
            elements.forEach(element => {
                element.value = '';
                element.classList.remove('success');
            });
        }
    })

});
    // Get the button
    let topButton = document.getElementById("top-button");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function inputNameFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

    //slideshow
    let slideIndex = 1;
    showSlides(slideIndex);

    function nextSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let index;
        let slides = document.getElementsByClassName("banner-slide");
        if (n > slides.length) {slideIndex = 1}
        else if (n < 1) {slideIndex = slides.length}
        for (index = 0; index < slides.length; index++) {
            slides[index].style.display = "none"
        }
        
        slides[slideIndex - 1].style.display = "block"
        setInterval(()=>{nextSlides(1)},5000);// Change image every 5 seconds
    }