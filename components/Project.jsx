'use client';
import Image from "next/image"

function Project({ project , setProjectDetails }) {
    const handleOpen = () => {
        setProjectDetails(project);
        document.getElementById('project-details-modal').showModal()
    };
    return (
        <button onClick={handleOpen} className='bg-gray-800 text-center rounded-lg p-4 hover:shadow-lg transition-shadow border border-gray-700 duration-300'>
            <Image src={project.image} alt={project.title} width={500} height={100} className='w-full h-40 object-cover rounded-lg' />
            <h3 className='text-md mt-2'>{project.title}</h3>
        </button>
    )
}

export default Project