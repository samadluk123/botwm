console.log('БОТ ЗАПУСТИЛСЯ САСАТЬ');
const { VK } = require('vk-io'); 
const vk = new VK();
const commands = [];
const {Keyboard} = require("vk-io");
const request = require('prequest');
let user = new VK();
user.setOptions({
	token: '10684db7676619708875117287267800d931893d8c45dfad5c678e8c40fb0ec6103e5569771be674b1ae0' // токен ot страницы 
});
let giving = false;
const idolog = [



	{
		name: 'Нацизм',
		cost: 0,
		id: 1
    },
	{
		name: 'Коммунизм',
		cost: 0,
		id: 2
    },

	{
		name: 'Демократия',
		cost: 0,
		id: 3
    },

	{
		name: 'Империализм',
		cost: 0,
		id: 4
    },
];


const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'Дохера!');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}


const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı'
}

let btc = 6000;

const users = require('./users.json');
const promo = require('./base/promo.json');
let buttons = [];

setTimeout(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 5);

setInterval(async () => {
	const rq = await request('https://api.cryptonator.com/api/ticker/btc-usd');

	if(!rq.ticker) return;
	if(!rq.ticker.price) return;

	btc = Math.floor(Number(rq.ticker.price));
}, 60000);

setInterval(async () => {
	await saveUsers();
	console.log('Работает');
}, 30000);

function clearTemp() 
{ 
users.map(user => { 
user.timers.hasWorked = false; 
user.timers.bonus = false; 
user.timers.translation = false; 
user.orcase = false; 
user.war = false; 
user.urabota = false; 
user.a_case = false; 
user.a_war = false; 
user.vivi = false; 
user.bonus_balance = false; 
user.bcase = false; 
user.timers.shaxta = false; 
user.bonus_exs = false; 
user.timers.eda = false; 
user.timers.krik = false; 
user.timers.mine = false; 
user.giverub = false; 
user.energy = 100;
user.hp = 100;
user.timers.blockpay = false; 
}); 
}

function rand(min, max) {
		return Math.round(Math.random() * (max - min)) + min
	}

function check(num){
    if(num == 1) return "Открытый"
    if(num == 2) return "Закрытый"
}

function filter(text){
	var filter0 = text.replace(/(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/ig, "<LINK REMOVED>")
	var filter1 = filter0.replace(/(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.|ТЕСТЕР|Павел Дуров)/ig, '[Запрещено]')
	return filter1
}

clearTemp();

async function saveUsers()
{
	require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
	return true;
}

vk.setOptions({ token: '2deb0dc43a28f2cfd50a3fbc2f90eaca03f440230cf399a48e3a4e2eaece888905672a8cf5d92d569e2a1', pollingGroupId:204335430 });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[club204335430\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club204335430\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		message.send (`⚜Добро пожаловать в War Machine!\n
🌐Создай свое государство и выводи в бой машины времен второй мировой.\n
👥Мы ждём тебя в игре!\n`,
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Выбрать идеологию"
		},
			"color": "positive"
			}]
		]
			})
		});

		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
            id: message.senderId,
			uid: users.length,
			stranreg: `не указано`,
			territoria: 100,
			naselenia: 800,
			sayz: `Отсутствует`,
			doma: 300,
			lesopilki: 1,
			shaxta: 1,
			ferma: 1,
			kazarm: 1,
			balance: 5000,
			drevisina: 1000,
			ruda: 1000,
			eda: 1000,
			weapon: 10,
			zapchasti: 100,
			dvigatel: 0,
			toplivo: 0,
			himikat: 0,
			rating: 0,
			energy: 100,
			alvl: 0, 
			opit: 0,
			mention: true,
			timers: {
				translation: false,
				commands: false,
				delacc: false,
				bonus: false,
				obva: false,
				blockpay: false,
				krik: false,
				mine: false,
				hasWorked: false,
            },
			tag: user_info.first_name,
			work: 0,
            sword: false,
            times: false,
            card: 0,
            call: 0,
            ccard: false,
         	business: [], 
			gpriglos: 0,
			mer:false,
            rubins: 0,
			pp: 0,
			seccard: 0,
			cardss: 0,
            messages: true,
            giverub: false,
            mute: false,
			message: 0,
			notifications: true,
			ban: false, //бан игрока
			case: 0,
			exp: 1,
			expup: 24,
			level: 1,
			referal: null,
			regDate: `${date.getDate() < 10 ? [0] + (date.getDate() + 1) : date.getDate()}.${date.getMonth() < 10 ? [0] + (date.getMonth() + 1) : date.getMonth()}.${date.getFullYear()}`,  
			vse: {
				idolog: 0,

			

			}
		});
	} 
		saveUsers();
	
