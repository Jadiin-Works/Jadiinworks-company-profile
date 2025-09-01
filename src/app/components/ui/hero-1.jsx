'use client'

import { useState } from 'react'

const defaultProps = {
  titleSize: "large",
  gradientColors: {
    from: "oklch(0.646 0.222 41.116)",
    to: "oklch(0.488 0.243 264.376)"
  },
  callToActions: [
    { text: "View Portfolio", href: "/portfolio", variant: "primary" },
    { text: "Get In Touch", href: "/#contact", variant: "secondary" }
  ]
}

export function HeroLanding(props) {
  const {
    title,
    description,
    announcementBanner,
    callToActions,
    titleSize,
    gradientColors,
    className
  } = { ...defaultProps, ...props }



  const getTitleSizeClasses = () => {
    switch (titleSize) {
      case 'small':
        return 'text-2xl sm:text-3xl md:text-5xl'
      case 'medium':
        return 'text-2xl sm:text-4xl md:text-6xl'
      case 'large':
      default:
        return 'text-3xl sm:text-5xl md:text-7xl'
    }
  }

  const renderCallToAction = (cta, index) => {
    if (cta.variant === 'primary') {
      return (
        <a
          key={index}
          href={cta.href}
          className="rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
        >
          {cta.text}
        </a>
      )
    } else {
      return (
        <a
          key={index}
          href={cta.href}
          className="text-sm font-semibold text-gray-300 hover:text-white transition-colors border-2 border-purple-500 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
        >
          {cta.text} <span aria-hidden="true">→</span>
        </a>
      )
    }
  }

  return (
    <div className={`min-h-screen w-screen overflow-x-hidden relative ${className || ''}`}>
             {/* Enhanced gradient background with higher opacity */}
       <div className="absolute inset-0 -z-20 pointer-events-none">
         {/* Main gradient overlay - more visible */}
         <div 
           className="absolute inset-0 opacity-50"
           style={{
             background: `linear-gradient(135deg, ${gradientColors?.from || '#8B5CF6'}, ${gradientColors?.to || '#EC4899'})`
           }}
         />
         
         {/* Top right gradient blob - larger and more visible */}
         <div 
           className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-60"
           style={{
             background: `radial-gradient(circle, ${gradientColors?.from || '#8B5CF6'}, transparent)`
           }}
         />
         
         {/* Bottom left gradient blob - larger and more visible */}
         <div 
           className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-60"
           style={{
             background: `radial-gradient(circle, ${gradientColors?.to || '#EC4899'}, transparent)`
           }}
         />
         
         {/* Center gradient orb for more depth */}
         <div 
           className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full blur-2xl opacity-40"
           style={{
             background: `radial-gradient(circle, ${gradientColors?.from || '#8B5CF6'}, ${gradientColors?.to || '#EC4899'}, transparent)`
           }}
         />
       </div>

      {/* Navigation menu dihilangkan karena sudah menggunakan komponen navbar sendiri */}

      <div className="relative isolate px-6 overflow-hidden min-h-screen flex flex-col justify-center">        
        <div className="mx-auto max-w-4xl p-0">
          {/* Announcement banner */}
          {announcementBanner && (
            <div className="hidden sm:mb-2 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm text-gray-300 ring-1 ring-gray-600 hover:ring-purple-500 transition-all">
                {announcementBanner.text}{' '}
                <a href={announcementBanner.linkHref} className="font-semibold text-purple-400 hover:text-purple-300 transition-colors">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {announcementBanner.linkText} <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          )}
          
          <div className="text-center">
            <h1 className={`${getTitleSizeClasses()} font-bold tracking-tight text-balance text-white`}>
              {title}
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg font-medium text-pretty text-gray-300 sm:text-xl">
              {description}
            </p>
            
            {/* Call to action buttons */}
            {callToActions && callToActions.length > 0 && (
              <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6">
                {callToActions.map((cta, index) => renderCallToAction(cta, index))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
