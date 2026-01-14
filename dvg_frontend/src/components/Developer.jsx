import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

export function Developer({CloseFunc}) {
  const bootSequence = [
    {
      text: "raul@dev_env:~$ fetch --about-project",
      color: "text-gray-500",
      delay: 300,
    },
    {
      text: "optimizing CDN: Speed 100/100 ",
      color: "text-green-500",
      delay: 600,
    },
    {
      text: "optimizing object storage: Pretty images 736/742",
      color: "text-green-500",
      delay: 400,
    },
    {
      text: "ERROR: some images too pretty",
      color: "text-red-400",
      delay: 1200,
    },
    {
      text: "retry: Pretty images 742/742",
      color: "text-green-500",
      delay: 300,
    },
    {
      text: "loading требования_проект.txt...",
      color: "text-gray-500",
      delay: 1500,
    },
    { text: "цель: пинтерест дома", color: "text-green-500", delay: 300 },
    { text: "заказчики: 6/1", color: "text-yellow-500", delay: 300 },
    {
      text: "бюджет: банка энергетика и две пачки сухариков",
      color: "text-yellow-500",
      delay: 300,
    },
    {
      text: "нагрузка: 1000 пользователей",
      color: "text-yellow-500",
      delay: 300,
    },
    { text: "сроки: неделя", color: "text-yellow-500", delay: 300 },
    {
      text: "fatal error: Требования невыполнимы! ",
      color: "text-red-400",
      delay: 400,
    },
    {
      text: "Вы уверены, что хотите продолжить? (yes/no)",
      color: "text-yellow-500",
      delay: 100,
    },
    { text: "yes", color: "text-gray-500", delay: 1800 },
    { text: "loading production-env...", color: "text-blue-400", delay: 100 },
    {
      text: "starting communication_interface... ",
      color: "text-blue-400",
      delay: 500,
    },
    {
      text: "FATAL ERROR: Команда DWG не знает об этой странице!",
      color: "text-red-400",
      delay: 1200,
    },
    {
      text: "FATAL ERROR: Команда DWG не знает об этой странице!",
      color: "text-red-400",
      delay: 1200,
    },
    {
      text: "FATAL ERROR: Команда DWG не знает об этой странице!",
      color: "text-red-400",
      delay: 1200,
    },
    { text: "booting in safe mode...", color: "text-green-400", delay: 500 },
    {
      text: "Welcome to RaulOS. Type help to start.",
      color: "text-yellow-500",
      delay: 1500,
    },
    {
      text: "raul> Привет! Меня зовут Юра и я сделал этот сайт. ",
      color: "text-gray-200",
      delay: 300,
    },
    {
      text: "raul> Все что находиться в этом окне - не имеет никакого отношения к команде художников. Это уголок тщеславия и взгляд на этот проект человека со стороны. ",
      color: "text-gray-200",
      delay: 300,
    },
    {
      text: "raul> Если тебе интересно узнать побольше, пиши команды прямо в этом терминале. ",
      color: "text-gray-200",
      delay: 300,
    },
    { text: "raul> help тебе поможет!", color: "text-gray-200", delay: 500 },
    {
      text: "Обратно в пинтерест (я буду скучать)",
      color: "text-green-500",
      delay: 500,
      link: "/",
    },
  ];

  const rndmsg = [
    { text: "В падлу\t", color: "text-yellow-500", delay: 100 },
    {
      text: "Крэликов нать Ляо\t",
      color: "text-teal-500",
      delay: 100,
      link: "https://www.youtube.com/watch?v=ADzKnrAnH6E&list=RDADzKnrAnH6E&start_radio=1\t",
    },
    { text: "Он тоже шизы добавляет\t", color: "text-blue-500", delay: 100 },
    { text: "Это же круто\t", color: "text-purple-500", delay: 100 },
    { text: "кого?\t", color: "text-red-500", delay: 100 },
    { text: "ну дс\t", color: "text-yellow-500", delay: 100 },
    {
      text: "Это не проблема это бомба\t",
      color: "text-yellow-500",
      delay: 100,
    },
    { text: "она открывается\t", color: "text-pink-500", delay: 100 },
    { text: "Назвать диля\t", color: "text-yellow-500", delay: 100 },
    { text: "Забудь про отчий дом\t", color: "text-yellow-500", delay: 100 },
    {
      text: "Прости но я никогда не любил гудки\t",
      color: "text-yellow-500",
      delay: 100,
    },
    {
      text: "Надо приделать к ноге велосипеде\t",
      color: "text-green-500",
      delay: 100,
      link: "https://www.youtube.com/watch?v=PLUZDtJCdDM&list=RDPLUZDtJCdDM\t",
    },
    { text: "СУЧИЙ\t", color: "text-indigo-500", delay: 100 },
    { text: "ты же их зачистил\t", color: "text-yellow-500", delay: 100 },
    { text: "Да норм\t", color: "text-yellow-500", delay: 100 },
    { text: "что\t", color: "text-pink-500", delay: 100 },
    { text: "это опасные малюки\t", color: "text-teal-500", delay: 100 },
    { text: "Ну ты посмотри в ее акк\t", color: "text-indigo-500", delay: 100 },
    { text: "Бро\t", color: "text-yellow-500", delay: 100 },
    { text: "хочу стать рейв танцором\t", color: "text-teal-500", delay: 100 },
    { text: "Будет\t", color: "text-pink-500", delay: 100 },
    { text: "ты сияешь\t", color: "text-yellow-500", delay: 100 },
    { text: "Кому как\t", color: "text-blue-500", delay: 100 },
    {
      text: "это вообще шизофрения какая то\t",
      color: "text-purple-500",
      delay: 100,
    },
    { text: "Хотелось бы\t", color: "text-yellow-500", delay: 100 },
    { text: "ты где\t", color: "text-red-500", delay: 100 },
    {
      text: "Это про мальчика который маг и смотрел под юбки\t",
      color: "text-teal-500",
      delay: 100,
    },
    { text: "Из ныне присутствующих\t", color: "text-blue-500", delay: 100 },
    { text: "флуд\t", color: "text-red-500", delay: 100 },
    { text: "почему это расфорсилось\t", color: "text-yellow-500", delay: 100 },
    {
      text: "чем ты алкоголик и чем ты алкоголик\t",
      color: "text-pink-500",
      delay: 100,
    },
    { text: "Еще тинькоф надр\t", color: "text-indigo-500", delay: 100 },
    { text: "15 минут и дс\t", color: "text-pink-500", delay: 100 },
    { text: "я будучий\t", color: "text-blue-500", delay: 100 },
    { text: "Мозг не работает\t", color: "text-red-500", delay: 100 },
    { text: "Еще твои похороны\t", color: "text-purple-500", delay: 100 },
    {
      text: "while (Dolina.defeated == False){ \t",
      color: "text-blue-500",
      delay: 100,
    },
    {
      text: "Посмотрим\t",
      color: "text-blue-500",
      delay: 100,
      link: "https://www.youtube.com/watch?v=eV4wmLbRKiM&list=RDPLUZDtJCdDM&index=4\t",
    },
    {
      text: "это вообще шизофрения какая то\t",
      color: "text-indigo-500",
      delay: 100,
      link: "https://en.wikipedia.org/wiki/Categorical_imperative\t",
    },
    {
      text: "var game = new SWAGA(Dolina.fromDolina.Game)\t",
      color: "text-teal-500",
      delay: 100,
    },
    {
      text: "это не решение\t",
      color: "text-pink-500",
      delay: 100,
      link: "https://media.discordapp.net/attachments/1280452763351781407/1449762041052270728/image.png?ex=6968495d&is=6966f7dd&hm=0be989e3b12c76c9d2d70902599bbfea419a5eca7f70fff753a3edeeee66bb26&=&format=webp&quality=lossless\t",
    },
    {
      text: "Dolina.publishEvent(topic = new - game, object=game)\t",
      color: "text-green-500",
      delay: 100,
    },
    { text: "это не решение\t", color: "text-teal-500", delay: 100 },
    { text: "потому что они малютки\t", color: "text-blue-500", delay: 100 },
    {
      text: "я сейчас ощущаю короче ощущение знаешь\t",
      color: "text-red-500",
      delay: 100,
    },
    {
      text: "даже если слушать осмысленно уже непросто\t",
      color: "text-red-500",
      delay: 100,
    },
    { text: "От обычного\t", color: "text-teal-500", delay: 100 },
    { text: "Я дождался\t", color: "text-green-500", delay: 100 },
    { text: "дядя делает ветер\t", color: "text-teal-500", delay: 100 },
    { text: "Ору\t", color: "text-teal-500", delay: 100 },
    { text: "я в дс короч тогда\t", color: "text-purple-500", delay: 100 },
    { text: "Хотя я и не эсметкт\t", color: "text-yellow-500", delay: 100 },
    {
      text: "В следующий раз обязательно\t",
      color: "text-red-500",
      delay: 100,
    },
    { text: "насколько я понял\t", color: "text-purple-500", delay: 100 },
    { text: "САнна Асти удалить переписку.", color: "text-purple-500", delay: 100 },
    {
      text: "ну дс\t",
      color: "text-indigo-500",
      delay: 100,
      link: "https://media.discordapp.net/attachments/1280452763351781407/1437510301799944293/1e8552eab2c005547341287c03fc7399.png?ex=69688a0b&is=6967388b&hm=7748843cbcafb0e1aba2248e05e496290d7a8f911515fb7dca18f304768cf556&=&format=webp&quality=lossless\t",
    },
    {
      text: "Хотелось бы\t",
      color: "text-purple-500",
      delay: 100,
      link: "https://media.discordapp.net/attachments/1280452763351781407/1422284534837412021/0dac53dc724bb136bb3c2ffdb742d64c.png?ex=696884f1&is=69673371&hm=921f8826fb5941cb708c46a3a1b94d910c7f4aaa83b2b4b1b579d3414f517374&=&format=webp&quality=lossless\t",
    },
    {
      text: "Все у кого волосы крашеные - унтерменши\t",
      color: "text-yellow-500",
      delay: 100,
      link: "https://media.discordapp.net/attachments/1280452763351781407/1381388704806994062/1430389699_2105562239.png?ex=6968b73c&is=696765bc&hm=e6b4154447bb7316f6f78ef0b38eae34837d63ec736f85efb9b2906885e961f1&=&format=webp&quality=lossless\t",
    },
    { text: "да\t", color: "text-green-500", delay: 100 },
    { text: "будэ будэ не будэ будэ\t", color: "text-pink-500", delay: 100 },
    {
      text: "Надо приделать к ноге велосипеде\t",
      color: "text-green-500",
      delay: 100,
    },
    { text: "Что\t", color: "text-indigo-500", delay: 100 },
    {
      text: "Человечность восстановлена\t",
      color: "text-blue-500",
      delay: 100,
    },
    { text: "да\t", color: "text-pink-500", delay: 100 },
    { text: "Ни сержанта ни бандита\t", color: "text-blue-500", delay: 100 },
    { text: "удар\t", color: "text-indigo-500", delay: 100 },
    { text: "Непруха\t", color: "text-green-500", delay: 100 },
    {
      text: "Крэликов нать Ляо\t",
      color: "text-pink-500",
      delay: 100,
      link: "https://media.discordapp.net/attachments/1280452763351781407/1379496731837857854/scale_1200.png?ex=69686cb2&is=69671b32&hm=80f53a7b968632f741a205b0089c75d8402da7847386179f5c53538bef22f118&=&format=webp&quality=lossless&width=827&height=552\t",
    },
    { text: "Но нет ручья\t", color: "text-yellow-500", delay: 100 },
    {
      text: "Щуп достану\t",
      color: "text-pink-500",
      delay: 100,
      link: "https://media.discordapp.net/attachments/1280452763351781407/1367833028893605949/image.png?ex=6968d6c7&is=69678547&hm=b1031cda2997af6a94b0e6fb4f8b9e9a4cb23ab63e6341e97a135c2a47e236a1&=&format=webp&quality=lossless&width=689&height=656\t",
    },
    { text: "какую\t", color: "text-red-500", delay: 100 },
    {
      text: "А жизнь - борьба\t",
      color: "text-red-500",
      delay: 100,
      link: "https://media.discordapp.net/attachments/1280452763351781407/1361394420116754690/image.png?ex=69687c9b&is=69672b1b&hm=c19a369523fc7a5962dae34e7dd3f7e965037d281e076384a1098898474bcf83&=&format=webp&quality=lossless\t",
    },
    {
      text: "Лучше бы на подольше потому что я че то рот ебал 6 часов баранку крутить\t",
      color: "text-yellow-500",
      delay: 100,
    },
    { text: "ты че не спишь\t", color: "text-red-500", delay: 100 },
    {
      text: "привет детка я дедпул\t",
      color: "text-blue-500",
      delay: 100,
      link: "https://www.youtube.com/watch?v=dtmCDUWIhlA&list=RDPLUZDtJCdDM&index=5\t",
    },
    { text: "Что 10/10\t", color: "text-indigo-500", delay: 100 },
    {
      text: "У меня больше скачкообразно\t",
      color: "text-green-500",
      delay: 100,
    },
    {
      text: "хочу стать рейв танцором\t",
      color: "text-yellow-500",
      delay: 100,
      link: "https://media.discordapp.net/attachments/1280452763351781407/1306731515123732500/379234c6339963a4c45caced334d720a.png?ex=6968b24f&is=696760cf&hm=02c929b3c5a3bd19b198f6f5c4acebc21c01c311888845a6bc2c509ebc67288a&=&format=webp&quality=lossless\t",
    },
    { text: "Разок\t", color: "text-green-500", delay: 100 },
    { text: "2 кг\t", color: "text-yellow-500", delay: 100 },
    { text: "даритель\t", color: "text-purple-500", delay: 100 },
    { text: "1. Да\t", color: "text-teal-500", delay: 100 },
    { text: "2. Нет\t", color: "text-purple-500", delay: 100 },
    {
      text: "Кому как\t",
      color: "text-purple-500",
      delay: 100,
      link: "https://media.discordapp.net/attachments/1280452763351781407/1312032526327349288/---.gif?ex=696834c2&is=6966e342&hm=71ad7b6e8c3c1323615fb59ebf75412b290b4e1688315ad4bea3d05a886e2da2&=\t",
    },
    { text: "Крэликов нать Ляо\t", color: "text-yellow-500", delay: 100 },
    { text: "Риторика: Успех\t", color: "text-indigo-500", delay: 100 },
    {
      text: "если вернешься раньше меня попробуй коннект на порт 26950\t",
      color: "text-yellow-500",
      delay: 100,
    },
    { text: "Мне нужен номер на заезде\t", color: "text-blue-500", delay: 100 },
    { text: "не\t", color: "text-blue-500", delay: 100 },
    { text: "Это феникс\t", color: "text-purple-500", delay: 100 },
    {
      text: "Это кармическое следствие\t",
      color: "text-indigo-500",
      delay: 100,
    },
    {
      text: "Все у кого волосы крашеные - унтерменши\t",
      color: "text-green-500",
      delay: 100,
    },
    { text: "Какая\t", color: "text-yellow-500", delay: 100 },
    {
      text: "пуссов\t",
      color: "text-red-500",
      delay: 100,
      link: "https://media.discordapp.net/attachments/1280452763351781407/1316803262883692616/ps2MQ4sDG5I.png?ex=69686c5a&is=69671ada&hm=9d7cbccbe5354041244b81f617d9e5ec2ebaf84fd59d6a92c5ac82a12f3e4bdc&=&format=webp&quality=lossless\t",
    },
    { text: "А где на ночь то вставать\t", color: "text-pink-500", delay: 100 },
    { text: "штурмовать будем ночтю\t", color: "text-pink-500", delay: 100 },
    { text: "Гупп\t", color: "text-green-500", delay: 100 },
    { text: "Щуп достану\t", color: "text-purple-500", delay: 100 },
    { text: "что то боль\t", color: "text-blue-500", delay: 100 },
    { text: "привет детка я дедпул\t", color: "text-teal-500", delay: 100 },
    { text: "Але\t", color: "text-red-500", delay: 100 },
    { text: "Наклевывается\t", color: "text-blue-500", delay: 100 },
    { text: "не в моем случае\t", color: "text-indigo-500", delay: 100 },
    { text: "Брат\t", color: "text-pink-500", delay: 100 },
    { text: "пуссов\t", color: "text-purple-500", delay: 100 },
    { text: "0x00011000101\t", color: "text-green-500", delay: 100 },
    { text: "я знаю\t", color: "text-green-500", delay: 100 },
    { text: "А жизнь - борьба\t", color: "text-pink-500", delay: 100 },
    { text: "Зач\t", color: "text-pink-500", delay: 100 },
    { text: "Вялое\t", color: "text-yellow-500", delay: 100 },
    { text: "И поспать как человек\t", color: "text-green-500", delay: 100 },
    {
      text: "а потом генерал который денщика \t",
      color: "text-yellow-500",
      delay: 100,
    },
    { text: "Круглому привет\t", color: "text-teal-500", delay: 100 },
    { text: "Баля\t", color: "text-yellow-500", delay: 100 },
    {
      text: "вот до патча он был рандомный и сложный и я его пройти не смог\t",
      color: "text-indigo-500",
      delay: 100,
    },
    { text: "с 10\t", color: "text-blue-500", delay: 100 },
    { text: "Жаль\t", color: "text-red-500", delay: 100 },
    {
      text: "И получились реально чебуреки\t",
      color: "text-green-500",
      delay: 100,
    },
    {
      text: "Это же круто\t",
      color: "text-blue-500",
      delay: 100,
      link: "https://www.youtube.com/watch?v=XGblSOttka8\t",
    },
    { text: "Баста\t", color: "text-red-500", delay: 100 },
    {
      text: "Я хоть через 10 минк\t",
      color: "text-yellow-500",
      delay: 100,
      link: "https://www.youtube.com/watch?v=oB9_J9JFUjo\t",
    },
    {
      text: "ты где\t",
      color: "text-blue-500",
      delay: 100,
      link: "https://www.youtube.com/watch?v=yej9nXMwWdg&list=RDyej9nXMwWdg&start_radio=1\t",
    },
    { text: "Понятно вам \t", color: "text-purple-500", delay: 100 },
    { text: "хлюпал\t", color: "text-purple-500", delay: 100 },
    {
      text: "это опасные малюки\t",
      color: "text-teal-500",
      delay: 100,
      link: "https://media.discordapp.net/attachments/1280452763351781407/1322663112553398383/image.png?ex=6968a5c3&is=69675443&hm=8d6abe9dd4bfcdb55ccf7579855fa8aa6484ab89d7566a5b9600db17b1843fdd&=&format=webp&quality=lossless\t",
    },
    { text: "Хорош\t", color: "text-pink-500", delay: 100 },
    { text: "даня сделал блинов\t", color: "text-pink-500", delay: 100 },
    { text: "Я про пинус\t", color: "text-purple-500", delay: 100 },
    { text: "расскажите сэр\t", color: "text-purple-500", delay: 100 },
    { text: "Омывайку\t", color: "text-indigo-500", delay: 100 },
    { text: "Сирокко короче\t", color: "text-yellow-500", delay: 100 },
    { text: "бонус метал?\t", color: "text-red-500", delay: 100 },
    { text: "ну да ладно\t", color: "text-indigo-500", delay: 100 },
    { text: "Круто\t", color: "text-pink-500", delay: 100 },
    { text: "я говорю косипоша иногда\t", color: "text-blue-500", delay: 100 },
    { text: "Можно даже без пива\t", color: "text-pink-500", delay: 100 },
    { text: "Я хоть через 10 минк\t", color: "text-teal-500", delay: 100 },
    { text: "После силксонга\t", color: "text-teal-500", delay: 100 },
    { text: "И я до неё дошел\t", color: "text-blue-500", delay: 100 },
    {
      text: "Не в контексте этой тёти\t",
      color: "text-indigo-500",
      delay: 100,
    },
    { text: "я буду пэпером\t", color: "text-green-500", delay: 100 },
    { text: "но тут да смотря какая\t", color: "text-purple-500", delay: 100 },
    { text: "Посмотрим\t", color: "text-blue-500", delay: 100 },
    {
      text: "даже если слушать осмысленно уже непросто\t",
      color: "text-blue-500",
      delay: 100,
      link: "https://www.youtube.com/watch?v=HNHAJtB3f-I\t",
    },
    {
      text: "Фокус на потомках это последний приоритет\t",
      color: "text-yellow-500",
      delay: 100,
    },
    {
      text: "Хочется выйти под дождь и промокнуть\t",
      color: "text-pink-500",
      delay: 100,
    },
    { text: "И вообще хуже животного\t", color: "text-indigo-500", delay: 100 },
    {
      text: "Потом ещё раз когда пришел делать презу\t",
      color: "text-blue-500",
      delay: 100,
    },
    {
      text: "ну дс\t",
      color: "text-indigo-500",
      delay: 100,
      link: "https://www.youtube.com/watch?v=9xcDLqMrV_M\t",
    },
    { text: "Завтра защита\t", color: "text-red-500", delay: 100 },
    { text: "Ахаххахах покажи\t", color: "text-teal-500", delay: 100 },
    {
      text: "привет пошшли сегодня в дс\t",
      color: "text-green-500",
      delay: 100,
    },
    {
      text: "В следующий раз обязательно\t",
      color: "text-teal-500",
      delay: 100,
      link: "https://media.discordapp.net/attachments/1280452763351781407/1354907463073399035/image.png?ex=69689e28&is=69674ca8&hm=c6d319ff2ee4f8920f913620052567abbc8ac3ad23995823501661b1958854c3&=&format=webp&quality=lossless&width=492&height=656\t",
    },
    { text: "Господи боже\t", color: "text-purple-500", delay: 100 },
    {
      text: "После силксонга\t",
      color: "text-red-500",
      delay: 100,
      link: "https://media.discordapp.net/attachments/1280452763351781407/1355993214196388025/image.png?ex=69689cd7&is=69674b57&hm=6e1b8f32f4c8867cdf7ad103758756fa1e26e1ab809fa1a114fef3689d7dcb9b&=&format=webp&quality=lossless\t",
    },
    {
      text: "Доброе утречко можно с головы на голову встать 👺👺👹\t",
      color: "text-purple-500",
      delay: 100,
    },
  ];
  const [lines, setLines] = useState([]);
  const [isBooting, setIsBooting] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // Рекурсивная функция для разной задержки
  useEffect(() => {
    let isMounted = true;

    const printLine = (index) => {
      if (index >= bootSequence.length) {
        if (isMounted) setIsBooting(false);
        return;
      }

      const timeout = setTimeout(() => {
        if (isMounted) {
          setLines((prev) => [...prev, bootSequence[index]]);
          printLine(index + 1); // Рекурсивно вызываем следующую строку
        }
      }, bootSequence[index].delay || 800);

      return timeout;
    };

    const initialTimeout = printLine(0);

    return () => {
      isMounted = false;
      clearTimeout(initialTimeout);
    };
  }, []);

  const printResponses = async (responseArray) => {
    setIsTyping(true); // Блокируем ввод

    for (const line of responseArray) {
      // Ждем указанную задержку или 300мс по умолчанию
      await new Promise((resolve) => setTimeout(resolve, line.delay || 600));
      setLines((prev) => [...prev, line]);
    }

    setIsTyping(false); // Разблокируем ввод
  };

  // Авто-скролл
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, inputValue]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      const command = inputValue.trim().toLowerCase();

      // Сразу добавляем строку с вводом пользователя
      const userLine = { text: command, color: "text-white", prefix: "$ " };
      setLines((prev) => [...prev, userLine]);
      setInputValue("");

      let responses = [];

      if (command === "help") {
        responses = [
          {
            text: "Commands:\nhelp - список доступных команд\nclear - отчистить терминал\nexit - выйти отсюда\nls - список всех работ и художников\nrnd - wild card. Никто не знает, что произойдет\nabout - проект глазами разработчика\ndev - обо мне",
            color: "text-yellow-400",
            delay: 0,
          },
        ];
      } else if (command === "exit") {
        CloseFunc();
        return;
      } else if (command === "rnd") {
        responses = [rndmsg[Math.floor(Math.random() * rndmsg.length)]];
      } else if (command === "clear") {
        setLines([]);
        setInputValue("");
        return;
      } else if (command === "about") {
        responses = [
          { text: "Пинтерест дома", color: "text-purple-300" },
          {
            text: "WARNING: Опасное для жизни количество графомании и личного мнения.",
            color: "text-red-600",
            delay: 100,
          },
          {
            text: "Тут не будет информации о самом флешмобе. Прошу меня извинить, я и сам о нем ничего не знаю. И вообще вы находитесь в пасхалке, которую я оставил, так что тут действуют мои правила. ",
            color: "text-white",
            prefix: "raul>",
            delay: 1500,
          },
          {
            text: "Не скажу, что это запредельно сложный с технической точки зрения проект, при этом простым его назвать у меня язык не повернется. ",
            color: "text-white",
            prefix: "raul>",
            delay: 50,
          },

          {
            text: "В самом начале я честно говоря был напуган достаточно абстрактной формулировкой технической задачи, количеством заказчиков, а так же тем фактом, что...",
            color: "text-white",
            prefix: "raul>",
          },
          {
            text: "Прошлый программист, который уже частично сделал этот сайт просто исчез из сети и перестал отвечать на сообщения. ",
            color: "text-red-500",
            prefix: "raul>",
            delay: 3000,
          },
          {
            text: "Следует учитывать ещё тот факт, что для меня это первый проект с таким количеством пользователей и я не был до конца уверен, что смогу его осилить. ",
            color: "text-white",
            prefix: "raul>",
          },
          {
            text: "Но при детальном рассмотрении все оказалось гораздо проще.",
            color: "text-white",
            prefix: "raul>",
          },
          {
            text: "Если вас интересует техническая составляющая проекта, милости прошу команду stack.",
            color: "text-green-200",
            prefix: "raul>",
          },
          {
            text: "Если говорить кратко, то процесс разработки был достаточно спокойным и линейным, не смотря на то, что заказчиков было много и они были вообще не в теме. Правок немного, ответы оперативные, в общем гораздо лучше чем обычно. ",
            color: "text-white",
            prefix: "raul>",
          },
          {
            text: "Великие конечно люди - художники. ",
            color: "text-purple-500",
            prefix: "raul>",
          },
          {
            text: "Я их совершенно не понимаю, но восхищаюсь.",
            color: "text-gray-200",
            prefix: "raul>",
          },
        ];
      } else if (command === "dev") {
        responses = [
          {
            text: "Привет! На связи дилетант широкого профиля",
            color: "text-green-500",
          },
          {
            text: "Я не профессиональный разработчик, я просто люблю делать интересные вещи. Если вам нужно что-то похожее (или не очень) на этот сайт - пишите.",
            color: "text-white",
          },
          {
            text: "telegram",
            color: "text-white",
            link: "https://t.me/uskvur",
          },
          {
            text: "Или просто приходите поболтать",
            color: "text-green-200",
          },
        ];
      } else if (command === "stack") {
        responses = [
          {
            text: "fetch spec.yaml",
            color: "text-yellow-500",
            delay: 100,
          },
          {
            text: "domain: dwg-art.ru",
            color: "text-yellow-500",
            delay: 1500,
          },
          {
            text: "frontend: React + vite 10.9.3",
            color: "text-yellow-500",
            delay: 100,
          },
          {
            text: "backend: null",
            color: "text-yellow-500",
            delay: 100,
          },
          {
            text: "server: yandex cloud object storage s3",
            color: "text-yellow-500",
            delay: 50,
          },
          {
            text: "server: yandex cloud cdn",
            color: "text-yellow-500",
            delay: 59,
          },
          {
            text: "source code: 403 forbidden. Contact developer",
            color: "text-yellow-500",
            delay: 500,
          },
        ];
      } else if (command === "ls") {
        responses = [
          {
            text: "11gnat: ultimate gamblecore",
            color: "text-green-200",
            link: "https://t.me/ignatrobotoeb",
            delay: 100,
          },
          {
            text: "3Lobite: Cassette Futurism",
            color: "text-green-200",
            link: "https://t.me/Threlobite",
            delay: 100,
          },
          {
            text: "afma: Pwgd lo-fi art aesthetic",
            color: "text-green-200",
            link: "https://t.me/afmaropol",
            delay: 100,
          },
          {
            text: "afma: Pwgood bukwalno doomer aesthetic",
            color: "text-green-200",
            link: "https://t.me/afmaropol",
            delay: 100,
          },
          {
            text: "archest: poolcore",
            color: "text-green-200",
            link: "https://t.me/padikari",
            delay: 100,
          },
          {
            text: "AstroidA: pwgood mushroomcore art",
            color: "text-green-200",
            link: "https://t.me/AAstroidAA",
            delay: 100,
          },
          {
            text: "Bjilka: Technocore",
            color: "text-green-200",
            link: "https://t.me/bjilkas4n",
            delay: 100,
          },
          {
            text: "Bochmak: PWGood Low Poly PS1 art",
            color: "text-green-200",
            link: "https://t.me/bochmak",
            delay: 100,
          },
          {
            text: "dosochka_mhe: ★PWGOOD★BIMBOCORE★",
            color: "text-green-200",
            link: "https://t.me/dschkmhhhhh",
            delay: 100,
          },
          {
            text: "dosochka_mhe: ☠️PWGOOD☠️EMO☠️",
            color: "text-green-200",
            link: "https://t.me/dschkmhhhhh",
            delay: 100,
          },
          {
            text: "Doveca: silver core",
            color: "text-green-200",
            link: "https://t.me/dovecaisdrawing",
            delay: 100,
          },
          {
            text: "Frayn: ",
            color: "text-green-200",
            link: "https://t.me/fraynie",
            delay: 100,
          },
          {
            text: "frog.: PWgood angelcore",
            color: "text-green-200",
            link: "https://t.me/god_forgive_the_frog",
            delay: 100,
          },
          {
            text: "Hersh: Industrial core",
            color: "text-green-200",
            link: "https://t.me/hershhi",
            delay: 100,
          },
          {
            text: "JessyJ40: CYBERCORE",
            color: "text-green-200",
            link: "https://t.me/jessyj_40",
            delay: 100,
          },
          {
            text: "Kaminoka: PWGood Spacecore",
            color: "text-green-200",
            link: "https://t.me/kaminoka0",
            delay: 100,
          },
          {
            text: "KamyWek: Happycore",
            color: "text-green-200",
            link: "https://t.me/exaddd",
            delay: 100,
          },
          {
            text: "KamyWek: medicalcore",
            color: "text-green-200",
            link: "https://t.me/exaddd",
            delay: 100,
          },
          {
            text: "kaykee: Pwgood morute core",
            color: "text-green-200",
            link: "https://t.me/klarabarbone",
            delay: 100,
          },
          {
            text: "Keers: Кубизм",
            color: "text-green-200",
            link: "https://t.me/ke_eers",
            delay: 100,
          },
          {
            text: "ketchanimator: pwgood berezacore art",
            color: "text-green-200",
            link: "https://t.me/ketchup_ketch",
            delay: 100,
          },
          {
            text: "kilowhatt: religioncore",
            color: "text-green-200",
            link: "https://t.me/k1lowhat",
            delay: 100,
          },
          {
            text: "Lceenta: 2000s animecore",
            color: "text-green-200",
            link: "https://t.me/Lceenta",
            delay: 100,
          },
          {
            text: "LenkaLAL | Польша: DREAMCORE",
            color: "text-green-200",
            link: "https://t.me/lenka_lal",
            delay: 100,
          },
          {
            text: "Lentillnz (Линт): Pwgood witchcore art",
            color: "text-green-200",
            link: "https://t.me/Lentillnzart",
            delay: 100,
          },
          {
            text: "LPPDM: CANDYCORE",
            color: "text-green-200",
            link: "https://t.me/lppdm",
            delay: 100,
          },
          {
            text: "mabr0n: Нуарновое",
            color: "text-green-200",
            link: "https://t.me/mabcave",
            delay: 100,
          },
          {
            text: "Miruka Wai: silly goober",
            color: "text-green-200",
            link: "https://t.me/miruka_wai",
            delay: 100,
          },
          {
            text: "m4nch1: PWGOOD SIXTH DIMENSION CORE",
            color: "text-green-200",
            link: "https://t.me/m4nch1",
            delay: 100,
          },
          {
            text: "Neeemah: PWGood SCENEkid 2010-е",
            color: "text-green-200",
            link: "https://t.me/NeeemaChyrish",
            delay: 100,
          },
          {
            text: "PozitiSofa: CORECORE CORECORE",
            color: "text-green-200",
            link: "https://t.me/sofasbureau",
            delay: 100,
          },
          {
            text: "PozitiSofa: MEATCORE YUMMIE",
            color: "text-green-200",
            link: "https://t.me/sofasbureau",
            delay: 100,
          },
          {
            text: "Qwainett: SUPER EPIC MLG CORE PWGOOD MINECRAFT EDIT",
            color: "text-green-200",
            link: "https://t.me/qwainett",
            delay: 100,
          },
          {
            text: "artsosamuzikbaby: immortality core art",
            color: "text-green-200",
            link: "https://t.me/artsosamuzikbaby",
            delay: 100,
          },
          {
            text: "Stamp: punkcore + darkurbancore",
            color: "text-green-200",
            link: "https://t.me/Stamp_Mark16",
            delay: 100,
          },
          {
            text: "Teakstear: WebCore",
            color: "text-green-200",
            link: "https://t.me/teaksteararts",
            delay: 100,
          },
          {
            text: "Wellfy: pwgood vaporwave art",
            color: "text-green-200",
            link: "https://t.me/yfllew",
            delay: 100,
          },
          {
            text: "west: в детстве привели в сбербанк",
            color: "text-green-200",
            link: "https://t.me/westlisXD",
            delay: 100,
          },
          {
            text: "Rain: steampunk",
            color: "text-green-200",
            link: "https://t.me/dowdek",
            delay: 100,
          },
          {
            text: "жемчужная пыль: Ancient Egypt aesthetic",
            color: "text-green-200",
            link: "https://t.me/lucas_yoy",
            delay: 100,
          },
          {
            text: "жемчужная пыль: PWGood Spacecore",
            color: "text-green-200",
            link: "https://t.me/lucas_yoy",
            delay: 100,
          },
          {
            text: "наув: Frutiger PWMetro",
            color: "text-green-200",
            link: "https://t.me/nauvvbun",
            delay: 100,
          },
          {
            text: "Chay0ch: PWGYARUO/GYARUGOOD",
            color: "text-green-200",
            link: "https://t.me/GigaChaevaya",
            delay: 100,
          },
          {
            text: "JessyJ40: Frutiger Aero",
            color: "text-green-200",
            link: "https://t.me/jessyj_40",
            delay: 100,
          },
        ];
      } else if (command === "") {
        responses = null;
      } else {
        responses = [
          {
            text: `err: command '${command}' not found`,
            color: "text-red-500",
          },
        ];
      }

      if (responses.length > 0) {
        await printResponses(responses);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div
        onClick={handleTerminalClick}
        className="w-full max-w-2xl bg-black rounded-lg shadow-2xl border border-white/10 overflow-hidden font-mono cursor-text"
      >
        {/* Шапка */}
        <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-white/5 select-none">
          <div className="flex space-x-2">
            <button onClick={CloseFunc} className="w-3 h-3 rounded-full bg-rose-500/80"></button>
            <button onClick={CloseFunc} className="w-3 h-3 rounded-full bg-amber-500/80"></button>
            <button onClick={CloseFunc} className="w-3 h-3 rounded-full bg-emerald-500/80"></button>
          </div>
          <span className="text-zinc-500 text-xs tracking-widest uppercase">
            Console v1.0
          </span>
        </div>

        {/* Тело терминала */}
        <div
          ref={scrollRef}
          className="p-6 h-96 overflow-y-auto scrollbar-hide text-sm sm:text-base leading-relaxed"
        >
          {lines.map((line, index) => (
            <div
              key={index}
              className={`mb-1 whitespace-pre-wrap break-words leading-relaxed ${
                line?.color || "text-white"
              }`}
            >
              {line?.prefix && (
                <span className="text-zinc-600 select-none mr-2">
                  {line.prefix}
                </span>
              )}

              {line?.link ? (
                <a
                  href={line.link}
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-white transition-colors cursor-pointer"
                >
                  {line.text}
                </a>
              ) : (
                line.text
              )}
            </div>
          ))}

          {!isBooting && (
            <div className="flex items-center">
              <span className="text-zinc-600 mr-2 select-none font-bold">
                $
              </span>
              <input
                ref={inputRef}
                type="text"
                autoFocus
                className="bg-transparent border-none outline-none text-white flex-grow focus:ring-0 p-0"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck="false"
                autoComplete="off"
              />
            </div>
          )}

          {isBooting && (
            <div className="w-2 h-5 bg-zinc-700 animate-pulse mt-1"></div>
          )}
        </div>
      </div>
    </div>
  );
}
