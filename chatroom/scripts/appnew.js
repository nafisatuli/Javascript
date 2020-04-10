//dom queries
const chatlist = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');
//add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(e => console.log(e));
});
//update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    //update name via chatroom
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    //reset the form
    newNameForm.reset();
    //show then hide update message
    updateMsg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMsg.innerText = '', 3000);
});
//update the chat room
rooms.addEventListener('click', e => {
    if (e.target.tagName === 'BTN') {
        chatui.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatui.render(chat));
    }
});
//check local storage for a name
const username = localStorage.username ? localStorage.username : 'anonymas';
//class instances
//passing chatList
const chatui = new ChatUI(chatlist);
const chatroom = new Chatroom('general', username);

//get the chats and render
chatroom.getChats((data) => {
    chatui.render(data);
});