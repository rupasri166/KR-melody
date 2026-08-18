// =========================
// KR MELODY MUSIC ACADEMY
// =========================

console.log("Welcome to KR Melody Music Academy!");


// =========================
// ENROLL BUTTON
// =========================

function enrollCourse(courseName) {

    alert(
        "🎵 KR Melody Music Academy\n\n" +
        "You selected: " + courseName +
        "\n\n" +
        "Thank you for choosing KR Melody!\n" +
        "We will contact you soon."
    );

}


// =========================
// CONTACT FORM
// =========================

function submitForm(event) {

    // Stop page from refreshing
    event.preventDefault();

    // Get form values
    const name =
        document.getElementById("name").value;

    const course =
        document.getElementById("course").value;


    // Confirmation message
    alert(
        "🎵 KR Melody Music Academy\n\n" +
        "Thank you, " + name + "!\n\n" +
        "Your enquiry for " + course +
        " has been received successfully.\n\n" +
        "Our team will contact you soon.\n\n" +
        "Keep making beautiful music! 🎶"
    );


    // Clear the form
    document.getElementById("contactForm").reset();

}


// =========================
// GALLERY POPUP
// =========================

function openGallery(imagePath) {

    const modal =
        document.getElementById("galleryModal");

    const modalImage =
        document.getElementById("galleryModalImage");


    // Set selected image
    modalImage.src = imagePath;


    // Show popup
    modal.style.display = "flex";

}


// =========================
// CLOSE GALLERY
// =========================

function closeGallery() {

    const modal =
        document.getElementById("galleryModal");

    modal.style.display = "none";

}


// =========================
// CLOSE GALLERY
// WHEN CLICKING OUTSIDE IMAGE
// =========================

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("galleryModal");


    if (
        modal &&
        event.target === modal
    ) {

        modal.style.display = "none";

    }

});


// =========================
// CLOSE GALLERY WITH ESC KEY
// =========================

window.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        const modal =
            document.getElementById("galleryModal");

        if (modal) {
            modal.style.display = "none";
        }

    }

});
// =========================
// ENROLLMENT FORM
// =========================

function submitEnrollment(event) {

    event.preventDefault();

    const name =
        document.getElementById("studentName").value;

    const course =
        document.getElementById("enrollCourse").value;

    const timing =
        document.getElementById("timing").value;


    alert(
        "🎵 KR Melody Music Academy\n\n" +
        "Enrollment Successful!\n\n" +
        "Student: " + name + "\n" +
        "Course: " + course + "\n" +
        "Preferred Timing: " + timing + "\n\n" +
        "Thank you for joining KR Melody!\n" +
        "We will contact you soon. 🎶"
    );


    document
        .getElementById("enrollmentForm")
        .reset();

}
// =========================
// WHY CHOOSE US POPUP
// =========================

function showFeature(feature) {

    const modal =
        document.getElementById("featureModal");

    const title =
        document.getElementById("featureTitle");

    const text =
        document.getElementById("featureText");

    const icon =
        document.getElementById("featureIcon");


    if (feature === "teachers") {

        icon.innerHTML = "🎓";

        title.innerHTML = "Expert Teachers";

        text.innerHTML =
            "Our experienced and passionate music instructors " +
            "provide personal guidance and help students improve " +
            "their musical skills with proper techniques and practice.";

    }


    else if (feature === "training") {

        icon.innerHTML = "🎵";

        title.innerHTML = "Quality Training";

        text.innerHTML =
            "We provide structured music lessons for beginners " +
            "as well as advanced learners. Students can learn " +
            "step by step and develop strong musical foundations.";

    }


    else if (feature === "performance") {

        icon.innerHTML = "🎤";

        title.innerHTML = "Performance Opportunities";

        text.innerHTML =
            "Students get opportunities to participate in " +
            "performances and musical events. This helps them " +
            "build confidence and improve their stage presence.";

    }


    else if (feature === "environment") {

        icon.innerHTML = "❤️";

        title.innerHTML = "Friendly Environment";

        text.innerHTML =
            "KR Melody provides a comfortable and positive " +
            "learning environment where students can enjoy " +
            "music, practice freely and develop their talent.";

    }


    modal.style.display = "flex";
}


// CLOSE POPUP

function closeFeature() {

    const modal =
        document.getElementById("featureModal");

    modal.style.display = "none";

}


// CLOSE WHEN CLICKING OUTSIDE

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("featureModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

});
