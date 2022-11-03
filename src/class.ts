type TodoItem = {
  name: string;
};

interface Service {
  getTodos(): TodoItem[];
}

class ConcreteService implements Service {
  public _todos: TodoItem[];

  constructor(initialTools: TodoItem[]) {
    this._todos = initialTools;
  }

  getTodos(): TodoItem[] {
    return this._todos;
  }
}

const params = [{ name: "a" }, { name: "b" }, { name: "c" }];

const service = new ConcreteService(params);

console.log(service.getTodos);
