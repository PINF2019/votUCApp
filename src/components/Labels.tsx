import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Text as NuevoText } from 'react-native-svg'

export type LabelsProps = {
  x: number
  y: number
  bandwidth: number
  data: any
}

const Labels = ({ x, y, bandwidth, data }: LabelsProps) =>
  data.map((res, key) => {
    ;<NuevoText
      key={key}
      x={x(key) + bandwidth / 2}
      y={res.votes < 20 ? y(res.votes) - 10 : y(res.votes) + 15}
      fontSize={14}
      fill={res.votes >= 20 ? 'white' : 'black'}
      alignmentBaseline="middle"
      textAnchor="middle">
      {res.votes}
    </NuevoText>
  })
export default Labels
