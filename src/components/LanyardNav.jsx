import { useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useTransform, useSpring, animate } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

/**
 * LanyardNav — A swinging lanyard badge that navigates home on pull-down.
 *
 * Props:
 *   photoSrc  — path to the badge photo (default: /assets/IDENTITAS_SEMESTER2.png)
 *   name      — name text on the badge
 *   label     — secondary label (e.g. "SEMESTER 2")
 *   homePath  — where to navigate (default: "/")
 */
export default function LanyardNav({
  photoSrc = '/assets/IDENTITAS_SEMESTER2.png',
  name = 'Nathaviela T.K.',
  label = 'SEMESTER 2',
  homePath = '/',
}) {
  const navigate = useNavigate()
  const [hasNavigated, setHasNavigated] = useState(false)

  // Drag Y and X values — control the position during dragging
  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)

  // Calculate the strap height and rotation dynamically using trigonometry
  // Anchor starts at (center, 16px), badge connector starts at (center, 86px)
  // Distance dx = dragX, dy = 70 + dragY
  const strapHeight = useTransform(
    [dragX, dragY],
    ([x, y]) => {
      const dx = x
      const dy = 70 + y
      return Math.sqrt(dx * dx + dy * dy)
    }
  )

  const strapRotate = useTransform(
    [dragX, dragY],
    ([x, y]) => {
      const dx = x
      const dy = 70 + y
      const angleRad = Math.atan2(dx, dy)
      const angleDeg = -(angleRad * 180) / Math.PI
      return angleDeg
    }
  )

  const handleDragEnd = useCallback(() => {
    const currentY = dragY.get()
    if (currentY > 120 && !hasNavigated) {
      setHasNavigated(true)
      // Animate badge flying down before navigating
      animate(dragY, 600, {
        duration: 0.4,
        ease: 'easeIn',
        onComplete: () => navigate(homePath),
      })
    }
  }, [hasNavigated, navigate, homePath, dragY])

  return (
    <>
      {/* Lanyard Assembly — fixed to top-left */}
      <div className="fixed top-0 left-6 sm:left-10 z-[9998] w-[120px] flex flex-col items-center pointer-events-none">

        {/* Strap anchor point (the clip) */}
        <div className="w-6 h-4 bg-slate-400 border-2 border-black rounded-b-sm z-30 pointer-events-none shadow-[1px_1px_0_#000]" />

        {/* Strap (stretchy ribbon) */}
        <motion.div
          className="absolute pointer-events-none z-10 left-[calc(50%-10px)]"
          style={{
            top: '16px', // starts right below the clip anchor
            width: '20px',
            height: strapHeight,
            rotate: strapRotate,
            transformOrigin: 'top center',
            background: 'repeating-linear-gradient(180deg, #1e293b 0px, #1e293b 4px, #334155 4px, #334155 8px)',
            borderLeft: '2px solid #000',
            borderRight: '2px solid #000',
          }}
        />

        {/* Spacer to hold the 70px gap for the strap in the document flow */}
        <div className="h-[70px] w-full pointer-events-none" />

        {/* Draggable Badge */}
        <motion.div
          className="pointer-events-auto cursor-grab active:cursor-grabbing select-none z-20"
          drag
          dragConstraints={{ top: 0, left: -120, right: 120, bottom: 450 }}
          dragElastic={0.15}
          dragSnapToOrigin
          onDragEnd={handleDragEnd}
          style={{
            x: dragX,
            y: dragY,
            rotateZ: strapRotate,
            transformOrigin: 'top center',
          }}
          whileTap={{ scale: 1.05 }}
        >
          {/* Badge Card — neo-brutalist */}
          <div className="relative flex flex-col items-center">

            {/* Metal clip connector */}
            <div className="w-8 h-5 bg-slate-300 border-2 border-black rounded-b-sm -mb-1 z-10 relative">
              <div className="absolute inset-x-1 top-1 bottom-1 bg-slate-400/50 rounded-sm" />
            </div>

            {/* Hole punch on badge */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-200 border-2 border-black z-20" />

            {/* Badge body */}
            <div
              className="w-[80px] sm:w-[90px] flex flex-col items-center pt-5 pb-2 px-2 bg-white border-2 border-black shadow-[3px_3px_0px_#000000]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
              }}
            >
              {/* Photo */}
              <div className="w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] border-2 border-black overflow-hidden bg-slate-100">
                <img
                  src={photoSrc}
                  alt={name}
                  className="w-full h-full object-cover object-top"
                  draggable={false}
                />
              </div>

              {/* Label strip */}
              <div className="mt-2 w-full bg-[#C73053] py-0.5 text-center">
                <span className="text-white text-[0.4rem] sm:text-[0.45rem] font-black uppercase tracking-[0.15em]">
                  {label}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
