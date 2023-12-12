import { DayState } from "@/components/DayState";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const habits = {
    "beber água": {
      "2023-11-23": true,
      "2023-11-24": false,
      "2023-11-25": true,
    },

    "estudar programação": {
      "2023-11-23": true,
      "2023-11-24": false,
      "2023-11-25": true,
    },
  };
  const today = new Date();
  const todayWeekDay = today.getDay();
  const weeksDays = ["Dom", "Seg", "Ter", "Quar", "Quin", "Sex", "Sáb"];
  const sortedWeekDays = weeksDays
    .slice(todayWeekDay + 1)
    .concat(weeksDays.slice(0, todayWeekDay + 1));

  return (
    <div className="container relative flex flex-col gap-8 px-4 pt-6">
      {habits === null ||
        (Object.keys(habits).length === 0 && (
          <h1 className="mt-20 text-4xl font-light text-white font-display text-center">
            Você ainda não tem hábitos registrados
          </h1>
        ))}

      {habits !== null &&
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xl font-light text-white font-sans">
                {habit}
              </span>
              <button>
                <Image
                  src="delete.svg"
                  alt="icone de deletar"
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <section className="grid grid-cols-7 bg-neutral-700 rounded-md p-2">
              {sortedWeekDays.map((day) => (
                <div key={day} className="flex flex-col last:font-bold">
                  <span className="font-sans text-xs text-white text-center">
                    {day}
                  </span>
                  <DayState day={true} />
                </div>
              ))}
            </section>
          </div>
        ))}
      <Link
        href="novo-habito"
        className="text-center fixed bottom-10 w-2/3 left-1/2 -translate-x-1/2 text-neutral-900 bg-[#45EDAD] font-display font-regular text-2xl p-2 rounded-md"
      >
        Novo Hábito
      </Link>
    </div>
  );
}