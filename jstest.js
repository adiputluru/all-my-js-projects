function switchoff(){
    document.getElementById("switchid").textContent='Switched off';
    document.getElementById("offid").style.backgroundColor='white';
    document.getElementById("onid").style.backgroundColor='green';
    document.getElementById("bulbid").src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png';
    document.getElementById("catid").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
}
function switchon(){
    document.getElementById("switchid").textContent='Switched on';
    document.getElementById("onid").style.backgroundColor='white';
    document.getElementById("offid").style.backgroundColor='red';
    document.getElementById("bulbid").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("catid").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
}