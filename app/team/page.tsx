import { myTeam } from "@/constans"

export default function team(){
    return(
        <div className="w-[80%] mx-auto my-[200px]">
          {myTeam.map((team) =>(
                      <figure className="md:flex bg-slate-300 rounded-xl p-8 md:p-0 dark:bg-slate-800 mb-10">
                      <img className="w-40 h-40 md:w-60 md:h-auto md:rounded-none rounded-full mx-auto" src={team.image} alt="" width="384" height="512" />  
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                      <p className="text-lg font-medium">
                        {team.opinion}
                    </p>
                    </blockquote>
                    <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                      {team.name}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                    {team.career}
                    </div>
                    </figcaption>
                    </div>
                    </figure>
          ))}
        </div>
    )
}

