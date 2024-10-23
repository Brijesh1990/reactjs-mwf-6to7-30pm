function validation()
{
    if(document.frm.fname.value=="")
    {
        alert('Please enter your firstName')
        document.frm.fname.focus();
        return false;
    }

    // accespt only alphbetic characters 
    
    var fnm=/^[A-Za-z]+$/;
    if(!fnm.test(document.frm.fname.value))
    {
        alert('Please enter your firstName as alphabetic character only')
        document.frm.fname.focus();
        return false;
    }
    
    if(document.frm.email.value=="")
        {
            alert('Please enter your email')
            document.frm.email.focus();
            return false;
        }

    //check the regular expression for valid email address
    
    var em= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!em.test(document.frm.email.value))
        {
            alert('Please enter your valid email address')
            document.frm.email.focus();
            return false;
        }
    
}