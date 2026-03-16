import { GET } from "../utils"

export default function Projects() {

    const projects = GET("projects")

    return (
        <section id="projects">
            <div className="page">
                <div className="projects-header">
                <h1>Projects</h1>
                <span className="projects-count" id="projects-count">{projects.length} projects</span>
                </div>
                <div className="projects-grid" id="projects-grid">
                    {projects && projects.map((obj, i) => (
                        <div key={obj.id} className="project-card">
                            {obj.cover && (
                                <img className="project-cover" src={obj.cover} alt={`${obj.title} cover`} />
                            )}
                            {!obj.cover && (<div className="project-cover-placeholder">NO IMAGE</div>)}

                            <div className="project-header">
                                <div className="project-name">{obj.title}</div>
                                <div className="project-idx">{String(i+1).padStart(2,'0')}</div>
                            </div>
                            <p className="project-desc">{obj.description}</p>
                            <div className="project-tags">
                                {obj.tags.map(t => <span key={t} className="tag">{t}</span>)}
                            </div>
                            <div className="project-links">
                                {obj.links.map(l => <a key={l.label} className="project-link" href={l.url} target="_blank">↗ {l.label}</a>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
