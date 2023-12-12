import React from "react";

function NewHabits() {
  async function newHabit(formData: FormData) {
    "use server";
    const habits = formData.get("habits");
    console.log(habits);
  }
  return (
    <div className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-4xl font-light text-white font-display text-center">
        Novo Hábito
      </h1>
      <form action={newHabit} className="flex flex-col gap-4 mt-4 ">
        <input
          type="text"
          name="habits"
          id="habits"
          className="p-2 font-sans text-xl text-white rounded-md bg-neutral-800"
          placeholder="Nome do Hábito"
        />
        <button
          type="submit"
          className="bg-[#45EDAD] font-display text-neutral-900 font-regular text-2xl p-2 rounded-md mt-8"
        >
          Cadastrar
        </button>
        <button className="bg-neutral-800 text-red-500 font-display font-regular text-2xl p-2 rounded-md">
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default NewHabits;