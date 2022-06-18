const makeCall = async function(text2){
    const key = await (await fetch('/key')).text();    
    const res = await fetch('https://api.meaningcloud.com/sentiment-2.1?key='+key+'&lang=en&txt='+text2+'&model=general&dm=s&sdg=l&txtf=plain&of=json&uw=n&rt=n&egp=n');
    const text3 = await res.json()
    
    try{
        
   
        
        
        console.log(text3);

       return 'confidence = '+text3.confidence+'\n irony = '+text3.irony+'\n agreement = '+text3.agreement+'\n subjectivity = '+text3.subjectivity+'\n text is: '+text2;
            
    }
    catch(error){
        console.log(error);
    }
}





const handleSubmit = async function(event) {
    event.preventDefault();
    
    
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const valid = Client.checkForName(formText)
    if (valid){
        const s = document.getElementById('semantics');
        const text = document.getElementById('text').value;
        const result = await Client.makeCall(text);
        s.innerHTML = result;
        console.log("::: Form Submitted :::")
        document.getElementById('results').innerHTML = formText;
    }
    
    
    
    
    
    
    
}
function onBlur(){
    console.log('successfully connected')
}

export { handleSubmit , onBlur, makeCall}

