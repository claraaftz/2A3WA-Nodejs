let courses = [
  {
    id: 1,
    title: "Introduction to NodeJS",
    nbChapters: 10
  },
  {
    id: 2,
    title: "Express Basics",
    nbChapters: 5
  },
  {
    id: 3,
    title: "Advanced JavaScript",
    nbChapters: 10
  }
];


//recup cours trier consigne moodle 
exports.getAllCourses = (req, res) => {
  const sortedCourses = [courses].sort((a, b) => {
    if (b.nbChapters !== a.nbChapters) {
      return b.nbChapters - a.nbChapters; 
    }
    return a.title.localeCompare(b.title); 
  });

  res.json(sortedCourses);
};


//recup cours id
exports.getCourseById = (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(c => c.id === id);

  if (!course) {
    return res.status(404).json({ message: "Cours non trouvé" });
  }

  res.json(course);
};

//add cours
exports.createCourse = (req, res) => {
  const newCourse = {
    id: courses.length + 1,
    title: req.body.title,
    nbChapters: req.body.nbChapters
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
};