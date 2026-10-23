class Course {
  constructor(id, title, description, nbChapters, done = false) {
    this.id = id;
    this.title = title;
    this.nbChapters = nbChapters;
    this.done = done;
  }
}

exports.Course = Course;