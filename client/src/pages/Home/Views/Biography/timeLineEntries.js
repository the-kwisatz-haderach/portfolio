import kthLogo from '../../../../assets/images/kth-logo.png'
import bombayworksLogo from '../../../../assets/images/bombayworks-logo.jpeg'
import saltLogo from '../../../../assets/images/salt-logo.png'
import systeconLogo from '../../../../assets/images/systecon-logo.png'

const timeLineEntries = [
  {
    title: 'Master of Science, Media Management',
    subtitle: 'Royal School of Technology',
    link:
      'https://www.kth.se/en/studies/master/mediamanagement/msc-media-management-1.8554',
    description:
      'The programme combines media technology, with intercultural communication, business management, project management and business development.',
    logo: kthLogo,
    date: '2008-2014',
    location: 'Stockholm',
    timelineMarker: 'fas fa-user-graduate',
    skills: [
      {
        icon: 'fas fa-cogs',
        label: 'Engineering'
      },
      {
        icon: 'fas fa-tasks',
        label: 'Management Theory'
      },
      {
        icon: 'fas fa-robot',
        label: 'Human-Computer Interaction'
      }
    ]
  },
  {
    title: 'Digital Producer',
    subtitle: 'Bombayworks',
    link: 'https://www.bombayworks.com/',
    description:
      'Managed digital projects, making sure they were delivered within time and budget constraints. Teams consisted of web designers, web developers and testers based in both Sweden and India.',
    logo: bombayworksLogo,
    date: '2014-2016',
    location: 'Stockholm',
    timelineMarker: 'fas fa-user-alt',
    skills: [
      {
        icon: 'fas fa-tasks',
        label: 'Project Management'
      }
    ]
  },
  {
    title: 'Managing Director',
    subtitle: 'Bombayworks',
    link: 'https://www.bombayworks.com/',
    description:
      'I had the main responsibility for the performance and conduct of the subsidiary office (~13 employees). Also got the opportunity to drive the shift to a new office space.',
    logo: bombayworksLogo,
    date: '2016-2018',
    location: 'Mumbai',
    timelineMarker: 'fas fa-user-astronaut',
    skills: [
      {
        icon: 'fas fa-hands-helping',
        label: 'Leadership'
      },
      {
        icon: 'fas fa-tasks',
        label: 'Office Management'
      },
      {
        icon: 'fas fa-heartbeat',
        label: 'Employee Engagement'
      }
    ]
  },
  {
    title: 'Head of Insights',
    subtitle: 'Bombayworks',
    link: 'https://www.bombayworks.com/',
    description: '',
    logo: bombayworksLogo,
    date: '2018-2019',
    location: 'Stockholm',
    timelineMarker: 'fas fa-user-tie',
    skills: [
      {
        icon: 'fas fa-heartbeat',
        label: 'Leadership'
      },
      {
        icon: 'fas fa-tasks',
        label: 'Management'
      },
      {
        icon: 'fas fa-chart-line',
        label: 'Digital Analytics'
      }
    ]
  },
  {
    title: 'Full-Stack JavaScript Developer',
    subtitle: 'School of Applied Technology </salt>',
    link: 'https://salt.dev/',
    description:
      'Highly paced and very intense training program at Epicenter in Stockholm. Turning hobby coders into productive full-stack developers. Program includes: JavaScript, Node, React, HTML5, CSS3, MongoDB, TDD, Git, Agile & mob-programming.',
    logo: saltLogo,
    date: '2019-',
    location: 'Stockholm',
    timelineMarker: 'fas fa-user-ninja',
    skills: [
      {
        icon: 'fas fa-laptop-code',
        label: 'Software Development'
      },
      {
        icon: 'fas fa-redo-alt',
        label: 'Agile Methodologies'
      }
    ]
  },
  {
    title: 'Software Developer',
    subtitle: 'Systecon Group',
    link: 'https://www.systecongroup.com/se/',
    description: '',
    logo: systeconLogo,
    date: '2019-',
    location: 'Stockholm',
    timelineMarker: 'fas fa-user-secret',
    skills: [
      {
        icon: 'fas fa-laptop-code',
        label: 'Software Development'
      }
    ]
  }
]

export default timeLineEntries
