import { NavLink } from "react-router-dom"
import { GET } from "../utils"

export default function About() {

    const projTotal = GET("projects", true)
    const certTotal = GET("certifications", true)
    const education = GET("education")
    const experience = GET("experience")

    return (
        <section id="about" className="active">
            <div className="page">
                <div className="about-layout">

                {/* SIDEBAR */}
                <aside className="sidebar">
                    <div className="avatar-ring"></div>
                    <div className="sidebar-name">Jeremiah Bogard</div>
                    <div className="sidebar-role">Field Technician</div>
                    <p className="sidebar-bio">Aspiring network engineer focused on enterprise infrastructure, security, and automation. Building hands-on experience through homelabs and real-world projects.</p>

                    <div className="sidebar-section">
                        <div className="sidebar-label">Details</div>
                        <div className="meta-row"><span className="meta-icon">📍</span>Missouri, United States</div>
                        <div className="meta-row"><span className="meta-icon">🎓</span>B.S. Information Technology</div>
                        <div className="meta-row"><span className="meta-icon">📚</span>Studying for CCNA</div>
                    </div>

                    <div className="sidebar-section">
                        <div className="sidebar-label">Links</div>
                        <div className="meta-row">
                            <span className="meta-icon">↗</span><a className="meta-link" href="https://linkedin.com/in/jeremiah-bogard" target="_blank">linkedin.com/in/jeremiah-bogard</a>
                        </div>
                        <div className="meta-row">
                            <span className="meta-icon">↗</span><a className="meta-link" href="https://github.com/Jeremiah-Bogard" target="_blank">github.com/Jeremiah-Bogard</a>
                        </div>
                        <div className="meta-row">
                            <span className="meta-icon">✉</span><a className="meta-link" target="_blank" href="mailto:jbtechtv.mail@gmail.com">jbtechtv.mail@gmail.com</a>
                        </div>
                    </div>

                    <div className="sidebar-btns">
                        <NavLink className="btn btn-primary" to="/projects">View Projects</NavLink>
                        <a className="btn btn-outline" target="_blank" href="mailto:jbtechtv.mail@gmail.com">Get in Touch</a>
                    </div>
                </aside>

                {/* MAIN */}
                <div className="about-main">
                    <div className="about-main-title">About</div>
                    <p className="about-bio-large">
                    I am Jeremiah Bogard an aspiring <strong>Network Engineer</strong>. I am currently pursuing a B.S. in Information Technology at Western Governors University and hold certifications in CompTIA A+, ITIL v4 Foundation, and CourseCareers IT Professional.<br/>
                    With hands-on experience as a Field Technician at Comcast, I have developed practical expertise in network infrastructure, fiber optics, coaxial systems, and customer-focused troubleshooting. My technical interests span Active Directory, Azure Virtual Machines, Wireshark, firewalls, ACLs, and network security.<br/>
                    Driven by a passion for building <strong>efficient and secure networks</strong>, I am eager to bring my growing skill set to a dynamic team and pursue a long-term career in Network Engineering.<br/>
                    </p>

                    <div className="stats-row">
                    <div className="stat-cell">
                        <div className="stat-num">2<span>+</span></div>
                        <div className="stat-desc">Years hands-on Telecommunications experience</div>
                    </div>
                    <div className="stat-cell">
                        <div className="stat-num">{projTotal}<span>+</span></div>
                        <div className="stat-desc">Lab &amp; personal projects</div>
                    </div>
                    <div className="stat-cell">
                        <div className="stat-num">{certTotal}<span></span></div>
                        <div className="stat-desc">Certifications earned &amp; in progress</div>
                    </div>
                    </div>

                    <div className="bg-grid">
                    <div>
                        <div className="bg-col-title">Education</div>
                        <div className="timeline" id="education-timeline">
                            {education && education.map(obj => (
                                <div key={obj.id} className="tl-item">
                                    <div className="tl-date">{obj.date}</div>
                                    <div className="tl-title">{obj.title}</div>
                                    <div className="tl-sub">{obj.sub}</div>
                                    <p className="tl-desc">{obj.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="bg-col-title">Experience</div>
                        <div className="timeline" id="experience-timeline">
                            {experience && experience.map(obj => (
                                <div key={obj.id} className="tl-item">
                                    <div className="tl-date">{obj.date}</div>
                                    <div className="tl-title">{obj.title}</div>
                                    <div className="tl-sub">{obj.sub}</div>
                                    <p className="tl-desc">{obj.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>

                </div>
            </div>
            </section>
    )
}
