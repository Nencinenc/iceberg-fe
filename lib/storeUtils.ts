import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

export const createStore = <TState>(name: string, config: StateCreator<TState, [["zustand/devtools", never]]>) => {
  return create<TState, [["zustand/devtools", never]]>(devtools(config, { name }));
};
