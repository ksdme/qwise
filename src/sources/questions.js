import { array } from '../dollar';


export const QuestionSource = {

  _plain: {
    1: {
      a: "A",
      tags: ["Math", "Medium"],
      q: "http://localhost:5000/Selection_027.bmp",
    },

    2: {
      a: "A",
      tags: ["Math", "Medium"],
      q: "http://localhost:5000/Selection_027.bmp",
    },

    3: {
      a: "A",
      tags: ["Math", "Medium"],
      q: "http://localhost:5000/Selection_027.bmp",
    },
  },

  getStrictTagged(...tags) {
    let filtered_questions = this._plain;

    tags.forEach((tag) => {
      filtered_questions = filtered_questions.filter((q) => {
        return array.inn(q.tags, tag);
      });
    });
  
    return filtered_questions;
  }

};
