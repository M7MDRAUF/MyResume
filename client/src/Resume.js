import './Resume.css';

// The resume data stays in one object so the page is easy to maintain and extend.
const resumeData = {
  name: 'Mohammad Al Bataineh',
  headline: 'Software Engineer | Full-Stack Developer',
  summary:
    "Motivated and detail-oriented Software Engineering graduate with strong experience in web development and a solid foundation in software design principles. Currently pursuing a Master's degree with a focus on Python programming at City University of Seattle, and eager to contribute to innovative software solutions while continuing to expand technical and problem-solving skills in real-world applications.",
  contact: [
    {
      label: 'Email',
      value: 'mohammed.albatayneh@gmail.com',
      href: 'mailto:mohammed.albatayneh@gmail.com'
    },
    {
      label: 'Location',
      value: 'Seattle, WA'
    },
    {
      label: 'Phone',
      value: '(206) 608 3371'
    },
    {
      label: 'LinkedIn',
      value: 'LinkedIn'
    },
    {
      label: 'Portfolio',
      value: 'Portfolio'
    },
    {
      label: 'GitHub',
      value: 'GitHub',
      href: 'https://github.com/M7MDRAUF'
    }
  ],
  education: [
    {
      degree: 'Master of Science in Computer Science',
      school: 'City University of Seattle',
      location: 'Seattle, USA',
      period: '09/2024 - 12/2026',
      details: ['GPA: 3.6', 'Relevant Coursework: Cloud Computing, Python, Machine Learning']
    },
    {
      degree: 'Bachelor of Engineering in Software Engineering',
      school: 'Al Ain University',
      location: 'Abu Dhabi, UAE',
      period: '',
      details: ['Relevant Coursework: SQL DB, Web Development']
    }
  ],
  skills: [
    {
      category: 'Programming Languages',
      items: ['CSS', 'HTML', 'JavaScript', 'Python', 'Web3']
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'SQL']
    },
    {
      category: 'Frameworks/Libraries',
      items: ['Node', 'React']
    },
    {
      category: 'Tools/Technologies',
      items: ['Git', 'Docker']
    },
    {
      category: 'Cloud Platforms',
      items: ['AWS']
    },
    {
      category: 'Other Relevant Skills',
      items: ['Machine Learning', 'Web Development']
    }
  ],
  experience: [
    {
      title: 'Backend Developer',
      organization: 'Al Ain Hospital',
      location: 'Abu Dhabi, UAE',
      period: '07/2023 - 03/2024',
      bullets: [
        'Developed and maintained SharePoint sites, including a furniture catalog website with integrated forms and shopping cart features, improving user experience and operational efficiency by 15%.',
        'Created and customized SharePoint lists, forms, and workflows using SharePoint Designer and Power Automate, reducing manual processing time by 20%.',
        'Managed permissions for more than 100 users, ensuring secure access and compliance with SEHA security standards.',
        'Resolved more than 50 Talabi tickets for intranet portal issues, achieving 95% resolution or escalation within 24 hours.',
        'Designed and optimized web pages for internal websites such as SALAMTAK, improving content accuracy and user engagement by 10%.',
        'Researched and integrated HTML, CSS, and JavaScript within SharePoint to overcome compatibility challenges.',
        'Improved slow manual processes by automating lists, forms, and workflows, which increased efficiency and user satisfaction.'
      ]
    }
  ],
  projects: [
    {
      name: 'Furniture Catalog Website',
      description:
        'Built an internal SharePoint-based furniture catalog website with integrated forms and shopping cart support to improve operational efficiency and user experience.',
      access: 'Internal enterprise project'
    },
    {
      name: 'SharePoint Workflow Automation',
      description:
        'Created SharePoint forms, lists, and Power Automate workflows that reduced manual processing time and improved day-to-day service workflows.',
      access: 'Internal hospital system project'
    }
  ]
};

function Resume() {
  return (
    <div className="resume-page">
      <div className="resume">
        <header className="header">
          <h1>{resumeData.name}</h1>
          <p className="headline">{resumeData.headline}</p>
          <p className="contact-line">
            {resumeData.contact.map((item, index) => (
              <span key={item.label}>
                {item.href ? (
                  <a className="contact-link" href={item.href} target="_blank" rel="noreferrer">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
                {index < resumeData.contact.length - 1 ? ' | ' : ''}
              </span>
            ))}
          </p>
          <p className="summary">{resumeData.summary}</p>
        </header>

        {/* Each section is rendered from structured data so the resume stays consistent and easy to update. */}
        <section className="section" aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          <div className="education">
            {resumeData.education.map((item) => (
              <article key={item.degree} className="entry-block">
                <h3>{item.degree}</h3>
                <p>
                  {item.school}
                  {item.location ? ` | ${item.location}` : ''}
                  {item.period ? ` | ${item.period}` : ''}
                </p>
                {item.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </article>
            ))}
          </div>
        </section>

        {/* Skills are presented as concise lines to match the centered sample layout. */}
        <section className="section" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Skills</h2>
          <div className="skills">
            <ul>
              {resumeData.skills.map((skill) => (
                <li key={skill.category}>
                  {skill.category}: {skill.items.join(', ')}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Experience and project entries use semantic articles for readable structure and better accessibility. */}
        <section className="section" aria-labelledby="experience-heading">
          <h2 id="experience-heading">Work Experience</h2>
          <div className="experience">
            {resumeData.experience.map((role) => (
              <article key={role.title} className="entry-block">
                <h3>{role.title}</h3>
                <p>
                  {role.organization}
                  {role.location ? ` | ${role.location}` : ''}
                  {role.period ? ` | ${role.period}` : ''}
                </p>
                <ul>
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Projects</h2>
          <div className="projects">
            {resumeData.projects.map((project) => (
              <article key={project.name} className="entry-block">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>Access: {project.access}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
