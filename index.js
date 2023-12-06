const fs = require('fs');
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

// Lista de palavrões (adapte conforme necessário)
const badWords = ['porra', 'fuder', 'cu', 'cala boca', 'corno', 'punhetero', 'foda-se', 'fodase', 'foda', 'fds', 'Fds', 'clbc', 'Vsfd', 'foda', 'ferrar', 'disgraca', 'disgraça', 'tua mãe', 'teu pai', 'krlh'];

// Lista de homofobia (adapte conforme necessário)
const Homofobia = ['viado', 'gay', 'viadinho', 'viadao', 'gayzinho', 'gy', 'vd'];

// Lista de perguntas (adapte conforme necessário)
const perguntas = ['resposta', 'manda resposta', 'manda cola', '?'];

// Lista de la ele (adapte conforme necessário)
const laEle = ['Lá ele', 'la ele', 'meio gay'];

// Lista de bot (adapte conforme necessário)
const bot = ['bot', 'robo'];

// Função para verificar se a mensagem contém palavrões
function containsBadWords(text) {
    const lowercasedText = text.toLowerCase();
    return badWords.some(badWord => lowercasedText.includes(badWord));
}

// Função para verificar se a mensagem contém homofobia
function containsHomofobia(text) {
    const lowercasedText = text.toLowerCase();
    return Homofobia.some(Homofobia => lowercasedText.includes(Homofobia));
}

// Função para verificar se a mensagem contém perguntas
function containsperguntas(text) {
    const lowercasedText = text.toLowerCase();
    return perguntas.some(perguntas => lowercasedText.includes(perguntas));
}

// Função para verificar se a mensagem contém la ele
function containslaEle(text) {
    const lowercasedText = text.toLowerCase();
    return laEle.some(laEle => lowercasedText.includes(laEle));
}

// Função para verificar se a mensagem contém bot
function containsbot(text) {
    const lowercasedText = text.toLowerCase();
    return bot.some(bot => lowercasedText.includes(bot));
}

async function calculatePercentage(message, category) {
    const randomNumber = Math.floor(Math.random() * 105);
    const replyMessage = `🤔🤔 Sua porcentagem de *${category}* é de *${randomNumber}%*.\n\n🤣🤣 *Se achou ruim, faz o L pro Vinicius aquele gostoso*🤣🤣`;
    await delay(3000);
    message.reply(replyMessage);
}

// Função para adicionar um atraso
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Função para reiniciar o bot
function restartBot() {
    console.log('Reiniciando o bot...');
    client.destroy();
    client.initialize();
}

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot está online!');
});

