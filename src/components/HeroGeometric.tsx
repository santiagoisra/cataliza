import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = 'from-white/[0.08]',
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1.2 } }}
      className={cn('absolute', className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-gradient-to-r to-transparent',
            gradient,
            'backdrop-blur-[2px] border-2 border-white/[0.15]',
            'shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]',
            'after:absolute after:inset-0 after:rounded-full',
            'after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]'
          )}
        />
      </motion.div>
    </motion.div>
  );
}

interface Action {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

interface Stat {
  number: string;
  label: string;
}

interface HeroGeometricProps {
  badge: string;
  title1: string;
  title2: string;
  description: string[];
  actions: Action[];
  stats: Stat[];
}

const buttonVariants = {
  primary: 'w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cataliza-primary to-cataliza-secondary text-white font-semibold rounded-lg shadow-lg hover:shadow-cataliza-primary/20 transition',
  secondary: 'w-full sm:w-auto px-6 py-3 bg-white/10 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/20 transition',
};

// Hook para detectar si el viewport es sm o mayor (>= 640px)
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 640px)');
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isDesktop;
}

const HeroGeometric = ({ badge, title1, title2, description, actions, stats }: HeroGeometricProps) => {
  const router = useRouter();
  const isDesktop = useIsDesktop();
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cataliza-bg py-8 sm:py-0 pt-40">
      <div className="absolute inset-0 bg-gradient-to-br from-cataliza-primary/20 via-cataliza-bg to-cataliza-bg blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape delay={0.3} width={isDesktop ? 700 : 320} height={isDesktop ? 200 : 80} rotate={12} gradient="from-indigo-500/[0.15]" className="left-[-20%] sm:left-[-10%] top-[10%] sm:top-[15%]" />
        <ElegantShape delay={0.5} width={isDesktop ? 500 : 220} height={isDesktop ? 140 : 60} rotate={-15} gradient="from-rose-500/[0.15]" className="right-[-10%] sm:right-[-5%] top-[70%] sm:top-[75%]" />
        <ElegantShape delay={0.4} width={isDesktop ? 350 : 140} height={isDesktop ? 100 : 40} rotate={-8} gradient="from-violet-500/[0.15]" className="left-[2%] sm:left-[10%] bottom-[2%] sm:bottom-[10%]" />
        <ElegantShape delay={0.6} width={isDesktop ? 220 : 100} height={isDesktop ? 70 : 30} rotate={20} gradient="from-amber-500/[0.15]" className="right-[10%] sm:right-[20%] top-[5%] sm:top-[15%]" />
        <ElegantShape delay={0.7} width={isDesktop ? 180 : 80} height={isDesktop ? 50 : 20} rotate={-25} gradient="from-cyan-500/[0.15]" className="left-[10%] sm:left-[25%] top-[2%] sm:top-[10%]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mx-auto max-w-5xl">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 sm:mb-10"
          >
            <svg className="h-2 w-2 fill-cataliza-primary" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" /></svg>
            <span className="text-xs sm:text-sm text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-8 tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">{title1}</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cataliza-primary via-white/90 to-cataliza-secondary ">{title2}</span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-200 mb-3 sm:mb-4 leading-relaxed font-light tracking-wide max-w-5xl mx-auto px-2 sm:px-4">
              {description.join(' ')}
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 w-full">
            {actions.map((action, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={buttonVariants[action.variant || 'primary']}
                onClick={() => router.push(action.href)}
              >
                {action.text}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-20 grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cataliza-primary/20 to-cataliza-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative bg-gray-900/50 backdrop-blur-sm border border-cataliza-primary/20 rounded-2xl p-4 sm:p-6 transition-all duration-300 group-hover:border-cataliza-primary/40"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 + index * 0.1 }}
                  className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-cataliza-primary to-cataliza-secondary bg-clip-text text-transparent mb-1 sm:mb-2"
                >
                  {stat.number}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-xs sm:text-sm text-gray-400"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-b from-transparent to-[#181d23] pointer-events-none transition-colors duration-700" />
    </div>
  );
};

export default HeroGeometric; 