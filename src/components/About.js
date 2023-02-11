export function About({ theme }) {
    return (
        <div className={theme ? 'dark' : ''} id='about'>
            <div className="flex flex-col mt-16 justify-center h-screen mx-6 md:mx-0 text-lg leading-7 md:text-xl md:leading-8 ">
                <p className="text-text-dark dark:text-text-clear">Estudiante FullStack de Academlo y también
                    en la Universidad Nacional de Loja en la carreara de Ingenieria en sistemas, me gusta trabajar tanto en el
                    Frontend como en el Backend, así como también en proyectos relacionados a videojuegos, me considero
                    una persona que aprende muy rápido y sobre todo alguien que le gusta implementar mucha lógica al
                    momento de resolver un problema.</p>
                <p className="pt-3 text-text-dark dark:text-text-clear">He trabajado en diferentes aplicaciones de escritorio usando java y también en algunos
                    videojuegos indie usando Unity y C#, actualmente me he enfocado de lleno a lo que es el Desarrollo
                    Web, ya que me gusta probar nuevas cosas, nuevas funcionalidades del navegador y poner a prueba mis
                    habilidades para adaptarme a un nuevo enfoque de la programación.</p>
            </div>
        </div>
    )
}