import React from 'react'
import { Right, Map, TableInfo, LocationMap } from './style'
import { introductionData } from '../../data/data'

const information = () => {
  return (
    <Right>
      <LocationMap>
        <Map
          title="Google map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8278533985385!2d139.76493611520053!3d35.68124053757888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1663826855541!5m2!1sja!2sjp"
          loading="lazy"
        ></Map>
      </LocationMap>
      {introductionData.map((data) => (
        <TableInfo key={data.id}>
          <tr>
            <th>{data.dataHead}</th>
            <td>{data.data}</td>
          </tr>
        </TableInfo>
      ))}
    </Right>
  )
}

export default information
