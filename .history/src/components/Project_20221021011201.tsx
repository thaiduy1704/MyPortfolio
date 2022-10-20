import {useState} from 'react'
import {motion,AnimatePresence,AnimateSharedLayout } from 'framer-motion'
import { data } from "../data/data";


const Project = () => {

    // projects file
    const project = data;
    //setProject(data);
    const [selectedId, setSelectedId] = useState(null)
  
  return (
    <div  className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

{/* container for projects */}
    {project.map(item => (
  <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
    <motion.h5>{item.name}</motion.h5>
    <motion.h2>{item.github}</motion.h2>
  </motion.div>
))}

<AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>thaiduy</motion.h5>
      <motion.h2>thaiduy</motion.h2>
      <motion.button onClick={() => setSelectedId("")} />
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </div>
  );
};

export default Project;