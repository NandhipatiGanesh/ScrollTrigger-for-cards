import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";


const webDesign = "https://assets-global.website-files.com/63f8ca18cae25871c18fd72d/64062922a09751a1098ce054_web-design-agency.png";
const webDevelopment = "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/6414a7979cc623601c053b0c_web-development-agency.png";
const UiUX = "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/6414ba53ec407864f180cfe0_ui-ux-design-agency.png";
const brandDesign = "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/64062930acab8e66b2e103de_brand-design-agency.png";
const ConversionOptimization = "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/6414a9110b22bf8cbfe6a1dc_conversion-optimization-agency.png";
const Automation = "https://cdn.prod.website-files.com/63f8ca18cae25871c18fd72d/6526d381da3521c0550eed6f_automation-agency.png";

const AutomationContent = "We help your business gain leverage and efficiency through automation using simple, yet powerful NoCode tools.";
const conversion = "We help you A/B test your website core landing pages to boost your conversion rates and get more leads.";
const brandDesignContent = "We transform businesses into world-class brands by going through a well thought brand identity design process.";
const uiuxContent = "We design intuitive web & mobile apps focused on driving user engagement and increasing user retention.";



function Cardsitem1() {
    return (
        <div className="card-1 one cards">
            <div className="left-container">
                <h3>Web Design</h3>
                <p>We design websites that look amazing, convey the right brand message, and are highly oriented for conversion.</p>
                <a href="#">Learn more</a>
            </div>
            <div className="right image-container contone">
                <img src={webDesign} alt="Web Design" />
            </div>
        </div>
    );
}
function Cardsitem2() {
    return (
        <div className="card-1  two cards">
            <div className="left-container">
                <h3>Web Development</h3>
                <p>We develop fast, perfectly responsive, and SEO-optimized websites built with the best development practices of 2023.

</p>
                <a href="#">Learn more</a>
            </div>
            <div className="right image-container conttwo">
                <img src={webDevelopment} alt="Web Design" />
            </div>
        </div>
    );
}
function Cardsitem3() {
    return (
        <div className="card-1  three cards">
            <div className="left-container">
                <h3>UI/UX Design
                </h3>
                <p>{uiuxContent}

</p>
                <a href="#">Learn more</a>
            </div>
            <div className="right image-container contthree">
                <img src={UiUX} alt="Web Design" />
            </div>
        </div>
    );
}
function Cardsitem4() {
    return (
        <div className="card-1  four cards">
            <div className="left-container">
                <h3>Brand Design
                </h3>
                <p>{brandDesignContent}

</p>
                <a href="#">Learn more</a>
            </div>
            <div className="right image-container contfour">
                <img src={brandDesign} alt="Web Design" />
            </div>
        </div>
    );
}
function Cardsitem5() {
    return (
        <div className="card-1 five cards">
            <div className="left-container">
                <h3>Conversion Optimization</h3>
                <p>{conversion}</p>
                <a href="#">Learn more</a>
            </div>
            <div className="right image-container contfive">
                <img src={ConversionOptimization} alt="Web Design" />
            </div>
        </div>
    );
}
function Cardsitem6() {
    return (
        <div className="card-1 six cards" >
            <div className="left-container">
                <h3>Automation</h3>
                <p>{AutomationContent}</p>
                <a href="#">Learn more</a>
            </div>
            <div className="right image-container contsix">
                <img src={Automation} alt="Web Design" />
            </div>
        </div>
    );
}

const H3style = {
    color : "white"
}

function HeadingContent() {
    return(
        <div className="heading-content">
        <div className="left-content">
        <span style={H3style}>
            our services
        </span>
        <h3  style={H3style}> High-impact design &<br /> development services

</h3>
        </div>
        <div className="right-content">
        <a href="#" 
        className="button-primary white w-button">Get in touch <span className="line-rounded-icons button-icon">→</span></a>

        </div>
    </div>
    )
}

function Horizontalscroll() {
    const containerRef = useRef();  // Reference to the container

    useGSAP(() => {
        // Ensure GSAP plugins are registered
        gsap.registerPlugin(ScrollTrigger);

        // Target elements with the class "cards"
        const cards = gsap.utils.toArray(".cards");

        // Create the horizontal scrolling animation
        gsap.to(cards, {
            xPercent: -100 * (cards.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,  // Use the ref as the trigger
                pin: true,
                anticipatePin: true,
                stagger:{amount:-1},
                scrub: true,
                // snap: 1 / (cards.length - 1),
                end: () => "+=" + containerRef.current.offsetWidth,  // Proper use of template literals
            },
        });
    }, []);  // Dependencies array if any dependencies needed, otherwise empty for setup only

    return (
        <section ref={containerRef} className="scroll-container">
            <div>
                <HeadingContent />
            </div>
            <div className="cards-container">
                <Cardsitem1 />
                <Cardsitem2 />
                <Cardsitem3 />
                <Cardsitem4 />
                <Cardsitem5 />
                <Cardsitem6 />
               
            </div>
        </section>
    );
}

export default Horizontalscroll;