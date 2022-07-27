
document.querySelector("form").addEventListener("submit",function(event) {
    
    event.preventDefault();
    const text = document.querySelector("#input-text").value;
    const factor = parseFloat( document.querySelector("#factor").value );
    
    var output = "";
    for( let i=0; i<text.length; i++ )
    {   
        var str = "";
        while( ( '0' <= text[i] && text[i] <= '9' ) || ( text[i] === '.' && '0' <= text[i-1] && text[i-1] <= '9') )
        {
            str += text[i];
            i++;
        }

        if(str !== "") output += Math.round( parseFloat( str ) * factor * 10) / 10;
        if( i<text.length ) output += text[i];
    }

    // Printing on the screen
    document.querySelector("#output-text").classList.add("effects-anm");
    setTimeout(()=>{
        document.querySelector("#output-text").classList.remove("effects-anm");
    } , 1000 );
    alertUser();
    
    document.querySelector("#output-text").value = output;

    document.querySelector("#output-text").select();
    document.execCommand('copy');
    document.querySelector("#input-text").focus();

});

function alertUser()
{
    document.querySelector("#alert-box").classList.remove("d-none");
    setTimeout( () => {
        document.querySelector("#alert-box").classList.add("d-none");
    }, 2500 );
}