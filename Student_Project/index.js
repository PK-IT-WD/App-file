function submitDetails(event) {

    event.preventDefault();

    const studentDetails = {
        name: event.target.name.value,
        mobileNumber: event.target.mobileNumber.value,
        address: event.target.address.value
    };

    if (event.target.dataset.editID) {
        
        axios
            .put(`https://crudcrud.com/api/e02ce466457148b580d90756fe0abcb6/studentDetails/${event.target.dataset.editID}`, studentDetails)
            .then(() => {
                document.querySelector('ul').innerHTML = '';
                loadStudents();
            })
            .catch((error) => {
                console.log(error);
            });

    } else {
        
        axios
            .post('https://crudcrud.com/api/e02ce466457148b580d90756fe0abcb6/studentDetails', studentDetails)
            .then((response) => {
                displayDetails(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    event.target.reset();
    delete event.target.dataset.editID;

}

function displayDetails(studentDetails) {

    const unorderedList = document.querySelector('ul');

    const studentList = document.createElement('li');
    studentList.textContent = `${studentDetails.name} -- ${studentDetails.mobileNumber} -- ${studentDetails.address}`;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';

    editButton.addEventListener('click', () => {
        document.querySelector('#name').value = studentDetails.name;
        document.querySelector('#mobileNumber').value = studentDetails.mobileNumber;
        document.querySelector('#address').value = studentDetails.address;
        document.querySelector('form').dataset.editID = studentDetails._id;
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', () => {
        axios
            .delete(`https://crudcrud.com/api/e02ce466457148b580d90756fe0abcb6/studentDetails/${studentDetails._id}`)
            .then(() => {
                studentList.remove();
            })
            .catch((error) => {
                console.log(error);
            });
    });

    studentList.appendChild(editButton);
    studentList.appendChild(deleteButton);

    unorderedList.appendChild(studentList);
}

function loadStudents() {
    axios
        .get('https://crudcrud.com/api/e02ce466457148b580d90756fe0abcb6/studentDetails')
        .then((response) => {
            response.data.forEach(student => {
                displayDetails(student);
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

window.addEventListener('DOMContentLoaded', loadStudents);
