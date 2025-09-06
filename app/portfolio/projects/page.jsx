// 'use client';

// import { FaSearch } from 'react-icons/fa'
// import { PROJECTS } from '@/data/projects'
// import Project from '@/components/Project'
// import { useState } from 'react';
// import Image from 'next/image';

// function ProjectsPage() {
//     const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
//     const [projectDetails, setProjectDetails] = useState(null);

//     const filterProjects = (searchTerm) => {
//         return PROJECTS.filter(project =>
//             project.title.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//     };


//     return (
//         <div className='w-full flex-col  h-full bg-[#202020] flex items-center '>
//             {/* search form to filter projects */}
//             <div className="form py-4 relative">
//                 <FaSearch className='absolute left-[13px] top-[30px] text-gray-500' />
//                 <input type="search" onChange={(e) => setFilteredProjects(filterProjects(e.target.value))} placeholder='Type to search' className='rounded-4xl w-[400px] border-none outline-none bg-[#303030] px-[40px] py-2' />
//             </div>

//             {/* display projects */}
//             <div className='grid overflow-y-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 p-4'>
//                 {filteredProjects.map((project, index) => (
//                     <Project key={index} setProjectDetails={setProjectDetails} project={project} />
//                 ))}
//             </div>

//             <dialog id="project-details-modal" className="modal">
//                 <div className="modal-box">
//                     <h3 className="font-bold text-lg">{projectDetails?.title}</h3>
//                     <p className="py-4">{projectDetails?.description}</p>
//                     {/* tags */}
//                     <div className="flex justify-between items-center">
//                         <div className="flex flex-wrap gap-2">
//                             {projectDetails?.tags.map((tag, index) => (
//                                 <span key={index} className="badge badge-secondary">{tag}</span>
//                             ))}
//                         </div>
//                         <a href={projectDetails?.link} target="_blank" className="flex items-center justify-center p-2 rounded-full bg-gray-200">
//                             <Image src="/github.png" alt="GitHub" width={20} height={20} className="inline-block" />
//                         </a>
//                     </div>
//                 </div>
//                 <form method="dialog" className="modal-backdrop">
//                     <button>close</button>
//                 </form>
//             </dialog>

//         </div>
//     )
// }

// export default ProjectsPage




'use client';
import { useEffect, useState } from 'react';
import GithubProject from '@/components/GithubProject';
import GitHubSearch from '@/components/GitHubSearch';
import { FaLink } from 'react-icons/fa';
import useGithubProjectsStore from '@/store/GIthubProjectStore';
function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRepos, setFilteredRepos] = useState([]);
    
    const {getRandomStarredRepos , loading, randomRepos} = useGithubProjectsStore();

    useEffect(() => {
        getRandomStarredRepos(setFilteredRepos);
    }, []);

    // handle search filtering
    useEffect(() => {
        const filtered = randomRepos.filter(repo =>
            repo.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredRepos(filtered);
    }, [searchTerm, randomRepos]);

    // handle loading state
    if (loading) {
        return (
            <div className='w-full h-full flex items-center justify-center bg-[#202020] text-white'>
                <span className="loading loading-dots text-9xl loading-xl"></span>
            </div>
        );
    }


    return (
        <div className='w-full flex-col h-full bg-[#202020] flex items-center'>
            <GitHubSearch setSearchTerm={setSearchTerm} />
            <a href="https://github.com/ahmedfathiaboelanin" target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline m-2'>
                <FaLink className='inline-block mr-1' /> View All Repositories
            </a>
            <div className='grid overflow-y-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4 p-4'>
                {filteredRepos.map((repo, index) => (
                    <GithubProject key={index} repo={repo} />
                ))}
            </div>

        </div>
    );
}

export default ProjectsPage;
