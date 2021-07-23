let chatbotContainerCloseButton = document.getElementById('closeButton');
let chatbotContainer = document.getElementById('chatbotContainer');
let chatbotOpenningImage = document.getElementById('chatbotOpenningImage');
let chatbotOpenningConatainer = document.getElementById('chatbotOpenningConatainer');

chatbotContainerCloseButton.addEventListener('click',()=>{
    chatbotContainer.style.display = 'none';
    chatbotOpenningContainer.style.display = 'block';
})

chatbotOpenningImage.addEventListener('click',()=>{
    chatbotOpenningContainer.style.display = 'none';
    chatbotContainer.style.display =  'block';
})

