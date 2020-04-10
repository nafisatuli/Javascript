//adding new chat documents
//setting up a real time listener to get new chats
//updating the username
//updating the room

class Chatroom {
    //initial properties
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }

    async addChat(message) {
        //format a chat object
        const now = new Date();
        const chat = {
            message,
            room: this.room,
            username: this.username,
            time: firebase.firestore.Timestamp.fromDate(now)
        };
        //save the chat document
        const response = await this.chats.add(chat);
        return response;
    }

    //Real time listener set up
    getChats(callback) {
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('time')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        //update the ui
                        callback(change.doc.data());
                    }
                });
            });
    }

    updateName(username) {
        this.username = username;
        localStorage.setItem('username', username);
    }

    updateRoom(room) {
        this.room = room;
        console.log('room updated');
        if (this.unsub) {
            this.unsub();
        }
    }
}

/*const chatroom = new Chatroom('gaming', 'shaun');
//call to addChat and adding chatroom in firestore
/!*
chatroom.addChat('hello everyone')
    .then(() => {
        console.log('chat added');
    }).catch(err => {
    console.log(err);
});*!/
chatroom.getChats((data) => {
    //passing an arguement to getChats method
    //take that function and refered as callback
    console.log(data);
});*/

/*setTimeout(() => {
    chatroom.updateRoom('general');
    chatroom.updateName('yoshi');
    chatroom.getChats((data) => {
        console.log(data);
    });
    chatroom.addChat('Hi');
}, 3000);*/