bcase: false,

	message.user = users.find(x=> x.id === message.senderId);
	if(message.user.ban) return;

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}

	const command = commands.find(x=> x[0].test(message.text));
	if(!command) return;

	if(message.user.exp >= 24)
	{
		message.user.exp = 1;
		message.user.level += 1;
	}

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	console.log(`Executed: VK_ID: ${message.user.id} ID: ${message.user.uid} Nickname: ${message.user.tag} Message: ${message.text} `)
});

const cmd = {
	on: (p, f) => {
		commands.push([p, f]);
	}
}

cmd.on(/^(?:eval)\s([^]+)$/i, async (message, bot) => { 
if(message.senderId !== 518008120) return; 

try { 
const result = eval(message.args[1]); 

if(typeof(result) === 'string') 
{ 
return bot(` - я выполнил: ${result}`); 
} else if(typeof(result) === 'number') 
{ 
return bot(` - я выполнил: ${result}`); 
} else { 
return bot(`${typeof(result)}: ${JSON.stringify(result, null, '　\t')}`); 
} 
} catch (e) { 
console.error(e); 
return bot(`ошибка: 
${e.toString()}`); 
} 
});

cmd.on(/^(?:test)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return message.send(`
Работаю`)
});  


cmd.on(/^(?:меню)$/i, (message) => { 
{
	if(message.isChat) return message.send(`Меню работает только в лс`);
	if(user.full == false) return;
	return message.send(`[id${message.user.id}|${message.user.tag}], вот меню нашего бота:
	`, 
	{ 
	attachment: `photo-204335430_457240014`,
	keyboard:JSON.stringify( 
	{ "one_time": false, "buttons": [ 
	[
	{ "action": { "type": "text", "payload": "{}", "label": "📒 Профиль" }, "color": "negative" }, 
	{ "action": { "type": "text", "payload": "{}", "label": "🎄 Постройки" }, "color": "negative" }
	], 
	[
	{ "action": { "type": "text", "payload": "{}", "label": "🛍 Торговля" }, "color": "primary" }, 
	{ "action": { "type": "text", "payload": "{}", "label": "🏆 Армия" }, "color": "primary" 
	}
	],
	[
	{ "action": { "type": "text", "payload": "{}", "label": "Топ игроки" }, "color": "positive" }, 
	{ "action": { "type": "text", "payload": "{}", "label": "Админка" }, "color": "positive" 
	}
	]  
	] 
	})
	});
	} 
	});

cmd.on(/^(?:🏆 Армия|@maschinwar|🏆 Армия|Армия)$/i, async (message, bot) => { 
	message.user.foolder += 1;
	return message.send(`🏆 Ваша Армия: ${message.user.kazarm} `)
});

cmd.on(/^(?:государство)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.isChat) return message.send(`Это команда доступно только в лс`);
	if(message.args[1].length >= 91) return bot(`максимальная длина государство 90 символов`);
    
	message.user.stranreg = message.args[1];
	return bot(`Ваша государство: "${message.user.stranreg}"`);
			});