client.on('message', async (message) => {
    // Verifica se a mensagem não vem do próprio bot para evitar loops infinitos
    if (!message.fromMe) {
        // Verifica se a mensagem começa com o prefixo "/"
        if (message.body.startsWith('/')) {
            const command = message.body.slice(1).toLowerCase(); // Remove o prefixo "/"

            // Tratamento de comandos
            switch (command) {
                case 'gay':
                    await calculatePercentage(message, 'Gay');
                    break;
                case 'feio':
                    await calculatePercentage(message, 'Feio');
                    break;
                case 'lindo':
                    await calculatePercentage(message, 'Lindo(a)');
                    break;
                case 'gostoso':
                    await calculatePercentage(message, 'Gostoso(a)');
                    break;
                case 'gado':
                    await calculatePercentage(message, 'Gado(a)');
                    break;
                case 'punheteiro':
                    await calculatePercentage(message, 'punheteiro(a)');
                    break;
                case 'sobrerobo':
                    // Responde com a mensagem específica
                    message.reply('Olá! fui projeto especialmente para esse grupo *Só a loucura*, pois bem, esse robô/bot foi criado pelo meu Pai (Vinicius). Fui feito pela uma linguagem de programação (NodeJs). Feito complemente do zero, pelo Vínicius! O robô pode apresentar algumas falhas por conta que falta bastante atualizações dele. Tome cuidado que eu posso banir a qualquer hora. E lembre-se de ter respeito nesse grupo viu!!! Qualquer problema com o bot, relatar para o meu pai Vinicius: +55 11 98237-0558.\n\n*Vinicius agradece pela colaboração de todos!!*');
                    break;
                case 'menu':
                    // Responde com a mensagem específica
                    message.reply('Olá! fui projeto especialmente para esse grupo *Só a loucura*. Meu criador>>> Pai Vinicius +55 11 98237-0558. Conheça alguns comandos do meu bot:\n\n/menu\n/sobrerobo\n/gay\n/feio\n/feio\n/lindo\n/gostoso\n/gado\n/punheteiro\n\nQualquer erro ou dúvidas entre em contato com o meu criado, Pai Vinicius: +55 11 98237-0558.');
                    break;
                default:
                    // Responde se o comando não for reconhecido
                    message.reply('*Comando nem existe seu otário, Passou vergonha agora kkkkkkkk* 🖕🏻🖕🏻🖕🏻🖕🏻🖕🏻🖕🏻');
                    break;
            }
        } else if (containsBadWords(message.body)) {
            // Lista de respostas possíveis para palavrões
            const responses = [
                'Olha a boca, menino!',
                'Cuidado com o linguajar!',
                'Que feio, usando palavrões...',
                'Não precisamos disso por aqui!',
                'Qual foi? vai ficar falando palavrão mesmo no grupo?',
                'Virou bagunça agora para está falando palavrão?',
                'Depois falam que sou um BOT, Pelo menos não fico falando palavrão. SUA BOCA SUJA!!!!!',
                'É por isso que itaquaquecetuba tá essa merda, pessoas que só falam palavrão estraga a cidade.',
            ];

            // Escolhe uma resposta aleatória da lista
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            // Responde com a mensagem aleatória
            message.reply(randomResponse);
        } else if (containsHomofobia(message.body)) {
            // Lista de respostas possíveis para palavras homofobicas
            const responses = [
                'Ei!! você tem preconceito com gay? ISSO NÃO PODE',
                'SEU HOMOFOBICO!!!!!!',
                '*OLHA NÓS TEMOS UM HOMOFOBICO NO GRUPO!!!!!!*',
                'QUAL É O PROBLEMA DELE SER GAY? SEU HOMOFOBICO',
                'DEVEMOS TER RESPEITOS COM OS GAYS',
                'HOMOFOBIA É CRIME!',
                'TEM ALGUM PROBLEMA COM GAY? QUE VERGONHA! SEU HOMOFOBICO!!!!',
            ];

            // Escolhe uma resposta aleatória da lista
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            // Responde com a mensagem aleatória
            message.reply(randomResponse);
        } else if (containsperguntas(message.body)) {
            // Lista de respostas possíveis para perguntas
            const responses = [
                'Se um cachorro se chama NABUNDA, e você está num navio com ele, você leva na bunda, ou deixa nabunda?',
                'Um dia estava cozinhando um ovo, porém o ovo tava mexendo muito, e fui abrir pra ver oque tinha dentro, já imaginou se cozinho com o pinto dentro?',
                'Ei vamos vender picolé? Você grita e eu empurro.',
                'Eu dei umas calças que eu não tava usando, e tava furada a calça na perna, e tenho umas calças sobrando lá ainda. Você queria uma furada na bunda? talvez sirva para você.',
                'Eu não sei, acho que sou gay....',
            ];

            // Escolhe uma resposta aleatória da lista
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            // Responde com a mensagem aleatória
            message.reply(randomResponse);
        } else if (containslaEle(message.body)) {
            // Lista de respostas possíveis para La ele
            const responses = [
                'Meio gay essa parada ai brother',
                'LÁ ELE BROTHER, tá muito gay, será que ele é? ou ela é?',
                'Vishhhhhhhhhhhhh tá estranho essa papo ai boy',
                'Se tu quer dar, tu fala brother',
                'LÁ ELE 1 MILHÃO RAPAZ....',
            ];

            // Escolhe uma resposta aleatória da lista
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            // Responde com a mensagem aleatória
            message.reply(randomResponse);
        } else if (containsbot(message.body)) {
            // Lista de respostas possíveis para bot
            const responses = [
                'OPAAA FALOU COMIGO EM. Sou bot em, to de olho viu.',
                'Se tu tiver problema com bot tu fala em. Não me ofende',
                'Sou um robô criado pelo meu Pai vinicius :) Meu desenvolvedor pai: +55 11 98237-0558, TE AMOOOOO PAI',
            ];

            // Escolhe uma resposta aleatória da lista
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            // Responde com a mensagem aleatória
            message.reply(randomResponse);
        }
    }
});

// Inicializa o bot
client.initialize();