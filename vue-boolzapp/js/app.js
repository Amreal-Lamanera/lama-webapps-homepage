dayjs.extend(window.dayjs_plugin_customParseFormat);
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

/**********************************
   array dei contatti
*********************************/
const contacts = [
    {
        name: 'Godrick',
        avatar: 'godrick.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ti sei innestato la testa di drago?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di chiudere i cancelli di Gran Tempesta!',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Melina',
        avatar: 'melina.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Cerco vergine delle dita',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Se mi porti all\'albero madre sarò la tua vergine... abbiamo un accordo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Accetto.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Agheel',
        avatar: 'agheel.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'ROAAAAAARRRRR!',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'ROAAAAAAAAAAAAAARRRRRRRRRRRRR!!!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Malenia',
        avatar: 'malenia.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Chi sei?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Io sono Malenia, spada di MIquella, e non sono mai stata sconfitta!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Godfrey',
        avatar: 'godfrey.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Dov\'è Marika?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'E io che ne so! Da quando sta con Radagon non la sento molto...',
                status: 'received'
            }
        ],
    },
    {
        name: 'Radhan',
        avatar: 'radhan.jpeg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Radhan, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Sto mangiando un soldato di Malenia, lasciami in pace',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Ah... ok.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Rykard',
        avatar: 'rykard.png',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Thanith che il suo compleanno',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le sssssscrivo ssssssubito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fia',
        avatar: 'fia.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, dormiamo insieme stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ma non eri fidanzata?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Io sono una compagna di morte, mica ho il ragazzo fisso!',
                status: 'received'
            }
        ],
    },
];

/**********************************
   array delle risposte casuali
*********************************/
const answers = [
    'Non ci sono più le mezze stagioni',
    'Oggi ci sei, domani chissà',
    'Il tempo vola',
    'I giovani d’oggi non hanno più rispetto per gli anziani',
    'La verdura di una volta aveva tutto un altro sapore',
    'Sono sempre i migliori che se ne vanno',
    'Non c’è più rispetto per gli anziani',
    'È tutto un magna-magna',
    'Una volta i cibi erano più sani',
    'A tutto c’è rimedio, tranne che alla morte',
    'Non si finisce mai di imparare',
    'Non ti regala niente nessuno',
    'Auguri e figli maschi',
    'Ormai si passa direttamente dal cappotto alle mezze maniche',
    'Non esistono solo il bianco e il nero, ma ci sono tante sfumature di grigio',
    'Qui una volta era tutta campagna',
    'Al cuor non si comanda',
    'Nella vita non si può mai sapere',
    'Quando c’è la salute, c’è tutto',
    'È la vita',
    'I supermercati hanno ucciso il piccolo commercio',
    'D’estate nelle case antiche si sta più freschi',
    'I soldi non sono tutto nella vita',
    'Non c’è due senza tre',
    'Prova a buttare una carta per terra in Svizzera',
    'Ai tempi nostri ci si divertiva con poco',
    'Ai posteri l’ardua sentenza',
    'Se non ti ama non ti merita',
    'Una volta si poteva lasciare la porta aperta',
    'Con questo tempo non si sa più come vestirsi',
    'Non è tanto il caldo quanto l’umidità',
    'I film più belli li danno sempre e solo la notte',
    'Il mattone è sempre un buon investimento',
    'Come si mangia in Italia, non si mangia da nessuna parte',
    'Qui casca l’asino',
]

/**********************************
   array dei saluti casuali
*********************************/
const helloArray = [
    'Ciao',
    'Bella',
    'Hey',
    'Eilà',
    'Loda il sole',
    'Benvenuto Tarnished'
]

const howArray = [
    'Tutto bene, grazie',
    'Non molto bene...',
    'Nella norma',
    'Alla grande!'
]

