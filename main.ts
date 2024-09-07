function loadFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        const image = document.getElementById('profile-image') as HTMLImageElement;
        image.src = URL.createObjectURL(input.files[0]);
    }
}