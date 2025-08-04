import { BriefcaseBusiness } from 'lucide-react';

const ExperienceCard = ({ experience }: any) => {
    console.log(experience)
    return (
        <>
            <section className='bg-bg-light space-y-2  text-start px-6 py-6 rounded-md mb-12 mt-6   text-text/80'>
                <main className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-4'>
                        <BriefcaseBusiness />
                        <h1 className='text-2xl font-semibold '>{experience.orgName}</h1>



                    </div>

                    <div className='opacity-90   '>
                        <p>{experience.duration}</p>
                    </div>

                </main>
                <div className='flex gap-4  opacity-90 px-10 '>
                    <p>{experience.jobRole}</p> |
                    <p>{experience.jobType}</p>

                </div>

            </section>
        </>
    )
}

export default ExperienceCard