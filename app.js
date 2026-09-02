const STUDENTS = {
  amir: { name: 'Амир', pin: '2468' },
  samir: { name: 'Самир', pin: '1357' }
};
const SUBJECTS = { mathematics:'Математика', russian:'Русский язык', english:'Английский язык', informatics:'Информатика' };
const TOPICS = {
  mathematics:['Десятичные дроби','Деление и умножение','Проценты','Уравнения','Прямоугольник','Последовательности','Олимпиадная логика'],
  russian:['Орфография','Части речи','Синтаксис','Пунктуация','Морфемика'],
  english:['Present Simple','Past Simple','Vocabulary','Questions','There is / There are'],
  informatics:['Алгоритмы','Логика','Системы счисления','Кодирование','Информационные задачи']
};
const BANK = [
 {id:'m1',subject:'mathematics',topic:'Десятичные дроби',text:'Вычисли: 4,8 · 0,5',answer:'2.4',hint:'При умножении на 0,5 можно рассуждать как о делении числа на 2.'},
 {id:'m2',subject:'mathematics',topic:'Скорость',text:'Машина проехала 120 км за 3 часа. Какова средняя скорость?',answer:'40',hint:'Используй формулу: скорость = расстояние ÷ время.'},
 {id:'m3',subject:'mathematics',topic:'Прямоугольник',text:'Длина прямоугольника 14 см, ширина на 5 см меньше. Найди периметр и площадь. Запиши через ;',answer:'46;126',hint:'Сначала найди ширину. Затем примени формулы периметра и площади.'},
 {id:'m4',subject:'mathematics',topic:'Проценты',text:'Найди 30% от 50.',answer:'15',hint:'10% от числа — это одна десятая. Подумай, сколько таких частей составляет 30%.'},
 {id:'m5',subject:'mathematics',topic:'Уравнения',text:'Реши: 3x + 7 = 31. Запиши значение x.',answer:'8',hint:'Сначала убери 7, затем раздели на коэффициент при x.'},
 {id:'m6',subject:'mathematics',topic:'Последовательности',text:'Продолжи: 3, 7, 13, 21, 31, … (запиши следующее число)',answer:'43',hint:'Посмотри на разности соседних чисел: они увеличиваются на 2.'},
 {id:'m7',subject:'mathematics',topic:'Деление и умножение',text:'Вычисли: 36 : 2',answer:'18',hint:'Раздели 36 на 2. Проверь результат обратным умножением.'},
 {id:'m8',subject:'mathematics',topic:'Олимпиадная логика',text:'У Маши 3 красных и 2 синих карандаша. Сколько карандашей всего?',answer:'5',hint:'Сложи количества предметов двух цветов.'},
 {id:'r1',subject:'russian',topic:'Части речи',text:'Определи часть речи слова «быстро» в предложении: «Мальчик быстро бежал».',answer:'наречие',hint:'Слово обозначает признак действия и отвечает на вопрос «как?».'},
 {id:'r2',subject:'russian',topic:'Орфография',text:'Выбери вариант: «неправда» или «не правда» в предложении «Это ___, а выдумка».',answer:'неправда',hint:'Подумай, является ли слово противопоставлением с союзом а.'},
 {id:'r3',subject:'russian',topic:'Синтаксис',text:'Сколько грамматических основ в предложении: «Солнце взошло, и птицы запели»?',answer:'2',hint:'Найди пары подлежащее + сказуемое.'},
 {id:'r4',subject:'russian',topic:'Пунктуация',text:'Нужна ли запятая: «Когда стемнело мы пошли домой»? Ответ: да или нет.',answer:'да',hint:'Это сложноподчинённое предложение; придаточная часть начинается с «когда».'},
 {id:'e1',subject:'english',topic:'Present Simple',text:'Choose: He ___ football every Sunday. (play / plays)',answer:'plays',hint:'С he/she/it в Present Simple к смысловому глаголу обычно добавляется -s.'},
 {id:'e2',subject:'english',topic:'Past Simple',text:'Choose: Yesterday I ___ to school. (go / went)',answer:'went',hint:'Слово Yesterday указывает на прошлое; вспомни вторую форму go.'},
 {id:'e3',subject:'english',topic:'Questions',text:'Make a question: You like pizza. Start with “Do”.',answer:'do you like pizza',hint:'В Present Simple с you вопрос начинается с Do + подлежащее + глагол.'},
 {id:'e4',subject:'english',topic:'There is / There are',text:'Choose: ___ two books on the table. (There is / There are)',answer:'there are',hint:'После конструкции стоит существительное во множественном числе.'},
 {id:'i1',subject:'informatics',topic:'Алгоритмы',text:'Алгоритм: взять число 6, прибавить 4, умножить на 2. Какой результат?',answer:'20',hint:'Выполни действия строго по порядку.'},
 {id:'i2',subject:'informatics',topic:'Системы счисления',text:'Сколько цифр используется в десятичной системе счисления?',answer:'10',hint:'Перечисли цифры от 0 до 9.'},
 {id:'i3',subject:'informatics',topic:'Логика',text:'Истинно или ложно: если A истинно и B истинно, то A И B истинно?',answer:'истинно',hint:'Операция И истинна только когда оба условия истинны.'},
 {id:'i4',subject:'informatics',topic:'Кодирование',text:'Сколько битов в одном байте?',answer:'8',hint:'Вспомни базовую единицу объёма информации.'},
 {id:'i5',subject:'informatics',topic:'Информационные задачи',text:'Файл 20 МБ. После удаления 5 МБ сколько осталось?',answer:'15',hint:'Из общего объёма вычти удалённый объём.'}
];
const WEEK = [
 {d:1,s:'mathematics',title:'Математика + слабая тема'},
 {d:2,s:'russian',title:'Русский язык + слабая тема'},
 {d:3,s:'english',title:'Английский + слабая тема'},
 {d:4,s:'informatics',title:'Информатика + слабая тема'},
 {d:5,s:'mathematics',title:'Математика + олимпиадная задача'},
 {d:6,s:'mixed',title:'Повторение слабых мест'},
 {d:0,s:'mixed',title:'Закрепление и лёгкая тренировка'}
];
let current=null,state=null, todayTasks=[];
const key=id=>`tutor_state_${id}`;
function freshState(id){return {student:id,progress:{mathematics:0,russian:0,english:0,informatics:0},attempts:[],scores:[],errors:[],strengths:[],lessons:0,lastLesson:null,streak:0,completedDates:[]};}
function load(id){try{return JSON.parse(localStorage.getItem(key(id)))||freshState(id)}catch{return freshState(id)}}
function save(){localStorage.setItem(key(current),JSON.stringify(state))}
function selectStudent(id){document.getElementById('pinBox').hidden=false;document.getElementById('pin').value='';current=id;document.getElementById('selectedName').textContent=STUDENTS[id].name;document.getElementById('loginError').textContent=''}
function login(){const pin=document.getElementById('pin').value.trim();if(!current||pin!==STUDENTS[current].pin){document.getElementById('loginError').textContent='Неверный PIN.';return}state=load(current);sessionStorage.setItem('tutor_session',current);showDashboard()}
function logout(){sessionStorage.removeItem('tutor_session');current=null;state=null;document.getElementById('dashboard').hidden=true;document.getElementById('lesson').hidden=true;document.getElementById('login').hidden=false;document.getElementById('pinBox').hidden=true}
function dateKey(d=new Date()){return d.toISOString().slice(0,10)}
function dayPlan(){return WEEK[new Date().getDay()]}
function topicStats(){const stats={};state.attempts.forEach(a=>{const k=a.subject+'|'+a.topic;if(!stats[k])stats[k]={subject:a.subject,topic:a.topic,n:0,ok:0};stats[k].n++;if(a.ok)stats[k].ok++});return stats}
function weakTopics(){const stats=topicStats();return Object.values(stats).filter(x=>x.n>0).sort((a,b)=>(a.ok/a.n)-(b.ok/b.n)||a.ok-b.ok)}
function chooseTasks(){const plan=dayPlan();let pool;if(plan.s==='mixed'){const weak=weakTopics();pool=weak.length?BANK.filter(t=>weak.some(w=>w.subject===t.subject&&w.topic===t.topic)):BANK}else{const weak=weakTopics().filter(w=>w.subject===plan.s);const preferred=weak.length?weak.slice(0,3).map(w=>w.topic):[];pool=BANK.filter(t=>t.subject===plan.s);if(preferred.length){pool=pool.sort((a,b)=>(preferred.includes(b.topic)?1:0)-(preferred.includes(a.topic)?1:0))}}
 // Не даём один и тот же набор бесконечно: слегка перемешиваем, сохраняя приоритет слабых тем.
 const seed=state.lessons+new Date().getDate();pool=[...pool].sort((a,b)=>((hash(a.id+seed)%100)-(hash(b.id+seed)%100)));
 return pool.slice(0,6);
}
function hash(s){let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return Math.abs(h)}
function renderDashboard(){const plan=dayPlan();document.getElementById('studentName').textContent=STUDENTS[current].name;document.getElementById('tutorTitle').textContent=`Персональный репетитор · ${STUDENTS[current].name}`;document.getElementById('lessonTitle').textContent=`Сегодня: ${plan.title}`;document.getElementById('schedule').innerHTML=WEEK.map((x,i)=>`<div class="schedule-item ${i===new Date().getDay()?'today':''}"><b>${['Вс','Пн','Вт','Ср','Чт','Пт','Сб'][i]}</b><span>${esc(x.title)}</span></div>`).join('');
 document.getElementById('progress').innerHTML=Object.entries(state.progress).map(([k,v])=>`<div class="bar"><div class="bar-top"><span>${SUBJECTS[k]}</span><b>${v}%</b></div><div class="track"><div class="fill" style="width:${v}%"></div></div></div>`).join('');
 const weak=weakTopics();document.getElementById('errors').innerHTML=weak.length?weak.slice(0,6).map(x=>`<li>${esc(x.topic)} — ${Math.round((x.ok/x.n)*100)}% правильных ответов</li>`).join(''):'<li>Данных пока мало — продолжаем диагностику.</li>';
 document.getElementById('strengths').innerHTML=weak.length<1&&state.attempts.length<1?'<li>Пока собираем данные.</li>':Object.values(topicStats()).filter(x=>x.ok>0).sort((a,b)=>(b.ok/b.n)-(a.ok/a.n)).slice(0,6).map(x=>`<li>${esc(x.topic)} — сильная сторона</li>`).join('')||'<li>Продолжаем тренировку.</li>';
 document.getElementById('scores').innerHTML=state.scores.length?`<table><tr><th>Дата</th><th>Предмет</th><th>Урок</th><th>Результат</th></tr>${state.scores.slice(-15).reverse().map(x=>`<tr><td>${new Date(x.date).toLocaleDateString('ru-RU')}</td><td>${esc(x.subject)}</td><td>${esc(x.title)}</td><td><b>${x.score}%</b></td></tr>`).join('')}</table>`:'<p>Оценок пока нет.</p>';
 const done=state.completedDates.includes(dateKey());document.getElementById('todayStatus').textContent=done?'Сегодняшний урок уже выполнен ✅':'Сегодня урок готов — начинаем!';}
