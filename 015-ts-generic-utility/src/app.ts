// Partial Type

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal1(title: string, description: string, date: Date): CourseGoal {
  return {title: title, description: description, completeUntil: date}
}

