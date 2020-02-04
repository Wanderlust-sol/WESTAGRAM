const innerForm = document.querySelector(".content_part");
const commentInput = document.querySelector(".addcomment_box");
const postBtn = document.querySelector(".post_button");
const thisIsTextarea = document.querySelector("textarea");
const parentForm = document.querySelector(".parent_form");

function uploadComment() {
  const commentValue = commentInput.value;
  const createTag = document.createElement("div");
  const createTag1 = document.createElement("span");
  const createTag2 = document.createElement("span");
  const createTag3 = document.createElement("span");
  const imgTag = document.createElement("img");

  if (commentValue !== "") {
    createTag.className += "newDiv";
    createTag1.className += "name";
    createTag2.className += "newComment";
    createTag3.className += "heartIcon-box";
    imgTag.className += "heartIcon";
    imgTag.src +=
      "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
    createTag1.innerHTML = "wanderlust_sol";
    createTag2.innerHTML = commentValue;

    parentForm.appendChild(createTag);
    createTag.appendChild(createTag1);
    createTag.appendChild(createTag2);
    createTag.appendChild(createTag3);
    createTag3.appendChild(imgTag);
    thisIsTextarea.value = "";
  }

  createTag.addEventListener("click", function(e) {
    e.target.remove();
  });
}

function enterKeycode(e) {
  if (e.keyCode === 13) {
    uploadComment();
  }
}

function pressBtn() {
  postBtn.addEventListener("click", uploadComment);
  commentInput.addEventListener("keydown", enterKeycode);
}

pressBtn();
