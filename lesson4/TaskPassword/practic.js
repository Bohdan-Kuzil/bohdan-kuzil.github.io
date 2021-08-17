
let i = 1;
while (i <= 5) {
    let ask = prompt(`введіть пароль${i} of 5 `)
    if (ask !== 'logos' && i < 5) {

        alert(`Залишилось ${ 5 - i } спроб`);
        
    }
      else if (i === 5) {
            alert('спробуйте пізніше');
        }
    else if(ask=='logos'){

        alert('welcome');
        i+=5;

    }
    i++;
}