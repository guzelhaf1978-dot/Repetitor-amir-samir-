const STUDENTS={amir:{name:'Амир',pin:'2468'},samir:{name:'Самир',pin:'1357'}};
const SUBJECTS={mathematics:'Математика',russian:'Русский язык',english:'Английский язык',informatics:'Информатика'};
const WEEK=[
 {s:'mathematics',title:'Математика + слабая тема'},
 {s:'russian',title:'Русский язык + слабая тема'},
 {s:'english',title:'Английский + слабая тема'},
 {s:'informatics',title:'Информатика + слабая тема'},
 {s:'mathematics',title:'Математика + олимпиадная задача'},
 {s:'mixed',title:'Повторение слабых мест'},
 {s:'mixed',title:'Закрепление и лёгкая тренировка'}
];
const BANK=[
// Математика
{id:'m1',subject:'mathematics',topic:'Десятичные дроби',text:'Вычисли: 4,8 · 0,5',answer:'2.4',hint:'При умножении на 0,5 можно рассуждать как о делении числа на 2.'},
{id:'m2',subject:'mathematics',topic:'Скорость',text:'Машина проехала 120 км за 3 часа. Какова средняя скорость?',answer:'40',hint:'Используй формулу: скорость = расстояние ÷ время.'},
{id:'m3',subject:'mathematics',topic:'Прямоугольник',text:'Длина прямоугольника 14 см, ширина на 5 см меньше. Найди периметр и площадь. Запиши через ;',answer:'46;126',hint:'Сначала найди ширину. Затем примени формулы периметра и площади.'},
{id:'m4',subject:'mathematics',topic:'Проценты',text:'Найди 30% от 50.',answer:'15',hint:'10% от числа — это одна десятая. Подумай, сколько таких частей составляет 30%.'},
{id:'m5',subject:'mathematics',topic:'Уравнения',text:'Реши: 3x + 7 = 31. Запиши значение x.',answer:'8',hint:'Сначала убери 7, затем раздели на коэффициент при x.'},
{id:'m6',subject:'mathematics',topic:'Последовательности',text:'Продолжи: 3, 7, 13, 21, 31, … (следующее число)',answer:'43',hint:'Посмотри на разности соседних чисел: они увеличиваются на 2.'},
{id:'m7',subject:'mathematics',topic:'Деление и умножение',text:'Вычисли: 36 : 2',answer:'18',hint:'Раздели 36 на 2. Проверь результат обратным умножением.'},
{id:'m8',subject:'mathematics',topic:'Дроби',text:'Вычисли: 2/3 + 5/8. Запиши результат смешанным числом или неправильной дробью.',answer:'31/24',hint:'Приведи дроби к общему знаменателю, затем сложи числители.'},
{id:'m9',subject:'mathematics',topic:'Десятичные дроби',text:'Вычисли: 1,5 · 0,4',answer:'0.6',hint:'Перемножь числа без запятых, затем верни нужное количество знаков после запятой.'},
{id:'m10',subject:'mathematics',topic:'Проценты',text:'Найди 25% от 80.',answer:'20',hint:'25% — это четверть числа.'},
{id:'m11',subject:'mathematics',topic:'Уравнения',text:'Реши: 4x − 9 = 27. Запиши x.',answer:'9',hint:'Сначала прибавь 9 к обеим частям, затем раздели на 4.'},
{id:'m12',subject:'mathematics',topic:'Олимпиадная логика',text:'У Пети 3 красных, 4 синих и 2 зелёных карандаша. Сколько карандашей всего?',answer:'9',hint:'Сложи количества всех трёх цветов.'},
{id:'m13',subject:'mathematics',topic:'Олимпиадная логика',text:'У числа 18 есть делители 1, 2, 3, 6, 9, 18. Сколько их всего?',answer:'6',hint:'Пересчитай все делители положительного числа 18.'},
{id:'m14',subject:'mathematics',topic:'Площадь',text:'Прямоугольник имеет длину 12 см и ширину 7 см. Найди площадь.',answer:'84',hint:'Площадь прямоугольника равна длина × ширина.'},
{id:'m15',subject:'mathematics',topic:'Дроби',text:'Какая дробь больше: 3/4 или 2/3? Напиши только большую дробь.',answer:'3/4',hint:'Сравни дроби через общий знаменатель или десятичные значения.'},
{id:'m16',subject:'mathematics',topic:'Последовательности',text:'Продолжи: 2, 5, 10, 17, 26, …',answer:'37',hint:'Разности соседних чисел увеличиваются на 2.'},
// Русский
{id:'r1',subject:'russian',topic:'Части речи',text:'Определи часть речи слова «быстро» в предложении: «Мальчик быстро бежал».',answer:'наречие',hint:'Слово обозначает признак действия и отвечает на вопрос «как?».'},
{id:'r2',subject:'russian',topic:'Орфография',text:'Выбери вариант: «неправда» или «не правда» в предложении «Это ___, а выдумка».',answer:'неправда',hint:'Подумай, является ли слово противопоставлением с союзом «а».'},
{id:'r3',subject:'russian',topic:'Синтаксис',text:'Сколько грамматических основ в предложении: «Солнце взошло, и птицы запели»?',answer:'2',hint:'Найди пары подлежащее + сказуемое.'},
{id:'r4',subject:'russian',topic:'Пунктуация',text:'Нужна ли запятая: «Когда стемнело мы пошли домой»? Ответ: да или нет.',answer:'да',hint:'Это сложноподчинённое предложение; придаточная часть начинается с «когда».'},
{id:'r5',subject:'russian',topic:'Морфемика',text:'Сколько корней в слове «лесоруб»?',answer:'2',hint:'Найди части слова, связанные с двумя самостоятельными словами.'},
{id:'r6',subject:'russian',topic:'Орфография',text:'Выбери правильное написание: «безвкусный» или «безвкустный».',answer:'безвкусный',hint:'После приставки без- перед в пишется буква в; обрати внимание на корень «вкус».'},
{id:'r7',subject:'russian',topic:'Синтаксис',text:'Какой знак нужен: «Я знаю ___ ты придёшь»? Напиши слово «запятая».',answer:'запятая',hint:'Внутри сложноподчинённого предложения части разделяются запятой.'},
{id:'r8',subject:'russian',topic:'Части речи',text:'Определи часть речи слова «три» в сочетании «три книги».',answer:'числительное',hint:'Слово обозначает количество предметов и отвечает на вопрос «сколько?».'},
// Английский
{id:'e1',subject:'english',topic:'Present Simple',text:'Choose: He ___ football every Sunday. (play / plays)',answer:'plays',hint:'С he/she/it в Present Simple к смысловому глаголу обычно добавляется -s.'},
{id:'e2',subject:'english',topic:'Past Simple',text:'Choose: Yesterday I ___ to school. (go / went)',answer:'went',hint:'Слово Yesterday указывает на прошлое; вспомни вторую форму go.'},
{id:'e3',subject:'english',topic:'Questions',text:'Make a question: You like pizza. Start with “Do”.',answer:'do you like pizza',hint:'В Present Simple с you вопрос начинается с Do + подлежащее + глагол.'},
{id:'e4',subject:'english',topic:'There is / There are',text:'Choose: ___ two books on the table. (There is / There are)',answer:'there are',hint:'После конструкции стоит существительное во множественном числе.'},
{id:'e5',subject:'english',topic:'Vocabulary',text:'Translate into English: «школа».',answer:'school',hint:'Вспомни базовое английское слово для места, где учатся дети.'},
{id:'e6',subject:'english',topic:'Present Simple',text:'Choose: I ___ TV every evening. (watch / watches)',answer:'watch',hint:'С I глагол в Present Simple не получает окончание -s.'},
{id:'e7',subject:'english',topic:'Past Simple',text:'Choose: She ___ a book yesterday. (read / reads)',answer:'read',hint:'Yesterday требует прошедшего времени; у read написание одинаковое, меняется произношение.'},
{id:'e8',subject:'english',topic:'There is / There are',text:'Choose: ___ a cat under the table. (There is / There are)',answer:'there is',hint:'После конструкции стоит один предмет в единственном числе.'},
// Информатика
{id:'i1',subject:'informatics',topic:'Алгоритмы',text:'Алгоритм: взять число 6, прибавить 4, умножить на 2. Какой результат?',answer:'20',hint:'Выполни действия строго по порядку.'},
{id:'i2',subject:'informatics',topic:'Системы счисления',text:'Сколько цифр используется в десятичной системе счисления?',answer:'10',hint:'Перечисли цифры от 0 до 9.'},
{id:'i3',subject:'informatics',topic:'Логика',text:'Истинно или ложно: если A истинно и B истинно, то A И B истинно?',answer:'истинно',hint:'Операция И истинна только когда оба условия истинны.'},
{id:'i4',subject:'informatics',topic:'Кодирование',text:'Сколько битов в одном байте?',answer:'8',hint:'Вспомни базовую единицу объёма информации.'},
{id:'i5',subject:'informatics',topic:'Информационные задачи',text:'Файл 20 МБ. После удаления 5 МБ сколько осталось?',answer:'15',hint:'Из общего объёма вычти удалённый объём.'},
{id:'i6',subject:'informatics',topic:'Алгоритмы',text:'Что выполнится раньше: команда «вывести 5» или команда «прибавить 2 к числу», если первая записана выше?',answer:'вывести 5',hint:'Команды алгоритма выполняются по порядку записи.'},
{id:'i7',subject:'informatics',topic:'Логика',text:'Истинно или ложно: A ИЛИ B ложно, если A ложно и B ложно?',answer:'истинно',hint:'Операция ИЛИ истинна, если истинно хотя бы одно условие.'},
{id:'i8',subject:'informatics',topic:'Системы счисления',text:'Как называется система счисления, использующая только 0 и 1?',answer:'двоичная',hint:'Её основание равно 2.'}
];
let current=null,state=null,todayTasks=[],lessonPlan=null,lessonFinished=false;
const key=id=>`tutor_state_${id}`;
function freshState(id){return{student:id,progress:{mathematics:0,russian:0,english:0,informatics:0},attempts:[],scores:[],errors:[],strengths:[],lessons:0,lastLesson:null,streak:0,completedDates:[]}}
function load(id){try{return JSON.parse(localStorage.getItem(key(id)))||freshState(id)}catch{return freshState(id)}}
function save(){localStorage.setItem(key(current),JSON.stringify(state))}
function selectStudent(id){document.getElementById('pinBox').hidden=false;document.getElementById('pin').value='';current=id;document.getElementById('selectedName').textContent=STUDENTS[id].name;document.getElementById('loginError').textContent=''}
function login(){const pin=document.getElementById('pin').value.trim();if(!current||pin!==STUDENTS[current].pin){document.getElementById('loginError').textContent='Неверный PIN.';return}state=load(current);sessionStorage.setItem('tutor_session',current);showDashboard()}
function logout(){sessionStorage.removeItem('tutor_session');current=null;state=null;document.getElementById('dashboard').hidden=true;document.getElementById('lesson').hidden=true;document.getElementById('login').hidden=false;document.getElementById('pinBox').hidden=true}
function dateKey(d=new Date()){return d.toISOString().slice(0,10)}
function topicStats(){const stats={};state.attempts.forEach(a=>{const k=a.subject+'|'+a.topic;if(!stats[k])stats[k]={subject:a.subject,topic:a.topic,n:0,ok:0};stats[k].n++;if(a.ok)stats[k].ok++});return stats}
function weakTopics(){return Object.values(topicStats()).filter(x=>x.n>0).sort((a,b)=>(a.ok/a.n)-(b.ok/b.n)||a.ok-b.ok)}
function lessonPlanForIndex(index){const slot=WEEK[index%WEEK.length];return slot}
function chooseTasks(){const plan=lessonPlan||lessonPlanForIndex(state.lessons);let pool=[];if(plan.s==='mixed'){const weak=weakTopics();pool=weak.length?BANK.filter(t=>weak.some(w=>w.subject===t.subject&&w.topic===t.topic)):BANK.slice()}else{const weak=weakTopics().filter(w=>w.subject===plan.s);const preferred=weak.slice(0,5).map(w=>w.topic);pool=BANK.filter(t=>t.subject===plan.s);if(preferred.length)pool.sort((a,b)=>(preferred.includes(b.topic)?1:0)-(preferred.includes(a.topic)?1:0))}
const start=state.lessons*7+new Date().getDate();const sorted=[...pool].sort((a,b)=>hash(a.id+start)-hash(b.id+start));
let selected=[];for(const t of sorted){if(!selected.some(x=>x.topic===t.topic)||selected.length>=10)selected.push(t);if(selected.length===10)break}
for(const t of sorted){if(selected.length>=10)break;if(!selected.some(x=>x.id===t.id))selected.push(t)}
return selected.slice(0,10)}
function hash(s){let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return Math.abs(h)}
function renderDashboard(){const next=lessonPlanForIndex(state.lessons);document.getElementById('studentName').textContent=STUDENTS[current].name;document.getElementById('tutorTitle').textContent=`Персональный репетитор · ${STUDENTS[current].name}`;document.getElementById('lessonTitle').textContent=`Следующий урок: ${next.title}`;document.getElementById('todayStatus').textContent=state.lessons===0?'Диагностика готова — начинаем!':`Уроков завершено: ${state.lessons}. Следующий урок уже готов.`;document.getElementById('startBtn').textContent=state.lessons===0?'Начать первый урок':'Начать следующий урок';document.getElementById('lessonNo').textContent=`Урок №${state.lessons+1}`;
document.getElementById('schedule').innerHTML=WEEK.map((x,i)=>`<div class="schedule-item"><b>${['Пн','Вт','Ср','Чт','Пт','Сб','Вс'][i]}</b><span>${esc(x.title)}</span></div>`).join('');
document.getElementById('progress').innerHTML=Object.entries(state.progress).map(([k,v])=>`<div class="bar"><div class="bar-top"><span>${SUBJECTS[k]}</span><b>${v}%</b></div><div class="track"><div class="fill" style="width:${v}%"></div></div></div>`).join('');
const weak=weakTopics();document.getElementById('errors').innerHTML=weak.length?weak.slice(0,8).map(x=>`<li>${esc(x.topic)} — ${Math.round(x.ok/x.n*100)}% правильных ответов</li>`).join(''):'<li>Пока собираем данные.</li>';
const strengths=Object.values(topicStats()).filter(x=>x.ok>0).sort((a,b)=>(b.ok/b.n)-(a.ok/a.n));document.getElementById('strengths').innerHTML=strengths.length?strengths.slice(0,8).map(x=>`<li>${esc(x.topic)} — ${Math.round(x.ok/x.n*100)}% правильных</li>`).join(''):'<li>Пока собираем данные.</li>';
document.getElementById('scores').innerHTML=state.scores.length?`<table><tr><th>Дата</th><th>Предмет</th><th>Урок</th><th>Результат</th></tr>${state.scores.slice(-20).reverse().map(x=>`<tr><td>${new Date(x.date).toLocaleDateString('ru-RU')}</td><td>${esc(x.subject)}</td><td>${esc(x.title)}</td><td><b>${x.score}%</b></td></tr>`).join('')}</table>`:'<p>Оценок пока нет.</p>'}
function showDashboard(){document.getElementById('login').hidden=true;document.getElementById('lesson').hidden=true;document.getElementById('dashboard').hidden=false;renderDashboard()}
function startLesson(){lessonPlan=lessonPlanForIndex(state.lessons);todayTasks=chooseTasks();lessonFinished=false;document.getElementById('dashboard').hidden=true;document.getElementById('lesson').hidden=false;document.getElementById('lessonHeading').textContent=lessonPlan.title;document.getElementById('lessonMeta').textContent=`Урок №${state.lessons+1} · 10 заданий`;document.getElementById('taskArea').innerHTML=todayTasks.map((t,i)=>`<div class="task" id="task_${t.id}"><h3>${i+1}. ${esc(t.text)}</h3><input id="ans_${t.id}" placeholder="Твой ответ" autocomplete="off"><button onclick="checkTask('${t.id}')">Проверить</button><div id="fb_${t.id}"></div></div>`).join('')+`<div id="finishBox" class="finish"><h2>Когда всё решишь</h2><p id="finishText">Проверь все 10 заданий. После этого станет доступна кнопка завершения занятия.</p><button id="finishBtn" class="primary" onclick="finishLesson()" disabled>Завершить занятие</button></div>`;window.scrollTo({top:0,behavior:'smooth'})}
function normalize(s){return String(s).trim().replace(/ё/g,'е').replace(/,/g,'.').replace(/[;]+$/,'').replace(/\s+/g,' ').toLowerCase()}
function checkTask(id){const t=todayTasks.find(x=>x.id===id);if(!t)return;const input=document.getElementById('ans_'+id),raw=input.value,fb=document.getElementById('fb_'+id);if(!raw.trim()){fb.className='feedback bad';fb.innerHTML='<b>Напиши ответ.</b>';return}const ok=normalize(raw)===normalize(t.answer);fb.className='feedback '+(ok?'good':'bad');fb.innerHTML=ok?'<b>Правильно ✅</b>':`<b>Неправильно ❌</b><br><span>${esc(t.hint)}</span>`;state.attempts.push({date:new Date().toISOString(),subject:t.subject,topic:t.topic,ok,lesson:state.lessons+1});save();input.disabled=true;document.querySelector('#task_'+id+' button').disabled=true;updateFinishButton()}
function updateFinishButton(){const all=todayTasks.every(t=>document.getElementById('ans_'+t.id)?.disabled);const btn=document.getElementById('finishBtn');if(btn){btn.disabled=!all;btn.textContent=all?'Завершить занятие':'Завершить занятие (сначала реши все задания)'}if(all)document.getElementById('finishText').textContent='Все 10 заданий проверены. Нажми «Завершить занятие», чтобы сохранить оценку и открыть следующий урок.'}
function finishLesson(){if(lessonFinished)return;const all=todayTasks.every(t=>document.getElementById('ans_'+t.id)?.disabled);if(!all)return;lessonFinished=true;const recent=state.attempts.slice(-todayTasks.length),ok=recent.filter(x=>x.ok).length,score=Math.round(ok/todayTasks.length*100);const dk=dateKey();state.lessons++;state.lastLesson=dk;if(!state.completedDates.includes(dk))state.completedDates.push(dk);state.streak=calcStreak();state.scores.push({date:new Date().toISOString(),subject:lessonPlan.s==='mixed'?'Повторение':SUBJECTS[lessonPlan.s],title:lessonPlan.title,score});save();const weak=weakTopics().slice(0,3);document.getElementById('finishBox').innerHTML=`<h2>Занятие завершено 🎉</h2><p><b>Результат: ${score}%</b></p><p>${weak.length?'Репетитор отметил темы для дополнительной тренировки: '+weak.map(x=>esc(x.topic)).join(', ')+'.':'Репетитор продолжит диагностику и подберёт следующие темы.'}</p><div class="next-lesson"><h3>Следующий урок уже готов</h3><p>${esc(lessonPlanForIndex(state.lessons).title)} · 10 новых заданий</p><button class="primary" onclick="startLesson()">Перейти к следующему уроку →</button><button class="ghost" onclick="showDashboard()">В кабинет</button></div>`}
function calcStreak(){const set=new Set(state.completedDates);let d=new Date(),n=0;while(set.has(dateKey(d))){n++;d.setDate(d.getDate()-1)}return n}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function restore(){const id=sessionStorage.getItem('tutor_session');if(id&&STUDENTS[id]){current=id;state=load(id);showDashboard()}}
restore();
