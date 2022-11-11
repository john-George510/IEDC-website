import React from 'react'
import Background from '../components/layout/partials/Background'
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';

const Ignites = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
}) => {

    const outerClasses = classNames(
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'hero-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    return (
        <>
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container-sm">
                    <div className={innerClasses}>
                        {/* <div className="hero-content"> */}
                            <div className='flex justify-center items-center'>
                                <h1 className="mt-0 mb-16 reveal-from-bottom z-10 para text-6xl text-slate-200" data-reveal-delay="200">ignit<span className='text-color-primary'>ES '22</span></h1>
                                <Background />
                            </div>
                        {/* </div> */}
                        <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
                            <h2 className="mt-0 mb-16 reveal-from-bottom z-10 para text-4xl text-slate-400" data-reveal-delay="600">Coming soon</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ignites