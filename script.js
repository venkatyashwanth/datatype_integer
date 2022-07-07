let checkBtn = document.getElementById('checkBtn');

checkBtn.addEventListener('click', function () {
  let val = document.getElementById('inputEl').value;

  let pattern = /\d/g;

  let res = val.match(pattern);

  let num;
  if (res !== null) {
    if (val.includes('.')) {
      num = parseFloat(val);
    } else {
      num = parseInt(val);
    }
  } else {
    num = val;
  }

  checkForInteger(num);
});

function checkForInteger(x) {
  let getType = typeof x;
  if (getType === 'number') {
    let val = x.toString();
    if (val.includes('.')) {
      document.getElementById('output').innerHTML = 'Float';
    } else {
      document.getElementById('output').innerHTML = 'Integer';
    }
  } else {
    document.getElementById('output').innerHTML = 'NAN';
  }
}
