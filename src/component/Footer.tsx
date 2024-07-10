import linkedin from '../../public/bxl-linkedin-square.svg'
import github from '../../public/bxl-github.svg'

const Footer = () => {
    return (
        <div className='mt-10 flex items-center flex-col flex-wrap mb-10 font-serif'>
            <section className="flex items-center my-10">
                <a className='hover:bg-slate-100 mx-5 dark:bg-violet-300' href="https://www.linkedin.com/in/freud-ovando-lara-337672248/"><img className='w-[50px] h-[50px] ' src={linkedin} alt="linkedin" /></a>
                <a className='hover:bg-slate-100 mx-5 dark:bg-violet-300'  href="https://github.com/FreudOvando"><img className='w-[50px] h-[50px]'  src={github} alt="github" /></a>
            </section>
            <section className='text-xl text-justify flex items-center flex-col '>
<p className=''>Memory play</p>
<p>made by Freud Ovando Lara</p>
<p>All rights reserved</p>
</section>
        </div>
    )
}
export default Footer