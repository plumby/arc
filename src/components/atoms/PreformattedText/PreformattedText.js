import { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'

const PreformattedText = styled.pre`
  font-family: ${fonts.pre};
  display: ${(props) => props.inline ? 'inline' : 'block'};
  background-color: ${[ ...colors.grayscale ].reverse()[1]};
  padding: ${(props) => props.inline ? 0 : '1rem'};
`

PreformattedText.propTypes = {
  inline: PropTypes.bool
}

export default PreformattedText
