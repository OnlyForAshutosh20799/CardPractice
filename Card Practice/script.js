let likeCount = 0;
const likeIcon = document.querySelector('.fa-regular fa-heart');
const likeCountElement = document.querySelector('.lolo');
likeIcon.addEventListener('click', function(){
    likeCount++;
    likeCountElement.textContent=likeCount;
});