dayjs.extend(window.dayjs_plugin_customParseFormat);

/**********************************
   array dei contatti
*********************************/
const contacts = [
    {
        name: 'Godrick',
        avatar: 'img/godrick.jpg',
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
        avatar: 'img/melina.jpg',
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
        avatar: 'img/agheel.jpg',
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
        avatar: 'img/malenia.jpg',
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
        name: 'Gedfrey',
        avatar: 'img/godfrey.jpg',
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
        avatar: 'img/radhan.jpeg',
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
        avatar: 'img/rykard.png',
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
        avatar: 'img/fia.jpg',
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
        search: true,
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
        notificationsAlert: true
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
        },

        /**********************************
            aggiunge il messaggio inviato
            alla chat e genera una risposta
        *********************************/
        addMessage() {
            this.newMessage = this.newMessage.trim();
            if (!this.newMessage || this.active === null) return

            this.contacts[this.active].messages.push({
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                message: this.newMessage,
                status: 'sent'
            });

            this.writing = true;
            setTimeout(() => {
                this.write = 'Sta scrivendo...';
                setTimeout(() => {
                    this.contacts[this.active].messages.push({
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        message: this.randomMsg(),
                        status: 'received'
                    }
                    );
                    this.write = 'Online';
                    this.writing = false;
                }, 2000);
            }, 3000)


            this.newMessage = ''
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
            se search non era attivo
            lo attiva e resetta il testo
            altrimenti passa il focus
            sull'input text
        *********************************/
        controlSearch() {
            if (!this.search) {
                this.search = true;
                this.text = '';
            }
            else {
                this.$refs.typeBox.focus();
            }
        },

        /**********************************
            controlla che l'input text
            sia vuoto e attiva search
            con un ritardo di 200ms
            altrimenti causerebbe un bug
        *********************************/
        controlInput() {
            setTimeout(() => {
                if (this.text === '') this.search = true;
            }, 200)
        },

        /**********************************
            aggiunge un nuovo contatto ai
            messaggi
        *********************************/
        addContact() {
            const newContact = new Object;
            // this.newName = this.text;
            console.log(this.newName);
            if (this.newName === '') alert('Nome mancante')
            else {
                newContact.name = this.newName;
                if (this.newAvatar === '') alert('Avatar assente')
                else {
                    newContact.avatar = this.newAvatar;
                    newContact.messages = new Array;
                    this.contacts.push(newContact);
                }
            }
            this.addingContact = false;
        },

        /**********************************
            al click sulla spunta del
            messaggio SE il messaggio sele-
            zionato come da mostrare è lo
            stesso che sto analizzando
            chiudo il layover
            ALTRIMENTI SE
            ho cliccato con uno diverso
            nascondo il layover
            in ogni caso imposto come
            messaggio da visualizzare quello
            che ho cliccato
        *********************************/
        changeShow(i) {
            if (this.showMsg === i) {
                this.showMsg = -1;
            }
            else {
                if (this.showMsg !== i) this.showInfo = false;
                this.showMsg = i;
            }
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
            const string = contact[lastMsg].date.split(' ');
            return 'il ' + string[0] + ' alle ' + string[1];
        },

        /**********************************
            ritorna una stringa contenente
            una risposta casuale
        *********************************/
        randomMsg() {
            const length = this.answers.length;
            const random = Math.floor(Math.random() * length);
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
            gestisce la chiusura dei pop-up
            cliccando fuori da essi
        *********************************/
        popupsHandler() {
            this.statusPopup = false;
            this.addContactPopup = false;
            this.addingContact = false;
        },
        /**********************************
            gestisce il click su
            "aggiungi ai contatti"
        *********************************/
        addingContactHandler() {
            this.addingContact = true;
            this.newName = this.text;
        }
    }
})