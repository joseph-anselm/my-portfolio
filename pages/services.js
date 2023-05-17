import React from 'react'
import HeroSection from '@/components/herosection'
import ServicesSection from '@/components/serviceSection'

function services() {
  return (
    <div>
        <div>
            <HeroSection title="Expertise, Excitement and Excellence" image="/images/jojoserve.png"/>
        </div>
        <div>
            <ServicesSection/>
        </div>
    </div>
  )
}

export default services