import { GET } from "../utils"

export default function Skills() {
    const skills = GET("skills")
    const certs = GET("certifications")

    return (
        <section id="skills">
            <div className="page">
                <div className="sc-header">
                    <h1>Skills & Certifications</h1>
                </div>

                <div className="skills-panel">
                    <div className="skills-panel-header">
                        <span className="skills-panel-title">Technical Skills</span>
                    </div>
                    <div className="skills-grid" id="skills-layout">
                        {skills && skills.map(group => (
                            <div key={group.group} className="skill-group">
                                <div className="skill-group-label">{group.group}</div>
                                <div className="skill-pills-wrap">
                                    <div className="skill-pills">
                                        {group.items.map((s) => (
                                            <span key={`${group.group}-${s}`} className="skill-pill">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="certs-panel">
                    <div className="certs-panel-header">
                        <div className="certs-panel-title">Certifications</div>
                    </div>
                    <div className="certs-list" id="certs-grid">
                        {certs && certs.map(obj => (
                            <div key={obj.name} className="cert-row">
                                {obj.icon && (<img className="cert-icon" src={obj.icon} alt={obj.name} />)}
                                {!obj.icon && (<p></p>)}
                                <div className="cert-info">
                                    <div className="cert-name">{obj.name}</div>
                                    <div className="cert-issuer">{obj.issuer}</div>
                                </div>
                                <div className="cert-date">{obj.date}</div>
                                <span className={`cert-badge ${obj.status}`}>{obj.status === 'in-progress' ? 'In Progress' : 'Active'}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </section>
    )
}
