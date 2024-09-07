function loadFile(event) {
    var input = event.target;
    if (input.files && input.files[0]) {
        var image = document.getElementById('profile-image');
        image.src = URL.createObjectURL(input.files[0]);
    }
}
