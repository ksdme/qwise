import { array } from '../dollar';


export const QuestionSource = {

  _plain: {
    1: {
      a: "D",
      tags: ["Math", "Medium", "Polymorphism"],
      q: "http://localhost:5000/Selection_216.bmp",
    },

    2: {
      a: "A",
      tags: ["Math", "Medium", "Integration"],
      q: "http://localhost:5000/Selection_078.bmp",
    },

    3: {
      a: "B",
      tags: ["Math", "Medium", "Algebra"],
      q: "http://localhost:5000/Selection_007.bmp",
    },
  },

  getStrictTagged(...tags) {
    let filtered_questions = Object.values(this._plain);

    tags.forEach((tag) => {
      filtered_questions = filtered_questions.filter((q) => {
        return array.inn(q.tags, tag);
      });
    });
  
    return filtered_questions;
  },

  getAvailableTags() {
    const tagSet = new Set();

    Object.keys(this._plain).forEach((key) => {
      this._plain[key].tags.forEach((tag) => {
        tagSet.add(tag);
      });
    });

    return Array.from(tagSet);
  }

};
