// Partial Type

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal1(title: string, description: string, date: Date): CourseGoal {
  return {title: title, description: description, completeUntil: date}
}

// use Partial if props are going to receive extra validation
function createCourseGoal2(
  title: string, 
  description: string, 
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal; // type cast
}


// Readonly type
const names: Readonly<string[]> = ["Nick", "Dingo"];
names.push("Bingo");
names.pop();