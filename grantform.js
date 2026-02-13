
 function handleFormSubmit(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullname').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const projectDescription = document.getElementById('projectDescription').value;
    if (!fullName || !emailAddress || !projectDescription){
        showMessage ('Please fill in all field.', 'error');
        return;
    }
    console.log ('Form Submitted Successfully!')
    
    console.log ('Full Name:' , fullName);
    
    console.log ('Email Address:' , emailAddress);

    console.log ('Project Description:' , projectDescription);

    showMessage ('Application submitted successfully! Check the console for data.', 'success');
    
 }