cmd.on(/^(?:📒 Профиль|@maschinwar|📒 Профиль|профиль)$/i, async (message, bot) => { 
	message.user.foolder += 1;
	if(message.user.vse.idolog == 0) return bot(`У вас нет Идеологий сменить можно его по команде "идеология"`)
	let text = ``;
    
        text += `🗽 Страна: ${message.user.stranreg}\n`;
        if(message.user.vse.idolog) text += `✊ Идеология: ${idolog[message.user.vse.idolog - 1].name}\n`;
        text += `👤 Президент: [id${message.user.id}|${message.user.tag}]\n`;
        text += `🌐 Территория: ${message.user.territoria} км\n`;
        text += `👥 Население: ${message.user.naselenia} человек\n`;
        text += `🤝 Союз: ${message.user.sayz}\n`;
        text += `---------------------------------\n`;
    	text += `💰 Деньги: ${utils.sp(message.user.balance)}\n`;
    	text += `🌳 Древесина: ${message.user.drevisina}\n`;
    	text += `🏔 Руда: ${message.user.ruda}\n`;
    	text += `🍖 Еда: ${message.user.eda}\n`;
    	text += `---------------------------------\n`;
    	text += `🔫 Оружие: ${message.user.weapon}\n`;
    	text += `⚙ Запчасти: ${message.user.zapchasti}\n`;
    	text += `🛢 Топливо: ${message.user.toplivo}\n`;
        text += `☣ Химикаты: ${message.user.himikat}\n`;
        return message.send(`${text}`);
});

cmd.on(/^(?:Постройки|🎄 Постройки)$/i, async (message, bot) => {
	message.user.foolder += 1;
	return message.send(`Население
🏡Жилые дома: ${message.user.doma}

Экономические
🌲Лесопилки: ${message.user.lesopilki}
⛏Шахты: ${message.user.shaxta}
🍖Фермы: ${message.user.ferma}

Военные
⛺Военные заводы: ${message.user.kazarm}

Существует 3 типа построек Население, экономические, военные.
население - это даст дополнительные людские ресурсы
экономические- дают ресурсы
военные- для обучение солдат .
для того чтобы построить напишите Строительство и название строй что вы хотите построить`,
		{
			keyboard:JSON.stringify(
		{
			"inline": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Строительство"
		},
			"color": "positive"
			}]
		]
			})
		});
		}
);	


cmd.on(/^(?:Строительство)$/i, (message) => { 
{
	return message.send(`[id${message.user.id}|${message.user.tag}], Меню строительство:
	`, 
	{ 
	keyboard:JSON.stringify( 
	{ "inline": false, "buttons": [ 
	[
	{ "action": { "type": "text", "payload": "{}", "label": "Строительство жилые дома" }, "color": "negative" }, 
	{ "action": { "type": "text", "payload": "{}", "label": "Строительство Военный завод" }, "color": "negative" }
	], 
	[
	{ "action": { "type": "text", "payload": "{}", "label": "Строительство Шахты" }, "color": "primary" }, 
	{ "action": { "type": "text", "payload": "{}", "label": "Строительство Лесопилки" }, "color": "primary" },
	{ "action": { "type": "text", "payload": "{}", "label": "Меню" }, "color": "secondary" 
	}
	]  
	] 
	})
	});
	} 
	});

cmd.on(/^(?:Строительство Лесопилки)$(.*)$/i, (message, bot) => { 
	message.user.foolder += 1;
	if(message.user.timers.krik == true) return message.send(`Вы уже стройли Военные заводы`)
	if(message.user.balance < 2500000) return bot(`У вас нет 2.500.000 руб`);

setTimeout(() => { 
message.user.timers.krik = false; 
}, 86400000); 

message.user.timers.krik = true; 
let naselrand = utils.random(100,500);

	{
		message.user.lesopilki += naselrand;
		message.user.balance -= 2500000;
		return bot(`Вы построили Военные заводы ${naselrand}`);
	}
});


cmd.on(/^(?:Строительство Военный завод)$(.*)$/i, (message, bot) => { 
	message.user.foolder += 1;
	if(message.user.timers.obva == true) return message.send(`Вы уже стройли Военные заводы`)
	if(message.user.balance < 250000) return bot(`У вас нет 250.000 руб`);

setTimeout(() => { 
message.user.timers.obva = false; 
}, 86400000); 

message.user.timers.obva = true; 
let naselrand = utils.random(100,500);

	{
		message.user.territoria += 230;
		message.user.kazarm += naselrand;
		message.user.balance -= 250000;
		return bot(`Вы построили Военные заводы ${naselrand}`);
	}
});

cmd.on(/^(?:Строительство Шахты)$(.*)$/i, (message, bot) => { 
	message.user.foolder += 1;
	if(message.user.timers.delacc == true) return message.send(`Вы уже стройли Шахты`)
	if(message.user.balance < 1000000) return bot(`У вас нет 1.000.000 руб`);

setTimeout(() => { 
message.user.timers.delacc = false; 
}, 86400000); 

message.user.timers.delacc = true; 
let naselrand = utils.random(100,500);

	{
		message.user.territoria += 230;
		message.user.shaxta += naselrand;
		message.user.balance -= 1000000;
		return bot(`Вы построили Военные заводы ${naselrand}`);
	}
});


