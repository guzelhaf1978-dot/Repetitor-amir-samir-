const STUDENTS = {
  amir: { name: 'Амир', pin: '2468' },
  samir: { name: 'Самир', pin: '1357' }
};
const SUBJECTS = { mathematics:'Математика', russian:'Русский', english:'Английский', informatics:'Информатика' };
const TASKS = [
 {id:'m1',subject:'mathematics',topic:'Десятичные дроби',text:'Вычисли: 4,8 · 0,5',answer:'2.4',hint:'При умножении на 0,5 можно рассуждать как о делении числа на 2.'},
 {id:'m2',subject:'mathematics',topic:'Скорость',text:'Машина проехала 120 км за 3 часа. Какова средняя скорость?',answer:'40',hint:'Используй формулу: скорость = расстояние ÷ время.'},
 {id:'m3',subject:'mathematics',topic:'Прямоугольник',text:'Длина прямоугольника 14 см, ширина на 5 см меньше. Найди периметр и площадь. Запиши через ;',answer:'46;126',hint:'Сначала найди ширину. Затем примени формулы периметра и площади.'},
 {id:'m4',subject:'mathematics',topic:'Проценты',text:'Найди 30% от 50.',answer:'15',hint:'10% от числа — это одна десятая. Подумай, сколько таких частей составляет 30%.'},
 {id:'m5',subject:'mathematics',topic:'Уравнения',text:'Реши: 3x + 7 = 31. Запиши значение x.',answer:'8',hint:'Сначала убери 7, затем раздели на коэффициент при x.'},
 {id:'m6',subject:'mathematics',topic:'Последовательности',text:'Продолжи: 3, 7, 13, 21, 31, … (запиши следующее число)',answer:'43',hint:'Посмотри на разности соседних чисел: они увеличиваются на 2.'}
];

let current = null;
let state = null;
const key = id => `tutor_state_${id}`;
function freshState(id){ return {student:id,progress:{mathematics:0,russian:0,english:0,informatics:0},scores:[],errors:[],strengths:[],lessons:0}; }
function load(id){ try{return JSON.parse(localStorage.getItem(key(id)))||freshState(id)}catch{return freshState(id)} }
function save(){localStorage.setItem(key(current),JSON.stringify(state))}
function selectStudent(id){document.getElementById('pinBox').hidden=false;document.getElementById('pin').value='';document.getElementById('pin').focus();current=id;document.getElementById('selectedName').textContent=STUDENTS[id].name}
function login(){const pin=document.getElementById('pin').value.trim();if(!current||pin!==STUDENTS[current].pin){document.getElementById('loginError').textContent='Неверный PIN.';return} state=load(current); sessionStorage.setItem('tutor_session',current); showDashboard();}
function showDashboard(){document.getElementById('login').hidden=true;document.getElementById('lesson').hidden=true;document.getElementById('dashboard').hidden=false;renderDashboard()}
function logout(){sessionStorage.removeItem('tutor_session');current=null;state=null;document.getElementById('dashboard').hidden=true;document.getElementById('lesson').hidden=true;document.getElementById('login').hidden=false;document.getElementById('pinBox').hidden=true}
function renderDashboard(){document.getElementById('studentName').textContent=STUDENTS[current].name;document.getElementById('tutorTitle').textContent=`Персональный репетитор · ${STUDENTS[current].name}`;document.getElementById('lessonTitle').textContent=`Сегодняшнее занятие для ${STUDENTS[current].name}`;
 document.getElementById('progress').innerHTML=Object.entries(state.progress).map(([k,v])=>`<div class="bar"><div class="bar-top"><span>${SUBJECTS[k]}</span><b>${v}%</b></div><div class="track"><div class="fill" style="width:${v}%"></div></div></div>`).join('');
 document.getElementById('strengths').innerHTML=state.strengths.length?state.strengths.slice(-6).reverse().map(x=>`<li>${esc(x)}</li>`).join(''):'<li>Пока собираем данные.</li>';
 document.getElementById('errors').innerHTML=state.errors.length?state.errors.slice(-6).reverse().map(x=>`<li>${esc(x)}</li>`).join(''):'<li>Пока ошибок для повторения нет.</li>';
 document.getElementById('scores').innerHTML=state.scores.length?`<table><tr><th>Дата</th><th>Предмет</th><th>Тема</th><th>Оценка</th></tr>${state.scores.slice(-12).reverse().map(x=>`<tr><td>${new Date(x.date).toLocaleDateString('ru-RU')}</td><td>${esc(x.subject)}</td><td>${esc(x.topic)}</td><td><b>${x.score}/100</b></td></tr>`).join('')}</table>`:'<p>Оценок пока нет.</p>';
}
function startLesson(){document.getElementById('dashboard').hidden=true;document.getElementById('lesson').hidden=false;document.getElementById('lessonHeading').textContent='Математика · персональное занятие';document.getElementById('taskArea').innerHTML=TASKS.map((t,i)=>`<div class="task"><h3>${i+1}. ${esc(t.text)}</h3><input id="ans_${t.id}" placeholder="Твой ответ"><button onclick="checkTask('${t.id}')">Проверить</button><div id="fb_${t.id}"></div></div>`).join('');}
function normalize(s){return String(s).trim().replace(/,/g,'.').replace(/\s+/g,'').toLowerCase()}
function checkTask(id){const t=TASKS.find(x=>x.id===id);const raw=document.getElementById('ans_'+id).value;const fb=document.getElementById('fb_'+id);if(!raw.trim()){fb.className='feedback bad';fb.innerHTML='<b>Напиши ответ.</b>';return}const ok=normalize(raw)===normalize(t.answer);if(ok){fb.className='feedback good';fb.innerHTML='<b>Правильно ✅</b>';state.progress[t.subject]=Math.min(100,state.progress[t.subject]+5);state.strengths.push(`${t.topic} — выполнено правильно`);state.scores.push({date:new Date().toISOString(),subject:SUBJECTS[t.subject],topic:t.topic,score:100});}
 else {fb.className='feedback bad';fb.innerHTML=`<b>Неправильно ❌</b><br><span>${esc(t.hint)}</span>`;state.progress[t.subject]=Math.max(0,state.progress[t.subject]-1);state.errors.push(`${t.topic} — нужна дополнительная тренировка`);state.scores.push({date:new Date().toISOString(),subject:SUBJECTS[t.subject],topic:t.topic,score:0});}
 state.lessons++;save();}
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function restore(){const id=sessionStorage.getItem('tutor_session');if(id&&STUDENTS[id]){current=id;state=load(id);showDashboard()}}
restore();
