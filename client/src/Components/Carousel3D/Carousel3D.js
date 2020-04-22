import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

const Scene = styled.div`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 400px;
  height: 400px;
  perspective: 100px;
  overflow: hidden;
`

const CarouselContainer = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.6s ease-in-out;
`

const CarouselFace = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;
`

const FrontFace = styled(CarouselFace)`
  transform: rotateY(0deg) translateZ(100px);
`

const BackFace = styled(CarouselFace)`
  transform: rotateY(180deg) translateZ(100px);
`

const RightFace = styled(CarouselFace)`
  transform: rotateY(90deg) translateZ(100px);
`

const LeftFace = styled(CarouselFace)`
  transform: rotateY(-90deg) translateZ(100px);
`

const IconContainer = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &.linkedin {
    background-image: radial-gradient(
        rgba(255, 255, 255, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      linear-gradient(#0077b5, #0077b5);
  }
  &.github {
    background-image: radial-gradient(
        rgba(255, 255, 255, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      linear-gradient(#252a2e, #252a2e);
  }
  &.envelope {
    background-image: radial-gradient(
        rgba(255, 255, 255, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      linear-gradient(#33dcb5, #33dcb5);
  }
  &.facebook {
    background-image: radial-gradient(
        rgba(255, 255, 255, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      linear-gradient(#3a579d, #3a579d);
  }
`

const CarouselLink = styled.a`
  font-size: 52px;
  z-index: 3;
  color: white;
  position: relative;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  & > * {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const StyledIcon = styled.i`
  font-size: 62px;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  transform: scale(1);
  ${CarouselLink}:hover & {
    opacity: 0;
    transform: scale(2);
  }
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`

const LinkTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: scale(2);
  ${CarouselLink}:hover & {
    opacity: 1;
    transform: scale(1);
  }
  transition: all 0.3s ease-in-out;
`

const LinkPreamble = styled.p`
  font-size: 14px;
  display: block;
  margin: 0;
  margin-bottom: 2px;
`

const LinkText = styled.p`
  font-size: 20px;
  margin: 0;
`

const ButtonContainer = styled.div`
  position: relative;
  bottom: 50px;
  z-index: 2;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 5px;
    &:last-child {
      margin-right: 0;
      margin-left: 15px;
    }
    &:first-child {
      margin-left: 0;
      margin-right: 15px;
    }
  }
`

const PaginationDot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? '#9e9d9e' : '#cccccc')};
  border: 2px solid #9e9e9e;
  cursor: pointer;
  &:hover {
    background-color: #9e9d9e;
  }
  transition: background-color 0.2s ease-in-out;
`

const CarouselButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #cccccc;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #9e9d9e;
  }
  & > i {
    position: relative;
    top: 1px;
  }
`

const ContactFormContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: #33dcb5;
  color: white;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: fadeIn 0.2s ease-in-out forwards;
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`

const ContactForm = styled.form`
  font-family: ${(props) => props.theme.fonts.primary};
`

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  padding: 10px 40px 40px;
  & > label:not(:first-child) {
    margin-top: 20px;
  }
`

const StyledLegend = styled.legend`
  font-size: 32px;
  padding: 0 10px;
`

const StyledLabel = styled.label`
  width: 100%;
`

const StyledInput = styled.input`
  width: 100%;
  border: none;
`

const StyledTextarea = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
`

function Carousel3D() {
  const [activeFace, setActiveFace] = useState(0)
  const [runCarousel, setRunCarousel] = useState(true)
  const [displayContactForm, setDisplayContactForm] = useState(false)
  const carousel = useRef()

  useEffect(() => {
    window.requestAnimationFrame(() => {
      carousel.current.style.transform = `translateZ(-100px) rotateY(${
        activeFace * 90
      }deg)`
    })
  }, [activeFace])

  useEffect(() => {
    if (runCarousel) {
      var sliderInterval = setInterval(() => {
        setActiveFace((f) => (4 + f + 1) % 4)
      }, 3000)
    }
    if (!runCarousel) {
      clearInterval(sliderInterval)
    }
    return () => {
      clearInterval(sliderInterval)
    }
  }, [runCarousel])

  return (
    <div
      onMouseEnter={(e) => {
        e.stopPropagation()
        setRunCarousel(false)
      }}
      onMouseLeave={(e) => {
        e.stopPropagation()
        setRunCarousel(true)
      }}
    >
      <Scene>
        <CarouselContainer
          ref={carousel}
          style={{
            transform: 'translateZ(-100px) rotateY(0deg)',
          }}
        >
          <FrontFace>
            <IconContainer className="linkedin">
              <CarouselLink
                href="http://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledIcon className="fab fa-linkedin-in" />
                <LinkTextContainer>
                  <LinkPreamble> Go to </LinkPreamble>{' '}
                  <LinkText> linkedin.com </LinkText>{' '}
                </LinkTextContainer>{' '}
              </CarouselLink>{' '}
            </IconContainer>{' '}
          </FrontFace>{' '}
          <BackFace>
            <IconContainer className="github">
              <CarouselLink
                href="http://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledIcon className="fab fa-github" />
                <LinkTextContainer>
                  <LinkPreamble> Go to </LinkPreamble>{' '}
                  <LinkText> github.com </LinkText>{' '}
                </LinkTextContainer>{' '}
              </CarouselLink>{' '}
            </IconContainer>{' '}
          </BackFace>{' '}
          <RightFace>
            <IconContainer className="envelope">
              <CarouselLink
                as="div"
                onClick={() => setDisplayContactForm(true)}
              >
                <StyledIcon className="fas fa-envelope" />
                <LinkTextContainer>
                  <LinkPreamble> Send me an </LinkPreamble>{' '}
                  <LinkText> email </LinkText>{' '}
                </LinkTextContainer>{' '}
              </CarouselLink>{' '}
            </IconContainer>{' '}
          </RightFace>{' '}
          <LeftFace>
            <IconContainer className="facebook">
              <CarouselLink
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledIcon className="fab fa-facebook-f" />
                <LinkTextContainer>
                  <LinkPreamble> Go to </LinkPreamble>{' '}
                  <LinkText> facebook.com </LinkText>{' '}
                </LinkTextContainer>{' '}
              </CarouselLink>{' '}
            </IconContainer>{' '}
          </LeftFace>{' '}
        </CarouselContainer>{' '}
      </Scene>{' '}
      <ButtonContainer>
        <CarouselButton onClick={() => setActiveFace((f) => (4 + f - 1) % 4)}>
          <i className="fas fa-arrow-left" />
        </CarouselButton>{' '}
        <PaginationDot
          isActive={activeFace === 0}
          onClick={() => setActiveFace(0)}
        />{' '}
        <PaginationDot
          isActive={activeFace === 1}
          onClick={() => setActiveFace(1)}
        />{' '}
        <PaginationDot
          isActive={activeFace === 2}
          onClick={() => setActiveFace(2)}
        />{' '}
        <PaginationDot
          isActive={activeFace === 3}
          onClick={() => setActiveFace(3)}
        />{' '}
        <CarouselButton onClick={() => setActiveFace((f) => (4 + f + 1) % 4)}>
          <i className="fas fa-arrow-right" />
        </CarouselButton>{' '}
      </ButtonContainer>{' '}
      {displayContactForm ? (
        <ContactFormContainer>
          <ContactForm>
            <StyledFieldset>
              <StyledLegend> Get in touch </StyledLegend>{' '}
              <StyledLabel htmlFor="subject"> Subject </StyledLabel>{' '}
              <StyledInput
                id="subject"
                name="subject"
                type="text"
                autoFocus
                required
              />
              <StyledLabel htmlFor="message"> Message </StyledLabel>{' '}
              <StyledTextarea id="message" name="message" required>
                {' '}
              </StyledTextarea>{' '}
            </StyledFieldset>{' '}
          </ContactForm>{' '}
        </ContactFormContainer>
      ) : (
        <> </>
      )}{' '}
    </div>
  )
}

export default Carousel3D
