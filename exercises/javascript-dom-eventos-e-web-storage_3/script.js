function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //Exercício 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  
  function monthsDay(){
  let getDaysList = document.getElementById('days');

  for (index = 0; dezDaysList.length > index ; index+=1){
      let day = dezDaysList[index];
      let dayItem = document.createElement('li');

      if(day === 24 || day === 31){
        dayItem.className = 'day holiday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if(day === 25){
        dayItem.className = 'day holiday friday-day';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);

      } else if(day === 4 || day === 11 || day === 18){
          dayItem.className = 'day friday-day';
          dayItem.innerHTML = day;
          getDaysList.appendChild(dayItem);

      } else {
          dayItem.className = 'day';
          dayItem.innerHTML = day;
          getDaysList.appendChild(dayItem);
      }
  }
  }
  monthsDay();

  //Exercício 2
  function getBtn(holidayButton){
    let buttonContainer = document.querySelector('.buttons-container');
    let firstButton = document.createElement('button')

    firstButton.innerHTML = holidayButton;
    firstButton.id = 'btn-holiday';
    buttonContainer.appendChild(firstButton);
  };
  getBtn('Feriados');

  //Exercício 3

  function btnClickEvent(){
    let holidayButton = document.querySelector('#btn-holiday');
    let holidaysDay = document.querySelectorAll('.holiday');
    let backgroundColor = "rgb(238,238,238)";
    let newColor = 'white';
    
    holidayButton.addEventListener('click', function(){
        for(index = 0; holidaysDay.length > index; index+=1){
            if (holidaysDay[index].style.backgroundColor === newColor) {
                holidaysDay[index].style.backgroundColor = backgroundColor;
            } else {
                holidaysDay[index].style.backgroundColor = newColor;
            }
        }
    })
  };
  btnClickEvent();

  //exercicio 4
  function fridayDay(itsFriday){
    let buttonContainer = document.querySelector('.buttons-container');  
    let fridayBtn = document.createElement('button');

    fridayBtn.innerHTML = itsFriday;
    fridayBtn.id = 'btn-friday';
    buttonContainer.appendChild(fridayBtn);
  }
  fridayDay('Sexta-Feira');

  //exercicio 5

  function fridayEvent(fridayDayArray){
    let fridayButton = document.querySelector('#btn-friday');
    let fridayDay = document.getElementsByClassName('friday-day');
    let newText = 'SEXTOU!';
    
    fridayButton.addEventListener('click', function(){
        for(let index = 0 ; index < fridayDay.length ; index+=1) {
            if(fridayDay[index].innerHTML !== newText){
                fridayDay[index].innerHTML = newText;
            } else {
                fridayDay[index].innerHTML = fridayDayArray[index];
            }
        }
    })

  };

  let fridayDays = [ 4 ,11 ,18, 25 ];
  fridayEvent(fridayDays);