cmd.on(/^(?:Строительство жилые дома)$(.*)$/i, (message, bot) => { 
	message.user.foolder += 1;
	if(message.user.timers.bonus == true) return message.send(`Вы уже стройли дома`)
	if(message.user.balance < 10000) return bot(`У вас нет 10.000 руб`);

setTimeout(() => { 
message.user.timers.bonus = false; 
}, 86400000); 

message.user.timers.bonus = true; 
let naselrand = utils.random(100,500);

	{
		message.user.territoria += 230;
		message.user.naselenia += naselrand;
		message.user.balance -= 10000;
		message.user.doma += 100;
		return bot(`Вы построили жилые дома 100 домов`);
	}
});
//секунды минуты//
 	var uptime = { sec: 0, min: 0, hours: 0, days: 0 }
//------------------------------------------------------------------------------------\\
 
	setInterval(() => {
		uptime.sec++;
		if (uptime.sec == 60) { uptime.sec = 0; uptime.min += 1; }
		if (uptime.min == 60) { uptime.min = 0; uptime.hours += 1; }
		if (uptime.hours == 24) { uptime.hours = 0; uptime.days += 1; }
	}, 1000);

//------------------------------------------------------------------------------------\\

function spaces(string) { 
if (typeof string !== "string") string = string.toString(); 
return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join(""); 
}; 

Array.prototype.random = function() { return this[Math.floor(this.length * Math.random())]; } 

function rand(min, max) {return Math.round(Math.random() * (max - min)) + min} 

function getRandomInt(x, y) { 
return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x); 
} 

function getRandomElement(array) { 
return array[getRandomInt(array.lenght - 1)]; 
} 


function getRandomElement(array) { 
return array[getRandomInt(array.length - 1)]; 
}

cmd.on(/^(?:идеология|Выбрать идеологию)$/i, (message) => { 
{
	return message.send(`[id${message.user.id}|${message.user.tag}], Выбери идеологию:
	`, 
	{ 
	keyboard:JSON.stringify( 
	{ "one_time": true, "buttons": [ 
	[
	{ "action": { "type": "text", "payload": "{}", "label": "Нацизм" }, "color": "negative" }, 
	{ "action": { "type": "text", "payload": "{}", "label": "Коммунизм" }, "color": "negative" }
	], 
	[
	{ "action": { "type": "text", "payload": "{}", "label": "Демократия" }, "color": "primary" }, 
	{ "action": { "type": "text", "payload": "{}", "label": "Империализм" }, "color": "primary" 
	}
	] 
	] 
	})
	});
	} 
	});

cmd.on(/^(?:Нацизм)$/i, async (message, bot) => {
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.vse.idolog = 1;
		return bot(`🖐Вы выбрали Нацизм. Надеемся ваше государство будет развиваться!\n
🎗Регистрация закончена\n
(чтобы продолжить напишите меню)\n`);
	}
});

cmd.on(/^(?:Коммунизм)$/i, async (message, bot) => {
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.vse.idolog = 2;
		return bot(`🖐Вы выбрали Коммунизм. Надеемся ваше государство будет развиваться!\n
🎗Регистрация закончена\n
(чтобы продолжить напишите меню)\n`);
	}
});

cmd.on(/^(?:Демократия)$/i, async (message, bot) => {
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.vse.idolog = 3;
		return bot(`🖐Вы выбрали Демократия. Надеемся ваше государство будет развиваться!\n
🎗Регистрация закончена\n
(чтобы продолжить напишите меню)\n`);
	}
});

cmd.on(/^(?:Империализм)$/i, async (message, bot) => {
	let prize = utils.pick([1]);

	if(prize === 1)
	{
		message.user.vse.idolog = 4;
		return bot(`🖐Вы выбрали Империализм. Надеемся ваше государство будет развиваться!\n
🎗Регистрация закончена\n
(чтобы продолжить напишите меню)напишите\n`);
	}
});