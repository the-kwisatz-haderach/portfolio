import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import Timeline from '../../../components/Timeline'
import kthLogo from '../../../assets/images/kth-logo.png'
import bombayworksLogo from '../../../assets/images/bombayworks-logo.jpeg'
import reactLogo from '../../../assets/images/react-logo.png'
import systeconLogo from '../../../assets/images/systecon-logo.png'
import TotalExperience from '../../../components/TotalExperience/TotalExperience'

const BiographyContainer = styled.div`
  width: 100%;
  background-color: white;
`

const TimelineContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin-bottom: 8em;
`

const Heading = styled.h2`
  margin: 0.5em;
  font-size: 4em;
`

const TimeLineHeader = styled.header`
  text-align: center;
  padding: ${props => props.theme.padding.horizontal.medium};
  margin: 4em;
`

const TimelineStartLabel = styled.p`
  display: inline-block;
  font-size: 1.2em;
`

const testEntries = [
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
        label: 'Management'
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
    timelineMarker: 'fas fa-hat-wizard',
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
        label: 'Analytics'
      }
    ]
  },
  {
    title: 'Managing Director',
    subtitle: 'Bombayworks',
    link: 'https://www.bombayworks.com/',
    description:
      'Managed digital projects, making sure they were delivered within time and budget constraints. Teams consisted of web designers, web developers and testers based in both Sweden and India.',
    logo: bombayworksLogo,
    date: '2016-2018',
    location: 'Mumbai',
    timelineMarker: 'fas fa-hat-wizard',
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
        label: 'Analytics'
      }
    ]
  },
  {
    title: 'Full-Stack JavaScript Developer',
    subtitle: 'School of Applied Technology </salt>',
    link: 'https://www.systecongroup.com/se/',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magni omnis nobis quae obcaecati sit aliquid corrupti harum sequi doloremque.',
    logo: reactLogo,
    date: '2019-2020',
    location: 'Stockholm',
    timelineMarker: 'fas fa-briefcase',
    skills: [
      {
        icon: 'fas fa-medal',
        label: 'Software Development'
      },
      {
        icon: 'fas fa-tasks',
        label: 'Management'
      },
      {
        icon: 'fas fa-chart-line',
        label: 'Analytics'
      }
    ]
  }
]

const timeSinceBirth = moment('1990-01-20').fromNow()

export default function Biography() {
  return (
    <BiographyContainer>
      <TimelineContainer>
        <TimeLineHeader>
          <Heading>Timeline</Heading>
          <TimelineStartLabel>
            It all started less than {timeSinceBirth}
          </TimelineStartLabel>
        </TimeLineHeader>
        <Timeline entries={testEntries} />
      </TimelineContainer>
      <TotalExperience />
    </BiographyContainer>
  )
}
