"use client";
import AddTodo from "@/components/AddTodo";
import Todos from "@/components/Todo";
import { Provider } from "react-redux";
import { store } from "@/utils/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className=" p-24">
        <AddTodo />
        <Todos />
      </main>
    </Provider>
  );
}
