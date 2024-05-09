const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const gallery = document.getElementById("gallery");

dropArea.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", handleFiles);

["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

["dragenter", "dragover"].forEach((eventName) => {
  dropArea.addEventListener(eventName, highlight, false);
});

["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

dropArea.addEventListener("drop", handleDrop, false);

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function highlight() {
  dropArea.classList.add("highlight");
}

function unhighlight() {
  dropArea.classList.remove("highlight");
}

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}

function handleFiles(files) {
  [...files].forEach(uploadFile);
}

function uploadFile(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function () {
    const img = document.createElement("img");
    img.src = reader.result;
    img.classList.add("w-full", "h-auto", "rounded-md");
    gallery.appendChild(img);
  };
}
