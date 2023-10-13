import React from 'react';
// import data
import { menuData } from '../data';
import { navMenu } from '../data';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn, staggerContainer } from '../variants';

const Menu = () => {
  // destructure menu data
  const { title, subtitle, modelImg, menuItems, btnText } = menuData;

  return (
    <section id='menu' className='min-h-[780px]'>
      {/* background */}
      <div className='h-[780px] bg-menu absolute w-full max-w-[1800px] -z-0'></div>
      {/* text */}
      <div className='relative z-10 top-72 lg:top-52'>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className='container mx-auto flex flex-col items-center text-center'
        >
          <motion.h2
            variants={fadeIn('down', 'tween', 0.2, 1.6)}
            className='h2 capitalize text-white max-w-[400px] text-center'
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn('down', 'tween', 0.4, 1.6)}
            className='text-white/70 capitalize mb-8'
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn('down', 'tween', 0.6, 1.6)}>
            <img src={modelImg} alt='' />
          </motion.div>
          <motion.div
            variants={fadeIn('down', 'tween', 0.6, 1.6)}
            className="  mt-8 flex w-full  flex-col items-center content-center  ">
            <ul className='h-full mb-8  flex flex-col justify-between items-center gap-y-2 lg:flex-row w-full content-between'>
              {navMenu.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className='text-white uppercase font-primary  hover:text-accent transition-all duration-300'
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>

      </div>
      {/* menu gallery */}
      <motion.div
        initial={{
          opacity: 0,
          y: 150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'tween',
          delay: 0.2,
          duration: 1.6,
          ease: 'easeOut',
        }}
        className='relative top-80 lg:top-96'
      >
        <div className='container mx-auto'>
          <div className='lg:-mt-24 min-h-[800px] z-30 mb-8 md:mb-4 xl:mb-16'>
            {/* grid */}
            <div className='grid grid-cols-1 gap-4  lg:grid-cols-4 gap-x-8 gap-y-10  min-h-[800px]'>
              {menuItems.map((item, index) => {
                // destructure item
                const { image, name, price, description } = item;
                return (
                  <div key={index}>
                    {/* image+text */}
                    <div className=' h-[200px] flex flex-row lg:flex-col'>
                      {/* image */}

                      <div
                        className={`w-[40%] h-[100%]  md:w-auto md:h-[100%]   `}
                      >
                        <img src={image} alt='' className='h-[200px] w-[200px] lg:w-[400px]'/>
                      </div>

                      {/* text */}
                      <div className='bg-[#fff3e4] flex-1 flex flex-col justify-center px-6 lg:p-5 lg:max-h-[200px] xl:max-h-[150px] '>
                        {/*  name+price*/}
                        <div className=' flex flex-row justify-between items-center xl:items-center'>
                          <div className='my-1 text-base font-bold text-dark lg:mt-1 xl:text-l xl:font-bold xl:text-sm xl:min-h[100%]'>
                            {name}
                            </div>
                            <div className='my-1 text-[15px] lg:text-[15px] lg:mt-1 text-accent font-semibold xl:min-h[100%]'>
                            {price}
                          
                          </div>
                        </div>
                        <div >

                          
                          <div className='text-gray text-[13px] '>{description}</div>
                        </div>
                      </div>





                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button className='btn mx-auto capitalize'>{btnText}</button>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;
