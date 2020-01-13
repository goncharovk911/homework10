function getStudentsList( arrayOfStudents ){
  let i=0
 while (i<Object.keys(arrayOfStudents).length) {
   let red = []
  for (prop in arrayOfStudents[i]) {

    let pare =  (prop +" : " + arrayOfStudents[i][prop]);
      red.push(pare)
   }
   console.log(red.join(' , '));
  i++
}
}

let group = [
        {
                name: "Denis",
                lastName: "Kushnarev",
                age: 20,
                notebook: false,
                course: 4
              },
              {
                      name: "Maria",
                      lastName: "Darenena",
                      age: 18,
                      notebook: true,
                      course: 2
                    },
                    {
                            name: "Pavel",
                            lastName: "Soloviev",
                            age: 20,
                            notebook: true,
                            course: 3
                          },
                          {
                                  name: "Sergey",
                                  lastName: "Batutin",
                                  age: 17,
                                  notebook: true,
                                  course: 1
                                }



]

getStudentsList(group);
