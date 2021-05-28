import Todos from "../entity/Todos";
import { getRepository } from "typeorm";

export default class TodoService {
  constructor() {}

  async getTodos(): Promise<Todo[]> {
    const todos = await Todos.find().then((todos) =>
      todos.map((todo) => {
        const t: Todo = {
          id: todo.id,
          text: todo.text,
          done: todo.done,
        };
        return t;
      })
    );

    return todos;
  }

  // async getTodos() {
  //     let counts = Todo.count();
  //     console.log(Todo.count().then(v => console.log(v)))
  //     // const todo = new Todo();
  //     // todo.text = 'text',
  //     // todo.done = false,
  //     // todo.save();
  //     return counts;
  // }

  /**
   * 특정 todo 조회
   * @param id : 키값
   */
  async getTodo(id: number): Promise<Todo> {
    // try-catch 해도 똑같음
    let todo: Todo;

    await Todos.findOne({ id: id })
      .then((data) => {
        if (data) todo = { id: data.id, text: data.text, done: data.done };
        else throw new Error("해당 idx에 대한 데이터가 없어서 생기는 에러");
      })
      .catch((e) => {
        throw e;
      });

    return todo;
  }

  insertTodo(todo: Todos): Promise<void> {
    // 데이터 유효성 검사하기
    return;
  }

  updateTodo(): Promise<void> {
    return;
  }

  deleteTodo(id: number): Promise<void> {
    return;
  }
}
