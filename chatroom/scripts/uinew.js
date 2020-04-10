//render chat templates to the DOM
//clear the list of chats when room changes
class ChatUI {
    constructor(list) {
        this.list = list;
    }

    clear() {
        this.list.innerHTML = '';
    }

    render(data) {
        //rendering html to DOM
        const when = dateFns.distanceInWordsToNow(
            data.time.toDate(),
            {addSuffix: true}
        );
        const html = `
        <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${when}</div>
        </li>
        `;
        this.list.innerHTML += html;
    }
}