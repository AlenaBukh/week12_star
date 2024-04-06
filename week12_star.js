function validatedName(value) {
  return value[0].toUpperCase() + value.substring(1).toLowerCase();
}

function checkSpam(str) {
  return str.replaceAll(/viagra/gi, "***");
}

function sendComment() {
  const newName = document.getElementById("name").value;
  const newUrl = document.getElementById("url").value;
  const newComment = document.getElementById("comment").value;

  const validateName = validatedName(newName);
  const validatedComment = checkSpam(newComment);

  document.getElementById(
    "saidComment"
  ).innerHTML = `${validateName} <img src=${newUrl} /> ${validatedComment}`;
}
