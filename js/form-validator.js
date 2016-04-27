
function warning (action, link) {
  document.querySelector('.sum-for-payment__sum').innerHTML = '-';
  document.querySelector('.sum-for-payment__warning').innerHTML = '<i class="fa fa-exclamation-circle"></i>Пожалуйста, <a href="#' + link + '" class="sum-for-payment__date">' + action + '</a>, чтобы увидеть сумму к оплате';
}

function sumForPayment () {
  var elems = document.getElementsByTagName('form')[0].elements;
  var Arrive = new Date();
  Arrive.setFullYear(elems.yearOfArrive.value, (elems.monthOfArrive.value-1), elems.dayOfArrive.value);
  var retur = new Date();
  retur.setFullYear(elems.yearOfReturn.value, (elems.monthOfReturn.value-1), elems.dayOfReturn.value);
  var res = retur - Arrive;
  var dif  = 86400000; 
  var days = Math.floor(res/dif); 

  if ( document.getElementById('hotel').checked ) {
    if( document.getElementById('cottage1').checked ) {
      payment = 6000;
    } else if ( document.getElementById('cottage2').checked ) {
      payment = 22000;
    } else if ( document.getElementById('cottage3').checked ) {
      payment = 4000;
    } else  {
      payment = 13000;
    }
  } else {
    if( document.getElementById('cottage1').checked ) {
      payment = 10000;
    } else if ( document.getElementById('cottage2').checked ) {
      payment = 25000;
    } else if ( document.getElementById('cottage3').checked ) {
      payment = 7000;
    } else  {
      payment = 15000;
    }    
  }

  var sum = payment * days;
  document.querySelector('.sum-for-payment__sum').innerHTML = sum + ' руб.';
  document.querySelector('.sum-for-payment__warning').innerHTML = '';
}


function check (form) {
  var elems = form.elements;
  if ( elems.dayOfArrive.value && elems.monthOfArrive.value && elems.yearOfArrive.value && elems.dayOfReturn.value && elems.monthOfReturn.value && elems.yearOfReturn.value && elems.typeOfCottage.value) {
    sumForPayment();
  }  
  if (!elems.typeOfCottage.value) {
    warning('выберите тип коттеджа', 'typeOfCottage');
  }  
  if (!elems.dayOfReturn.value || !elems.monthOfReturn.value || !elems.yearOfReturn.value) {
    warning('выберите дату выезда', 'dayOfReturn');
  }
  if (!elems.dayOfArrive.value || !elems.monthOfArrive.value || !elems.yearOfArrive.value) {
    warning('выберите дату въезда', 'dayOfArrive');
  }
}      
