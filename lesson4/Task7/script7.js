let a=-166,i=0;
while(a<=99){
    if (a > -100 && (a < -9 || a > 9))
        document.write(`<h4>loop ${a + ""} <\h4>`)
    a = 2 * a + 200; 
    i++;
}