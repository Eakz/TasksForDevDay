import create from 'zustand';

const useStore = create((set) => ({
  animation: false,
  setAnimation: (animationVallue) =>
    set(() => ({ animation: !!animationVallue })),
}));

export default useStore;
