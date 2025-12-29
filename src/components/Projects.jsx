import React from 'react'
import { FiEye, FiCode } from 'react-icons/fi'

export default function Projects() {
    const projects = [
        {
            title: 'Nexora CRM',
            desc: 'A full-featured CRM platform for lead management, agent tracking, and analytics dashboards.',
            img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
            demo: 'https://nexora-crm-mu.vercel.app/',
            code: 'https://github.com/hargun-singh-khera/nexora-crm',
            stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Charts.js']
        },
        {
            title: 'Trendyne',
            desc: 'Modern e-commerce fashion store with advanced search, filters, wishlist, and cart workflows.',
            img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
            demo: 'https://trendyne.vercel.app/',
            code: 'https://github.com/hargun-singh-khera/trendyne',
            stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Context']
        },
        {
            title: 'VidTube Backend',
            desc: 'Scalable backend system for video uploads, authentication, and content management.',
            img: 'https://images.pexels.com/photos/593324/pexels-photo-593324.jpeg',
            demo: 'https://github.com/hargun-singh-khera/vidTube-Backend',
            code: 'https://github.com/hargun-singh-khera/vidTube-Backend',
            stack: ['Node.js', 'Express.js', 'MongoDB']
        },
        {
            title: 'DisasterGuard',
            desc: 'Android-based disaster management system using Firebase and role-based access control.',
            img: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e',
            demo: 'https://github.com/hargun-singh-khera/DisasterGuard',
            code: 'https://github.com/hargun-singh-khera/DisasterGuard',
            stack: ['Android', "Kotlin", 'Firebase']
        },
        {
            title: 'Heritage Hotel',
            desc: 'Hotel booking platform with real-time availability, pricing logic, and admin dashboard.',
            img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
            demo: 'http://heritagehotel.iceiy.com/',
            code: 'https://github.com/hargun-singh-khera/Hotel-Booking-System',
            stack: ['PHP', 'MySQL', 'Bootstrap', "XAMPP"]
        }
    ]

    return (
        <section id="projects" className="py-5 bg-light">
            <div className="container">
                {/* Section Header */}
                <div className="mb-5">
                    <h2 className="fw-bold mb-2">Projects</h2>
                    <p className="text-muted col-lg-7">
                        A selection of projects showcasing my experience across full-stack
                        development, backend systems, and production-ready applications.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="row g-4">
                    {projects.map((project) => (
                        <div key={project.title} className="col-md-6 col-lg-4">
                            <div className="card h-100 border-0 shadow-sm">

                                {/* Image */}
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="card-img-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />

                                {/* Content */}
                                <div className="card-body d-flex flex-column">
                                    <h5 className="fw-semibold mb-2">
                                        {project.title}
                                    </h5>

                                    <p className="text-muted mb-3">
                                        {project.desc}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="badge bg-secondary bg-opacity-10 text-dark"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="d-flex gap-2 mt-auto">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline-dark btn-sm d-flex align-items-center gap-2 rounded-pill px-3"
                                            >
                                                <FiEye size={16} />
                                                Demo
                                            </a>
                                        )}

                                        {project.code && (
                                            <a
                                                href={project.code}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn btn-outline-dark btn-sm d-flex align-items-center gap-2 rounded-pill px-3"
                                            >
                                                <FiCode size={16} />
                                                Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
