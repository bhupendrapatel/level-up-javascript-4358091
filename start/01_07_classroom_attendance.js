// Write your code here
function getStudents(classroom) {
  const {hasTeachingAssistant, classList} = classroom;
  let teacher, teachingAssistant, students;

  if (hasTeachingAssistant) {
    [teacher, assistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

console.log(getStudents({
  hasTeachingAssistant: false,
  classList: ['Rashida', 'John', 'Roman', 'Lisa', 'Amar', 'Luke'],
}));
