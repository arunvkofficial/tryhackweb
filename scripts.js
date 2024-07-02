document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let formData = new FormData();
    formData.append('fileToUpload', document.getElementById('fileToUpload').files[0]);

    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('resultMessage').textContent = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
