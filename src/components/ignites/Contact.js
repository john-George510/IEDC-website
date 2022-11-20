import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import { HashScroll } from "react-hash-scroll";
import './styles.css';

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool
}

const defaultProps = {
    ...SectionProps.defaults,
    split: false
}

// const Cta = ({
//   className,
//   topOuterDivider,
//   bottomOuterDivider,
//   topDivider,
//   bottomDivider,
//   hasBgColor,
//   invertColor,
//   split,
//   ...props
// }) => {

//   const outerClasses = classNames(
//     'cta section center-content-mobile reveal-from-bottom',
//     topOuterDivider && 'has-top-divider',
//     bottomOuterDivider && 'has-bottom-divider',
//     hasBgColor && 'has-bg-color',
//     invertColor && 'invert-color',
//     className
//   );



//   return (
//     <HashScroll hash="#Contact" position="start">
//       <section
//         {...props}
//         className={outerClasses}
//       >
//         <div className="container" style={{ justifyContent: 'center' }}>
//           <div
//             className={innerClasses}
//           >
//             {/* <div className="cta-slogan">
//             <h3 className="m-0">
//               Get started today!
//             </h3>
//           </div>
//           <div className="cta-action">
//             <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your best email">
//               <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
//               </svg>
//             </Input>
//           </div> */}

//           </div>
//         </div>
//       </section>
//     </HashScroll>
//   );
// }

// Cta.propTypes = propTypes;
// Cta.defaultProps = defaultProps;

// export default Cta;



const Contact = (className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    split,
    ...props) => {

    const innerClasses = classNames(
        'section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider',
        split && 'cta-split',
        'contact-form'
    );
    const style = {
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
        borderRadius: '10px',
    }

    return (
        <HashScroll hash="#Contact" position="start">
            <section className='relative z-10'>
                <div className="container" style={{ justifyContent: 'center' }}>
                    <div className={`${innerClasses} pr-7 pl-7 bg-transparent border bg-slate- rounded-lg`} style={style}>
                        <div className='contact-box flex flex-row justify-around'>
                            <div className='contact mr-7 flex flex-col'>
                                <p className='contact-name text-base font-semibold text-white mb-1'>
                                    Contact : Adarsh K (CEO)
                                </p>
                                <p className='text-base text-white mb-1'>
                                    Email : ceoiedc@cet.ac.in
                                </p>
                            </div>
                            <div className='flex flex-col md:ml-0'>
                                <p className='text-base font-semibold text-white mb-1'>
                                    Contact : Akhil Hayash M (CMO)
                                </p>
                                <p className='text-base text-white mb-1'>
                                    Email : cmoiedc@cet.ac.in
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HashScroll>
    )
}

export default Contact