const app = new Vue({
    el: '#app',
    /**********************************
        DATA
     *********************************/
    data: {
        smartphoneChat: false,
        active: null,
        contacts,
        newMessage: '',
        search: false,
        text: '',
        addingContact: false,
        newAvatar: '',
        newName: '',
        showMsg: -1,
        showInfo: false,
        writing: false,
        write: 'Online',
        answers,
        addContactPopup: false,
        statusPopup: false,
        notificationsAlert: true,
        deletePopup: false,
        deleteIndex: -1,
        myAvatar: 'img/IMG_9783.JPEG',
        myName: 'Francesco',
        editProfilePopup: false,
        editingProfile: false,
        quotedMsg: null,
        helloArray,
        howArray,
        nextMessage: '',
        // mediaRecorder: new MediaRecorder(mediaStreamObj),
        recognition: new SpeechRecognition(),
        record: false,
        recorder: null
    },
    /**********************************
        COMPUTED
     *********************************/
    computed: {
        /**********************************
            ritorna l'array dei messaggi 
            della chat attivo
        *********************************/
        getMessages() {
            this.smartphoneChat = true;
            return this.contacts[this.active].messages;
        },

        /**********************************
            ritorna l'array dei messaggi
            contenente l'input text
        *********************************/
        getContactsFiltered() {
            if (!this.text) return contacts
            const contactFiltered = this.contacts.filter((el) => {
                const name = el.name.toUpperCase();
                const text = this.text.toUpperCase();
                return name.includes(text);
            })
            return contactFiltered;
        }
    },
    /**********************************
        METHODS
     *********************************/
    methods: {
        /**********************************
            ritorna l'ora come stringa
            'HH:mm' dell'ultimo messaggio
        *********************************/
        getHour(messages) {
            const last = messages.length - 1;
            if (last < 0) return;
            let date = messages[messages.length - 1].date;
            return this.formatHour(date);
        },

        /**********************************
            prende una data e ritorna
            l'ora come stringa 'HH:mm'
        *********************************/
        formatHour(date) {
            return dayjs(date, 'DD/MM/YYYY HH:mm:ss').format('HH:mm');
        },

        /**********************************
            imposta l'indice della chat
            attiva
        *********************************/
        moveActive(index) {
            this.active = index;
            this.quotedMsg = null;
        },

        /**********************************
            aggiunge il messaggio inviato
            alla chat e genera una risposta
        *********************************/
        addMessage() {
            this.newMessage = this.newMessage.trim();
            if (!this.newMessage || this.active === null) return
            const messages = this.contacts[this.active].messages;
            let newObj = new Object();
            newObj = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: this.newMessage,
                status: 'sent'
            }

            // se sto rispondeno ad un messaggio aggiungo delle proprietà all'oggetto
            if (this.quotedMsg != null) {
                if (this.quotedMsg.messageUrl) newObj.quotedMsg = 'Audio \u{1F3B5}'
                else newObj.quotedMsg = this.quotedMsg.message;
                if (this.quotedMsg.status === 'sent') newObj.name = 'Tu';
                else newObj.name = this.contacts[this.active].name;
                this.quotedMsg = null;
            }

            messages.push(newObj);
            this.nextMessage = this.newMessage;
            this.newMessage = '';
            this.randomAnswer();
            this.scrollHandler();
        },

        // funzione che genera una risposta
        randomAnswer() {
            // TODO: la simulazione di 'online' e 'sta scrivendo...' rimane buggata al cambio chat dopo l'invio del messaggio
            const messages = this.contacts[this.active].messages;
            this.writing = true;

            setTimeout(() => {
                this.write = 'Sta scrivendo...';
                setTimeout(() => {
                    messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        message: this.randomMsg(this.nextMessage),
                        status: 'received'
                    }
                    );
                    this.write = 'Online';
                    this.scrollHandler();
                }, 1000); //2000
            }, 2000) //3000
        },

        /**********************************
            dato un indice i ritorna 
            l'ultimo messaggio del contatto
            in posizione i
        *********************************/
        getLastMsg(i) {
            const last = this.contacts[i].messages.length - 1;
            if (last < 0) return;
            return this.contacts[i].messages[last].message;
        },

        /**********************************
            resetta la variabile search
        *********************************/
        resetInput() {
            this.search = false;
        },

        /**********************************
            funzione che gestisce il click
            sulla lente dell'input
        *********************************/
        controlSearch() {
            // console.log('click lente');
            this.$refs.typeBox.focus();
        },

        /**********************************
            funzione che gestisce il blur
            dell'input
        *********************************/
        blurHandler() {
            setTimeout(() => {
                this.search = false;
            }, 200)
        },

        /**********************************
            funzione che gestisce il click
            sulla freccia dell'input
        *********************************/
        clickHandler() {
            this.text = '';
        },

        /**********************************
            aggiunge un nuovo contatto ai
            messaggi
        *********************************/
        addContact() {
            const newContact = new Object;

            if (this.newName === '') alert('Nome mancante')
            else {
                newContact.name = this.newName;
                newContact.avatar = this.newAvatar;
                newContact.messages = new Array;
                this.contacts.push(newContact);
            }
            this.addingContact = false;
        },

        /**********************************
            Imposto come
            messaggio da visualizzare quello
            che ho cliccato
        *********************************/
        changeShow(i) {
            this.showMsg = i;
        },

        /**********************************
            nascondo/mostro il layout
            e imposto il messaggio da
            mostrare all'indice i passato
            come parametro
        *********************************/
        invertInfo(i) {
            this.showMsg = i;
            this.showInfo = !this.showInfo;
        },

        /**********************************
            funzione che dato un indice i
            elimina il messaggio in
            posizione i dalla chat attiva
        *********************************/
        deleteMsg(i) {
            //se il messaggio che sto eliminando è quello quotato, svuoto quotedMsg
            if (this.getMessages[i].message === this.quotedMsg.message) this.quotedMsg = null

            this.getMessages.splice(i, 1)
            this.showMsg = -1;
            this.msg = '';
            this.editingMsg = false;
        },

        /**********************************
            ritorna una stringa contenente
            l'ultimo accesso del contatto
            della chat attiva
        *********************************/
        getLastAcc() {
            const contact = this.getMessages;
            const lastMsg = contact.length - 1;
            const date = contact[lastMsg].date
            const string = date.split(' ');
            return 'il ' + string[0] + ' alle ' + this.formatHour(date);
        },

        /**********************************
            ritorna una stringa contenente
            una risposta casuale
        *********************************/
        randomMsg(msg) {
            const howAre = [
                'COME STAI',
                'COME VA',
                'TUTTO BENE'
            ];
            const msgUpper = msg.toUpperCase();

            const helloLength = this.helloArray.length;
            const helloRandom = Math.floor(Math.random() * helloLength);

            const howLength = this.howArray.length;
            const howRandom = Math.floor(Math.random() * howLength);

            let answer = '';

            for (let i = 0; i < this.helloArray.length; i++) {
                const upperElement = this.helloArray[i].toUpperCase();
                // console.log('array', upperElement, 'messaggio', msg);
                if (msgUpper.includes(upperElement)) {
                    if (upperElement.includes('LODA IL SOLE')) {
                        this.nextMessage = '';
                        this.writing = false;
                        return 'Puttana!'
                    }
                    answer = this.helloArray[helloRandom];
                }
            }

            for (let j = 0; j < howAre.length; j++) {
                const element = howAre[j];
                if (msgUpper.includes(element)) {
                    if (answer === '') {
                        this.nextMessage = '';
                        this.writing = false;
                        return this.howArray[howRandom];
                    } else {
                        this.nextMessage = element;
                        this.randomAnswer();
                        return answer;
                    }
                }
            }

            if (answer !== '') {
                this.writing = false;
                this.nextMessage = ''
                return answer;
            }

            if (msgUpper.includes('CHI SEI')) {
                this.writing = false;
                this.nextMessage = ''
                return 'Goku non lo sai...';
            }

            const length = this.answers.length;
            const random = Math.floor(Math.random() * length);
            this.nextMessage = ''
            this.writing = false;
            return this.answers[random];
        },

        /**********************************
            ritorna una stringa contenente
            il link all'avatar del contatto
            della chat attiva
        *********************************/
        getAvatar() {
            return this.contacts[this.active].avatar;
        },

        /**********************************
            ritorna una stringa contenente
            il nome del contatto
            della chat attiva
        *********************************/
        getName() {
            return this.contacts[this.active].name;
        },

        /**********************************
            controlla se la chat è nuova
        *********************************/
        isNew() {
            return !this.getMessages.length;
        },

        /**********************************
            gestisce il click su
            "crea nuovo"
        *********************************/
        addContactHandler() {
            this.addContactPopup = false;
            this.addingContact = true;
            this.newName = '';
        },

        /**********************************
            gestisce il click su
            "aggiungi ai contatti"
        *********************************/
        addingContactHandler() {
            this.addingContact = true;
            this.newName = this.text;
        },

        /**********************************
            gestisce il click sulla freccia
            indietro in mobile
        *********************************/
        mobileBackHandler() {
            this.smartphoneChat = false;
            this.active = null;
        },

        /**********************************
            gestisce lo scroll della chat
        *********************************/
        scrollHandler(i) {
            if (i !== this.getMessages.length - 1 && i !== undefined) return;
            this.$nextTick(function () {
                const container = this.$refs.containerRef;
                container.scrollTop = container.scrollHeight;
            })
        },

        /**********************************
            gestisce lo scroll deli contatti
        *********************************/
        scrollContactsHandler(i) {
            if (i !== this.getContactsFiltered.length - 1 && i !== undefined) return;
            this.$nextTick(function () {
                const container = this.$refs.contactsRef;
                container.scrollTop = container.scrollHeight;
            })
        },

        /**********************************
            gestisce il click sulla X per
            eliminare un contatto
        *********************************/
        deleteHandler(i) {
            this.deleteIndex = i;
            this.deletePopup = true;
        },

        /**********************************
            funzione che elimina il
            contatto a indice i
        *********************************/
        deleteContact(i) {
            // se il contatto da eliminare è quello attivo svuoto il quotedMsg
            if (i === this.active) this.quotedMsg = null;
            // se il contatto da eliminare è quello attivo rimuovo l'indice attivo
            if (i === this.active) this.active = null;
            // se il contatto da eliminare è minore di quello attivo, decremento l'attivo di 1
            if (i < this.active) this.active--;

            this.contacts.splice(i, 1);
            this.deletePopup = false;
        },

        /**********************************
            gestisce il click sul tasto
            modifica profilo
        *********************************/
        editProfileHandler() {
            this.editingProfile = true;
        },

        /**********************************
            funzione che modifica il
            profilo
        *********************************/
        editProfile() {
            const newName = this.newName.trim();
            const newAvatar = this.newAvatar;
            if (newName === '' && newAvatar === '') {
                alert('Dati mancanti');
            } else if (newAvatar === '') {
                this.myName = newName;
            } else if (newName = '') {
                this.myAvatar = newAvatar;
            } else {
                this.myName = newName;
                this.myAvatar = newAvatar;
            }
            this.newName = '';
            this.newAvatar = '';
            this.editingProfile = false;
        },

        /**********************************
            funzione che data una stringa
            ritorna la prima lettera
        *********************************/
        getFirstLetter(name) {
            return name[0];
        },

        /**********************************
            gestisce il click sul tasto
            rispondi al messagio
        *********************************/
        answerHandler(i) {
            this.quotedMsg = this.getMessages[i];
        },

        // TODO: FUTURE FEATURES
        /**********************************
            funzione che inizia la
            registrazione audio per
            convertirlo in testo
        *********************************/
        // onStartListening() {
        //     this.recognition.addEventListener('result', this.onResult);
        //     this.$refs.microphoneTxt.style.color = 'red';
        //     try {
        //         this.recognition.start();
        //     } catch {
        //         //TODO: chiedere spiegazioni
        //         this.recognition.stop();
        //         this.$refs.microphoneTxt.style.color = 'black';
        //     }
        // },

        /**********************************
            funzione che gestisce l'audio
            registrato e lo converte in
            messaggio di testo
        *********************************/
        // onResult(e) {
        //     console.log(e);
        //     let testo = e.results[0][0].transcript;
        //     this.newMessage = testo;
        //     this.addMessage()
        //     this.$refs.microphoneTxt.style.color = 'black';
        // },

        /**********************************
            funzione che registra un
            messaggio audio e lo gestisce
        *********************************/
        recordAudio() {
            return new Promise(resolve => {
                navigator.mediaDevices.getUserMedia({ audio: true })
                    .then(stream => {
                        const mediaRecorder = new MediaRecorder(stream);
                        const audioChunks = [];

                        mediaRecorder.addEventListener("dataavailable", event => {
                            audioChunks.push(event.data);
                        });

                        const start = () => {
                            mediaRecorder.start();
                        };

                        const stop = () => {
                            return new Promise(resolve => {
                                mediaRecorder.addEventListener("stop", () => {
                                    const audioBlob = new Blob(audioChunks);
                                    const audioUrl = URL.createObjectURL(audioBlob);
                                    // const audio = new Audio(audioUrl);
                                    // const play = () => {
                                    // audio.play();
                                    // };

                                    resolve({ audioBlob, audioUrl/*, play*/ });
                                });

                                mediaRecorder.stop();
                            });
                        };

                        resolve({ start, stop });
                    });
            });
        },

        /**********************************
            funzione asincrona che gestisce
            la registrazione
        *********************************/
        async recordHandler() {
            if (!this.record) {
                this.$refs.microphone.style.color = 'red';
                this.recorder = await this.recordAudio();
                this.recorder.start();
                this.record = true;
            }
            else {
                this.$refs.microphone.style.color = 'black';
                const myAudio = await this.recorder.stop();
                this.addAudioMsg(myAudio.audioUrl);
                this.recorder = null;
                this.record = false;
            }
        },

        /**********************************
            funzione asincrona che aggiunge
            un messaggio vocale alla chat
        *********************************/
        addAudioMsg(src) {
            const messages = this.contacts[this.active].messages;
            let newObj = new Object();
            newObj = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                messageUrl: src,
                status: 'sent'
            }

            // se sto rispondeno ad un messaggio aggiungo delle proprietà all'oggetto
            if (this.quotedMsg != null) {
                if (this.quotedMsg.messageUrl) newObj.quotedMsg = 'Audio \u{1F3B5}'
                else newObj.quotedMsg = this.quotedMsg.message;
                if (this.quotedMsg.status === 'sent') newObj.name = 'Tu';
                else newObj.name = this.contacts[this.active].name;
                this.quotedMsg = null;
            }

            messages.push(newObj);
            this.randomAnswer();
            this.scrollHandler();
        }
    },
})