function showDashboard(){document.getElementById('login').hidden=true;document.getElementById('lesson').hidden=true;document.getElementById('dashboard').hidden=false;renderDashboard()}
function startLesson(){todayTasks=chooseTasks();document.getElementById('dashboard').hidden=true;document.getElementById('lesson').hidden=false;document.getElementById('lessonHeading').textContent=`${dayPlan().title}`;document.getElementById('taskArea').innerHTML=todayTasks.map((t,i)=>`<div class="task" id="task_${t.id}"><h3>${i+1}. ${esc(t.text)}</h3><input id="ans_${t.id}" placeholder="Твой ответ"><button onclick="checkTask('${t.id}')">Проверить</button><div id="fb_${t.id}"></div></div>`).join('')+`<div id="finishBox" class="finish" hidden><h2>Урок завершён 🎉</h2><p id="finishText"></p><button class="primary" onclick="showDashboard()">В кабинет</button></div>`;}
function normalize(s){return String(s).trim().replace(/ё/g,'е').replace(/,/g,'.').replace(/[;]+$/,'').replace(/\s+/g,' ').toLowerCase()}
function checkTask(id){const t=todayTasks.find(x=>x.id===id);if(!t)return;const raw=document.getElementById('ans_'+id).value;const fb=document.getElementById('fb_'+id);if(!raw.trim()){fb.className='feedback bad';fb.innerHTML='<b>Напиши ответ.</b>';return}const ok=normalize(raw)===normalize(t.answer);fb.className='feedback '+(ok?'good':'bad');fb.innerHTML=ok?'<b>Правильно ✅</b>':`<b>Неправильно ❌</b><br><span>${esc(t.hint)}</span>`;state.attempts.push({date:new Date().toISOString(),subject:t.subject,topic:t.topic,ok});if(ok){state.progress[t.subject]=Math.min(100,state.progress[t.subject]+5);state.strengths.push(`${t.topic} — выполнено правильно`)}else{state.progress[t.subject]=Math.max(0,state.progress[t.subject]-1);state.errors.push(`${t.topic} — нужна тренировка`)}save();
 document.getElementById('ans_'+id).disabled=true;document.querySelector('#task_'+id+' button').disabled=true;finishIfComplete();}
function finishIfComplete(){const all=todayTasks.every(t=>{const el=document.getElementById('ans_'+t.id);return el&&el.disabled});if(!all)return;const recent=state.attempts.slice(-todayTasks.length);const ok=recent.filter(x=>x.ok).length;const score=Math.round(ok/todayTasks.length*100);const dk=dateKey();if(!state.completedDates.includes(dk)){state.completedDates.push(dk);state.lessons++;state.lastLesson=dk;state.streak=calcStreak();state.scores.push({date:new Date().toISOString(),subject:SUBJECTS[dayPlan().s]||'Повторение',title:dayPlan().title,score});save()}document.getElementById('finishBox').hidden=false;document.getElementById('finishText').textContent=`Результат сегодняшнего занятия: ${score}%. Следующий урок репетитор подберёт с учётом ошибок и по расписанию.`}
function calcStreak(){const set=new Set(state.completedDates);let d=new Date();let n=0;while(set.has(dateKey(d))){n++;d.setDate(d.getDate()-1)}return n}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function restore(){const id=sessionStorage.getItem('tutor_session');if(id&&STUDENTS[id]){current=id;state=load(id);showDashboard()}}
restore();
