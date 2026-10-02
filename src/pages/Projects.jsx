import { Button, Col, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { links } from '../data/links'
import { projectTags, projects } from '../data/projects'
import usePageTitle from '../hooks/usePageTitle'

// Only tags that at least one project uses become chips, so there are never empty filters
const availableTags = projectTags.filter((tag) => projects.some((project) => project.tags.includes(tag)))

export default function Projects() {
  usePageTitle('Projects')
  // The filter lives in the URL (?tag=Web), so the Back button from a detail page keeps it
  const [searchParams, setSearchParams] = useSearchParams()
  const requested = searchParams.get('tag')
  const activeTag = availableTags.includes(requested) ? requested : 'All'

  const visibleProjects =
    activeTag === 'All' ? projects : projects.filter((project) => project.tags.includes(activeTag))

  const selectTag = (tag) => setSearchParams(tag === 'All' ? {} : { tag }, { replace: true })

  return (
    <>
      <PageHeader command="ls ~/projects" title="Projects" />
      <p className="text-secondary mb-4">
        A selection of projects where I applied what I learn. Some are open source: check the code and share
        feedback.
      </p>

      <div className="d-flex flex-wrap gap-2 mb-3" role="group" aria-label="Filter projects">
        {['All', ...availableTags].map((tag) => (
          <Button
            key={tag}
            size="sm"
            variant={tag === activeTag ? 'primary' : 'outline-secondary'}
            aria-pressed={tag === activeTag}
            className="filter-chip"
            onClick={() => selectTag(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
      {/* Screen readers hear the result of the filter */}
      <p className="visually-hidden" role="status">
        Showing {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'}
      </p>

      <Row className="g-4">
        {visibleProjects.map((project, index) => (
          <Col key={project.slug} md={6} xl={4}>
            <Reveal delay={index * 100} className="h-100">
              <ProjectCard project={project} />
            </Reveal>
          </Col>
        ))}
      </Row>

      <p className="mt-4 mb-0">
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          More projects on my GitHub &rarr;
        </a>
      </p>
    </>
  )
}
